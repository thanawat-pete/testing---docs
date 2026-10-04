# SPRS-Project-Document
## เอกสารข้อกำหนดซอฟต์แวร์ (Software Project Requirements Specification)

**โครงการ:** T-Check — ระบบตรวจสอบไวยากรณ์ภาษาไทยด้วย AI  
**ประเภทเอกสาร:** Software Project Requirements Specification (SPRS)  
**เวอร์ชัน:** 2.0.0  
**วันที่จัดทำ:** 4 ตุลาคม 2026  
**สถานะ:** กำลังดำเนินการ (In Progress)

---

## 1. บทนำ (Introduction)

### 1.1 วัตถุประสงค์ (Purpose)

เอกสารฉบับนี้จัดทำขึ้นเพื่อกำหนดขอบเขต (Scope), ข้อกำหนดหน้าที่ (Functional Requirements), ข้อกำหนดที่ไม่ใช่หน้าที่ (Non-Functional Requirements), และสถาปัตยกรรมของระบบ T-Check ซึ่งเป็นแอปพลิเคชันเว็บสำหรับตรวจสอบและปรับปรุงคุณภาพภาษาไทยด้วยปัญญาประดิษฐ์ (AI)

### 1.2 ขอบเขตโครงการ (Scope)

T-Check เป็นแอปพลิเคชันเว็บฝั่งผู้ใช้งาน (Frontend) พัฒนาด้วย React 19 + Vite ซึ่งทำงานร่วมกับ Backend API โดยมีขอบเขตครอบคลุม:

- ระบบยืนยันตัวตนผู้ใช้งาน (Authentication)
- ระบบสร้างและจัดการเอกสาร (Document Editor & Management)
- ระบบตรวจสอบไวยากรณ์ภาษาไทยด้วย AI (AI Grammar Check)
- ระบบปรับโทนภาษา (Tone Adjustment)
- ระบบชำระเงิน (Payment & Subscription)
- ระบบจัดการผู้ใช้งาน (Admin Panel)
- ระบบการทดสอบแบบ End-to-End (E2E Testing ด้วย Playwright)

### 1.3 ผู้ใช้งานเป้าหมาย (Target Users)

| กลุ่มผู้ใช้ | คำอธิบาย |
|---|---|
| **Guest** | ผู้เยี่ยมชมที่ยังไม่ได้สมัครสมาชิก สามารถใช้ Editor แบบจำกัด |
| **User (Free)** | สมาชิกทั่วไป มี AI Token จำกัดต่อเดือน |
| **User (Premium)** | สมาชิกที่ชำระเงินแล้ว มี AI Token เพิ่มขึ้น |
| **Admin** | ผู้ดูแลระบบ สามารถเข้าถึง Admin Panel |

---

## 2. ภาพรวมระบบ (System Overview)

### 2.1 Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | ^19.2.4 |
| Build Tool | Vite | ^8.0.1 |
| Styling | Tailwind CSS + DaisyUI | ^4.2.2 / ^5.5.19 |
| State Management | Zustand | ^5.0.12 |
| Routing | React Router | ^8.3.0 |
| HTTP Client | Axios | ^1.13.6 |
| Rich Text Editor | TipTap | ^3.31.4 |
| i18n | i18next + react-i18next | ^25.10.9 / ^16.6.6 |
| Document Export | docx, jspdf, file-saver | — |
| Charts | Recharts | ^3.8.1 |
| Authentication | HttpOnly Cookie | — |
| E2E Testing | Playwright | ^1.40.0 |
| Documentation | HTML/CSS/JS (Static) | v2.0 |

---

## 3. ข้อกำหนดหน้าที่ (Functional Requirements)

### 3.1 โมดูลการยืนยันตัวตน (Authentication Module)

