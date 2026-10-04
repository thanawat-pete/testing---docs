# SPRS-Test-Plan-and-Report
## แผนการทดสอบและรายงานผลการทดสอบ (Test Plan & Test Report)

**โครงการ:** T-Check — ระบบตรวจสอบไวยากรณ์ภาษาไทยด้วย AI  
**ประเภทเอกสาร:** Test Plan & Test Report  
**เวอร์ชัน:** 2.0.0  
**วันที่จัดทำ:** 4 ตุลาคม 2026  
**สถานะ:** เตรียมการทดสอบ (Preparing)

---

## 1. บทนำ (Introduction)

### 1.1 วัตถุประสงค์ (Purpose)
เอกสารฉบับนี้กำหนดแผนการทดสอบ (Test Plan) และรูปแบบรายงานผลการทดสอบ (Test Report) สำหรับระบบ T-Check Frontend เพื่อให้มั่นใจว่าซอฟต์แวร์มีคุณภาพตามข้อกำหนด ก่อนนำไปใช้งานจริง

### 1.2 ขอบเขตการทดสอบ (Scope)
ครอบคลุมการทดสอบฝั่ง Frontend ของระบบ T-Check ได้แก่:
- การทดสอบหน้าที่การทำงาน (Functional Testing)
- การทดสอบ User Interface (UI Testing)
- การทดสอบแบบ End-to-End (E2E Testing)
- การทดสอบความปลอดภัย (Security Testing) เบื้องต้น
- การทดสอบ Responsive Design

### 1.3 สิ่งที่ไม่รวมในการทดสอบ (Out of Scope)
- การทดสอบ Backend API (เป็นความรับผิดชอบของทีม Backend)
- การทดสอบ Performance บนเซิร์ฟเวอร์จริง (Production Load Testing)
- การทดสอบบน Mobile Application

---

## 2. กลยุทธ์การทดสอบ (Test Strategy)

### 2.1 ระดับการทดสอบ (Test Levels)

| ระดับ | คำอธิบาย | เครื่องมือที่ใช้ |
|---|---|---|
| Unit Testing | ทดสอบ Component แต่ละตัวแยกกัน, AI Store, Utils | Vitest, React Testing Library |
| Integration Testing | ทดสอบการดึง API ของ LLM / การทำงานของ TipTap | Vitest, MSW (Mock Service Worker) |
| E2E Testing | ทดสอบ User Flow ทั้งหมดในโฟลเดอร์ `project-testing/` | Playwright (Chromium/WebKit/Firefox) |
| Manual Testing | ทดสอบ Edge Cases / การแสดงผล UI / UX | ใช้อุปกรณ์จริง (Mobile/Tablet/Desktop) |

### 2.2 ประเภทการทดสอบ (Test Types)

| ประเภท | วัตถุประสงค์ |
|---|---|
| Smoke Testing | ตรวจสอบว่าฟังก์ชันหลักทำงานได้หลัง Deploy |
| Regression Testing | ตรวจสอบว่า Feature เดิมยังทำงานได้หลัง Code Change |
| Boundary Testing | ทดสอบค่าขอบเขต เช่น ความยาว Password, ขนาดไฟล์ |
| Negative Testing | ทดสอบการป้อนข้อมูลที่ไม่ถูกต้อง |
| Usability Testing | ทดสอบความสะดวกในการใช้งาน |

---

## 3. สภาพแวดล้อมการทดสอบ (Test Environments)

| สภาพแวดล้อม | URL | คำอธิบาย |
|---|---|---|
| **Development** | `http://localhost:5173` | สำหรับ Dev ทดสอบระหว่างพัฒนา |
| **Staging** | *(กำหนดภายหลัง)* | สำหรับ QA ทดสอบก่อน Production |
| **Production** | *(URL จริง)* | สำหรับ User Acceptance Testing (UAT) |

### 3.1 ข้อกำหนด Browser

| Browser | Version ขั้นต่ำ | ลำดับความสำคัญ |
|---|---|---|
| Google Chrome | 90+ | สูง |
| Microsoft Edge | 90+ | สูง |
| Mozilla Firefox | 88+ | กลาง |
| Safari | 14+ | ต่ำ |

---

## 4. Module ที่ต้องทดสอบ (Test Modules)

### 4.1 Authentication Module

| ชุดทดสอบ | รหัส | สถานะ |
|---|---|---|
| Sign Up Flow | TC-AUTH-001 ถึง TC-AUTH-010 | รอทดสอบ |
| Email Verification | TC-AUTH-011 ถึง TC-AUTH-015 | รอทดสอบ |
| Sign In Flow | TC-AUTH-016 ถึง TC-AUTH-025 | รอทดสอบ |
| Google OAuth | TC-AUTH-026 ถึง TC-AUTH-030 | รอทดสอบ |
| Forgot/Reset Password | TC-AUTH-031 ถึง TC-AUTH-040 | รอทดสอบ |

### 4.2 Document Module

| ชุดทดสอบ | รหัส | สถานะ |
|---|---|---|
| Create Document | TC-DOC-001 ถึง TC-DOC-010 | รอทดสอบ |
| Editor Functionality | TC-DOC-011 ถึง TC-DOC-025 | รอทดสอบ |
| Document List | TC-DOC-026 ถึง TC-DOC-030 | รอทดสอบ |
| Trash Management | TC-DOC-031 ถึง TC-DOC-040 | รอทดสอบ |
| Import/Export | TC-DOC-041 ถึง TC-DOC-050 | รอทดสอบ |

