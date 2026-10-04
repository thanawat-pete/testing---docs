# SPRS-E2E-BDD-UserStories
## E2E BDD User Stories — ระบบ T-Check

**โครงการ:** T-Check — ระบบตรวจสอบไวยากรณ์ภาษาไทยด้วย AI  
**ประเภทเอกสาร:** E2E BDD User Stories  
**Methodology:** Behavior-Driven Development (BDD) — Gherkin Syntax  
**เวอร์ชัน:** 2.0.0  
**วันที่จัดทำ:** 4 ตุลาคม 2026

---

## บทนำ (Introduction)

เอกสารฉบับนี้รวบรวม User Stories ในรูปแบบ BDD (Behavior-Driven Development) โดยใช้ Gherkin Syntax (`Given / When / Then`) เพื่อให้ทีม Developer, QA, และ Stakeholder เข้าใจพฤติกรรมของระบบในมุมมองผู้ใช้งาน

### โครงสร้าง User Story

```
Feature: ชื่อ Feature
  Background: เงื่อนไขเริ่มต้นร่วม (ถ้ามี)
  
  Scenario: ชื่อ Scenario
    Given  สิ่งที่มีอยู่ / สถานะเริ่มต้น
    When   ผู้ใช้ทำอะไร
    Then   ผลลัพธ์ที่ควรเกิดขึ้น
    And    เงื่อนไขเพิ่มเติม
```

---

## EPIC 1: Authentication (การยืนยันตัวตน)

### Feature: การสมัครสมาชิก

```gherkin
Feature: การสมัครสมาชิกใหม่
  As a ผู้ใช้ใหม่ที่ยังไม่มีบัญชี
  I want to สมัครสมาชิกด้วย Email และ Password
  So that ฉันสามารถใช้งาน T-Check ได้อย่างเต็มรูปแบบ

  Background:
    Given ผู้ใช้อยู่ที่หน้า "/sign-up"
    And   ผู้ใช้ยังไม่ได้ล็อกอิน

  Scenario: สมัครสมาชิกสำเร็จด้วยข้อมูลถูกต้อง
    Given ผู้ใช้มี email "newuser@example.com" ที่ยังไม่มีในระบบ
    When  ผู้ใช้กรอก username "newuser01"
    And   ผู้ใช้กรอก email "newuser@example.com"
    And   ผู้ใช้กรอก password "SecurePass@123"
    And   ผู้ใช้คลิกปุ่ม "สมัครสมาชิก"
    Then  ระบบแสดงข้อความ "สมัครสมาชิกสำเร็จ"
    And   ระบบส่งอีเมลยืนยันไปที่ "newuser@example.com"
    And   ระบบ redirect ไปหน้า "/verify-email"

  Scenario: สมัครสมาชิกด้วย email ที่มีอยู่แล้ว
    Given มีบัญชีที่ใช้ email "existing@example.com" อยู่แล้ว
    When  ผู้ใช้กรอก email "existing@example.com"
    And   ผู้ใช้คลิกปุ่ม "สมัครสมาชิก"
    Then  ระบบแสดง error message "Email นี้ถูกใช้งานแล้ว"
    And   ผู้ใช้ยังคงอยู่ที่หน้า "/sign-up"
    And   ไม่มีบัญชีใหม่ถูกสร้าง

  Scenario: สมัครสมาชิกด้วย password ที่ไม่ผ่าน validation
    When  ผู้ใช้กรอก password "123"
    And   ผู้ใช้คลิกปุ่ม "สมัครสมาชิก"
    Then  ระบบแสดง validation error "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร"
    And   ระบบไม่ส่ง request ไปยัง Backend
```

---

### Feature: การเข้าสู่ระบบ

