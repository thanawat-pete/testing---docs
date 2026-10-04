# SPRS-Test-Cases
## เอกสาร Test Cases ระบบ T-Check

**โครงการ:** T-Check — ระบบตรวจสอบไวยากรณ์ภาษาไทยด้วย AI  
**ประเภทเอกสาร:** Test Cases Document  
**เวอร์ชัน:** 2.0.0  
**วันที่จัดทำ:** 4 ตุลาคม 2026

---

## คำอธิบายสถานะ Test Cases

| สัญลักษณ์ | ความหมาย |
|---|---|
| ✅ PASS | ทดสอบแล้ว ผ่าน |
| ❌ FAIL | ทดสอบแล้ว ไม่ผ่าน |
| ⏳ PENDING | รอทดสอบ |
| ⏭ SKIP | ข้ามการทดสอบ |

---

## MODULE 1: Authentication (AUTH)

### TC-AUTH-001: สมัครสมาชิกด้วยข้อมูลถูกต้อง

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-AUTH-001 |
| **Module** | Authentication |
| **Feature** | Sign Up |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:**
- ผู้ใช้ยังไม่ได้ล็อกอิน
- อยู่ที่หน้า `/sign-up`

**ขั้นตอนการทดสอบ (Test Steps):**
1. กรอก Username: `testuser01`
2. กรอก Email: `testuser01@example.com`
3. กรอก Password: `Test@1234`
4. คลิกปุ่ม "สมัครสมาชิก"

**ผลลัพธ์ที่คาดหวัง (Expected Result):**
- ระบบแสดงข้อความสำเร็จ
- ระบบส่งอีเมลยืนยันไปที่ `testuser01@example.com`
- Redirect ไปหน้า `/verify-email`

---

### TC-AUTH-002: สมัครสมาชิกด้วย Email ที่มีอยู่แล้ว

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-AUTH-002 |
| **Module** | Authentication |
| **Feature** | Sign Up — Negative |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:**
- มี Account ที่ใช้ email `existing@example.com` อยู่แล้ว

**ขั้นตอนการทดสอบ:**
1. กรอก Email: `existing@example.com`
2. กรอก Password: `Test@1234`
3. คลิกปุ่ม "สมัครสมาชิก"

**ผลลัพธ์ที่คาดหวัง:**
- ระบบแสดง Error Message: "Email นี้ถูกใช้งานแล้ว"
- ไม่มีการสร้าง Account ใหม่

---

### TC-AUTH-003: เข้าสู่ระบบด้วย Email และ Password ถูกต้อง

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-AUTH-003 |
| **Module** | Authentication |
| **Feature** | Sign In |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:**
- มี Account ที่ยืนยัน Email แล้ว
- อยู่ที่หน้า `/sign-in`

**ขั้นตอนการทดสอบ:**
1. กรอก Email/Username: `testuser01@example.com`
2. กรอก Password: `Test@1234`
3. คลิกปุ่ม "เข้าสู่ระบบ"

**ผลลัพธ์ที่คาดหวัง:**
- ระบบ Login สำเร็จ
- Redirect ไปหน้า `/dashboard` หรือหน้าเดิมที่ค้างไว้
- แสดง User Info ใน Navbar

---

### TC-AUTH-004: เข้าสู่ระบบด้วย Password ผิด

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-AUTH-004 |
| **Module** | Authentication |
| **Feature** | Sign In — Negative |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**ขั้นตอนการทดสอบ:**
1. กรอก Email: `testuser01@example.com`
2. กรอก Password: `WrongPassword`
3. คลิกปุ่ม "เข้าสู่ระบบ"

**ผลลัพธ์ที่คาดหวัง:**
- ระบบแสดง Error Message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง"
- ไม่มีการ Redirect
- Session ไม่ถูกสร้าง

---

### TC-AUTH-005: ออกจากระบบ (Sign Out)

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-AUTH-005 |
| **Module** | Authentication |
| **Feature** | Sign Out |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:** ผู้ใช้ล็อกอินอยู่