| รหัส | ข้อกำหนด | ลำดับความสำคัญ | รายละเอียดเพิ่มเติม |
|---|---|---|---|
| AUTH-01 | สมัครสมาชิกด้วย Email และ Password | สูง | มีการตรวจสอบความรัดกุมของรหัสผ่าน (อย่างน้อย 8 ตัวอักษร, มีพิมพ์เล็ก-ใหญ่และตัวเลข) |
| AUTH-02 | ยืนยันอีเมลด้วย One-Time Password (OTP) | สูง | OTP มีอายุ 15 นาที ระบบต้องป้องกันการกดส่งรัวๆ (Rate Limiting) |
| AUTH-03 | เข้าสู่ระบบด้วย Email/Username | สูง | หากเข้าสู่ระบบผิดพลาดเกิน 5 ครั้ง ให้ล็อคบัญชีชั่วคราว 30 นาที |
| AUTH-04 | Google OAuth (One Tap) | สูง | ใช้ Google Identity Services เชื่อมต่ออัตโนมัติหากอีเมลตรงกัน |
| AUTH-05 | การควบรวมบัญชี (Account Merge) | กลาง | รวมข้อมูล Token/Subscription หากผู้ใช้ล็อกอิน OAuth ด้วยอีเมลเดิม |
| AUTH-06 | ขอรีเซ็ตรหัสผ่านผ่านอีเมล | สูง | ส่งลิงก์ Token ที่มีอายุ 30 นาที เพื่อตั้งรหัสผ่านใหม่ |
| AUTH-07 | จัดการ Session ด้วย HttpOnly Cookie | สูง | ห้ามเก็บ Access Token ใน LocalStorage โดยเด็ดขาดเพื่อป้องกัน XSS |

### 3.2 โมดูลเอกสาร (Document Module)