```gherkin
Feature: การเข้าสู่ระบบ
  As a สมาชิกที่มีบัญชีอยู่แล้ว
  I want to เข้าสู่ระบบด้วย email/username และ password
  So that ฉันสามารถเข้าถึงเอกสารและฟีเจอร์ส่วนตัวของฉันได้

  Background:
    Given ผู้ใช้อยู่ที่หน้า "/sign-in"
    And   มีบัญชีที่ยืนยัน email แล้วสำหรับ "testuser@example.com"

  Scenario: เข้าสู่ระบบสำเร็จด้วย email
    When  ผู้ใช้กรอก identity "testuser@example.com"
    And   ผู้ใช้กรอก password "Test@1234"
    And   ผู้ใช้คลิกปุ่ม "เข้าสู่ระบบ"
    Then  ระบบ login สำเร็จ
    And   ระบบ redirect ไปหน้า "/dashboard"
    And   Navbar แสดงชื่อผู้ใช้

  Scenario: เข้าสู่ระบบสำเร็จด้วย username
    When  ผู้ใช้กรอก identity "testuser01"
    And   ผู้ใช้กรอก password "Test@1234"
    And   ผู้ใช้คลิกปุ่ม "เข้าสู่ระบบ"
    Then  ระบบ login สำเร็จ
    And   ระบบ redirect ไปหน้า "/dashboard"

  Scenario: เข้าสู่ระบบด้วย password ผิด
    When  ผู้ใช้กรอก identity "testuser@example.com"
    And   ผู้ใช้กรอก password "WrongPassword"
    And   ผู้ใช้คลิกปุ่ม "เข้าสู่ระบบ"
    Then  ระบบแสดง error message "อีเมลหรือรหัสผ่านไม่ถูกต้อง"
    And   ผู้ใช้ยังคงอยู่ที่หน้า "/sign-in"
    And   ไม่มี session ถูกสร้าง

  Scenario: Protected Route redirect เมื่อยังไม่ได้ล็อกอิน
    Given ผู้ใช้เป็น Guest (ยังไม่ได้ล็อกอิน)
    When  ผู้ใช้พยายามเข้าถึง "/dashboard"
    Then  ระบบ redirect ไปหน้า "/sign-in"
```

---

### Feature: การออกจากระบบ

```gherkin
Feature: การออกจากระบบ
  As a ผู้ใช้ที่ล็อกอินอยู่
  I want to ออกจากระบบได้
  So that ปกป้องความปลอดภัยของบัญชีฉัน

  Scenario: ออกจากระบบสำเร็จ
    Given ผู้ใช้ล็อกอินอยู่
    And   ผู้ใช้อยู่ที่หน้าใดก็ได้
    When  ผู้ใช้คลิก User Avatar ใน Navbar
    And   ผู้ใช้คลิก "ออกจากระบบ"
    Then  ระบบ clear authentication cookie
    And   ระบบ redirect ไปหน้า "/"
    And   Navbar แสดงเป็น Guest mode (ปุ่ม Sign In/Sign Up)
    And   การเข้า "/dashboard" ถูก redirect ไป "/sign-in"
```

---

### Feature: การรีเซ็ตรหัสผ่าน

```gherkin
Feature: การรีเซ็ตรหัสผ่านผ่านอีเมล
  As a ผู้ใช้ที่ลืมรหัสผ่าน
  I want to รีเซ็ตรหัสผ่านผ่านอีเมล
  So that ฉันสามารถเข้าถึงบัญชีของฉันได้อีกครั้ง

  Scenario: ขอลิงก์รีเซ็ตรหัสผ่านสำเร็จ
    Given ผู้ใช้อยู่ที่หน้า "/forgot-password"
    When  ผู้ใช้กรอก email "testuser@example.com"
    And   ผู้ใช้คลิกปุ่ม "ส่งลิงก์รีเซ็ต"
    Then  ระบบแสดงข้อความ "ส่งอีเมลสำเร็จ"
    And   ผู้ใช้ได้รับอีเมลพร้อม reset link

  Scenario: ตั้งรหัสผ่านใหม่สำเร็จ
    Given ผู้ใช้คลิก reset link จากอีเมล
    And   ผู้ใช้อยู่ที่หน้า "/reset-password?token=valid_token"
    When  ผู้ใช้กรอก new password "NewPass@456"
    And   ผู้ใช้คลิกปุ่ม "ยืนยันรหัสผ่านใหม่"
    Then  ระบบเปลี่ยนรหัสผ่านสำเร็จ
    And   ระบบแสดงข้อความ "เปลี่ยนรหัสผ่านสำเร็จ"
    And   ระบบ redirect ไปหน้า "/sign-in"
```

---

## EPIC 2: Document Management (การจัดการเอกสาร)

### Feature: การสร้างและแก้ไขเอกสาร