**ขั้นตอนการทดสอบ:**
1. คลิกที่ User Menu ใน Navbar
2. คลิก "ออกจากระบบ"

**ผลลัพธ์ที่คาดหวัง:**
- Cookie ถูกลบ
- Redirect ไปหน้า `/`
- Navbar แสดงเป็น Guest mode
- การเข้า `/dashboard` จะถูก Redirect ไป `/sign-in`

---

### TC-AUTH-006: ขอรีเซ็ตรหัสผ่าน

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-AUTH-006 |
| **Module** | Authentication |
| **Feature** | Forgot Password |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**ขั้นตอนการทดสอบ:**
1. ไปที่หน้า `/forgot-password`
2. กรอก Email: `testuser01@example.com`
3. คลิกปุ่ม "ส่งลิงก์รีเซ็ต"

**ผลลัพธ์ที่คาดหวัง:**
- ระบบแสดงข้อความ "ส่งอีเมลสำเร็จ"
- ผู้ใช้ได้รับอีเมลพร้อมลิงก์รีเซ็ต

---

## MODULE 2: Document Management (DOC)

### TC-DOC-001: สร้างเอกสารใหม่ (Guest)

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-DOC-001 |
| **Module** | Document |
| **Feature** | Create Document — Guest |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:** ผู้ใช้เป็น Guest (ไม่ได้ล็อกอิน)

**ขั้นตอนการทดสอบ:**
1. ไปที่หน้า `/docs`
2. คลิกปุ่ม "สร้างเอกสารใหม่"

**ผลลัพธ์ที่คาดหวัง:**
- เปิด Editor หน้าใหม่ที่ `/docs/editor`
- Editor ทำงานได้แต่ไม่สามารถ Save ไปยัง Cloud ได้
- Draft ถูกบันทึกไว้ใน sessionStorage

---

### TC-DOC-002: สร้างและบันทึกเอกสาร (Logged In)

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-DOC-002 |
| **Module** | Document |
| **Feature** | Create & Save Document |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:** ผู้ใช้ล็อกอินแล้ว

**ขั้นตอนการทดสอบ:**
1. ไปที่หน้า `/docs`
2. คลิก "สร้างเอกสารใหม่"
3. พิมพ์ชื่อเอกสาร: "เอกสารทดสอบ"
4. พิมพ์เนื้อหา: "สวัสดีครับ นี่คือการทดสอบ"
5. รอ Auto-save (หรือกด Ctrl+S)

**ผลลัพธ์ที่คาดหวัง:**
- แสดง Toast "บันทึกแล้ว" หรือ Icon ที่บ่งบอกว่าบันทึกสำเร็จ
- เอกสารปรากฏในหน้า `/docs`
- URL เปลี่ยนเป็น `/docs/editor/:id`

---

### TC-DOC-003: ลบเอกสาร (ย้ายไปถังขยะ)

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-DOC-003 |
| **Module** | Document |
| **Feature** | Soft Delete |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:** มีเอกสารที่สร้างไว้แล้ว

**ขั้นตอนการทดสอบ:**
1. ไปที่หน้า `/docs`
2. คลิกปุ่ม "ลบ" ที่เอกสาร
3. ยืนยันการลบ

**ผลลัพธ์ที่คาดหวัง:**
- เอกสารหายจากรายการ `/docs`
- เอกสารปรากฏในหน้า `/docs/trash`

---

### TC-DOC-004: กู้คืนเอกสารจากถังขยะ

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-DOC-004 |
| **Module** | Document |
| **Feature** | Restore Document |
| **ลำดับความสำคัญ** | กลาง |
| **สถานะ** | ⏳ PENDING |

**ขั้นตอนการทดสอบ:**
1. ไปที่หน้า `/docs/trash`
2. คลิกปุ่ม "กู้คืน" ที่เอกสาร

**ผลลัพธ์ที่คาดหวัง:**
- เอกสารหายจาก Trash
- เอกสารกลับมาปรากฏในหน้า `/docs`

---

