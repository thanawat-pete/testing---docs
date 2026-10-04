// app.js — T-Check Documentation Site

/* =====================================================
   STATE
   ===================================================== */
let currentPage = 'overview';

// Load saved TC statuses from localStorage
function loadStatuses() {
  try {
    return JSON.parse(localStorage.getItem('tc_statuses') || '{}');
  } catch { return {}; }
}
function saveStatuses(obj) {
  localStorage.setItem('tc_statuses', JSON.stringify(obj));
}
let tcStatuses = loadStatuses();

/* =====================================================
   HELPERS
   ===================================================== */
function statusBadge(status) {
  const map = {
    PASS:    ['badge-pass', '✅ PASS'],
    FAIL:    ['badge-fail', '❌ FAIL'],
    PENDING: ['badge-pending', '⏳ PENDING'],
    SKIP:    ['badge-skip', '⏭ SKIP'],
  };
  const [cls, label] = map[status] || map.PENDING;
  return `<span class="badge ${cls}">${label}</span>`;
}

function priorityBadge(p) {
  const map = { 'สูง': 'badge-high', 'กลาง': 'badge-medium', 'ต่ำ': 'badge-low' };
  return `<span class="badge ${map[p] || 'badge-low'}">${p}</span>`;
}

function getEffectiveStatus(id) {
  return tcStatuses[id] || 'PENDING';
}

function computeStats() {
  let total = 0, pass = 0, fail = 0, pending = 0;
  DATA.testCases.forEach(m => {
    m.cases.forEach(tc => {
      total++;
      const s = getEffectiveStatus(tc.id);
      if (s === 'PASS')    pass++;
      else if (s === 'FAIL') fail++;
      else                   pending++;
    });
  });
  return { total, pass, fail, pending };
}

function updateStatsUI() {
  const { total, pass, fail, pending } = computeStats();
  document.getElementById('stat-total').textContent   = total;
  document.getElementById('stat-pass').textContent    = pass;
  document.getElementById('stat-fail').textContent    = fail;
  document.getElementById('stat-pending').textContent = pending;
}

/* =====================================================
   SIDEBAR & TOPBAR
   ===================================================== */
function navigateTo(page, el) {
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');
  const titles = {
    overview:     'ภาพรวมโครงการ',
    requirements: 'ข้อกำหนดซอฟต์แวร์ (SPRS)',
    testplan:     'แผนการทดสอบ (Test Plan)',
    testcases:    'Test Cases',
    bdd:          'BDD User Stories'
  };
  document.getElementById('breadcrumb-current').textContent = titles[page] || page;
  renderPage(page);
}

/* toggle sidebar on mobile */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

/* accordion helper */
function toggleAccordion(card, bodyClass) {
  card.classList.toggle('open');
}

/* =====================================================
   PAGES
   ===================================================== */
function renderPage(page) {
  const main = document.getElementById('mainContent');
  main.style.animation = 'none';
  main.offsetHeight;
  main.style.animation = '';

  const pages = { overview, requirements, testplan, testcases, bdd };
  main.innerHTML = (pages[page] || overview)();

  // re-bind dynamic events
  bindPageEvents(page);
}