```gherkin
Feature: การสร้างและแก้ไขเอกสาร
  As a ผู้ใช้งาน (ทั้ง Guest และ Member)
  I want to สร้างและแก้ไขเอกสารใน Rich Text Editor
  So that ฉันสามารถเขียนและปรับแต่งเอกสารได้ตามต้องการ

  Scenario: Guest สร้างเอกสารและใช้ Editor ได้แบบจำกัด
    Given ผู้ใช้เป็น Guest
    And   ผู้ใช้อยู่ที่หน้า "/docs"
    When  ผู้ใช้คลิกปุ่ม "สร้างเอกสารใหม่"
    Then  ระบบ redirect ไปหน้า "/docs/editor"
    And   Editor ทำงานได้
    And   ระบบบันทึก draft ใน sessionStorage
    And   ปุ่ม "บันทึกไปยัง Cloud" ถูก disable หรือแสดงข้อความให้ล็อกอิน

  Scenario: Member สร้างและบันทึกเอกสาร
    Given ผู้ใช้ล็อกอินแล้ว
    And   ผู้ใช้อยู่ที่หน้า "/docs"
    When  ผู้ใช้คลิกปุ่ม "สร้างเอกสารใหม่"
    And   ผู้ใช้พิมพ์ชื่อเอกสาร "รายงานประจำปี 2026"
    And   ผู้ใช้พิมพ์เนื้อหาในหน้ากระดาษ
    And   ระบบ Auto-save ทำงาน (หลังหยุดพิมพ์ 1 วินาที)
    Then  ระบบแสดงสถานะ "บันทึกแล้ว"
    And   URL เปลี่ยนเป็น "/docs/editor/:id"
    And   เอกสารปรากฏในหน้า "/docs"

  Scenario: เพิ่มหน้ากระดาษใหม่
    Given ผู้ใช้อยู่ใน Editor
    And   มีเนื้อหาในหน้าปัจจุบัน
    When  ผู้ใช้คลิกปุ่ม "เพิ่มหน้ากระดาษ" (+ เส้นประ)
    Then  หน้ากระดาษใหม่ปรากฏต่อจากหน้าเดิม
    And   cursor ย้ายไปหน้ากระดาษใหม่

  Scenario: Format ข้อความ (Bold, Italic, Underline)
    Given ผู้ใช้อยู่ใน Editor
    And   ผู้ใช้ Select ข้อความ "สวัสดี"
    When  ผู้ใช้คลิกปุ่ม Bold ใน Toolbar
    Then  ข้อความ "สวัสดี" แสดงเป็น **ตัวหนา**

  Scenario: ใช้ Floating Toolbar เมื่อ Select ข้อความ
    Given ผู้ใช้อยู่ใน Editor
    When  ผู้ใช้ Select ข้อความ
    Then  Floating Toolbar ปรากฏขึ้นเหนือข้อความที่ Select
    And   แสดงตัวเลือก Bold, Italic, Link, และอื่น ๆ
```

---

### Feature: การจัดการรายการเอกสาร

```gherkin
Feature: การจัดการรายการเอกสาร
  As a Member ที่มีเอกสารหลายชิ้น
  I want to เห็นรายการเอกสารทั้งหมดและจัดการได้
  So that ฉันสามารถเข้าถึงและจัดการเอกสารได้อย่างสะดวก

  Background:
    Given ผู้ใช้ล็อกอินแล้ว
    And   มีเอกสาร 3 ชิ้นในระบบ

  Scenario: แสดงรายการเอกสารทั้งหมด
    When  ผู้ใช้ไปที่หน้า "/docs"
    Then  ระบบแสดงเอกสารทั้ง 3 ชิ้น
    And   แสดงชื่อ, วันที่แก้ไขล่าสุด ของแต่ละเอกสาร

  Scenario: ค้นหาเอกสารด้วยชื่อ
    When  ผู้ใช้พิมพ์ "รายงาน" ในช่องค้นหา
    Then  ระบบกรองแสดงเฉพาะเอกสารที่มีชื่อมี "รายงาน"

  Scenario: ลบเอกสารไปยังถังขยะ
    When  ผู้ใช้คลิกปุ่ม "ลบ" ที่เอกสาร "รายงาน A"
    And   ผู้ใช้ยืนยันการลบ
    Then  เอกสาร "รายงาน A" หายจากรายการ "/docs"
    And   เอกสาร "รายงาน A" ปรากฏในหน้า "/docs/trash"

  Scenario: กู้คืนเอกสารจากถังขยะ
    Given เอกสาร "รายงาน A" อยู่ในถังขยะ
    When  ผู้ใช้ไปที่หน้า "/docs/trash"
    And   ผู้ใช้คลิกปุ่ม "กู้คืน" ที่เอกสาร "รายงาน A"
    Then  เอกสาร "รายงาน A" หายจาก Trash
    And   เอกสาร "รายงาน A" กลับมาในหน้า "/docs"

  Scenario: ลบเอกสารแบบถาวร
    Given เอกสาร "รายงาน A" อยู่ในถังขยะ
    When  ผู้ใช้คลิกปุ่ม "ลบถาวร" ที่เอกสาร "รายงาน A"
    And   ผู้ใช้ยืนยันการลบถาวร
    Then  เอกสาร "รายงาน A" ถูกลบออกจากระบบถาวร
    And   ไม่สามารถกู้คืนได้อีก
```

