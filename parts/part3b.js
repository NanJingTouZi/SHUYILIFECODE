// ============================================================
// HISTORY FUNCTIONS
// ============================================================
function getUserHistory(email) {
    const key = 'history_' + email;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function saveUserHistory(email, name, dob) {
    const key = 'history_' + email;
    const history = getUserHistory(email);
    history.push({
        id: generateId(),
        name: name,
        dob: dob,
        calculated_at: getNowISO()
    });
    localStorage.setItem(key, JSON.stringify(history));
}

function deleteUserHistoryItem(email, id) {
    const key = 'history_' + email;
    let history = getUserHistory(email);
    history = history.filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(history));
}

function deleteAllUserHistory(email) {
    const key = 'history_' + email;
    localStorage.removeItem(key);
}

function getAdminHistory() { return DATA.history; }

function saveAdminHistory(email, name, dob) {
    if (!DATA.history[email]) {
        DATA.history[email] = [];
    }
    DATA.history[email].push({
        id: generateId(),
        name: name,
        dob: dob,
        calculated_at: getNowISO()
    });
    saveLocalData();
}

// ============================================================
// SESSION MANAGEMENT
// ============================================================
function getSession() {
    const data = localStorage.getItem('session');
    return data ? JSON.parse(data) : null;
}

function setSession(email, name) {
    localStorage.setItem('session', JSON.stringify({ email: email, name: name, login_at: getNowISO() }));
}

function clearSession() {
    localStorage.removeItem('session');
}

// ============================================================
// OTP FUNCTIONS
// ============================================================
function generateOTP() {
    return String(Math.floor(100000 + Math.random() * 900000));
}

function saveOTP(email, otp) {
    localStorage.setItem('otp_' + email, JSON.stringify({
        code: otp,
        created_at: getNowISO(),
        attempts: 0
    }));
}

function getOTP(email) {
    const data = localStorage.getItem('otp_' + email);
    return data ? JSON.parse(data) : null;
}

function verifyOTP(email, code) {
    const otpData = getOTP(email);
    if (!otpData) return { valid: false, message: 'OTP tidak ditemukan. Minta ulang.' };
    
    const created = new Date(otpData.created_at);
    const now = new Date();
    const diff = (now - created) / 1000 / 60;
    if (diff > 5) {
        localStorage.removeItem('otp_' + email);
        return { valid: false, message: 'OTP sudah kadaluarsa. Minta ulang.' };
    }
    
    if (otpData.attempts >= 3) {
        localStorage.removeItem('otp_' + email);
        return { valid: false, message: 'Terlalu banyak percobaan. Minta ulang.' };
    }
    
    if (otpData.code !== code) {
        otpData.attempts++;
        localStorage.setItem('otp_' + email, JSON.stringify(otpData));
        return { valid: false, message: 'Kode OTP salah.' };
    }
    
    localStorage.removeItem('otp_' + email);
    return { valid: true, message: 'OTP valid.' };
}

function sendOTP(email) {
    const otp = generateOTP();
    saveOTP(email, otp);
    
    // Kirim via Google Apps Script
    if (!CONFIG.IS_LOCAL && CONFIG.GOOGLE_APPS_SCRIPT_URL) {
        console.log('📧 Mengirim OTP ke ' + email + ' via Google Apps Script...');
        console.log('📤 URL:', CONFIG.GOOGLE_APPS_SCRIPT_URL);
        
        // Gunakan mode 'cors' agar bisa melihat response
        fetch(CONFIG.GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                otp: otp
            })
        })
        .then(response => {
            console.log('📥 Response status:', response.status);
            return response.text();
        })
        .then(data => {
            console.log('📥 Response data:', data);
            try {
                const json = JSON.parse(data);
                if (json.success) {
                    console.log('📧 Email OTP terkirim ke ' + email);
                    console.log('💡 Cek inbox ' + email + ' (termasuk folder Spam)');
                } else {
                    console.log('❌ Gagal kirim email:', json.error);
                    console.log('📧 [FALLBACK] OTP untuk ' + email + ': ' + otp);
                }
            } catch(e) {
                console.log('📧 [FALLBACK] OTP untuk ' + email + ': ' + otp);
            }
        })
        .catch(error => {
            console.log('❌ Error:', error);
            console.log('📧 [FALLBACK] OTP untuk ' + email + ': ' + otp);
        });
    } else {
        console.log('📧 [LOCAL] OTP untuk ' + email + ': ' + otp);
        console.log('💡 Gunakan kode ini untuk verifikasi (mode lokal)');
    }
    
    return true;
}
// ============================================================
// WHATSAPP LINK
// ============================================================
function getWALink(email) {
    const phone = CONFIG.ADMIN_PHONE;
    const text = 'Halo Admin, saya mau minta token perpanjang lisensi Angka Kehidupan. Email saya: ' + email;
    return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text);
}