/* ---- OVERVIEW ---- */
function overview() {
  const { total, pass, fail, pending } = computeStats();
  const passRate = total > 0 ? Math.round((pass / total) * 100) : 0;
  const modules = DATA.testCases.map(m => {
    const modulePass = m.cases.filter(c => getEffectiveStatus(c.id) === 'PASS').length;
    const pct = Math.round((modulePass / m.cases.length) * 100);
    return `
      <div class="module-card" data-nav="testcases">
        <div class="module-card-header">
          <div class="module-card-icon">${m.icon}</div>
          <div>
            <div class="module-card-title">${m.module}</div>
            <div class="module-card-subtitle">${m.cases.length} Test Cases</div>
          </div>
        </div>
        <div class="module-progress">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width:${pct}%"></div>
          </div>
          <div class="progress-label">
            <span>${modulePass}/${m.cases.length} ผ่าน</span>
            <span>${pct}%</span>
          </div>
        </div>
      </div>`;
  }).join('');

  const userRows = [
    ['Guest',            'ผู้เยี่ยมชมที่ยังไม่ได้สมัครสมาชิก สามารถใช้ Editor แบบจำกัด'],
    ['User (Free)',      'สมาชิกทั่วไป มี AI Token จำกัดต่อเดือน'],
    ['User (Premium)',   'สมาชิกที่ชำระเงินแล้ว มี AI Token เพิ่มขึ้น'],
    ['Admin',            'ผู้ดูแลระบบ สามารถเข้าถึง Admin Panel'],
  ].map(([g, d]) => `<tr><td><strong>${g}</strong></td><td>${d}</td></tr>`).join('');

  return `
    <div class="page-header">
      <div class="page-header-top">
        <span class="page-badge sprs">SPRS</span>
      </div>
      <h1 class="page-title">T-Check — เอกสารการทดสอบระบบ</h1>
      <p class="page-desc">ระบบตรวจสอบไวยากรณ์ภาษาไทยด้วย AI เอกสารฉบับนี้ครอบคลุม Software Requirements, Test Plan, Test Cases และ BDD User Stories</p>
      <div class="page-meta">
        <div class="page-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          4 ตุลาคม 2026
        </div>
        <div class="page-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          T-Check Team
        </div>
        <div class="page-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          สถานะ: In Progress
        </div>
      </div>
    </div>

    <div class="cards-grid">
      <div class="stat-card purple">
        <div class="stat-card-icon purple">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>
        </div>
        <div class="stat-card-value">${total}</div>
        <div class="stat-card-label">Test Cases ทั้งหมด</div>
      </div>
      <div class="stat-card green">
        <div class="stat-card-icon green">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="stat-card-value" style="color:var(--pass-text)">${pass}</div>
        <div class="stat-card-label">ผ่าน (PASS)</div>
      </div>
      <div class="stat-card red">
        <div class="stat-card-icon red">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </div>
        <div class="stat-card-value" style="color:var(--fail-text)">${fail}</div>
        <div class="stat-card-label">ไม่ผ่าน (FAIL)</div>
      </div>
      <div class="stat-card yellow">
        <div class="stat-card-icon yellow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="stat-card-value" style="color:var(--pending-text)">${pending}</div>
        <div class="stat-card-label">รอทดสอบ (PENDING)</div>
      </div>
      <div class="stat-card blue">
        <div class="stat-card-icon blue">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div class="stat-card-value" style="color:#388bfd">${passRate}%</div>
        <div class="stat-card-label">อัตราผ่าน (Pass Rate)</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Module ที่ต้องทดสอบ</div>
      <div class="module-cards">${modules}</div>
    </div>

    <div class="section">
      <div class="section-title">กลุ่มผู้ใช้งาน</div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>กลุ่มผู้ใช้</th><th>คำอธิบาย</th></tr></thead>
          <tbody>${userRows}</tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <div class="section-title">สภาพแวดล้อมการทดสอบ</div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Environment</th><th>URL</th><th>คำอธิบาย</th></tr></thead>
          <tbody>
            <tr><td><strong>Development</strong></td><td><code style="font-family:monospace;font-size:12px;color:var(--accent-light)">http://localhost:5173</code></td><td>สำหรับ Dev ทดสอบระหว่างพัฒนา</td></tr>
            <tr><td><strong>Staging</strong></td><td><span style="color:var(--text-muted)">กำหนดภายหลัง</span></td><td>สำหรับ QA ทดสอบก่อน Production</td></tr>
            <tr><td><strong>Production</strong></td><td><span style="color:var(--text-muted)">URL จริง</span></td><td>สำหรับ UAT</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* ---- REQUIREMENTS ---- */
function requirements() {
  const modules = [
    { key: 'auth',  title: 'Authentication Module',   data: DATA.requirements.auth },
    { key: 'doc',   title: 'Document Module',          data: DATA.requirements.doc },
    { key: 'gram',  title: 'Grammar Check Module',     data: DATA.requirements.gram },
    { key: 'pay',   title: 'Payment Module',           data: DATA.requirements.pay },
    { key: 'admin', title: 'Admin Module',             data: DATA.requirements.admin },
  ];

  const blocks = modules.map(m => {
    const rows = m.data.map(r => `
      <tr>
        <td><code style="font-family:monospace;font-size:11px;color:var(--accent-light)">${r.id}</code></td>
        <td>${r.req}</td>
        <td>${priorityBadge(r.priority)}</td>
      </tr>`).join('');
    return `
      <div class="req-block" id="req-${m.key}">
        <div class="req-block-header" onclick="toggleAccordion(this.closest('.req-block'))">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          <span class="req-block-title">${m.title}</span>
          <span class="req-block-count">${m.data.length} ข้อกำหนด</span>
          <svg class="tc-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div class="req-block-body">
          <div class="doc-table-wrap" style="border:none;border-radius:0;margin:0">
            <table class="doc-table">
              <thead><tr><th>รหัส</th><th>ข้อกำหนด</th><th>ลำดับความสำคัญ</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      </div>`;
  }).join('');

  const techItems = DATA.techStack.map(t => `
    <div class="tech-item">
      <span class="tech-item-layer">${t.layer}</span>
      <span class="tech-item-name">${t.name}</span>
      <span class="tech-item-ver">${t.version}</span>
    </div>`).join('');

  const routeRows = DATA.routes.map(r => `
    <div class="route-item">
      <span class="route-path">${r.path}</span>
      <span class="route-component">${r.component}</span>
      <span class="badge ${r.access === 'Admin เท่านั้น' ? 'badge-fail' : r.access === 'Guest เท่านั้น' ? 'badge-pending' : r.access === 'Login แล้ว' ? 'badge-pass' : 'badge-skip'}">${r.access}</span>
    </div>`).join('');

  return `
    <div class="page-header">
      <div class="page-header-top">
        <span class="page-badge sprs">SPRS</span>
      </div>
      <h1 class="page-title">ข้อกำหนดซอฟต์แวร์</h1>
      <p class="page-desc">Software Project Requirements Specification (SPRS) กำหนดขอบเขต, ข้อกำหนดหน้าที่ และสถาปัตยกรรมของระบบ T-Check</p>
    </div>

    <div class="section">
      <div class="section-title">Technology Stack</div>
      <div class="tech-grid">${techItems}</div>
    </div>

    <div class="section">
      <div class="section-title">Functional Requirements</div>
      ${blocks}
    </div>

    <div class="section">
      <div class="section-title">Non-Functional Requirements</div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>ด้าน</th><th>ข้อกำหนด</th></tr></thead>
          <tbody>
            <tr><td><strong>Performance</strong></td><td>หน้าเว็บโหลดภายใน 3 วินาที, Auto-save Debounce ≥ 1 วินาที, UI ตอบสนอง ≤ 100ms</td></tr>
            <tr><td><strong>Security</strong></td><td>Token เก็บใน HttpOnly Cookie เท่านั้น, ทุก API ผ่าน HTTPS, Route Guard บนทุกหน้าที่ต้องการสิทธิ์</td></tr>
            <tr><td><strong>Usability</strong></td><td>รองรับอย่างน้อย 2 ภาษา (ไทย/อังกฤษ), รองรับ Dark Mode และ Light Mode</td></tr>
            <tr><td><strong>Maintainability</strong></td><td>โค้ดผ่าน ESLint, Component เป็นแบบ Reusable</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Route Map (${DATA.routes.length} routes)</div>
      <div class="doc-table-wrap" style="border-radius:var(--radius-lg)">
        ${routeRows}
      </div>
    </div>
  `;
}

/* ---- TEST PLAN ---- */
function testplan() {
  const sprints = DATA.sprints.map(s => `
    <div class="sprint-item">
      <div class="sprint-dot ${s.active ? 'active' : ''}">${s.num}</div>
      <div class="sprint-content">
        <div class="sprint-title">${s.label}</div>
        <div class="sprint-time">${s.time}</div>
        <div class="sprint-desc">${s.desc}</div>
      </div>
    </div>`).join('');

  return `
    <div class="page-header">
      <div class="page-header-top">
        <span class="page-badge plan">Test Plan</span>
      </div>
      <h1 class="page-title">แผนการทดสอบ & รายงาน</h1>
      <p class="page-desc">Test Plan & Test Report สำหรับระบบ T-Check Frontend เพื่อให้มั่นใจว่าซอฟต์แวร์มีคุณภาพตามข้อกำหนด</p>
    </div>

    <div class="info-box note">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div>ส่วนรายงานผลการทดสอบ (Test Report) จะอัปเดตหลังการทดสอบแต่ละรอบ ปัจจุบันอยู่ระหว่างการดำเนินการ</div>
    </div>

    <div class="section">
      <div class="section-title">ระดับการทดสอบ</div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>ระดับ</th><th>คำอธิบาย</th><th>เครื่องมือ</th></tr></thead>
          <tbody>
            <tr><td><strong>Unit Testing</strong></td><td>ทดสอบ Component แต่ละตัวแยกกัน</td><td>Vitest, React Testing Library</td></tr>
            <tr><td><strong>Integration Testing</strong></td><td>ทดสอบการทำงานร่วมกันระหว่าง Component</td><td>Vitest</td></tr>
            <tr><td><strong>E2E Testing</strong></td><td>ทดสอบ User Flow ทั้งหมดตั้งแต่ต้นจนจบ</td><td>Playwright / Cypress</td></tr>
            <tr><td><strong>Manual Testing</strong></td><td>ทดสอบด้วยมือตาม Test Cases</td><td>—</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <div class="section-title">ประเภทการทดสอบ</div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>ประเภท</th><th>วัตถุประสงค์</th></tr></thead>
          <tbody>
            <tr><td><strong>Smoke Testing</strong></td><td>ตรวจสอบว่าฟังก์ชันหลักทำงานได้หลัง Deploy</td></tr>
            <tr><td><strong>Regression Testing</strong></td><td>ตรวจสอบว่า Feature เดิมยังทำงานได้หลัง Code Change</td></tr>
            <tr><td><strong>Boundary Testing</strong></td><td>ทดสอบค่าขอบเขต เช่น ความยาว Password, ขนาดไฟล์</td></tr>
            <tr><td><strong>Negative Testing</strong></td><td>ทดสอบการป้อนข้อมูลที่ไม่ถูกต้อง</td></tr>
            <tr><td><strong>Usability Testing</strong></td><td>ทดสอบความสะดวกในการใช้งาน</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <div class="section-title">เกณฑ์การยอมรับ</div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Bug Severity</th><th>คำอธิบาย</th><th>ตัวอย่าง</th></tr></thead>
          <tbody>
            <tr><td><span class="badge badge-fail">Critical</span></td><td>ระบบล่ม, ข้อมูลหาย, Security Breach</td><td>Login ไม่ได้เลย</td></tr>
            <tr><td><span class="badge badge-high">High</span></td><td>Feature หลักทำงานผิดพลาด</td><td>Save Document ไม่สำเร็จ</td></tr>
            <tr><td><span class="badge badge-medium">Medium</span></td><td>Feature ทำงานบางส่วนผิด</td><td>UI แสดงผลไม่ถูกต้อง</td></tr>
            <tr><td><span class="badge badge-low">Low</span></td><td>ปัญหาเล็กน้อย, Cosmetic</td><td>ตัวสะกดผิดใน UI</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <div class="section-title">ตารางการทดสอบ (Sprint Schedule)</div>
      <div class="timeline">${sprints}</div>
    </div>

    <div class="section">
      <div class="section-title">สรุปผลการทดสอบ</div>
      <div class="info-box warn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <div>รอข้อมูลการทดสอบ — จะอัปเดตหลังดำเนินการทดสอบแต่ละรอบ</div>
      </div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>รอบการทดสอบ</th><th>วันที่</th><th>ทั้งหมด</th><th>ผ่าน</th><th>ไม่ผ่าน</th><th>ข้าม</th></tr></thead>
          <tbody>
            <tr><td>Round 1 (Smoke)</td><td style="color:var(--text-muted)">รอ</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td>Round 2 (Full)</td><td style="color:var(--text-muted)">รอ</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td>Round 3 (Regression)</td><td style="color:var(--text-muted)">รอ</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* ---- TEST CASES ---- */
function testcases() {
  const { total, pass, fail, pending } = computeStats();

  const groups = DATA.testCases.map(m => {
    const cards = m.cases.map(tc => {
      const eff = getEffectiveStatus(tc.id);
      const steps = tc.steps.map((s, i) => `
        <div class="tc-step">
          <div class="tc-step-num">${i+1}</div>
          <div>${s}</div>
        </div>`).join('');

      return `
        <div class="tc-card" id="tc-${tc.id.replace(/-/g,'_')}">
          <div class="tc-card-header" onclick="toggleAccordion(this.closest('.tc-card'))">
            <span class="tc-card-id">${tc.id}</span>
            <span class="tc-card-title">${tc.title}</span>
            <div class="tc-card-meta">
              ${priorityBadge(tc.priority)}
              ${statusBadge(eff)}
            </div>
            <svg class="tc-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div class="tc-card-body">
            <div class="tc-detail-grid">
              <div class="tc-detail-col">
                <div class="tc-detail-block">
                  <div class="tc-detail-label">Pre-condition</div>
                  <div class="tc-detail-value">${tc.precondition}</div>
                </div>
                <div class="tc-detail-block">
                  <div class="tc-detail-label">ขั้นตอนการทดสอบ</div>
                  <div class="tc-steps">${steps}</div>
                </div>
              </div>
              <div class="tc-detail-col">
                <div class="tc-detail-block">
                  <div class="tc-detail-label">Expected Result</div>
                  <div class="tc-detail-value">${tc.expected}</div>
                </div>
                <div class="tc-detail-block">
                  <div class="tc-detail-label">อัปเดตสถานะ</div>
                  <select class="status-select" data-id="${tc.id}" onchange="updateTcStatus(this)">
                    <option value="PENDING" ${eff==='PENDING'?'selected':''}>⏳ PENDING</option>
                    <option value="PASS"    ${eff==='PASS'   ?'selected':''}>✅ PASS</option>
                    <option value="FAIL"    ${eff==='FAIL'   ?'selected':''}>❌ FAIL</option>
                    <option value="SKIP"    ${eff==='SKIP'   ?'selected':''}>⏭ SKIP</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="tc-group">
        <div class="tc-group-header">
          <div class="tc-group-icon">${m.icon}</div>
          <span class="tc-group-title">${m.module}</span>
          <span class="tc-group-count">${m.cases.length} TC</span>
        </div>
        <div class="tc-list">${cards}</div>
      </div>`;
  }).join('');

  return `
    <div class="page-header">
      <div class="page-header-top">
        <span class="page-badge cases">Test Cases</span>
      </div>
      <h1 class="page-title">Test Cases</h1>
      <p class="page-desc">รายการ Test Cases ทั้งหมดของระบบ T-Check สามารถอัปเดตสถานะได้โดยตรง — บันทึกอัตโนมัติใน Browser</p>
    </div>

    <div class="cards-grid" style="margin-bottom:28px">
      <div class="stat-card purple"><div class="stat-card-icon purple"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg></div><div class="stat-card-value">${total}</div><div class="stat-card-label">ทั้งหมด</div></div>
      <div class="stat-card green"><div class="stat-card-icon green"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div><div class="stat-card-value" style="color:var(--pass-text)">${pass}</div><div class="stat-card-label">ผ่าน</div></div>
      <div class="stat-card red"><div class="stat-card-icon red"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div><div class="stat-card-value" style="color:var(--fail-text)">${fail}</div><div class="stat-card-label">ไม่ผ่าน</div></div>
      <div class="stat-card yellow"><div class="stat-card-icon yellow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="stat-card-value" style="color:var(--pending-text)">${pending}</div><div class="stat-card-label">รอ</div></div>
    </div>

    ${groups}
  `;
}

/* ---- BDD ---- */
function bdd() {
  const epics = DATA.bddEpics.map((epic, ei) => {
    const features = epic.features.map((f, fi) => {
      const storyLines = f.story.split('\n').map(l => `<div style="font-size:12px;line-height:1.6;color:var(--text-secondary)">${l}</div>`).join('');
      const scenarioHtml = f.scenarios.map((sc, si) => {
        const gherkinLines = sc.lines.map(l => `
          <div class="gherkin-line">
            <span class="gherkin-keyword ${l.cls}">${l.kw}</span>
            <span class="gherkin-text">${l.text}</span>
          </div>`).join('');
        return `
          <div class="bdd-scenario" id="sc-${ei}-${fi}-${si}">
            <div class="bdd-scenario-header" onclick="toggleAccordion(this.closest('.bdd-scenario'))">
              <span class="bdd-scenario-label">Scenario</span>
              <span style="flex:1;font-size:13px">${sc.title}</span>
              <svg class="tc-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
            <div class="bdd-scenario-body">
              <div style="background:var(--bg-elevated);border-radius:var(--radius);padding:12px;display:flex;flex-direction:column;gap:2px">
                ${gherkinLines}
              </div>
            </div>
          </div>`;
      }).join('');

      return `
        <div class="bdd-feature" id="feat-${ei}-${fi}">
          <div class="bdd-feature-header" onclick="toggleAccordion(this.closest('.bdd-feature'))">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <span class="bdd-feature-title">${f.title}</span>
            <span class="bdd-scenario-count">${f.scenarios.length} Scenarios</span>
            <svg class="tc-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div class="bdd-feature-body">
            <div class="bdd-story-meta">${storyLines}</div>
            <div class="bdd-scenarios">${scenarioHtml}</div>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="bdd-epic">
        <div class="bdd-epic-header">
          <div class="bdd-epic-num">${ei + 1}</div>
          <div class="bdd-epic-title">EPIC ${ei + 1}: ${epic.title}</div>
        </div>
        ${features}
      </div>`;
  }).join('');

  const summaryRows = DATA.bddEpics.map(e => {
    const count = e.features.reduce((acc, f) => acc + f.scenarios.length, 0);
    return `<tr><td>${e.title.split(' (')[0]}</td><td>${count}</td><td><span class="badge badge-pending">⏳ รอทดสอบ</span></td></tr>`;
  }).join('');
  const totalSc = DATA.bddEpics.reduce((acc, e) => acc + e.features.reduce((a2, f) => a2 + f.scenarios.length, 0), 0);

  return `
    <div class="page-header">
      <div class="page-header-top">
        <span class="page-badge bdd">BDD</span>
      </div>
      <h1 class="page-title">BDD User Stories</h1>
      <p class="page-desc">E2E BDD User Stories โดยใช้ Gherkin Syntax (Given / When / Then) เพื่อให้ทีม Developer, QA และ Stakeholder เข้าใจพฤติกรรมของระบบ</p>
    </div>

    <div class="section">
      <div class="section-title">สรุป User Stories</div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Epic</th><th>จำนวน Scenarios</th><th>สถานะ</th></tr></thead>
          <tbody>
            ${summaryRows}
            <tr style="background:var(--bg-elevated)"><td><strong>รวม</strong></td><td><strong>${totalSc}</strong></td><td><span class="badge badge-pending">รอทดสอบ</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    ${epics}
  `;
}

/* =====================================================
   STATUS UPDATE
   ===================================================== */
window.updateTcStatus = function(select) {
  const id = select.dataset.id;
  const status = select.value;
  tcStatuses[id] = status;
  saveStatuses(tcStatuses);

  // Update badge next to select
  const card = select.closest('.tc-card');
  const badges = card.querySelector('.tc-card-meta');
  const oldBadge = badges.querySelector('.badge:last-child');
  if (oldBadge) oldBadge.outerHTML = statusBadge(status);

  updateStatsUI();
};

/* =====================================================
   BIND EVENTS PER PAGE
   ===================================================== */
function bindPageEvents(page) {
  // Module cards on overview → navigate to testcases
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.nav;
      const navEl = document.getElementById(`nav-${target}`);
      navigateTo(target, navEl);
    });
  });
}

/* =====================================================
   GLOBAL EXPOSE
   ===================================================== */
window.toggleAccordion = function(el) {
  el.classList.toggle('open');
};

/* =====================================================
   INIT
   ===================================================== */
function init() {
  // Sidebar nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const page = item.dataset.page;
      navigateTo(page, item);
      closeSidebar();
    });
  });

  // Mobile
  document.getElementById('menuBtn').addEventListener('click', openSidebar);
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
  document.getElementById('overlay').addEventListener('click', closeSidebar);

  // Initial render
  renderPage('overview');
  updateStatsUI();
}

document.addEventListener('DOMContentLoaded', init);
