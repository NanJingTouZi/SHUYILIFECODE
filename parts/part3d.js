// ============================================================
// MAIN CALCULATE BUTTON
// ============================================================
document.getElementById('calcBtn').addEventListener('click', function() {
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
    
    var status = getLicenseStatus(session.email);
    if (!status.active) {
        showQuotaModal();
        return;
    }
    
    var updated = updateLicenseUsage(session.email);
    if (!updated) {
        alert('Gagal mengurangi kuota. Silakan coba lagi.');
        return;
    }
    
    var dateStr = y + '-' + String(m).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var todayStr = new Date().toISOString().slice(0,10);
    var profile = computeProfile(dateStr, todayStr);
    
    saveUserHistory(session.email, name, day + '/' + month + '/' + year);
    saveAdminHistory(session.email, name, day + '/' + month + '/' + year);
    
    displayResult(name, day + '/' + month + '/' + year, profile);
    updateStatusBar();
});

// ============================================================
// PRINT
// ============================================================
document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
});

// ============================================================
// INIT
// ============================================================
loadLocalData();
updateStatusBar();

console.log('🚀 Aplikasi siap!');
console.log('📌 Mode: LOCAL (data di localStorage)');
console.log('💡 Untuk testing:');
console.log('   - Registrasi: Masukkan email baru → isi data → OTP (lihat Console)');
console.log('   - Login: Masukkan email terdaftar → OTP (lihat Console)');
console.log('   - Token: Generate di admin.html atau via Console');
console.log('   - Riwayat: Bisa diakses meskipun kuota habis');
console.log('   - Klik "Lihat" di riwayat → hitung ulang tanpa mengurangi kuota');

console.log('✅ Aplikasi siap! Kuota akan muncul dari localStorage.');