// ============================================================
// UI FUNCTIONS
// ============================================================
function updateStatusBar() {
    const session = getSession();
    const bar = document.getElementById('userStatusBar');
    const warning = document.getElementById('licenseWarning');
    
    if (!session) {
        bar.style.display = 'none';
        warning.style.display = 'none';
        document.getElementById('formCard').style.display = 'block';
        return;
    }
    
    const user = getUser(session.email);
    if (!user) {
        bar.style.display = 'none';
        warning.style.display = 'none';
        return;
    }
    
    bar.style.display = 'flex';
    document.getElementById('displayName').textContent = '👤 ' + user.name;
    
    const kuotaEl = document.getElementById('displayKuota');
    const masaEl = document.getElementById('displayMasaAktif');
    const expiredEl = document.getElementById('displayExpired');
    
    let licenses = {};
    try {
        licenses = JSON.parse(localStorage.getItem('local_licenses') || '{}');
    } catch(e) {}
    
    let userLicense = null;
    for (const key in licenses) {
        if (licenses[key].user_email === session.email) {
            userLicense = licenses[key];
            break;
        }
    }
    
    if (userLicense && userLicense.is_active) {
        const remaining = userLicense.quota - (userLicense.used_count || 0);
        const expiry = new Date(userLicense.expiry_date);
        const now = new Date();
        const daysLeft = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));
        
        if (kuotaEl) {
            kuotaEl.textContent = remaining + '/' + userLicense.quota;
            kuotaEl.className = 'val success';
            kuotaEl.style.color = '#7fb59c';
            kuotaEl.style.fontWeight = 'bold';
            kuotaEl.style.fontSize = '16px';
            kuotaEl.style.display = 'inline-block';
        }
        if (masaEl) {
            masaEl.textContent = daysLeft > 0 ? daysLeft : 0;
            masaEl.className = 'val';
        }
        if (expiredEl) {
            expiredEl.textContent = userLicense.expiry_date;
            expiredEl.className = 'val';
        }
        
        warning.style.display = 'none';
        document.getElementById('formCard').style.display = 'block';
    } else {
        if (kuotaEl) {
            kuotaEl.textContent = '0/0';
            kuotaEl.className = 'val danger';
        }
        if (masaEl) {
            masaEl.textContent = '0';
            masaEl.className = 'val danger';
        }
        if (expiredEl) {
            expiredEl.textContent = '—';
            expiredEl.className = 'val danger';
        }
        
        if (userLicense && !userLicense.is_active) {
            warning.style.display = 'block';
            document.getElementById('licenseWarningDesc').textContent = 'Lisensi Anda tidak aktif. Hubungi admin untuk perpanjang.';
            document.getElementById('waLink').href = getWALink(session.email);
            document.getElementById('formCard').style.display = 'none';
        } else {
            warning.style.display = 'none';
            document.getElementById('formCard').style.display = 'block';
        }
    }
}

// ============================================================
// MODAL FUNCTIONS
// ============================================================
let currentModalStep = 'login';