| รหัส | ข้อกำหนด | ลำดับความสำคัญ | รายละเอียดเพิ่มเติม |
|---|---|---|---|
| DOC-01 | สร้างเอกสาร (Rich Text Editor - TipTap) | สูง | รองรับเครื่องมือพื้นฐาน (Bold, Italic, Underline, Heading 1-3, Bullet List) |
| DOC-02 | Auto-save และ Sync Data | สูง | ทำการบันทึกสถานะไปที่ Backend อัตโนมัติทุกๆ 2 วินาทีหลังจากพิมพ์หยุด (Debounce) |
| DOC-03 | จัดการโฟลเดอร์และแท็ก (Folders & Tags) | กลาง | ผู้ใช้สามารถสร้างแฟ้มเก็บเอกสาร และติดแท็ก (เช่น #บทความ, #อีเมล) |
| DOC-04 | การค้นหาแบบ Full-Text Search | กลาง | ค้นหาจากชื่อเอกสารและเนื้อหาภายใน (จำกัดเฉพาะ 50 เอกสารล่าสุดสำหรับ Free User) |
| DOC-05 | ระบบถังขยะ (Recycle Bin) | สูง | เอกสารที่ลบจะอยู่ในถังขยะ 30 วันก่อนถูกลบถาวรแบบ Soft Delete บนฐานข้อมูล |
| DOC-06 | นำเข้า (Import) และ ส่งออก (Export) | กลาง | Import: .docx, .txt / Export: .docx, .pdf (ต้องรักษา Format การจัดหน้า) |
| DOC-07 | นับจำนวนคำและตัวอักษร (Word Count) | สูง | อัปเดตแบบ Real-time ที่มุมขวาล่างของ Editor (รวมและไม่รวมช่องว่าง) |

### 3.3 โมดูลตรวจสอบไวยากรณ์ (Grammar Check Module - Core AI)

| รหัส | ข้อกำหนด | ลำดับความสำคัญ | รายละเอียดเพิ่มเติม |
|---|---|---|---|
| GRAM-01 | ตรวจสอบไวยากรณ์ด้วย AI Model | สูง | ส่งข้อความไปยัง Backend (เชื่อม API LLM เช่น Gemini/OpenAI) แบบ Streaming Response |
| GRAM-02 | โหมดการตรวจ: Normal, Strict, Casual | สูง | Normal (มาตรฐาน), Strict (งานวิชาการ/ทางการ), Casual (โซเชียลมีเดีย) |
| GRAM-03 | ไฮไลท์จุดที่ผิดพลาด (Inline Highlighting) | สูง | ใช้ TipTap Extension เพื่อขีดเส้นใต้สีแดงหรือสีเหลืองในจุดที่ AI ตรวจพบ |
| GRAM-04 | นำเสนอคำแนะนำ (Suggestion Card) | สูง | แสดงการ์ดลอย (Tooltip) เมื่อคลิกที่คำผิด พร้อมปุ่ม "ยอมรับ (Apply)" หรือ "ละเว้น (Ignore)" |
| GRAM-05 | อธิบายเหตุผลที่ผิด (Explanation) | กลาง | AI ต้องอธิบายสั้นๆ ว่าทำไมถึงผิด เช่น "สะกดผิด", "เว้นวรรคผิด", "ใช้คำฟุ่มเฟือย" |
| GRAM-06 | สรุปคะแนนคุณภาพงานเขียน (Readability Score) | กลาง | คำนวณคะแนน 0-100 จากความซับซ้อนของรูปประโยค และจำนวนคำศัพท์ |
| GRAM-07 | ระบบ Token (AI Usage System) | สูง | หัก 1 Token ต่อการตรวจ 100 คำ (Quota จะรีเซ็ตทุกเดือน) |

### 3.4 โมดูลชำระเงิน (Payment Module)

| รหัส | ข้อกำหนด | ลำดับความสำคัญ | รายละเอียดเพิ่มเติม |
|---|---|---|---|
| PAY-01 | หน้า Pricing และแพ็กเกจ (Free/Pro/Team) | สูง | แสดงตารางเปรียบเทียบฟีเจอร์อย่างชัดเจน |
| PAY-02 | ชำระด้วยบัตรเครดิต (Stripe/Omise API) | สูง | รองรับ Recurring Subscription หักเงินอัตโนมัติรายเดือน/รายปี |
| PAY-03 | ชำระด้วย PromptPay QR Code | สูง | สร้าง Dynamic QR สำหรับการซื้อ Token แบบ One-time (ไม่ใช่ Subscription) |
| PAY-04 | ตรวจสอบสถานะการโอนเงิน (Webhook) | สูง | อัปเดตสถานะ "ชำระเงินสำเร็จ" แบบ Real-time ทันทีที่ระบบ Payment Gateway ยืนยันผ่าน Webhook |
| PAY-05 | การดาวน์โหลดใบเสร็จ (Invoice) | กลาง | สร้าง PDF ใบเสร็จรับเงิน/ใบกำกับภาษีอัตโนมัติ |

---

## 4. ข้อกำหนดที่ไม่ใช่หน้าที่ (Non-Functional Requirements)

### 4.1 ประสิทธิภาพการทำงาน (Performance & Scalability)
- **First Contentful Paint (FCP):** ต้องน้อยกว่า 1.5 วินาที
- **Time to Interactive (TTI):** ต้องน้อยกว่า 3 วินาที
- **Debounce Optimization:** ระบบ Auto-save จะเริ่มทำงานเมื่อผู้ใช้หยุดพิมพ์ 1.5 วินาที เพื่อลดภาระของ Backend (API Calls)
- **Lazy Loading:** คอมโพเนนต์ที่หนักเช่น AI Analysis Panel หรือ PDF Export จะถูกโหลดเมื่อผู้ใช้กดเรียกใช้เท่านั้น

### 4.2 ความปลอดภัยและการเก็บข้อมูล (Security & Data Privacy)
- **Authentication Security:** การจัดการ Session ต้องใช้ `HttpOnly`, `Secure`, `SameSite=Strict` Cookie เพื่อป้องกัน XSS และ CSRF
- **Data Encryption:** เอกสารในฐานข้อมูลจะต้องถูกเข้ารหัสแบบ AES-256 At-Rest เพื่อรักษาความเป็นส่วนตัวของผู้ใช้
- **Rate Limiting:** จำกัดการเรียก API ของ AI ให้ไม่เกิน 30 Request / 1 นาที / 1 IP Address
- **PDPA Compliance:** ผู้ใช้สามารถกดปุ่มขอส่งออกข้อมูลส่วนตัวทั้งหมด (Data Export) และสามารถลบข้อมูลถาวรได้ด้วยตัวเอง

### 4.3 ความสามารถในการใช้งาน (Usability & Accessibility)
- **Responsive Design:** ใช้งานได้เต็มรูปแบบบน Desktop, Tablet และ Mobile (เฉพาะหน้า Dashboard และ อ่านเอกสาร ส่วน Editor เน้น Desktop)
- **Theme Support:** รองรับ Light Mode (Default: `#4034AA`) และ Dark Mode โดยเชื่อมกับ System Preference ของระบบปฏิบัติการผู้ใช้
- **Accessibility (a11y):** รองรับ Screen Reader เบื้องต้น และมีการใส่ `aria-labels` ในปุ่มที่ไม่มีข้อความ

### 4.4 ความสามารถในการบำรุงรักษาและการทดสอบ (Maintainability & Testing)
- **CI/CD Pipeline:** ผูก GitHub Actions เพื่อทำ Automated Linting (ESLint), Type Checking (TypeScript) ก่อนอนุญาตให้ Merge Code
- **End-to-End Testing:** ครอบคลุม Core Flow หลัก (Login, สร้างเอกสาร, สั่ง AI ตรวจ) ด้วย Playwright Framework
- **Component Architecture:** ใช้ Atomic Design (Atoms, Molecules, Organisms) ใน React เพื่อให้สามารถนำ UI กลับมาใช้ซ้ำได้

---

## 5. เส้นทาง URL (Route Map)

| เส้นทาง | Component | สิทธิ์ |
|---|---|---|
| `/` | HomePage | ทุกคน |
| `/learn` | LearnPage | ทุกคน |
| `/about` | AboutPage | ทุกคน |
| `/pricing` | PricingPage | ทุกคน |
| `/docs` | DocsListPage | ทุกคน |
| `/docs/editor` | DocsEditorPage | ทุกคน |
| `/docs/editor/:id` | DocsEditorPage | ทุกคน |
| `/docs/trash` | DocsTrashPage | ทุกคน |
| `/sign-in` | SignInPage | Guest เท่านั้น |
| `/sign-up` | SignUpPage | Guest เท่านั้น |
| `/dashboard` | DashboardPage | Login แล้ว |
| `/profile` | ProfilePage | Login แล้ว |
| `/settings` | SettingsPage | Login แล้ว |
| `/checkout` | CheckoutPage | Login แล้ว |
| `/payment/history` | PaymentHistoryPage | Login แล้ว |
| `/admin` | AdminOverviewPage | Admin เท่านั้น |
| `/admin/users` | AdminUsersPage | Admin เท่านั้น |
| `/admin/users/:id` | AdminUserDetailPage | Admin เท่านั้น |

---

## 6. ประวัติเอกสาร (Document History)

| เวอร์ชัน | วันที่ | ผู้จัดทำ | รายละเอียด |
|---|---|---|---|
| 1.0.0 | 3 ต.ค. 2026 | T-Check Team | จัดทำเอกสารเริ่มต้น |
| 2.0.0 | 4 ต.ค. 2026 | T-Check Team | ปรับโครงสร้างแยกโปรเจกต์ทดสอบ (project-testing), อัปเดต UI Docs และเพิ่มผลลัพธ์/แผนอนาคต |

---

## 7. ผลลัพธ์ปัจจุบัน (Current Results)

การดำเนินการจนถึงปัจจุบัน (เวอร์ชัน 2.0):
- **ระบบเอกสาร (Documentation Site):** จัดทำเว็บแบบ Static สำหรับอ้างอิงข้อกำหนด, BDD, Test Cases พร้อม UI ที่ตรงกับ CI/CD ของแบรนด์ (Light mode, สี #4034AA)
- **การแยกโครงสร้างทดสอบ:** แยกโค้ดส่วนการทดสอบและเอกสารออกจากโปรเจกต์หลักไปที่ project-testing/ ป้องกันโค้ดปะปนกัน
- **การติดตั้ง Playwright:** ติดตั้งและคอนฟิก E2E Testing สำหรับ Playwright พร้อมผูกเข้ากับ BDD Scenarios โดยเฉพาะระบบ Authentication และ Document Management

## 8. สิ่งที่มีแผนในอนาคต (Future Plans)

- **รัน E2E Tests จริง (Real Execution):** นำ Email/Password บัญชี Google ที่เตรียมไว้เข้าสู่ระบบเพื่อรัน Test บทจริงในโมดูลจัดการเอกสาร
- **ระบบ Test Report อัตโนมัติ:** ให้ Playwright สามารถ Export ผลลัพธ์ (HTML Report) กลับมาเชื่อมกับหน้า Docs Site เพื่อให้ทีมดูผล Test ได้แบบ Real-time
- **ขยายความครอบคลุม E2E:** เพิ่ม Script สำหรับทดสอบโมดูล Grammar Check และ Payment เมื่อ UI และ Backend ส่วนนี้สมบูรณ์
- **CI/CD Integration:** นำชุดทดสอบ Playwright ผูกเข้ากับ GitHub Actions เพื่อให้รันเช็คระบบทุกครั้งที่มีการ Push โค้ดใหม่