### TC-DOC-005: เพิ่มหน้ากระดาษในเอกสาร

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-DOC-005 |
| **Module** | Document |
| **Feature** | Multi-page |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:** เปิด Editor อยู่

**ขั้นตอนการทดสอบ:**
1. คลิกปุ่ม "เพิ่มหน้ากระดาษ" (+ icon แบบเส้นประ)

**ผลลัพธ์ที่คาดหวัง:**
- มีหน้ากระดาษใหม่ปรากฏต่อจากหน้าเดิม
- สามารถพิมพ์ในหน้าใหม่ได้

---

### TC-DOC-006: นำเข้าไฟล์ .docx

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-DOC-006 |
| **Module** | Document |
| **Feature** | Import .docx |
| **ลำดับความสำคัญ** | กลาง |
| **สถานะ** | ⏳ PENDING |

**ขั้นตอนการทดสอบ:**
1. คลิก "นำเข้าไฟล์" ใน Toolbar
2. เลือกไฟล์ .docx จากเครื่อง

**ผลลัพธ์ที่คาดหวัง:**
- เนื้อหาจากไฟล์ถูกแสดงใน Editor
- Formatting พื้นฐานถูกรักษาไว้

---

## MODULE 3: Grammar Check (GRAM)

### TC-GRAM-001: ตรวจสอบไวยากรณ์ภาษาไทย (Normal Mode)

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-GRAM-001 |
| **Module** | Grammar Check |
| **Feature** | Grammar Check — Normal Mode |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:** ผู้ใช้ล็อกอินแล้ว, มี AI Token คงเหลือ

**ขั้นตอนการทดสอบ:**
1. เปิด Editor และพิมพ์ข้อความภาษาไทย
2. เลือกโหมด "Normal"
3. คลิกปุ่ม "ตรวจสอบ"

**ผลลัพธ์ที่คาดหวัง:**
- Analysis Panel เปิดขึ้น
- แสดงคำแนะนำการแก้ไข
- จำนวน Token ลดลงตามจำนวนที่ใช้

---

### TC-GRAM-002: ตรวจสอบเมื่อ Token หมด

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-GRAM-002 |
| **Module** | Grammar Check |
| **Feature** | Token Empty — Negative |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:** ผู้ใช้มี Token เหลือ 0

**ขั้นตอนการทดสอบ:**
1. คลิกปุ่ม "ตรวจสอบ"

**ผลลัพธ์ที่คาดหวัง:**
- ระบบแสดงข้อความ "Token หมดแล้ว"
- แนะนำให้อัปเกรด Subscription
- ไม่มีการเรียก API Grammar

---

### TC-GRAM-003: ใช้คำแนะนำแก้ไขคำผิด (Apply Suggestion)

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-GRAM-003 |
| **Module** | Grammar Check |
| **Feature** | Apply Suggestion |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:** มีผลการตรวจสอบใน Analysis Panel

**ขั้นตอนการทดสอบ:**
1. คลิกปุ่ม "แก้ไข" ที่คำแนะนำ

**ผลลัพธ์ที่คาดหวัง:**
- คำในเอกสารถูกแทนที่ด้วยคำแนะนำ
- คำแนะนำนั้นหายจาก Analysis Panel

---

## MODULE 4: Payment (PAY)

### TC-PAY-001: แสดงหน้า Pricing

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-PAY-001 |
| **Module** | Payment |
| **Feature** | Pricing Page |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**ขั้นตอนการทดสอบ:**
1. ไปที่หน้า `/pricing`

**ผลลัพธ์ที่คาดหวัง:**
- แสดงรายการแพ็กเกจทั้งหมด
- แสดงราคาและรายละเอียดชัดเจน
- ปุ่ม "เลือกแผน" ทำงานได้

---

### TC-PAY-002: ชำระเงินด้วย PromptPay

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-PAY-002 |
| **Module** | Payment |
| **Feature** | PromptPay |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Pre-condition:** ผู้ใช้ล็อกอินแล้ว, อยู่ที่หน้า `/checkout`