function showModal(step, email) {
    const modal = document.getElementById('loginModal');
    modal.classList.add('show');
    
    document.getElementById('loginStep1').style.display = 'none';
    document.getElementById('loginStep2').style.display = 'none';
    document.getElementById('registerStep').style.display = 'none';
    document.getElementById('registerOtpStep').style.display = 'none';
    document.getElementById('tokenStep').style.display = 'none';
    
    if (step === 'login') {
        currentModalStep = 'login';
        document.getElementById('modalIcon').textContent = '🔐';
        document.getElementById('modalTitle').textContent = 'Login untuk Menghitung';
        document.getElementById('modalSub').textContent = 'Masukkan email Anda untuk melanjutkan.';
        document.getElementById('loginStep1').style.display = 'block';
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginEmail').focus();
    } else if (step === 'otp') {
        currentModalStep = 'otp';
        document.getElementById('modalIcon').textContent = '📧';
        document.getElementById('modalTitle').textContent = 'Verifikasi Kode OTP';
        document.getElementById('modalSub').textContent = 'Masukkan kode 6 digit yang dikirim ke email Anda.';
        document.getElementById('loginStep2').style.display = 'block';
        document.getElementById('otpEmailDisplay').textContent = email || '—';
        document.querySelectorAll('.otp-input').forEach(inp => inp.value = '');
        document.querySelector('.otp-input').focus();
        startOtpTimer();
    } else if (step === 'register') {
        currentModalStep = 'register';
        document.getElementById('modalIcon').textContent = '📝';
        document.getElementById('modalTitle').textContent = 'Registrasi Akun Baru';
        document.getElementById('modalSub').textContent = 'Lengkapi data di bawah ini untuk mendaftar.';
        document.getElementById('registerStep').style.display = 'block';
        document.getElementById('regEmailDisplay').textContent = email || '—';
        document.getElementById('regName').value = '';
        document.getElementById('regPhone').value = '';
        document.getElementById('regName').focus();
    } else if (step === 'register_otp') {
        currentModalStep = 'register_otp';
        document.getElementById('modalIcon').textContent = '📧';
        document.getElementById('modalTitle').textContent = 'Verifikasi Kode OTP';
        document.getElementById('modalSub').textContent = 'Masukkan kode 6 digit yang dikirim ke email Anda.';
        document.getElementById('registerOtpStep').style.display = 'block';
        document.getElementById('regOtpEmailDisplay').textContent = email || '—';
        document.querySelectorAll('.otp-input-reg').forEach(inp => inp.value = '');
        document.querySelector('.otp-input-reg').focus();
    } else if (step === 'token') {
        currentModalStep = 'token';
        document.getElementById('modalIcon').textContent = '🔑';
        document.getElementById('modalTitle').textContent = 'Masukkan Token Perpanjang';
        document.getElementById('modalSub').textContent = 'Masukkan token yang diberikan oleh admin.';
        document.getElementById('tokenStep').style.display = 'block';
        document.getElementById('tokenInput').value = '';
        document.getElementById('tokenInput').focus();
    }
}

function hideModal() {
    document.getElementById('loginModal').classList.remove('show');
}

let otpTimerInterval = null;
let otpSecondsLeft = 60;

function startOtpTimer() {
    const timerEl = document.getElementById('otpTimer');
    const resendBtn = document.getElementById('resendOtpBtn');
    otpSecondsLeft = 60;
    timerEl.style.display = 'block';
    resendBtn.style.pointerEvents = 'none';
    resendBtn.style.opacity = '0.5';
    
    clearInterval(otpTimerInterval);
    otpTimerInterval = setInterval(function() {
        otpSecondsLeft--;
        if (otpSecondsLeft <= 0) {
            clearInterval(otpTimerInterval);
            timerEl.style.display = 'none';
            resendBtn.style.pointerEvents = 'auto';
            resendBtn.style.opacity = '1';
        } else {
            timerEl.textContent = 'Kirim ulang dalam ' + otpSecondsLeft + ' detik';
        }
    }, 1000);
}

// ============================================================
// OTP INPUT AUTO-FOCUS
// ============================================================
document.querySelectorAll('.otp-input').forEach((input, index) => {
    input.addEventListener('input', function() {
        if (this.value.length === 1 && index < 5) {
            document.querySelectorAll('.otp-input')[index + 1].focus();
        }
    });
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
            document.querySelectorAll('.otp-input')[index - 1].focus();
        }
        if (e.key === 'Enter') {
            document.getElementById('verifyOtpBtn').click();
        }
    });
});

