// data.js — T-Check Documentation Data

const DATA = {
  project: {
    name: "T-Check",
    fullName: "T-Check — ระบบตรวจสอบไวยากรณ์ภาษาไทยด้วย AI",
    version: "2.0.0",
    date: "4 ตุลาคม 2026",
    status: "In Progress",
    team: "T-Check Team"
  },

  techStack: [
    { layer: "Framework",      name: "React",              version: "^19.2.4" },
    { layer: "Build Tool",     name: "Vite",               version: "^8.0.1" },
    { layer: "Styling",        name: "Tailwind CSS + DaisyUI", version: "^4.2.2 / ^5.5.19" },
    { layer: "State",          name: "Zustand",            version: "^5.0.12" },
    { layer: "Routing",        name: "React Router",       version: "^8.3.0" },
    { layer: "HTTP Client",    name: "Axios",              version: "^1.13.6" },
    { layer: "Rich Text",      name: "TipTap",             version: "^3.31.4" },
    { layer: "i18n",           name: "i18next",            version: "^25.10.9" },
    { layer: "Charts",         name: "Recharts",           version: "^3.8.1" },
    { layer: "Auth",           name: "HttpOnly Cookie",    version: "—" },
    { layer: "Export",         name: "docx / jspdf",       version: "—" },
  ],

  requirements: {
    auth: [
      { id: "AUTH-01", req: "ระบบต้องรองรับการสมัครสมาชิกด้วย Email และ Password", priority: "สูง" },
      { id: "AUTH-02", req: "ระบบต้องส่งอีเมลยืนยันตัวตน (OTP) หลังสมัครสมาชิก", priority: "สูง" },
      { id: "AUTH-03", req: "ระบบต้องรองรับการเข้าสู่ระบบด้วย Email/Username และ Password", priority: "สูง" },
      { id: "AUTH-04", req: "ระบบต้องรองรับการเข้าสู่ระบบด้วย Google OAuth (One Tap)", priority: "สูง" },
      { id: "AUTH-05", req: "ระบบต้องรองรับการควบรวมบัญชี (Account Merge) เมื่อ Email ซ้ำ", priority: "กลาง" },
      { id: "AUTH-06", req: "ระบบต้องรองรับการขอรีเซ็ตรหัสผ่านผ่านอีเมล", priority: "สูง" },
      { id: "AUTH-07", req: "ระบบต้องรองรับ Step-Up Authentication (OTP) กรณีความเสี่ยงสูง", priority: "กลาง" },
      { id: "AUTH-08", req: "ระบบต้องจัดการ Session ด้วย HttpOnly Cookie", priority: "สูง" },
      { id: "AUTH-09", req: "ระบบต้องรองรับการออกจากระบบ (Sign Out)", priority: "สูง" },
      { id: "AUTH-10", req: "ระบบต้องรองรับการลบบัญชี (Account Deletion)", priority: "กลาง" },
    ],
    doc: [
      { id: "DOC-01", req: "ระบบต้องรองรับการสร้างเอกสารใหม่ (Rich Text Editor)", priority: "สูง" },
      { id: "DOC-02", req: "ระบบต้องรองรับการบันทึกเอกสารแบบ Auto-save", priority: "สูง" },
      { id: "DOC-03", req: "ระบบต้องแสดงรายการเอกสารทั้งหมดของผู้ใช้", priority: "สูง" },
      { id: "DOC-04", req: "ระบบต้องรองรับการค้นหาเอกสาร", priority: "กลาง" },
      { id: "DOC-05", req: "ระบบต้องรองรับการลบเอกสาร (ย้ายไปถังขยะ)", priority: "สูง" },
      { id: "DOC-06", req: "ระบบต้องรองรับการกู้คืนเอกสารจากถังขยะ", priority: "กลาง" },
      { id: "DOC-07", req: "ระบบต้องรองรับการลบเอกสารแบบถาวร", priority: "กลาง" },
      { id: "DOC-08", req: "ระบบต้องรองรับการนำเข้าเอกสาร (.docx, .pdf, Google Docs)", priority: "กลาง" },
      { id: "DOC-09", req: "ระบบต้องรองรับการส่งออกเอกสาร (.docx, .pdf)", priority: "กลาง" },
      { id: "DOC-10", req: "ระบบต้องรองรับการเพิ่มหน้ากระดาษในเอกสาร (Multi-page)", priority: "สูง" },
    ],
    gram: [
      { id: "GRAM-01", req: "ระบบต้องตรวจสอบไวยากรณ์ภาษาไทยด้วย AI", priority: "สูง" },
      { id: "GRAM-02", req: "ระบบต้องรองรับโหมดตรวจสอบ 3 ระดับ: Normal, Strict, Casual", priority: "สูง" },
      { id: "GRAM-03", req: "ระบบต้องแสดงผลการตรวจสอบใน Analysis Panel", priority: "สูง" },
      { id: "GRAM-04", req: "ระบบต้องรองรับการแก้ไขคำตามคำแนะนำ (Apply Suggestion)", priority: "สูง" },
      { id: "GRAM-05", req: "ระบบต้องรองรับการละเว้นคำแนะนำ (Ignore Suggestion)", priority: "กลาง" },
      { id: "GRAM-06", req: "ระบบต้องแสดงจำนวน AI Token คงเหลือ", priority: "กลาง" },
      { id: "GRAM-07", req: "ระบบต้องหักจำนวน Token เมื่อใช้งาน AI", priority: "สูง" },
    ],
    pay: [
      { id: "PAY-01", req: "ระบบต้องแสดงหน้า Pricing พร้อมรายละเอียดแพ็กเกจ", priority: "สูง" },
      { id: "PAY-02", req: "ระบบต้องรองรับการชำระเงินด้วยบัตรเครดิต (Card Subscription)", priority: "สูง" },
      { id: "PAY-03", req: "ระบบต้องรองรับการชำระเงินด้วย PromptPay", priority: "สูง" },
      { id: "PAY-04", req: "ระบบต้องรองรับการยกเลิก Subscription", priority: "กลาง" },
      { id: "PAY-05", req: "ระบบต้องแสดงประวัติการชำระเงิน", priority: "กลาง" },
      { id: "PAY-06", req: "ระบบต้องตรวจสอบสถานะ PromptPay แบบ Real-time", priority: "สูง" },
    ],
    admin: [
      { id: "ADMIN-01", req: "ระบบต้องแสดงภาพรวม Dashboard สำหรับ Admin", priority: "สูง" },
      { id: "ADMIN-02", req: "ระบบต้องแสดงรายการผู้ใช้งานทั้งหมด", priority: "สูง" },
      { id: "ADMIN-03", req: "ระบบต้องรองรับการดูรายละเอียดผู้ใช้งาน", priority: "กลาง" },
      { id: "ADMIN-04", req: "ระบบต้องจำกัดสิทธิ์การเข้าถึง Admin ด้วย Route Guard", priority: "สูง" },
    ]
  },

  routes: [
    { path: "/",                  component: "HomePage",           access: "ทุกคน" },
    { path: "/learn",             component: "LearnPage",          access: "ทุกคน" },
    { path: "/about",             component: "AboutPage",          access: "ทุกคน" },
    { path: "/pricing",           component: "PricingPage",        access: "ทุกคน" },
    { path: "/docs",              component: "DocsListPage",       access: "ทุกคน" },
    { path: "/docs/editor",       component: "DocsEditorPage",     access: "ทุกคน" },
    { path: "/docs/editor/:id",   component: "DocsEditorPage",     access: "ทุกคน" },
    { path: "/docs/trash",        component: "DocsTrashPage",      access: "ทุกคน" },
    { path: "/sign-in",           component: "SignInPage",         access: "Guest เท่านั้น" },
    { path: "/sign-up",           component: "SignUpPage",         access: "Guest เท่านั้น" },
    { path: "/dashboard",         component: "DashboardPage",      access: "Login แล้ว" },
    { path: "/profile",           component: "ProfilePage",        access: "Login แล้ว" },
    { path: "/settings",          component: "SettingsPage",       access: "Login แล้ว" },
    { path: "/checkout",          component: "CheckoutPage",       access: "Login แล้ว" },
    { path: "/payment/history",   component: "PaymentHistoryPage", access: "Login แล้ว" },
    { path: "/admin",             component: "AdminOverviewPage",  access: "Admin เท่านั้น" },
    { path: "/admin/users",       component: "AdminUsersPage",     access: "Admin เท่านั้น" },
    { path: "/admin/users/:id",   component: "AdminUserDetailPage",access: "Admin เท่านั้น" },
  ],

  testCases: [
    {
      module: "Authentication",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      cases: [
        {
          id: "TC-AUTH-001",
          title: "สมัครสมาชิกด้วยข้อมูลถูกต้อง",
          priority: "สูง",
          status: "PENDING",
          precondition: "ผู้ใช้ยังไม่ได้ล็อกอิน, อยู่ที่หน้า /sign-up",
          steps: ["กรอก Username: testuser01","กรอก Email: testuser01@example.com","กรอก Password: Test@1234","คลิกปุ่ม 'สมัครสมาชิก'"],
          expected: "ระบบแสดงข้อความสำเร็จ, ส่งอีเมลยืนยัน, Redirect ไปหน้า /verify-email"
        },
        {
          id: "TC-AUTH-002",
          title: "สมัครสมาชิกด้วย Email ที่มีอยู่แล้ว",
          priority: "สูง",
          status: "PENDING",
          precondition: "มี Account ที่ใช้ email existing@example.com อยู่แล้ว",
          steps: ["กรอก Email: existing@example.com","กรอก Password: Test@1234","คลิกปุ่ม 'สมัครสมาชิก'"],
          expected: "ระบบแสดง Error Message: 'Email นี้ถูกใช้งานแล้ว', ไม่มีการสร้าง Account ใหม่"
        },
        {
          id: "TC-AUTH-003",
          title: "เข้าสู่ระบบด้วย Email และ Password ถูกต้อง",
          priority: "สูง",
          status: "PENDING",
          precondition: "มี Account ที่ยืนยัน Email แล้ว, อยู่ที่หน้า /sign-in",
          steps: ["กรอก Email: testuser01@example.com","กรอก Password: Test@1234","คลิกปุ่ม 'เข้าสู่ระบบ'"],
          expected: "ระบบ Login สำเร็จ, Redirect ไปหน้า /dashboard, แสดง User Info ใน Navbar"
        },
        {
          id: "TC-AUTH-004",
          title: "เข้าสู่ระบบด้วย Password ผิด",
          priority: "สูง",
          status: "PENDING",
          precondition: "—",
          steps: ["กรอก Email: testuser01@example.com","กรอก Password: WrongPassword","คลิกปุ่ม 'เข้าสู่ระบบ'"],
          expected: "ระบบแสดง Error Message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง', ไม่มีการ Redirect, Session ไม่ถูกสร้าง"
        },
        {
          id: "TC-AUTH-005",
          title: "ออกจากระบบ (Sign Out)",
          priority: "สูง",
          status: "PENDING",
          precondition: "ผู้ใช้ล็อกอินอยู่",
          steps: ["คลิกที่ User Menu ใน Navbar","คลิก 'ออกจากระบบ'"],
          expected: "Cookie ถูกลบ, Redirect ไปหน้า /, Navbar แสดงเป็น Guest mode"
        },
        {
          id: "TC-AUTH-006",
          title: "ขอรีเซ็ตรหัสผ่าน",
          priority: "สูง",
          status: "PENDING",
          precondition: "—",
          steps: ["ไปที่หน้า /forgot-password","กรอก Email: testuser01@example.com","คลิกปุ่ม 'ส่งลิงก์รีเซ็ต'"],
          expected: "ระบบแสดงข้อความ 'ส่งอีเมลสำเร็จ', ผู้ใช้ได้รับอีเมลพร้อมลิงก์รีเซ็ต"
        },
      ]
    },
    {
      module: "Document Management",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      cases: [
        {
          id: "TC-DOC-001",
          title: "สร้างเอกสารใหม่ (Guest)",
          priority: "สูง",
          status: "PENDING",
          precondition: "ผู้ใช้เป็น Guest (ไม่ได้ล็อกอิน)",
          steps: ["ไปที่หน้า /docs","คลิกปุ่ม 'สร้างเอกสารใหม่'"],
          expected: "เปิด Editor ที่ /docs/editor, Editor ทำงานได้แต่ไม่สามารถ Save ไปยัง Cloud ได้, Draft ถูกบันทึกใน sessionStorage"
        },
        {
          id: "TC-DOC-002",
          title: "สร้างและบันทึกเอกสาร (Logged In)",
          priority: "สูง",
          status: "PENDING",
          precondition: "ผู้ใช้ล็อกอินแล้ว",
          steps: ["ไปที่หน้า /docs","คลิก 'สร้างเอกสารใหม่'","พิมพ์ชื่อเอกสาร: 'เอกสารทดสอบ'","พิมพ์เนื้อหา: 'สวัสดีครับ'","รอ Auto-save (หรือกด Ctrl+S)"],
          expected: "แสดง Toast 'บันทึกแล้ว', เอกสารปรากฏในหน้า /docs, URL เปลี่ยนเป็น /docs/editor/:id"
        },
        {
          id: "TC-DOC-003",
          title: "ลบเอกสาร (ย้ายไปถังขยะ)",
          priority: "สูง",
          status: "PENDING",
          precondition: "มีเอกสารที่สร้างไว้แล้ว",
          steps: ["ไปที่หน้า /docs","คลิกปุ่ม 'ลบ' ที่เอกสาร","ยืนยันการลบ"],
          expected: "เอกสารหายจากรายการ /docs, เอกสารปรากฏในหน้า /docs/trash"
        },
        {
          id: "TC-DOC-004",
          title: "กู้คืนเอกสารจากถังขยะ",
          priority: "กลาง",
          status: "PENDING",
          precondition: "—",
          steps: ["ไปที่หน้า /docs/trash","คลิกปุ่ม 'กู้คืน' ที่เอกสาร"],
          expected: "เอกสารหายจาก Trash, เอกสารกลับมาปรากฏในหน้า /docs"
        },
        {
          id: "TC-DOC-005",
          title: "เพิ่มหน้ากระดาษในเอกสาร",
          priority: "สูง",
          status: "PENDING",
          precondition: "เปิด Editor อยู่",
          steps: ["คลิกปุ่ม 'เพิ่มหน้ากระดาษ' (+ icon แบบเส้นประ)"],
          expected: "มีหน้ากระดาษใหม่ปรากฏต่อจากหน้าเดิม, สามารถพิมพ์ในหน้าใหม่ได้"
        },
        {
          id: "TC-DOC-006",
          title: "นำเข้าไฟล์ .docx",
          priority: "กลาง",
          status: "PENDING",
          precondition: "—",
          steps: ["คลิก 'นำเข้าไฟล์' ใน Toolbar","เลือกไฟล์ .docx จากเครื่อง"],
          expected: "เนื้อหาจากไฟล์ถูกแสดงใน Editor, Formatting พื้นฐานถูกรักษาไว้"
        },
      ]
    },
    {
      module: "Grammar Check",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      cases: [
        {
          id: "TC-GRAM-001",
          title: "ตรวจสอบไวยากรณ์ภาษาไทย (Normal Mode)",
          priority: "สูง",
          status: "PENDING",
          precondition: "ผู้ใช้ล็อกอินแล้ว, มี AI Token คงเหลือ",
          steps: ["เปิด Editor และพิมพ์ข้อความภาษาไทย","เลือกโหมด 'Normal'","คลิกปุ่ม 'ตรวจสอบ'"],
          expected: "Analysis Panel เปิดขึ้น, แสดงคำแนะนำการแก้ไข, จำนวน Token ลดลง"
        },
        {
          id: "TC-GRAM-002",
          title: "ตรวจสอบเมื่อ Token หมด",
          priority: "สูง",
          status: "PENDING",
          precondition: "ผู้ใช้มี Token เหลือ 0",
          steps: ["คลิกปุ่ม 'ตรวจสอบ'"],
          expected: "ระบบแสดงข้อความ 'Token หมดแล้ว', แนะนำให้อัปเกรด Subscription, ไม่มีการเรียก API"
        },
        {
          id: "TC-GRAM-003",
          title: "ใช้คำแนะนำแก้ไขคำผิด (Apply Suggestion)",
          priority: "สูง",
          status: "PENDING",
          precondition: "มีผลการตรวจสอบใน Analysis Panel",
          steps: ["คลิกปุ่ม 'แก้ไข' ที่คำแนะนำ"],
          expected: "คำในเอกสารถูกแทนที่ด้วยคำแนะนำ, คำแนะนำนั้นหายจาก Analysis Panel"
        },
      ]
    },
    {
      module: "Payment",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
      cases: [
        {
          id: "TC-PAY-001",
          title: "แสดงหน้า Pricing",
          priority: "สูง",
          status: "PENDING",
          precondition: "—",
          steps: ["ไปที่หน้า /pricing"],
          expected: "แสดงรายการแพ็กเกจทั้งหมด, แสดงราคาและรายละเอียดชัดเจน, ปุ่ม 'เลือกแผน' ทำงานได้"
        },
        {
          id: "TC-PAY-002",
          title: "ชำระเงินด้วย PromptPay",
          priority: "สูง",
          status: "PENDING",
          precondition: "ผู้ใช้ล็อกอินแล้ว, อยู่ที่หน้า /checkout",
          steps: ["เลือกวิธีชำระ: 'PromptPay'","ยืนยันการชำระเงิน","ระบบแสดง QR Code"],
          expected: "QR Code ถูกสร้างและแสดงผล, ระบบตรวจสอบสถานะทุก X วินาที"
        },
      ]
    },
    {
      module: "Admin Panel",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      cases: [
        {
          id: "TC-ADMIN-001",
          title: "เข้าถึง Admin Panel",
          priority: "สูง",
          status: "PENDING",
          precondition: "—",
          steps: [
            "Test A: เข้า /admin ด้วย role=admin — คาดหวัง: แสดง Dashboard",
            "Test B: เข้า /admin ด้วย Regular User — คาดหวัง: Redirect ไปหน้า /",
            "Test C: เข้า /admin โดยไม่ได้ล็อกอิน — คาดหวัง: Redirect ไป /sign-in"
          ],
          expected: "Route Guard ทำงานถูกต้องในทุก scenario"
        },
      ]
    },
    {
      module: "UI / UX",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41"/><path d="M4.93 19.07l1.41-1.41"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M19.07 19.07l-1.41-1.41"/></svg>`,
      cases: [
        {
          id: "TC-UI-001",
          title: "Dark Mode Toggle",
          priority: "กลาง",
          status: "PENDING",
          precondition: "—",
          steps: ["คลิกปุ่มสลับ Theme (Dark/Light)"],
          expected: "Theme เปลี่ยนทันที, การตั้งค่าถูกบันทึกและยังคงอยู่หลัง Refresh"
        },
        {
          id: "TC-UI-002",
          title: "เปลี่ยนภาษา (i18n)",
          priority: "กลาง",
          status: "PENDING",
          precondition: "—",
          steps: ["คลิกเมนูเปลี่ยนภาษา","เลือก 'English'"],
          expected: "ข้อความทั้งหมดเปลี่ยนเป็นภาษาอังกฤษ, การตั้งค่าถูกบันทึกใน localStorage"
        },
      ]
    },
    {
      module: "ผลลัพธ์ปัจจุบัน (v2.0)",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      cases: [
        { id: "RES-001", title: "สร้าง Static Docs Site", priority: "สูง", status: "PASS", precondition: "-", steps: ["จัดทำเว็บอ้างอิงข้อกำหนดและ UI แบบ Light Mode"], expected: "Docs Site ทำงานสมบูรณ์" },
        { id: "RES-002", title: "แยกโปรเจกต์ทดสอบ (project-testing)", priority: "สูง", status: "PASS", precondition: "-", steps: ["แยกโค้ดทดสอบออกจากโปรเจกต์หลัก"], expected: "โค้ดแยกส่วนกันชัดเจน" },
        { id: "RES-003", title: "ติดตั้ง Playwright E2E", priority: "สูง", status: "PASS", precondition: "-", steps: ["คอนฟิก Playwright และผูกกับ BDD"], expected: "รันคำสั่ง E2E Test ได้" }
      ]
    },
    {
      module: "แผนในอนาคต",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      cases: [
        { id: "FUT-001", title: "รัน E2E Tests จริงในโมดูลเอกสาร", priority: "สูง", status: "PENDING", precondition: "-", steps: ["ใช้ Google Account ทดสอบการทำงานจริง"], expected: "ทดสอบผ่านระบบจริง" },
        { id: "FUT-002", title: "ระบบ Test Report อัตโนมัติ", priority: "กลาง", status: "PENDING", precondition: "-", steps: ["เชื่อม Playwright HTML Report เข้าเว็บ Docs"], expected: "ทีมดูผล Test ได้ Real-time" },
        { id: "FUT-003", title: "CI/CD Integration", priority: "สูง", status: "PENDING", precondition: "-", steps: ["ผูกชุดทดสอบกับ GitHub Actions"], expected: "ระบบเช็คโค้ดก่อน Merge ทุกครั้ง" }
      ]
    }
  ],

  bddEpics: [
    {
      title: "Authentication (การยืนยันตัวตน)",
      features: [
        {
          title: "Feature: การสมัครสมาชิก",
          story: "As a ผู้ใช้ใหม่ที่ยังไม่มีบัญชี\nI want to สมัครสมาชิกด้วย Email และ Password\nSo that ฉันสามารถใช้งาน T-Check ได้อย่างเต็มรูปแบบ",
          scenarios: [
            {
              title: "สมัครสมาชิกสำเร็จด้วยข้อมูลถูกต้อง",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'ผู้ใช้มี email "newuser@example.com" ที่ยังไม่มีในระบบ' },
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้กรอก username "newuser01"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้กรอก email "newuser@example.com"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้กรอก password "SecurePass@123"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้คลิกปุ่ม "สมัครสมาชิก"' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบแสดงข้อความ "สมัครสมาชิกสำเร็จ"' },
                { kw: "And",   cls: "gk-and",    text: 'ระบบส่งอีเมลยืนยันไปที่ "newuser@example.com"' },
                { kw: "And",   cls: "gk-and",    text: 'ระบบ redirect ไปหน้า "/verify-email"' },
              ]
            },
            {
              title: "สมัครสมาชิกด้วย email ที่มีอยู่แล้ว",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'มีบัญชีที่ใช้ email "existing@example.com" อยู่แล้ว' },
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้กรอก email "existing@example.com"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้คลิกปุ่ม "สมัครสมาชิก"' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบแสดง error message "Email นี้ถูกใช้งานแล้ว"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้ยังคงอยู่ที่หน้า "/sign-up"' },
              ]
            },
          ]
        },
        {
          title: "Feature: การเข้าสู่ระบบ",
          story: "As a สมาชิกที่มีบัญชีอยู่แล้ว\nI want to เข้าสู่ระบบด้วย email/username และ password\nSo that ฉันสามารถเข้าถึงเอกสารและฟีเจอร์ส่วนตัวของฉันได้",
          scenarios: [
            {
              title: "เข้าสู่ระบบสำเร็จด้วย email",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'ผู้ใช้อยู่ที่หน้า "/sign-in"' },
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้กรอก identity "testuser@example.com"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้กรอก password "Test@1234"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้คลิกปุ่ม "เข้าสู่ระบบ"' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบ login สำเร็จ' },
                { kw: "And",   cls: "gk-and",    text: 'ระบบ redirect ไปหน้า "/dashboard"' },
              ]
            },
            {
              title: "เข้าสู่ระบบด้วย password ผิด",
              lines: [
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้กรอก identity "testuser@example.com"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้กรอก password "WrongPassword"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้คลิกปุ่ม "เข้าสู่ระบบ"' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบแสดง error message "อีเมลหรือรหัสผ่านไม่ถูกต้อง"' },
                { kw: "And",   cls: "gk-and",    text: 'ไม่มี session ถูกสร้าง' },
              ]
            },
          ]
        },
        {
          title: "Feature: การออกจากระบบ",
          story: "As a ผู้ใช้ที่ล็อกอินอยู่\nI want to ออกจากระบบได้\nSo that ปกป้องความปลอดภัยของบัญชีฉัน",
          scenarios: [
            {
              title: "ออกจากระบบสำเร็จ",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'ผู้ใช้ล็อกอินอยู่' },
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้คลิก User Avatar ใน Navbar' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้คลิก "ออกจากระบบ"' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบ clear authentication cookie' },
                { kw: "And",   cls: "gk-and",    text: 'ระบบ redirect ไปหน้า "/"' },
                { kw: "And",   cls: "gk-and",    text: 'Navbar แสดงเป็น Guest mode' },
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Document Management (การจัดการเอกสาร)",
      features: [
        {
          title: "Feature: การสร้างและแก้ไขเอกสาร",
          story: "As a ผู้ใช้งาน (ทั้ง Guest และ Member)\nI want to สร้างและแก้ไขเอกสารใน Rich Text Editor\nSo that ฉันสามารถเขียนและปรับแต่งเอกสารได้ตามต้องการ",
          scenarios: [
            {
              title: "Member สร้างและบันทึกเอกสาร",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'ผู้ใช้ล็อกอินแล้ว' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้อยู่ที่หน้า "/docs"' },
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้คลิกปุ่ม "สร้างเอกสารใหม่"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้พิมพ์ชื่อเอกสาร "รายงานประจำปี 2026"' },
                { kw: "And",   cls: "gk-and",    text: 'ระบบ Auto-save ทำงาน (หลังหยุดพิมพ์ 1 วินาที)' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบแสดงสถานะ "บันทึกแล้ว"' },
                { kw: "And",   cls: "gk-and",    text: 'URL เปลี่ยนเป็น "/docs/editor/:id"' },
              ]
            }
          ]
        },
        {
          title: "Feature: การจัดการรายการเอกสาร",
          story: "As a Member ที่มีเอกสารหลายชิ้น\nI want to เห็นรายการเอกสารทั้งหมดและจัดการได้\nSo that ฉันสามารถเข้าถึงและจัดการเอกสารได้อย่างสะดวก",
          scenarios: [
            {
              title: "ลบเอกสารไปยังถังขยะ",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'ผู้ใช้ล็อกอินแล้ว และมีเอกสาร 3 ชิ้น' },
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้คลิกปุ่ม "ลบ" ที่เอกสาร "รายงาน A"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้ยืนยันการลบ' },
                { kw: "Then",  cls: "gk-then",   text: 'เอกสาร "รายงาน A" หายจากรายการ "/docs"' },
                { kw: "And",   cls: "gk-and",    text: 'เอกสาร "รายงาน A" ปรากฏในหน้า "/docs/trash"' },
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Grammar Check (การตรวจสอบไวยากรณ์)",
      features: [
        {
          title: "Feature: การตรวจสอบไวยากรณ์ด้วย AI",
          story: "As a ผู้ใช้ที่ต้องการเขียนภาษาไทยให้ถูกต้อง\nI want to ตรวจสอบไวยากรณ์ภาษาไทยด้วย AI\nSo that ฉันสามารถปรับปรุงคุณภาพของเอกสารได้",
          scenarios: [
            {
              title: "ตรวจสอบไวยากรณ์โหมด Normal",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'ผู้ใช้ล็อกอินแล้ว และมี AI Token คงเหลือ' },
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้เลือกโหมด "Normal"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้คลิกปุ่ม "ตรวจสอบ"' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบส่งข้อความไปตรวจสอบที่ AI' },
                { kw: "And",   cls: "gk-and",    text: 'Analysis Panel เปิดขึ้นพร้อมคำแนะนำ' },
                { kw: "And",   cls: "gk-and",    text: 'จำนวน AI Token ลดลง' },
              ]
            },
            {
              title: "ตรวจสอบเมื่อ AI Token หมด",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'ผู้ใช้มี AI Token คงเหลือ 0' },
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้คลิกปุ่ม "ตรวจสอบ"' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบแสดงข้อความ "Token หมดแล้ว กรุณาอัปเกรดแพ็กเกจ"' },
                { kw: "And",   cls: "gk-and",    text: 'มีปุ่ม redirect ไปหน้า "/pricing"' },
                { kw: "And",   cls: "gk-and",    text: 'ไม่มีการส่ง request ไปยัง Grammar API' },
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Payment & Subscription (การชำระเงิน)",
      features: [
        {
          title: "Feature: การซื้อแพ็กเกจ AI Token",
          story: "As a Member ที่ต้องการ Token เพิ่ม\nI want to ซื้อแพ็กเกจ Token เพิ่ม\nSo that ฉันสามารถใช้ Grammar Check ได้มากขึ้น",
          scenarios: [
            {
              title: "ชำระเงินด้วย PromptPay",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'ผู้ใช้ล็อกอินแล้ว อยู่ที่หน้า "/checkout"' },
                { kw: "When",  cls: "gk-when",   text: 'ผู้ใช้เลือกวิธีชำระ "PromptPay"' },
                { kw: "And",   cls: "gk-and",    text: 'ผู้ใช้คลิก "ยืนยันการชำระ"' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบแสดง QR Code สำหรับ PromptPay' },
                { kw: "And",   cls: "gk-and",    text: 'ระบบตรวจสอบสถานะการชำระทุกไม่กี่วินาที' },
                { kw: "And",   cls: "gk-and",    text: 'เมื่อชำระสำเร็จ ระบบแสดงข้อความ "ชำระเงินสำเร็จ"' },
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Admin Panel (ระบบผู้ดูแล)",
      features: [
        {
          title: "Feature: Admin Panel — การจัดการผู้ใช้งาน",
          story: "As a Admin ของระบบ T-Check\nI want to ดูและจัดการผู้ใช้งานทั้งหมด\nSo that ฉันสามารถดูแลระบบได้อย่างมีประสิทธิภาพ",
          scenarios: [
            {
              title: "Regular User ไม่สามารถเข้า Admin ได้",
              lines: [
                { kw: "Given", cls: "gk-given",  text: 'Regular User ล็อกอินแล้ว' },
                { kw: "When",  cls: "gk-when",   text: 'User พยายามเข้า "/admin"' },
                { kw: "Then",  cls: "gk-then",   text: 'ระบบ redirect ออกจาก Admin Panel' },
                { kw: "And",   cls: "gk-and",    text: 'แสดงข้อความหรือ redirect ไปหน้าอื่น' },
              ]
            }
          ]
        }
      ]
    },
  ],

  sprints: [
    { num: "S1", label: "Sprint 1",  time: "สัปดาห์ที่ 1–2",  desc: "เตรียม Test Environment, เขียน Test Cases", active: false },
    { num: "S2", label: "Sprint 2",  time: "สัปดาห์ที่ 3–4",  desc: "ทดสอบ Authentication Module", active: true },
    { num: "S3", label: "Sprint 3",  time: "สัปดาห์ที่ 5–6",  desc: "ทดสอบ Document & Grammar Module", active: false },
    { num: "S4", label: "Sprint 4",  time: "สัปดาห์ที่ 7–8",  desc: "ทดสอบ Payment & Admin Module", active: false },
    { num: "S5", label: "Sprint 5",  time: "สัปดาห์ที่ 9–10", desc: "Regression Testing, E2E Testing", active: false },
    { num: "S6", label: "Sprint 6",  time: "สัปดาห์ที่ 11–12",desc: "UAT, Bug Fix Verification", active: false },
  ]
};