---

### Feature: การนำเข้าและส่งออกเอกสาร

```gherkin
Feature: การนำเข้าและส่งออกเอกสาร
  As a ผู้ใช้งาน
  I want to นำเข้าเอกสารจากภายนอกและส่งออกเป็นไฟล์ต่าง ๆ
  So that ทำงานร่วมกับ Workflow อื่น ๆ ได้

  Scenario: นำเข้าไฟล์ .docx
    Given ผู้ใช้อยู่ใน Editor
    When  ผู้ใช้คลิก "นำเข้าไฟล์" ใน Toolbar
    And   ผู้ใช้เลือกไฟล์ "report.docx" จากเครื่อง
    Then  ระบบอ่านและแปลงเนื้อหาจากไฟล์ .docx
    And   เนื้อหาแสดงใน Editor พร้อม Formatting พื้นฐาน

  Scenario: ส่งออกเป็นไฟล์ .pdf
    Given ผู้ใช้อยู่ใน Editor และมีเนื้อหา
    When  ผู้ใช้คลิก "ส่งออก" และเลือก "PDF"
    Then  ระบบสร้างไฟล์ PDF
    And   Browser download ไฟล์อัตโนมัติ

  Scenario: นำเข้าจาก Google Docs
    Given ผู้ใช้ล็อกอิน Google Account แล้ว
    When  ผู้ใช้คลิก "นำเข้าจาก Google Docs"
    Then  Google Drive Picker เปิดขึ้น
    And   ผู้ใช้สามารถเลือกไฟล์จาก Google Drive ได้
```

---

## EPIC 3: Grammar Check (การตรวจสอบไวยากรณ์)

### Feature: การตรวจสอบไวยากรณ์ด้วย AI