document.querySelectorAll('.otp-input-reg').forEach((input, index) => {
    input.addEventListener('input', function() {
        if (this.value.length === 1 && index < 5) {
            document.querySelectorAll('.otp-input-reg')[index + 1].focus();
        }
    });
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
            document.querySelectorAll('.otp-input-reg')[index - 1].focus();
        }
        if (e.key === 'Enter') {
            document.getElementById('verifyRegOtpBtn').click();
        }
    });
});

// ============================================================
// AUTO-TAB INPUT TANGGAL LAHIR
// ============================================================
document.getElementById('dobDay').addEventListener('input', function() {
    if (this.value.length === 2) {
        document.getElementById('dobMonth').focus();
    }
});

document.getElementById('dobMonth').addEventListener('input', function() {
    if (this.value.length === 2) {
        document.getElementById('dobYear').focus();
    }
});

// ============================================================
// BUTTON EVENT HANDLERS
// ============================================================
document.getElementById('loginSendOtpBtn').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value.trim();
    if (!email) {
        alert('Masukkan email Anda.');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        alert('Format email tidak valid.');
        return;
    }
    
    const user = getUser(email);
    if (user) {
        sendOTP(email);
        showModal('otp', email);
    } else {
        showModal('register', email);
    }
});

document.getElementById('verifyOtpBtn').addEventListener('click', function() {
    const email = document.getElementById('otpEmailDisplay').textContent;
    let otp = '';
    document.querySelectorAll('.otp-input').forEach(inp => otp += inp.value);
    
    if (otp.length !== 6) {
        alert('Masukkan 6 digit kode OTP.');
        return;
    }
    
    const result = verifyOTP(email, otp);
    if (result.valid) {
        const user = getUser(email);
        setSession(email, user.name);
        hideModal();
        updateStatusBar();
        alert('✅ Login berhasil! Selamat datang, ' + user.name + '!');
    } else {
        alert('❌ ' + result.message);
    }
});

document.getElementById('resendOtpBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('otpEmailDisplay').textContent;
    sendOTP(email);
    startOtpTimer();
    alert('📧 Kode OTP baru telah dikirim ke ' + email);
});

document.getElementById('registerSubmitBtn').addEventListener('click', function() {
    const email = document.getElementById('regEmailDisplay').textContent;
    const name = document.getElementById('regName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    
    if (!name || name.length < 2) {
        alert('Masukkan nama lengkap Anda.');
        return;
    }
    if (!phone || phone.length < 10 || phone.length > 13) {
        alert('Masukkan nomor HP yang valid (10-13 digit).');
        return;
    }
    
    if (getUser(email)) {
        alert('Email sudah terdaftar. Silakan login.');
        showModal('login');
        return;
    }
    
    createUser(email, name, phone);
    sendOTP(email);
    showModal('register_otp', email);
});

document.getElementById('verifyRegOtpBtn').addEventListener('click', function() {
    const email = document.getElementById('regOtpEmailDisplay').textContent;
    let otp = '';
    document.querySelectorAll('.otp-input-reg').forEach(inp => otp += inp.value);
    
    if (otp.length !== 6) {
        alert('Masukkan 6 digit kode OTP.');
        return;
    }
    
    const result = verifyOTP(email, otp);
    if (result.valid) {
        verifyUser(email);
        createLicense(email, CONFIG.DEFAULT_QUOTA, CONFIG.DEFAULT_DAYS);
        const user = getUser(email);
        setSession(email, user.name);
        hideModal();
        updateStatusBar();
        alert('✅ Registrasi berhasil! Selamat datang, ' + user.name + '!');
        alert('📊 Anda mendapatkan ' + CONFIG.DEFAULT_QUOTA + ' kali kuota dan ' + CONFIG.DEFAULT_DAYS + ' hari masa aktif.');
    } else {
        alert('❌ ' + result.message);
    }
});

document.getElementById('resendRegOtpBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('regOtpEmailDisplay').textContent;
    sendOTP(email);
    alert('📧 Kode OTP baru telah dikirim ke ' + email);
});