### 4.3 Grammar Check Module

| ชุดทดสอบ | รหัส | สถานะ |
|---|---|---|
| Grammar Check Flow | TC-GRAM-001 ถึง TC-GRAM-010 | รอทดสอบ |
| Tone Adjustment | TC-GRAM-011 ถึง TC-GRAM-015 | รอทดสอบ |
| Token Management | TC-GRAM-016 ถึง TC-GRAM-020 | รอทดสอบ |

### 4.4 Payment Module

| ชุดทดสอบ | รหัส | สถานะ |
|---|---|---|
| Pricing Page | TC-PAY-001 ถึง TC-PAY-005 | รอทดสอบ |
| Card Payment | TC-PAY-006 ถึง TC-PAY-015 | รอทดสอบ |
| PromptPay | TC-PAY-016 ถึง TC-PAY-025 | รอทดสอบ |
| Payment History | TC-PAY-026 ถึง TC-PAY-030 | รอทดสอบ |

---

## 5. เกณฑ์การยอมรับ (Acceptance Criteria)

### 5.1 เกณฑ์การผ่าน (Pass Criteria)
- Test Cases ระดับ **สูง (High)** ทั้งหมดต้องผ่าน 100%
- Test Cases ระดับ **กลาง (Medium)** ต้องผ่านอย่างน้อย 90%
- ไม่มี Bug ระดับ **Critical** หรือ **High** ที่ยังเปิดอยู่

### 5.2 เกณฑ์การหยุดทดสอบ (Exit Criteria)
- Test Cases ทั้งหมดถูก Execute แล้ว
- Bug ทุกตัวได้รับการบันทึกและมีสถานะ

### 5.3 ระดับความรุนแรงของ Bug (Bug Severity)

| ระดับ | คำอธิบาย | ตัวอย่าง |
|---|---|---|
| **Critical** | ระบบล่ม, ข้อมูลหาย, Security Breach | Login ไม่ได้เลย |
| **High** | Feature หลักทำงานผิดพลาด | Save Document ไม่สำเร็จ |
| **Medium** | Feature ทำงานบางส่วนผิด | UI แสดงผลไม่ถูกต้อง |
| **Low** | ปัญหาเล็กน้อย, Cosmetic | ตัวสะกดผิดใน UI |

---

## 6. ตารางการทดสอบ (Test Schedule)

| Sprint | ช่วงเวลา | กิจกรรม |
|---|---|---|
| Sprint 1 | สัปดาห์ที่ 1-2 | เตรียม Test Environment, เขียน Test Cases |
| Sprint 2 | สัปดาห์ที่ 3-4 | ทดสอบ Authentication Module |
| Sprint 3 | สัปดาห์ที่ 5-6 | ทดสอบ Document & Grammar Module |
| Sprint 4 | สัปดาห์ที่ 7-8 | ทดสอบ Payment & Admin Module |
| Sprint 5 | สัปดาห์ที่ 9-10 | Regression Testing, E2E Testing |
| Sprint 6 | สัปดาห์ที่ 11-12 | UAT, Bug Fix Verification |

---

## 7. รายงานผลการทดสอบ (Test Report)

> **หมายเหตุ:** ส่วนนี้จะอัปเดตหลังการทดสอบแต่ละรอบ

### 7.1 สรุปผลการทดสอบ (Test Summary)

| รอบการทดสอบ | วันที่ | ทดสอบทั้งหมด | ผ่าน | ไม่ผ่าน | ข้ามการทดสอบ |
|---|---|---|---|---|---|
| Round 1 (Smoke) | *(รอ)* | — | — | — | — |
| Round 2 (Full) | *(รอ)* | — | — | — | — |
| Round 3 (Regression) | *(รอ)* | — | — | — | — |

### 7.2 รายงาน Bug (Bug Report)

| Bug ID | Module | คำอธิบาย | ระดับ | สถานะ | ผู้รับผิดชอบ |
|---|---|---|---|---|---|
| *(รอข้อมูล)* | — | — | — | — | — |

---

## 8. ประวัติเอกสาร (Document History)

| เวอร์ชัน | วันที่ | ผู้จัดทำ | รายละเอียด |
|---|---|---|---|
| 1.0.0 | 3 ต.ค. 2026 | T-Check Team | จัดทำเอกสารเริ่มต้น |
| 2.0.0 | 4 ต.ค. 2026 | T-Check Team | อัปเดตรายละเอียดแผนการทดสอบให้เจาะจงกับ AI Grammar Check และ Playwright E2E |

---

## 9. ผลลัพธ์และแผนการทดสอบปัจจุบัน (v2.0)
- **ปัจจุบัน:** เตรียมโครงสร้างโปรเจกต์ทดสอบ (`project-testing/`) เรียบร้อย และติดตั้ง Playwright Framework 
- **แผนขั้นต่อไป:** สั่งรัน E2E Script ระบบการสร้างเอกสารจริง โดยดึง Credentials (Email/Password) จาก Environment Variables ของ Google Account
- **การจัดการ Report:** ตั้งค่าให้ Playwright สร้าง `html-report` และแปลงผลลัพธ์มาผูกกับ Docs Site แบบอัตโนมัติเมื่อ CI รันเสร็จ
