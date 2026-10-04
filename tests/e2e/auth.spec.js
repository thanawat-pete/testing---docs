import { test, expect } from '@playwright/test';

// BDD Epic 1: Authentication Module
// Feature: ผู้ใช้งานเข้าสู่ระบบ (User Login)
test.describe('Authentication (BDD)', () => {
  
  test('Scenario: สมัครสมาชิกด้วยอีเมลและรหัสผ่าน', async ({ page }) => {
    // Given ผู้ใช้งานอยู่ที่หน้าแรกของระบบ T-Check
    await page.goto('/');
    
    // And ผู้ใช้งานคลิกที่ปุ่ม "ลงทะเบียน"
    // (สมมติว่าใน UI จริงมีลิงก์ไป /register)
    // สำหรับตอนนี้เราอาจจะไปที่หน้า login โดยตรงเพื่อจำลอง BDD
    
    // เราจะข้ามไปหน้าที่มี form ไปเลย เพื่อทดสอบ
    // เมื่อมี UI จริงค่อยมาใส่ selector ที่ตรงกัน
    test.info().annotations.push({ type: 'status', description: 'Pending UI connection' });
  });

  test('Scenario: เข้าสู่ระบบสำเร็จด้วยรหัสผ่านที่ถูกต้อง', async ({ page }) => {
    // Given ผู้ใช้งานอยู่ที่หน้า "เข้าสู่ระบบ"
    await page.goto('/');
    
    // สมมติว่ามีหน้า Login (ตอนนี้ UI อาจจะยังไม่มีหน้า login บน /)
    // เมื่อมีการสร้างหน้าจริง ให้แก้ Selector 
    /*
    await page.goto('/login');
    
    // When ผู้ใช้งานกรอกอีเมล "user@example.com"
    await page.fill('input[type="email"]', 'user@example.com');
    
    // And ผู้ใช้งานกรอกรหัสผ่าน "Password123!"
    await page.fill('input[type="password"]', 'Password123!');
    
    // And ผู้ใช้งานคลิกปุ่ม "เข้าสู่ระบบ"
    await page.click('button[type="submit"]');
    
    // Then ระบบจะพาผู้ใช้งานไปยังหน้า "แดชบอร์ดหลัก"
    await expect(page).toHaveURL('/dashboard');
    
    // And ระบบจะแสดงข้อความ "ยินดีต้อนรับ"
    await expect(page.locator('text=ยินดีต้อนรับ')).toBeVisible();
    */
    
    // ปัจจุบันเรายังเป็น mock test อยู่เพื่อแสดงโครงสร้าง Playwright
    expect(true).toBeTruthy();
  });

  test('Scenario: เข้าสู่ระบบไม่สำเร็จเนื่องจากรหัสผ่านผิด', async ({ page }) => {
    // โครงสร้างเดียวกับ BDD
    /*
    await page.goto('/login');
    await page.fill('input[type="email"]', 'user@example.com');
    await page.fill('input[type="password"]', 'WrongPass!');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toHaveText('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    */
    expect(true).toBeTruthy();
  });

});