document.getElementById('redeemTokenBtn').addEventListener('click', function() {
    const session = getSession();
    if (!session) {
        alert('Silakan login terlebih dahulu.');
        hideModal();
        return;
    }
    
    const token = document.getElementById('tokenInput').value.trim();
    if (!token) {
        alert('Masukkan token perpanjang.');
        return;
    }
    
    const result = redeemToken(session.email, token);
    if (result.success) {
        hideModal();
        updateStatusBar();
        alert('✅ ' + result.message);
    } else {
        alert('❌ ' + result.message);
    }
});

document.getElementById('goToRegister').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    if (!email) {
        alert('Masukkan email Anda terlebih dahulu.');
        return;
    }
    showModal('register', email);
});

document.getElementById('goToLogin').addEventListener('click', function(e) {
    e.preventDefault();
    showModal('login');
});

document.getElementById('closeModalBtn').addEventListener('click', function(e) {
    e.preventDefault();
    hideModal();
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Yakin ingin logout?')) {
        clearSession();
        updateStatusBar();
        document.getElementById('results').style.display = 'none';
        alert('Anda telah logout.');
    }
});

document.getElementById('tokenBtn').addEventListener('click', function() {
    const session = getSession();
    if (!session) {
        alert('Silakan login terlebih dahulu.');
        return;
    }
    showModal('token');
});

// ============================================================
// RIWAYAT - TANPA PENGECEKAN LISENSI
// ============================================================
document.getElementById('historyBtn').addEventListener('click', function() {
    var session = getSession();
    if (!session) {
        alert('Silakan login terlebih dahulu.');
        return;
    }
    loadHistory();
    document.getElementById('historyModal').classList.add('show');
});

// ============================================================
// HISTORY MODAL
// ============================================================
document.getElementById('closeHistoryBtn').addEventListener('click', function() {
    document.getElementById('historyModal').classList.remove('show');
});

document.getElementById('deleteAllHistoryBtn').addEventListener('click', function() {
    const session = getSession();
    if (!session) return;
    if (confirm('Yakin ingin menghapus semua riwayat perhitungan? Tindakan ini tidak dapat dibatalkan.')) {
        deleteAllUserHistory(session.email);
        loadHistory();
        alert('✅ Semua riwayat telah dihapus.');
    }
});

// ============================================================
// MODAL KUOTA HABIS
// ============================================================
function showQuotaModal() {
    const session = getSession();
    if (!session) {
        showModal('login');
        return;
    }
    
    const user = getUser(session.email);
    const status = getLicenseStatus(session.email);
    
    // Ambil langsung dari localStorage untuk memastikan
    let licenses = {};
    try {
        licenses = JSON.parse(localStorage.getItem('local_licenses') || '{}');
    } catch(e) {}
    
    let userLicense = null;
    for (const key in licenses) {
        if (licenses[key].user_email === session.email) {
            userLicense = licenses[key];
            break;
        }
    }
    
    // Isi data modal
    document.getElementById('quotaUserName').textContent = user ? user.name : '—';
    document.getElementById('quotaUserEmail').textContent = session.email;
    document.getElementById('quotaMasaAktif').textContent = status.daysLeft > 0 ? status.daysLeft + ' hari' : 'Habis';
    
    // PERBAIKI: Ambil expiry_date dari userLicense
    const expiryDate = userLicense && userLicense.expiry_date ? userLicense.expiry_date : '—';
    document.getElementById('quotaExpired').textContent = expiryDate;
    
    // Template pesan WhatsApp
    const phone = CONFIG.ADMIN_PHONE;
    const text = 
        'Halo Admin, saya mau minta token perpanjang lisensi Angka Kehidupan.%0A%0A' +
        '📧 Email: ' + session.email + '%0A' +
        '👤 Nama: ' + (user ? user.name : '—') + '%0A' +
        '📊 Sisa Kuota: 0/5%0A' +
        '⏰ Masa Aktif: ' + (status.daysLeft > 0 ? status.daysLeft + ' hari lagi' : 'Habis') + '%0A' +
        '📅 Expired: ' + expiryDate + '%0A%0A' +
        'Mohon bantuannya untuk token perpanjang. Terima kasih.';
    
    document.getElementById('quotaWaLink').href = 'https://wa.me/' + phone + '?text=' + text;
    
    // Tampilkan modal
    document.getElementById('quotaModal').classList.add('show');
}