```gherkin
Feature: การตรวจสอบไวยากรณ์ด้วย AI
  As a ผู้ใช้ที่ต้องการเขียนภาษาไทยให้ถูกต้อง
  I want to ตรวจสอบไวยากรณ์ภาษาไทยด้วย AI
  So that ฉันสามารถปรับปรุงคุณภาพของเอกสารได้

  Background:
    Given ผู้ใช้ล็อกอินแล้ว
    And   ผู้ใช้มี AI Token คงเหลือ
    And   ผู้ใช้พิมพ์ข้อความภาษาไทยใน Editor

  Scenario: ตรวจสอบไวยากรณ์โหมด Normal
    When  ผู้ใช้เลือกโหมด "Normal"
    And   ผู้ใช้คลิกปุ่ม "ตรวจสอบ"
    Then  ระบบส่งข้อความไปตรวจสอบที่ AI
    And   Loading indicator แสดงระหว่างรอ
    And   Analysis Panel เปิดขึ้นพร้อมคำแนะนำ
    And   จำนวน AI Token ลดลง

  Scenario: ตรวจสอบไวยากรณ์โหมด Strict (ทางการ)
    When  ผู้ใช้เลือกโหมด "Strict"
    And   ผู้ใช้คลิกปุ่ม "ตรวจสอบ"
    Then  AI วิเคราะห์ภาษาในมาตรฐานทางการ
    And   แสดงคำแนะนำที่เข้มงวดกว่า Normal mode

  Scenario: ตรวจสอบไวยากรณ์โหมด Casual (ไม่เป็นทางการ)
    When  ผู้ใช้เลือกโหมด "Casual"
    And   ผู้ใช้คลิกปุ่ม "ตรวจสอบ"
    Then  AI วิเคราะห์ภาษาในรูปแบบภาษาพูด
    And   แสดงคำแนะนำที่ยืดหยุ่นกว่า Normal mode

  Scenario: แก้ไขคำตามคำแนะนำ (Apply Suggestion)
    Given Analysis Panel มีคำแนะนำ "ควรใช้ 'ได้รับ' แทน 'ได้'"
    When  ผู้ใช้คลิกปุ่ม "แก้ไข" สีเขียว
    Then  คำในเอกสารถูกแทนที่ด้วยคำแนะนำ
    And   คำแนะนำนั้นหายจาก Analysis Panel

  Scenario: ละเว้นคำแนะนำ (Ignore Suggestion)
    Given Analysis Panel มีคำแนะนำหนึ่งรายการ
    When  ผู้ใช้คลิกปุ่ม "ละเว้น" สีเทา
    Then  คำแนะนำนั้นหายจาก Analysis Panel
    And   คำในเอกสารไม่เปลี่ยน

  Scenario: ตรวจสอบเมื่อ AI Token หมด
    Given ผู้ใช้มี AI Token คงเหลือ 0
    When  ผู้ใช้คลิกปุ่ม "ตรวจสอบ"
    Then  ระบบแสดงข้อความ "Token หมดแล้ว กรุณาอัปเกรดแพ็กเกจ"
    And   มีปุ่ม redirect ไปหน้า "/pricing"
    And   ไม่มีการส่ง request ไปยัง Grammar API

  Scenario: Guest พยายามใช้ Grammar Check
    Given ผู้ใช้เป็น Guest
    And   ผู้ใช้อยู่ใน Editor
    When  ผู้ใช้คลิกปุ่ม "ตรวจสอบ"
    Then  ระบบแสดงข้อความให้ล็อกอินก่อน
    And   มีปุ่ม redirect ไปหน้า "/sign-in"
```

---

## EPIC 4: Payment & Subscription (การชำระเงิน)

### Feature: การซื้อแพ็กเกจ

```gherkin
Feature: การซื้อแพ็กเกจ AI Token
  As a Member ที่ต้องการ Token เพิ่ม
  I want to ซื้อแพ็กเกจ Token เพิ่ม
  So that ฉันสามารถใช้ Grammar Check ได้มากขึ้น

  Scenario: ดูหน้า Pricing
    When  ผู้ใช้ไปที่หน้า "/pricing"
    Then  ระบบแสดงรายการแพ็กเกจทั้งหมด
    And   แสดงราคา, จำนวน Token, และรายละเอียดแต่ละแพ็กเกจ

  Scenario: ชำระเงินด้วยบัตรเครดิต
    Given ผู้ใช้ล็อกอินแล้ว
    And   ผู้ใช้เลือกแพ็กเกจ Premium
    When  ผู้ใช้คลิก "เลือกแผนนี้"
    And   ระบบ redirect ไปหน้า "/checkout"
    And   ผู้ใช้เลือกวิธีชำระ "บัตรเครดิต"
    And   ผู้ใช้กรอกข้อมูลบัตรและยืนยัน
    Then  ระบบชำระเงินสำเร็จ
    And   จำนวน AI Token อัปเดตใน User Profile

  Scenario: ชำระเงินด้วย PromptPay
    Given ผู้ใช้ล็อกอินแล้ว
    And   ผู้ใช้อยู่ที่หน้า "/checkout"
    When  ผู้ใช้เลือกวิธีชำระ "PromptPay"
    And   ผู้ใช้คลิก "ยืนยันการชำระ"
    Then  ระบบแสดง QR Code สำหรับ PromptPay
    And   ระบบตรวจสอบสถานะการชำระทุกไม่กี่วินาที
    And   เมื่อชำระสำเร็จ ระบบแสดงข้อความ "ชำระเงินสำเร็จ"
    And   Token ในบัญชีอัปเดต
```

---

## EPIC 5: Admin Panel (ระบบผู้ดูแล)

### Feature: การจัดการผู้ใช้งานโดย Admin

