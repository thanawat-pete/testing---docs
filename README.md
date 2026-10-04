# T-Check: Project Testing & Documentation

แฟ้มนี้ถูกสร้างขึ้นเพื่อแยกส่วน **การทดสอบระบบ (End-to-End Testing)** และ **เว็บไซต์แสดงเอกสารข้อกำหนด (Documentation Site)** ออกจากโปรเจกต์หลัก (`T-check`) เพื่อไม่ให้โค้ดปะปนกัน และง่ายต่อการทำ CI/CD

## 📂 โครงสร้างโฟลเดอร์

```text
project-testing/
├── docs/                 # เอกสารข้อกำหนดระบบ (Markdown) เช่น SPRS, Test Cases, BDD
├── docs-site/            # เว็บไซต์ Static (HTML/CSS/JS) สำหรับแสดงผลเอกสารให้ทีมดูแบบ UI
├── tests/                # สคริปต์ Playwright สำหรับการรัน E2E Testing
├── playwright.config.js  # ไฟล์ตั้งค่าของ Playwright
└── package.json          # ไฟล์จัดการ Dependency สำหรับระบบทดสอบ
```

---

## 🚀 การติดตั้ง (Installation)

เนื่องจากโปรเจกต์นี้แยก `package.json` เป็นของตัวเอง คุณต้องติดตั้ง Dependency ใหม่ในโฟลเดอร์นี้:

```bash
cd project-testing
npm install
```

*(หมายเหตุ: ต้องทำการติดตั้ง Playwright browsers ด้วยคำสั่ง `npx playwright install` หากเป็นการรันครั้งแรก)*

---

## 🧪 การรันทดสอบ E2E (Playwright)

รันคำสั่งเหล่านี้จากภายในโฟลเดอร์ `project-testing/`:

- **รันเทสแบบ Background (Headless):**
  ```bash
  npm run test:e2e
  ```
- **รันเทสพร้อมเปิด UI (UI Mode):** เหมาะสำหรับการ Debug
  ```bash
  npm run test:e2e-ui
  ```

> **ข้อควรระวัง:** 
> 1. การทดสอบแบบ E2E (เช่น `document.spec.js`) บางตัวอาจต้องใช้ **Google Account Credentials**
> 2. อย่าลืมสร้างไฟล์ `.env` ในโฟลเดอร์ `project-testing` และใส่ `TEST_USER` กับ `TEST_PASS` ไว้
> 3. `playwright.config.js` ถูกตั้งค่าให้รัน `npm run dev` จากโฟลเดอร์โปรเจกต์หลัก (Parent Directory) อัตโนมัติก่อนเริ่มเทส

---

## 📖 การเปิดดูเว็บไซต์เอกสาร (Docs Site)

เว็บไซต์เอกสาร (Docs Site) เป็น Static Web คุณสามารถรัน Local Server ด้วยคำสั่งต่างๆ ได้ เช่น Python:

```bash
cd project-testing
python -m http.server 8765 --directory docs-site
```
จากนั้นเปิดเบราว์เซอร์ไปที่: [http://localhost:8765](http://localhost:8765)

---

**เวอร์ชันของเอกสารปัจจุบัน:** v2.0.0