**ขั้นตอนการทดสอบ:**
1. เลือกวิธีชำระ: "PromptPay"
2. ยืนยันการชำระเงิน
3. ระบบแสดง QR Code

**ผลลัพธ์ที่คาดหวัง:**
- QR Code ถูกสร้างและแสดงผล
- ระบบตรวจสอบสถานะทุก X วินาที

---

## MODULE 5: Admin (ADMIN)

### TC-ADMIN-001: เข้าถึง Admin Panel

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-ADMIN-001 |
| **Module** | Admin |
| **Feature** | Admin Route Guard |
| **ลำดับความสำคัญ** | สูง |
| **สถานะ** | ⏳ PENDING |

**Test Case A — Admin User:**
- เข้า `/admin` ด้วย Account ที่มี role = `admin`
- **คาดหวัง:** แสดงหน้า Admin Dashboard

**Test Case B — Regular User:**
- เข้า `/admin` ด้วย Account ปกติ
- **คาดหวัง:** Redirect ไปหน้า `/` หรือแสดง 403

**Test Case C — Guest:**
- เข้า `/admin` โดยไม่ได้ล็อกอิน
- **คาดหวัง:** Redirect ไปหน้า `/sign-in`

---

## MODULE 6: UI / UX

### TC-UI-001: Dark Mode Toggle

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-UI-001 |
| **Module** | UI |
| **Feature** | Theme Toggle |
| **ลำดับความสำคัญ** | กลาง |
| **สถานะ** | ⏳ PENDING |

**ขั้นตอนการทดสอบ:**
1. คลิกปุ่มสลับ Theme (Dark/Light)

**ผลลัพธ์ที่คาดหวัง:**
- Theme เปลี่ยนทันที
- การตั้งค่าถูกบันทึกและยังคงอยู่หลัง Refresh

---

### TC-UI-002: เปลี่ยนภาษา (i18n)

| ฟิลด์ | รายละเอียด |
|---|---|
| **Test Case ID** | TC-UI-002 |
| **Module** | UI |
| **Feature** | Language Switch |
| **ลำดับความสำคัญ** | กลาง |
| **สถานะ** | ⏳ PENDING |

**ขั้นตอนการทดสอบ:**
1. คลิกเมนูเปลี่ยนภาษา
2. เลือก "English"

**ผลลัพธ์ที่คาดหวัง:**
- ข้อความทั้งหมดเปลี่ยนเป็นภาษาอังกฤษ
- การตั้งค่าถูกบันทึกใน localStorage

---

## สรุป Test Cases

| Module | จำนวน TC ทั้งหมด | ผ่าน | ไม่ผ่าน | รอ |
|---|---|---|---|---|
| Authentication | 6 | 0 | 0 | 6 |
| Document | 6 | 0 | 0 | 6 |
| Grammar Check | 3 | 0 | 0 | 3 |
| Payment | 2 | 0 | 0 | 2 |
| Admin | 1 | 0 | 0 | 1 |
| UI/UX | 2 | 0 | 0 | 2 |
| **รวม** | **20** | **0** | **0** | **20** |

---

## ประวัติเอกสาร

| เวอร์ชัน | วันที่ | ผู้จัดทำ | รายละเอียด |
|---|---|---|---|
| 1.0.0 | 3 ต.ค. 2026 | T-Check Team | จัดทำ Test Cases เริ่มต้น |
| 2.0.0 | 4 ต.ค. 2026 | T-Check Team | เพิ่มรายละเอียด E2E Testing และเตรียมความพร้อมสำหรับ Playwright |

---

## ผลลัพธ์และแผนในอนาคต (v2.0)
- **การทดสอบ Module เอกสาร:** เตรียม Script ใน `tests/e2e/document.spec.js` เพื่อทดสอบ `TC-DOC-001` และ `TC-DOC-003` เรียบร้อยแล้ว 
- **แผนงานถัดไป:** รับ Google Credentials จากผู้ใช้ เพื่อรัน Script ทดสอบหน้าระบบจริง (Real Execution)
