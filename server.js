// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http'
const http = require('http');

// 2. กำหนดช่องทาง (Port) ที่เซิร์ฟเวอร์จะใช้สื่อสาร
const port = process.env.PORT || 3000;

// 3. สร้างเครื่องแม่ข่าย (Server)
const server = http.createServer((req, res) => {

    // 3.1 ตั้งรหัสสถานะ 200
    res.statusCode = 200;

    // 3.2 กำหนดชนิดข้อมูลเป็น HTML รองรับภาษาไทย
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 3.3 ส่งหน้าเว็บกลับไปยังผู้ใช้
    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Winter Forest Server</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial,sans-serif;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    position: relative;

    background:
    linear-gradient(rgba(20,40,70,.45),rgba(20,40,70,.45)),
    url("https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1600&q=80")
    center/cover no-repeat;
}

.card{
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(10px);
    border:1px solid rgba(255,255,255,.25);
    border-radius:20px;
    padding:40px;
    width:500px;
    text-align:center;
    color:white;
    box-shadow:0 10px 30px rgba(0,0,0,.4);
    z-index: 10;
}

h1{
    font-size:36px;
    margin-bottom:15px;
}

h2{
    margin-bottom:15px;
}

p{
    font-size:18px;
    line-height:1.8;
}

.status{
    margin-top:20px;
    display:inline-block;
    background:#1abc9c;
    padding:10px 25px;
    border-radius:30px;
    font-weight:bold;
}

.footer{
    margin-top:20px;
    color:#eee;
    font-size:14px;
}

/* --- ปุ่มสุ่มตำแหน่ง (Random Button) --- */
.random-btn {
    position: absolute;
    padding: 12px 24px;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.4);
    transition: all 0.2s ease;
    z-index: 20;
}

.random-btn:hover {
    background: #c0392b;
    transform: scale(1.05);
}

/* --- ส่วนแสดงรูปภาพที่โผล่ขึ้นมา (Pop-up Image) --- */
.pop-image-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: white;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6);
}

.pop-image-container.show {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: auto;
}

.pop-image-container img {
    max-width: 300px;
    display: block;
    border-radius: 8px;
}

/* Snow */
.snow{
    position:absolute;
    width:8px;
    height:8px;
    background:white;
    border-radius:50%;
    opacity:.8;
    animation:snow linear infinite;
    z-index: 1;
}

@keyframes snow{
    from{
        transform:translateY(-100vh);
    }
    to{
        transform:translateY(100vh);
    }
}
</style>

</head>
<body>

<div class="card">
    <h1>❄ Winter Forest ❄</h1>

    <h2>นายกฤษตเดชา เดชะมา</h2>

    <p><strong>รหัสนักศึกษา :</strong> 69319010147</p>

    <p>เครื่องแม่ข่ายทำงานปกติบนระบบ Railway</p>

    <div class="status">
        🟢 Server Online
    </div>

    <div class="footer">
        Node.js Web Server
    </div>
</div>

<!-- เพิ่มปุ่มสุ่ม -->
<button class="random-btn" id="magicBtn">คลิกตรงนี้สิ! 🪄</button>

<!-- เพิ่มกล่องใส่รูปภาพที่ต้องการให้โผล่ -->
<div class="pop-image-container" id="popImage">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1s9rPURLpZKujalADtmKUOzAvZUuqySDRxyr9wTNzUH3OfXXO5f0DvHf6&s=10" alt="Secret Image">
</div>

<script>
// --- โค้ดสร้างหิมะตกของเดิม ---
for(let i=0;i<120;i++){
    const snow=document.createElement("div");
    snow.className="snow";
    snow.style.left=Math.random()*100+"vw";
    snow.style.animationDuration=(4+Math.random()*6)+"s";
    snow.style.animationDelay=Math.random()*5+"s";
    snow.style.width=snow.style.height=(3+Math.random()*6)+"px";
    document.body.appendChild(snow);
}

// --- โค้ดส่วนปุ่มสุ่มและแสดงรูปภาพ (ที่เพิ่มใหม่) ---
const btn = document.getElementById('magicBtn');
const popImage = document.getElementById('popImage');

// ฟังก์ชันสำหรับสุ่มตำแหน่งปุ่มไม่ให้หลุดขอบหน้าจอ
function randomizeButtonPosition() {
    const padding = 100; // ป้องกันปุ่มติดขอบจอเกินไป
    const maxX = window.innerWidth - padding;
    const maxY = window.innerHeight - padding;
    
    const randomX = Math.max(padding/2, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding/2, Math.floor(Math.random() * maxY));
    
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
}

// สุ่มตำแหน่งปุ่มทันทีที่โหลดหน้าเว็บเสร็จ
randomizeButtonPosition();

// กิมมิคเพิ่มเติม: สุ่มย้ายตำแหน่งปุ่มหนีเมื่อผู้ใช้พยายามจะเอาเมาส์มาชี (ลบฟังก์ชันนี้ได้ถ้าอยากให้กดง่ายๆ)
btn.addEventListener('mouseover', randomizeButtonPosition);

// เมื่อคลิกปุ่ม
btn.addEventListener('click', (e) => {
    // ป้องกันไม่ให้ปุ่มวาร์ปหนีตอนคลิก
    e.stopPropagation(); 
    
    // แสดงรูปภาพขึ้นมา
    popImage.classList.add('show');
    
    // ตั้งเวลาให้รูปภาพหายไปหลังจากผ่านไป 2.5 วินาที (2500 มิลลิวินาที)
    setTimeout(() => {
        popImage.classList.remove('show');
        // เมื่อรูปหายไปแล้ว ให้สุ่มตำแหน่งปุ่มไปที่ใหม่รอไว้เลย
        randomizeButtonPosition();
    }, 2500);
});
</script>

</body>
</html>
`);
});

// 4. เริ่มเปิดรับการเชื่อมต่อ
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