```gherkin
Feature: Admin Panel — การจัดการผู้ใช้งาน
  As a Admin ของระบบ T-Check
  I want to ดูและจัดการผู้ใช้งานทั้งหมด
  So that ฉันสามารถดูแลระบบได้อย่างมีประสิทธิภาพ

  Background:
    Given Admin ล็อกอินด้วยบัญชีที่มี role = "admin"

  Scenario: Admin เข้าถึง Dashboard
    When  Admin ไปที่หน้า "/admin/overview"
    Then  ระบบแสดง Dashboard พร้อมข้อมูลสถิติ
    And   แสดงจำนวนผู้ใช้ทั้งหมด, เอกสาร, การใช้งาน AI

  Scenario: Admin ดูรายการผู้ใช้งาน
    When  Admin ไปที่หน้า "/admin/users"
    Then  ระบบแสดงรายการผู้ใช้งานทั้งหมด
    And   แสดง username, email, role, สถานะของแต่ละคน

  Scenario: Admin ดูรายละเอียดผู้ใช้
    Given Admin อยู่ที่หน้า "/admin/users"
    When  Admin คลิกที่ผู้ใช้คนหนึ่ง
    Then  ระบบ redirect ไปหน้า "/admin/users/:id"
    And   แสดงข้อมูลละเอียดของผู้ใช้นั้น

  Scenario: Regular User ไม่สามารถเข้า Admin ได้
    Given Regular User ล็อกอินแล้ว
    When  User พยายามเข้า "/admin"
    Then  ระบบ redirect ออกจาก Admin Panel
    And   แสดงข้อความหรือ redirect ไปหน้าอื่น
```

---

## EPIC 6: UI / UX

### Feature: Dark Mode และการเปลี่ยนภาษา

```gherkin
Feature: การตั้งค่า UI — Theme และภาษา
  As a ผู้ใช้งาน
  I want to ปรับ Theme และภาษาของแอปพลิเคชัน
  So that มีประสบการณ์ใช้งานที่เหมาะสมกับความต้องการ

  Scenario: เปิด Dark Mode
    Given ผู้ใช้อยู่ใน Light Mode
    When  ผู้ใช้คลิกปุ่ม Toggle Theme
    Then  แอปพลิเคชันเปลี่ยนเป็น Dark Mode ทันที
    And   ค่าถูกบันทึกใน localStorage
    And   Refresh หน้าแล้วยังคง Dark Mode อยู่

  Scenario: เปลี่ยนภาษาเป็นอังกฤษ
    Given ผู้ใช้อยู่ในภาษาไทย
    When  ผู้ใช้เลือก "English" จากเมนูภาษา
    Then  ข้อความทั้งหมดใน UI เปลี่ยนเป็นภาษาอังกฤษ
    And   ค่าถูกบันทึกใน localStorage
    And   Refresh หน้าแล้วยังคงเป็นภาษาอังกฤษ
```

---

## สรุป User Stories

| Epic | จำนวน Scenarios | สถานะ |
|---|---|---|
| Authentication | 10 | ⏳ รอทดสอบ |
| Document Management | 10 | ⏳ รอทดสอบ |
| Grammar Check | 6 | ⏳ รอทดสอบ |
| Payment | 3 | ⏳ รอทดสอบ |
| Admin Panel | 4 | ⏳ รอทดสอบ |
| UI/UX | 2 | ⏳ รอทดสอบ |
| **รวม** | **35** | **รอทดสอบ** |

---

## ประวัติเอกสาร

| เวอร์ชัน | วันที่ | ผู้จัดทำ | รายละเอียด |
|---|---|---|---|
| 1.0.0 | 3 ต.ค. 2026 | T-Check Team | จัดทำ BDD User Stories เริ่มต้น |
| 2.0.0 | 4 ต.ค. 2026 | T-Check Team | เชื่อม BDD เข้ากับ Playwright E2E Testing |

---

## ผลลัพธ์และแผนการทดสอบ E2E (v2.0)
- **ปัจจุบัน:** นำ BDD Scenarios หมวด "การสร้างและแก้ไขเอกสาร" ไปเขียนเป็นโค้ด Playwright ในโฟลเดอร์ `tests/e2e/document.spec.js` เพื่อจำลองพฤติกรรมผู้ใช้ตาม Gherkin Syntax
- **แผนงานถัดไป:** รัน BDD Scenario ด้วยบัญชีจริง (Email/Password ของคุณ) เพื่อดูว่าระบบตอบสนองได้ตรงตาม Given/When/Then ที่ออกแบบไว้หรือไม่