// Tombol tutup modal kuota habis
document.getElementById('closeQuotaModalBtn').addEventListener('click', function() {
    document.getElementById('quotaModal').classList.remove('show');
});

// Tutup modal jika klik di luar
document.getElementById('quotaModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('show');
    }
});

function loadHistory() {
    const session = getSession();
    if (!session) return;
    
    const history = getUserHistory(session.email);
    const container = document.getElementById('historyContent');
    
    if (history.length === 0) {
        container.innerHTML = '<div class="history-empty-state">📭 Belum ada riwayat perhitungan.</div>';
        return;
    }
    
    let html = '<table class="history-table"><thead><tr><th>#</th><th>Nama</th><th>Tanggal Lahir</th><th>Waktu</th><th>Aksi</th><th>Lihat</th></tr></thead><tbody>';
    history.forEach((item, index) => {
        const date = new Date(item.calculated_at);
        const dateStr = date.toLocaleDateString('id-ID') + ' ' + date.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'});
        html += '<tr>';
        html += '<td>' + (index + 1) + '</td>';
        html += '<td>' + esc(item.name) + '</td>';
        html += '<td>' + esc(item.dob) + '</td>';
        html += '<td>' + dateStr + '</td>';
        html += '<td><button class="delete-btn" data-id="' + item.id + '">🗑️</button></td>';
        html += '<td><button class="view-btn" data-name="' + esc(item.name) + '" data-dob="' + esc(item.dob) + '">👁️ Lihat</button></td>';
        html += '</tr>';
    });
    html += '</tbody></table>';
    container.innerHTML = html;
    
    container.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            if (confirm('Hapus riwayat ini?')) {
                deleteUserHistoryItem(session.email, id);
                loadHistory();
            }
        });
    });
    
    container.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const name = this.dataset.name;
            const dob = this.dataset.dob;
            const parts = dob.split('/');
            if (parts.length === 3) {
                document.getElementById('fname').value = name;
                document.getElementById('dobDay').value = parts[0];
                document.getElementById('dobMonth').value = parts[1];
                document.getElementById('dobYear').value = parts[2];
            }
            document.getElementById('historyModal').classList.remove('show');
            calculateWithoutQuota();
        });
    });
}

function calculateWithoutQuota() {
    var name = document.getElementById('fname').value.trim();
    var day = document.getElementById('dobDay').value.trim();
    var month = document.getElementById('dobMonth').value.trim();
    var year = document.getElementById('dobYear').value.trim();
    var errBox = document.getElementById('errBox');
    errBox.style.display = 'none';
    errBox.textContent = '';
    
    if (!name) {
        errBox.textContent = 'Mohon isi nama.';
        errBox.style.display = 'block';
        return;
    }
    if (!day || !month || !year) {
        errBox.textContent = 'Mohon isi tanggal lahir lengkap (dd/mm/yyyy).';
        errBox.style.display = 'block';
        return;
    }
    
    var d = parseInt(day);
    var m = parseInt(month);
    var y = parseInt(year);
    if (isNaN(d) || isNaN(m) || isNaN(y)) {
        errBox.textContent = 'Format tanggal tidak valid.';
        errBox.style.display = 'block';
        return;
    }
    if (y < 1900 || y > 2050) {
        errBox.textContent = 'Tahun lahir harus antara 1900-2050.';
        errBox.style.display = 'block';
        return;
    }
    if (m < 1 || m > 12) {
        errBox.textContent = 'Bulan harus antara 1-12.';
        errBox.style.display = 'block';
        return;
    }
    if (d < 1 || d > 31) {
        errBox.textContent = 'Hari harus antara 1-31.';
        errBox.style.display = 'block';
        return;
    }
    
    var session = getSession();
    if (!session) {
        showModal('login');
        return;
    }
    
    var dateStr = y + '-' + String(m).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var todayStr = new Date().toISOString().slice(0,10);
    var profile = computeProfile(dateStr, todayStr);
    displayResult(name, day + '/' + month + '/' + year, profile);
}
