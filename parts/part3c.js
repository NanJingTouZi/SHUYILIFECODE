// ============================================================
// BUILD CALC DIAGRAM
// ============================================================
function buildCalcDiagram(profile, mainCharName){
  var W = 720, H = 640;
  var cx = W/2;
  var dreamY = 46, parentY = 150, mainY = 300, childY = 410, bottomY = 520;
  var ayahX = 150, ibuX = W-150, temanX = 130, depanX = W-130;

  function line(x1,y1,x2,y2,extra){
    return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="var(--gold)" stroke-opacity="0.45" stroke-width="1.6" '+(extra||'')+'/>';
  }

  var html = '<svg viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">';
  html += '<defs><radialGradient id="mcGlow" cx="50%" cy="50%" r="60%">';
  html += '<stop offset="0%" stop-color="var(--gold-soft)" stop-opacity="0.35"/>';
  html += '<stop offset="100%" stop-color="var(--gold-soft)" stop-opacity="0"/>';
  html += '</radialGradient></defs>';

  html += line(cx, dreamY+22, cx, mainY-46);
  html += line(ayahX, parentY+26, cx, mainY-40);
  html += line(ibuX, parentY+26, cx, mainY-40);
  html += line(cx, mainY+46, cx, childY-14);
  html += line(ayahX+40, childY, cx-10, childY, '');
  html += line(ibuX-40, childY, cx+10, childY, '');
  html += line(cx, childY+14, cx, bottomY-30);
  html += line(cx-6, bottomY-14, temanX+50, bottomY-14);
  html += line(cx+6, bottomY-14, depanX-50, bottomY-14);

  html += '<g><rect x="'+(cx-30)+'" y="'+(dreamY-22)+'" width="60" height="44" rx="10" fill="var(--panel-2)" stroke="var(--gold)" stroke-width="1.4"/>';
  html += '<text x="'+cx+'" y="'+(dreamY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="26" fill="var(--gold-soft)">'+profile.Q5+'</text></g>';
  html += '<text x="'+cx+'" y="'+(dreamY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">IMPIAN HIDUP</text>';

  html += '<g><rect x="'+(ayahX-58)+'" y="'+(parentY-24)+'" width="116" height="48" rx="10" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+ayahX+'" y="'+(parentY+8)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="22" fill="var(--paper)">'+profile.M8+' '+profile.O8+' '+profile.N9+'</text></g>';
  html += '<text x="'+ayahX+'" y="'+(parentY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">DNA AYAH</text>';

  html += '<g><rect x="'+(ibuX-58)+'" y="'+(parentY-24)+'" width="116" height="48" rx="10" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+ibuX+'" y="'+(parentY+8)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="22" fill="var(--paper)">'+profile.S8+' '+profile.U8+' '+profile.T9+'</text></g>';
  html += '<text x="'+ibuX+'" y="'+(parentY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">DNA IBU</text>';

  html += '<circle cx="'+cx+'" cy="'+mainY+'" r="70" fill="url(#mcGlow)"/>';
  html += '<g transform="translate('+cx+','+mainY+') rotate(45)">';
  html += '<rect x="-46" y="-46" width="92" height="92" rx="14" fill="var(--panel-2)" stroke="var(--gold)" stroke-width="2.4"/>';
  html += '</g>';
  html += '<text x="'+cx+'" y="'+(mainY+16)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="52" fill="var(--gold-soft)">'+profile.Q12+'</text>';
  html += '<circle cx="'+(cx+52)+'" cy="'+(mainY-46)+'" r="15" fill="var(--panel)" stroke="var(--jade-soft)" stroke-width="1.3"/>';
  html += '<text x="'+(cx+52)+'" y="'+(mainY-41)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="15" fill="var(--jade-soft)">'+profile.Q11+'</text>';
  html += '<text x="'+cx+'" y="'+(mainY+88)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" letter-spacing="0.1em" fill="var(--gold-soft)">MAIN CHARACTER · '+esc(mainCharName).toUpperCase()+'</text>';

  html += '<circle cx="'+(ayahX+40)+'" cy="'+childY+'" r="20" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+(ayahX+40)+'" y="'+(childY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="19" fill="var(--paper)">'+profile.M15+'</text>';
  html += '<circle cx="'+(ibuX-40)+'" cy="'+childY+'" r="20" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+(ibuX-40)+'" y="'+(childY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="19" fill="var(--paper)">'+profile.U15+'</text>';
  html += '<text x="'+cx+'" y="'+(childY-30)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">ANAK</text>';

  html += '<circle cx="'+cx+'" cy="'+(bottomY-14)+'" r="22" fill="var(--panel-2)" stroke="var(--gold)" stroke-width="1.6"/>';
  html += '<text x="'+cx+'" y="'+(bottomY-7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="20" fill="var(--gold-soft)">'+profile.Q17+'</text>';

  html += '<g><rect x="'+(temanX-56)+'" y="'+(bottomY-24)+'" width="112" height="46" rx="10" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+temanX+'" y="'+(bottomY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="21" fill="var(--paper)">'+profile.M17+' '+profile.N17+' '+profile.O17+'</text></g>';
  html += '<text x="'+temanX+'" y="'+(bottomY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">TEMAN</text>';

  html += '<g><rect x="'+(depanX-56)+'" y="'+(bottomY-24)+'" width="112" height="46" rx="10" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+depanX+'" y="'+(bottomY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="21" fill="var(--paper)">'+profile.S17+' '+profile.T17+' '+profile.U17+'</text></g>';
  html += '<text x="'+depanX+'" y="'+(bottomY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">MASA DEPAN</text>';

  html += '<text x="'+cx+'" y="'+(H-34)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" fill="var(--paper)">Main Character: <tspan fill="var(--gold-soft)" font-weight="700">'+profile.Q12+' '+esc(mainCharName).toUpperCase()+'</tspan> (Elemen Utama)</text>';
  html += '<text x="'+cx+'" y="'+(H-12)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" fill="var(--paper-dim)">Basic Character: <tspan fill="var(--paper)" font-weight="600">'+profile.basicCharacter+'</tspan></text>';

  html += '</svg>';
  return html;
}

// ============================================================
// COMPUTE PROFILE
// ============================================================
function reduceDigit(n){
  n = Math.abs(Math.round(n));
  if(n === 0) return 5;
  while(n > 9){
    n = String(n).split('').reduce(function(a,d){ return a + parseInt(d,10); }, 0);
  }
  return n;
}

function computeProfile(dobStr, todayStr){
  var d = new Date(dobStr + 'T00:00:00');
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var yStr = String(year).padStart(4,'0');
  var yFirst2 = parseInt(yStr.substring(0,2), 10);
  var yLast2 = parseInt(yStr.substring(2,4), 10);

  var M8 = reduceDigit(day);
  var O8 = reduceDigit(month);
  var S8 = reduceDigit(yFirst2);
  var U8 = reduceDigit(yLast2);
  var N9 = reduceDigit(M8 + O8);
  var T9 = reduceDigit(S8 + U8);
  var Q12 = reduceDigit(N9 + T9);
  var M15 = reduceDigit(T9 + Q12);
  var U15 = reduceDigit(N9 + Q12);
  var Q17 = reduceDigit(M15 + U15);
  var N17 = reduceDigit(O8 + N9);
  var O17 = reduceDigit(M8 + N9);
  var M17 = reduceDigit(N17 + O17);
  var S17 = reduceDigit(S8 + T9);
  var T17 = reduceDigit(U8 + T9);
  var U17 = reduceDigit(S17 + T17);
  var F19 = reduceDigit(N9 * 2);
  var G19 = reduceDigit(T9 * 2);
  var H19 = reduceDigit(Q12 * 2);

  var rows = [
    {no:1, label:'DNA Ayah', code:'' + M8 + O8 + N9},
    {no:2, label:'DNA Ibu', code:'' + S8 + U8 + T9},
    {no:3, label:'Karakter Utama', code:'' + N9 + T9 + Q12},
    {no:4, label:'Perjalanan Hidup (1)', code:'' + N9 + Q12 + U15},
    {no:5, label:'Perjalanan Hidup (2)', code:'' + T9 + Q12 + M15},
    {no:6, label:'Anak', code:'' + M15 + U15 + Q17},
    {no:7, label:'Karir (1)', code:'' + M8 + N9 + O17},
    {no:8, label:'Karir (2)', code:'' + O8 + N9 + N17},
    {no:9, label:'Teman', code:'' + O17 + N17 + M17},
    {no:10, label:'Pernikahan (1)', code:'' + S8 + T9 + S17},
    {no:11, label:'Pernikahan (2)', code:'' + U8 + T9 + T17},
    {no:12, label:'Masa Depan', code:'' + S17 + T17 + U17},
    {no:13, label:'Alam Bawah Sadar', code:'' + F19 + G19 + H19}
  ];
  for(var ri = 0; ri < rows.length; ri++){
    rows[ri].meaning = getMeaning(rows[ri].code);
  }

  var baseDigits = [M8,O8,S8,U8,N9,T9,Q12];
  var missing = [];
  for(var n = 1; n <= 9; n++){
    if(baseDigits.indexOf(n) === -1) missing.push(n);
  }

  var t = new Date(todayStr + 'T00:00:00');
  var cycleYear = t.getFullYear();
  if(t.getMonth() === 10) cycleYear += 1;
  var cyStr = String(cycleYear);
  var cyF = reduceDigit(parseInt(cyStr.substring(0,2),10));
  var cyL = reduceDigit(parseInt(cyStr.substring(2,4),10));
  var AB9 = reduceDigit(cyF + cyL);
  var Q11 = reduceDigit(N9 + AB9);
  var Q5 = reduceDigit(M8 + U8 + Q12);

  var shio = findShio(d);
  var animalName = shio ? shio.shio.split(' ')[0] : '';
  var relation = findRelation(animalName);

  var elemMap = {1:'LOGAM',2:'AIR',3:'API',4:'KAYU',5:'TANAH',6:'LOGAM',7:'AIR',8:'API',9:'KAYU'};
  var allSixteen = [M8, O8, S8, U8, N9, T9, Q12, M15, U15, M17, N17, O17, Q17, S17, T17, U17];
  var balance = {LOGAM:0, AIR:0, API:0, KAYU:0, TANAH:0};
  for(var ei = 0; ei < allSixteen.length; ei++){
    var e = elemMap[allSixteen[ei]];
    if(e && balance[e] !== undefined) balance[e]++;
  }

  var mainElemKey = elemMap[Q12] || 'API';
  var productionCycle = ['API', 'TANAH', 'LOGAM', 'AIR', 'KAYU'];
  var displayOrder = [];
  var startIdx = productionCycle.indexOf(mainElemKey);
  if(startIdx !== -1){
    for(var ci = 0; ci < productionCycle.length; ci++){
      var idx = (startIdx + ci) % productionCycle.length;
      displayOrder.push(productionCycle[idx]);
    }
  } else {
    displayOrder = productionCycle.slice();
  }

  var categoryMap = {
    0: {label: 'Diri Sendiri', icon: '👤'},
    1: {label: 'Anak / Uang', icon: '💰'},
    2: {label: 'Karir / Pasangan', icon: '💼'},
    3: {label: 'Politik / Kesehatan', icon: '🏛️'},
    4: {label: 'Orang Tua / Pendukung', icon: '👨‍👩‍👦'}
  };

  var IDEAL_BY_POSITION = [4, 3, 3, 3, 3];

  return {
    day: day, month: month, year: year, 
    M8: M8, O8: O8, S8: S8, U8: U8, 
    N9: N9, T9: T9, Q12: Q12,
    M15: M15, U15: U15, Q17: Q17,
    N17: N17, O17: O17, M17: M17,
    S17: S17, T17: T17, U17: U17,
    F19: F19, G19: G19, H19: H19, 
    Q11: Q11, Q5: Q5,
    rows: rows, missing: missing, baseDigits: baseDigits, 
    shio: shio, animalName: animalName, relation: relation,
    balance: balance, mainElemKey: mainElemKey, displayOrder: displayOrder,
    categoryMap: categoryMap, allSixteen: allSixteen,
    basicCharacter: '' + N9 + T9 + Q12,
    IDEAL_BY_POSITION: IDEAL_BY_POSITION
  };
}

// ============================================================
// DISPLAY RESULT
// ============================================================
function displayResult(name, dobDisplay, profile){
  var el = document.getElementById('results');
  var mainChar = elemByNo(profile.Q12);
  var yearElem = elemByNo(profile.Q11);
  var dream = null;
  for(var i = 0; i < DREAMS.length; i++){
    if(DREAMS[i].no === profile.Q5){ dream = DREAMS[i]; break; }
  }

  var mainCharElem = elemByNo(profile.Q12);
  var mainCharName = mainCharElem ? mainCharElem.nama : '—';
  var baseDigitsStr = profile.baseDigits.join(', ');
  var missingStr = profile.missing.length ? profile.missing.join(', ') : 'Tidak ada';
  
  var colLabels = [
    {no:1, label:'DNA AYAH'},{no:2, label:'DNA IBU'},{no:3, label:'KARAKTER UTAMA'},
    {no:4, label:'P.HIDUP (1)'},{no:5, label:'P.HIDUP (2)'},{no:6, label:'ANAK'},
    {no:7, label:'KARIR (1)'},{no:8, label:'KARIR (2)'},{no:9, label:'TEMAN'},
    {no:10, label:'PERNIKAH (1)'},{no:11, label:'PERNIKAH (2)'},{no:12, label:'MASA DEPAN'},
    {no:13, label:'ALAM BAWAH'}
  ];
  
  var summaryHtml = '';
  summaryHtml += '<div class="section-title">Ilustrasi Perhitungan 13 Angka <span class="cn">生命數組圖示</span></div>';
  summaryHtml += '<div class="section-sub">13 set angka kehidupan yang dihitung dari tanggal lahir Anda (seperti format segitiga).</div>';
  summaryHtml += '<div class="panel">';
  summaryHtml += '<div class="summary-13-grid">';
  for(var ci = 0; ci < profile.rows.length; ci++){
    var r = profile.rows[ci];
    var isMain = r.no === 3;
    var label = colLabels[ci] ? colLabels[ci].label : '';
    summaryHtml += '<div class="summary-13-item ' + (isMain ? 'main-char' : '') + '">';
    summaryHtml += '<div class="s-num-label">' + label + '</div>';
    summaryHtml += '<div class="s-num-box">' + esc(r.code) + '</div>';
    summaryHtml += '<div class="s-num-index">#' + r.no + '</div>';
    summaryHtml += '</div>';
  }
  summaryHtml += '</div>';
  summaryHtml += '<div class="summary-info-row">';
  summaryHtml += '📅 <strong>Tanggal:</strong> ' + esc(dobDisplay) + ' → ';
  summaryHtml += '<strong>Angka Dasar:</strong> ' + esc(baseDigitsStr) + ' → ';
  summaryHtml += '<strong>Karakter Utama:</strong> <span class="highlight">' + profile.Q12 + '</span> | ';
  summaryHtml += '<strong>Angka Hilang:</strong> <span class="missing">' + esc(missingStr) + '</span>';
  summaryHtml += '</div>';
  summaryHtml += '</div>';

  var missingHtml = profile.missing.length
    ? profile.missing.map(function(n){ return '<span class="miss-num">' + n + '</span>'; }).join('')
    : '<span class="miss-empty">Tidak ada angka yang hilang — semua angka dasar 1–9 lengkap.</span>';

  var numCards = '';
  for(var ri = 0; ri < profile.rows.length; ri++){
    var r = profile.rows[ri];
    var isMain = r.no === 3;
    var cls = isMain ? 'num-card main-char-card' : 'num-card';
    numCards += '<div class="' + cls + '" data-idx="' + String(r.no).padStart(2,'0') + '">';
    numCards += '<div class="code">' + esc(r.code) + '</div>';
    numCards += '<div class="label">' + esc(r.no) + '. ' + esc(r.label) + '</div>';
    numCards += '<div class="meaning">' + (r.meaning ? esc(r.meaning) : 'Kombinasi ini belum memiliki catatan makna spesifik pada referensi.') + '</div>';
    numCards += '</div>';
  }

  var mainCharHtml = '';
  if(mainChar){
    mainCharHtml = '<div class="main-char-highlight">';
    mainCharHtml += '<div class="big-num">' + profile.Q12 + '</div>';
    mainCharHtml += '<div class="info">';
    mainCharHtml += '<div class="label">Karakter Utama · Elemen ' + esc(mainChar.nama) + '</div>';
    mainCharHtml += '<div class="name">' + esc(mainChar.nama) + '</div>';
    mainCharHtml += '<div class="desc">' + esc(mainChar.positif[0]) + '</div>';
    mainCharHtml += '</div></div>';
  }

  var blessNums = ['4','5','6','7','9'].filter(function(n){ return profile.baseDigits.indexOf(parseInt(n,10)) !== -1; });
  var blessHtml = '';
  if(blessNums.length){
    blessHtml = '<ul class="bless-list">';
    for(var bi = 0; bi < blessNums.length; bi++){
      var bn = blessNums[bi];
      blessHtml += '<li><span class="bless-num">' + bn + '</span><span>' + esc(BLESSINGS[bn]) + '</span></li>';
    }
    blessHtml += '</ul>';
  } else {
    blessHtml = '<p class="section-sub" style="margin:0;">Belum ada angka berkat (4, 5, 6, 7, 9) yang terdeteksi pada susunan angka dasar Anda.</p>';
  }

  var elemNames = {'LOGAM':'Logam','AIR':'Air','API':'Api','KAYU':'Kayu','TANAH':'Tanah'};
  var elemIcons = {'LOGAM':'⚙','AIR':'💧','API':'🔥','KAYU':'🌳','TANAH':'🌍'};
  
  var balanceHtml = '';
  var displayOrder = profile.displayOrder || ['API', 'TANAH', 'LOGAM', 'AIR', 'KAYU'];
  var mainElemKey = profile.mainElemKey || 'API';
  var categoryMap = profile.categoryMap || {};
  var IDEAL_BY_POSITION = profile.IDEAL_BY_POSITION || [4, 3, 3, 3, 3];
  
  for(var di = 0; di < displayOrder.length; di++){
    var key = displayOrder[di];
    var val = profile.balance[key] || 0;
    var ideal = IDEAL_BY_POSITION[di] || 3;
    var diff = val - ideal;
    var isMain = (key === mainElemKey);
    var cat = categoryMap[di] || {label: '—', icon: ''};
    
    var statusClass = 'seimbang';
    var statusLabel = 'Seimbang';
    var diffClass = 'zero';
    var diffDisplay = '0';
    if(diff > 0){
      statusClass = 'kelebihan';
      statusLabel = 'Kelebihan';
      diffClass = 'plus';
      diffDisplay = '+' + diff;
    } else if(diff < 0){
      statusClass = 'kekurangan';
      statusLabel = 'Kekurangan';
      diffClass = 'minus';
      diffDisplay = '' + diff;
    }
    
    var posNum = di + 1;
    
    balanceHtml += '<div class="bal-col ' + (isMain ? 'bal-main' : '') + '">';
    balanceHtml += '<div class="bal-icon">' + elemIcons[key] + '</div>';
    balanceHtml += '<div class="bal-name">' + elemNames[key] + '</div>';
    balanceHtml += '<div class="bal-num">' + val + '</div>';
    balanceHtml += '<div class="bal-status ' + statusClass + '">' + statusLabel + '</div>';
    balanceHtml += '<div class="bal-ideal">Ideal: ' + ideal + '</div>';
    balanceHtml += '<div class="bal-diff ' + diffClass + '">' + diffDisplay + '</div>';
    balanceHtml += '<div class="bal-category">' + cat.icon + ' ' + cat.label + '</div>';
    balanceHtml += '<div class="bal-position">#' + posNum + '</div>';
    balanceHtml += '</div>';
  }

  var riskLabels = Object.keys(RISK_DATA);
  var riskHtml = '';
  for (var rl = 0; rl < riskLabels.length; rl++) {
    var label = riskLabels[rl];
    var list = RISK_DATA[label];
    var scope = RISK_SCOPE[label] || [1,2,3,4,5,6,7,8,9,10,11,12,13];
    
    var hitRows = [];
    for (var ri2 = 0; ri2 < profile.rows.length; ri2++) {
      var r = profile.rows[ri2];
      if (scope.indexOf(r.no) !== -1 && list.indexOf(r.code) !== -1) {
        hitRows.push(r);
      }
    }
    
    var hit = hitRows.length > 0;
    var isWealth = label.toLowerCase().indexOf('kekayaan') !== -1;
    var cls = hit ? (isWealth ? 'risk-card wealth hit' : 'risk-card hit') : 'risk-card ok';
    var status;
    if (hit) {
      var detail = '';
      for (var hr = 0; hr < hitRows.length; hr++) {
        if (hr > 0) detail += ', ';
        detail += esc(hitRows[hr].code) + ' (' + esc(hitRows[hr].label) + ')';
      }
      status = (isWealth ? '✦ ' : '⚠ ') + detail;
    } else {
      status = 'Tidak terindikasi';
    }
    riskHtml += '<div class="' + cls + '"><div class="rtitle">' + esc(label) + '</div><div class="rstatus">' + status + '</div></div>';
  }

  var rel = profile.relation || {};
  var shioName = profile.shio ? profile.shio.shio : '';
  var extraRel = '';
  if (shioName.indexOf('Babi') !== -1 || shioName.indexOf('Macan') !== -1 || 
      shioName.indexOf('Ular') !== -1 || shioName.indexOf('Monyet') !== -1) {
    extraRel = 'BERTENTANGAN/MELUKAI';
  } else if (shioName.indexOf('Kerbau') !== -1 || shioName.indexOf('Naga') !== -1 || 
             shioName.indexOf('Kambing') !== -1 || shioName.indexOf('Anjing') !== -1) {
    extraRel = 'TERJEBAK FISIK & MENTAL';
  } else {
    extraRel = '4 JODOH BESAR';
  }

  var relHtml = '<div class="rel-grid">';
  relHtml += '<div class="rel-item"><b>Tiga Serangkai Duniawi</b>' + esc(rel.serangkai || '—') + '</div>';
  relHtml += '<div class="rel-item"><b>Tiga Cabang Duniawi</b>' + esc(rel.cabang || '—') + '</div>';
  relHtml += '<div class="rel-item"><b>Bertentangan / Menyakiti</b>' + esc(rel.menyakiti || '—') + '</div>';
  relHtml += '<div class="rel-item"><b>Enam Harmoni (Jodoh)</b>' + esc(rel.harmoni || '—') + '</div>';
  relHtml += '</div>';

  var fullHtml = '';
  fullHtml += '<div class="profile-banner">';
  fullHtml += '<div><p class="name">' + esc(name || 'Tanpa Nama') + '</p>';
  fullHtml += '<p class="meta">Lahir ' + esc(dobDisplay) + '</p></div>';
  fullHtml += '<div class="shio-badge">';
  fullHtml += '<div class="animal">' + esc(profile.shio ? profile.shio.shio : '') + '</div>';
  fullHtml += '<div class="label">Elemen ' + esc(profile.shio ? profile.shio.elemen : '') + ' · ' + esc(profile.shio ? profile.shio.yy : '') + '</div>';
  fullHtml += '<div class="sub">' + esc(profile.shio ? profile.shio.trait : '') + '</div>';
  fullHtml += '</div></div>';

  fullHtml += '<div class="section-title">Lembar Kalkulasi <span class="cn">計算表</span></div>';
  fullHtml += '<div class="section-sub">Ilustrasi bagaimana angka-angka Anda saling terhubung — dari DNA orang tua hingga Karakter Utama yang ditonjolkan di tengah.</div>';
  fullHtml += '<div class="panel diagram-panel">' + buildCalcDiagram(profile, mainChar ? mainChar.nama : '') + '</div>';

  fullHtml += summaryHtml;

  fullHtml += '<div class="section-title">Karakter Utama <span class="cn">主性格</span></div>';
  fullHtml += mainCharHtml;
  fullHtml += '<div class="section-sub">Elemen inti Anda: <strong style="color:var(--gold-soft)">' + (mainChar ? esc(mainChar.nama) : '—') + '</strong> — diturunkan dari angka ' + esc(profile.Q12) + ' pada perhitungan tanggal lahir.</div>';
  fullHtml += '<div class="grid-2">';
  fullHtml += '<div class="panel">';
  fullHtml += '<h3>Sifat Positif</h3>';
  fullHtml += '<ul class="trait-list">';
  if(mainChar){
    for(var pi = 0; pi < mainChar.positif.length; pi++){
      fullHtml += '<li>' + esc(mainChar.positif[pi]) + '</li>';
    }
  } else {
    fullHtml += '<li>—</li>';
  }
  fullHtml += '</ul>';
  fullHtml += '<h3 style="margin-top:20px;">Sifat Perlu Diwaspadai</h3>';
  fullHtml += '<ul class="trait-list">';
  if(mainChar){
    for(var ni = 0; ni < mainChar.negatif.length; ni++){
      fullHtml += '<li>' + esc(mainChar.negatif[ni]) + '</li>';
    }
  } else {
    fullHtml += '<li>—</li>';
  }
  fullHtml += '</ul>';
  fullHtml += '</div>';
  fullHtml += '<div class="panel">';
  fullHtml += '<h3>Warna Pendukung</h3>';
  fullHtml += '<div class="swatch"><b>Sesuai elemen:</b><br>' + (mainChar ? esc(mainChar.warna_sesuai) : '—') + '</div><br>';
  fullHtml += '<div class="swatch"><b>Memperkuat elemen:</b><br>' + (mainChar ? esc(mainChar.warna_pendukung) : '—') + '</div><br>';
  fullHtml += '<div class="swatch"><b>Melemahkan gangguan:</b><br>' + (mainChar ? esc(mainChar.warna_melemahkan) : '—') + '</div>';
  fullHtml += '<h3 style="margin-top:20px;">Siklus Hidup</h3>';
  fullHtml += '<ul class="trait-list">';
  if(mainChar){
    for(var si2 = 0; si2 < mainChar.siklus.length; si2++){
      fullHtml += '<li>' + esc(mainChar.siklus[si2]) + '</li>';
    }
  } else {
    fullHtml += '<li>—</li>';
  }
  fullHtml += '</ul>';
  fullHtml += '</div></div>';

  fullHtml += '<div class="section-title">Keseimbangan 5 Elemen <span class="cn">五行平衡</span></div>';
  fullHtml += '<div class="section-sub">';
  fullHtml += 'Jumlah kemunculan setiap elemen dalam <strong>16 angka</strong>. ';
  fullHtml += 'Urutan dimulai dari <strong>elemen utama (' + (mainChar ? esc(mainChar.nama) : '—') + ')</strong>. ';
  fullHtml += 'Nilai ideal berdasarkan posisi: <strong>4,3,3,3,3</strong>. ';
  fullHtml += 'Kelebihan (+) / Kekurangan (-) ditampilkan.';
  fullHtml += '</div>';
  fullHtml += '<div class="panel"><div class="bal-grid">' + balanceHtml + '</div></div>';

  fullHtml += '<div class="section-title">Ramalan Tahun Berjalan <span class="cn">流年</span></div>';
  fullHtml += '<div class="section-sub">Berdasarkan angka tahun personal Anda saat ini (dihitung otomatis dari tanggal hari ini).</div>';
  fullHtml += '<div class="panel year-banner">';
  fullHtml += '<div class="year-num">' + esc(profile.Q11) + '</div>';
  fullHtml += '<div class="year-info">';
  fullHtml += '<div class="l1">Fokus tahun ini: <strong>' + (yearElem ? esc(yearElem.siklus[0]) : '—') + '</strong></div>';
  fullHtml += '<div class="l2">Perlu dievaluasi: ' + (yearElem ? esc(yearElem.siklus[1]) : '—') + '</div>';
  fullHtml += '<div class="l3">Tingkat keberuntungan: ' + (yearElem ? esc(yearElem.siklus[2]) : '—') + '</div>';
  fullHtml += '</div></div>';

  fullHtml += '<div class="section-title">13 Angka Kehidupan <span class="cn">生命數組</span></div>';
  fullHtml += '<div class="section-sub">Tiga digit pada setiap kartu adalah kombinasi angka dari tanggal lahir Anda; teks di bawahnya adalah makna dari kombinasi tersebut.</div>';
  fullHtml += '<div class="num-grid">' + numCards + '</div>';

  fullHtml += '<div class="section-title">Angka yang Hilang <span class="cn">缺失數</span></div>';
  fullHtml += '<div class="section-sub">Angka 1–9 yang tidak muncul pada tujuh angka dasar kelahiran Anda.</div>';
  fullHtml += '<div class="panel"><div class="missing-box">' + missingHtml + '</div></div>';

  fullHtml += '<div class="section-title">Impian Hidup Bawaan Lahir <span class="cn">天賦使命</span></div>';
  fullHtml += '<div class="panel dream-box">';
  fullHtml += '<div class="big">' + (dream ? esc(dream.title) : '—') + '</div>';
  fullHtml += '<div class="need">Dalam segitiga dibutuhkan angka: <strong>' + (dream ? esc(dream.segitiga) : '—') + '</strong></div>';
  fullHtml += '</div>';

  fullHtml += '<div class="section-title">5 Berkat Kehidupan <span class="cn">五福</span></div>';
  fullHtml += '<div class="section-sub">Berkat yang tersirat bila angka pembawanya hadir di susunan angka dasar Anda.</div>';
  fullHtml += '<div class="panel">' + blessHtml + '</div>';

  fullHtml += '<div class="section-title">Potensi &amp; Peringatan <span class="cn">潛在課題</span></div>';
  fullHtml += '<div class="section-sub">Diperiksa dari kecocokan kombinasi angka Anda terhadap pola-pola referensi sesuai area masing-masing.</div>';
  fullHtml += '<div class="risk-grid">' + riskHtml + '</div>';

  fullHtml += '<div class="section-title">Shio &amp; Relasi <span class="cn">生肖</span></div>';
  fullHtml += '<div class="section-sub">Hubungan shio kelahiran Anda dengan shio-shio lain. Status: <strong>' + extraRel + '</strong></div>';
  fullHtml += '<div class="panel">' + relHtml + '</div>';
  
  el.innerHTML = fullHtml;
  el.style.display = 'block';
  document.getElementById('printBtn').style.display = 'inline-block';
  el.scrollIntoView({behavior:'smooth', block:'start'});
}