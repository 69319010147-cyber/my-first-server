// 1. เรียกใชงาน Module ที่ชื่อวา 'http' ซึ่งเปนระบบพื้นฐานของ Node.js สําหรับทําเซิรฟ เวอร
 const http = require('http');

 // 2. กําหนดชองทาง (Port) ที่เซิรฟเวอรจะใชสื่อสาร โดยใหใชของที่ Cloud กําหนดมา(process.env.PORT) ถาไมมีใหใช 3000
 const port = process.env.PORT || 3000;

 // 3. สรางเครื่องแมขาย (Server) ที่คอยรับคําขอ (req) และตอบกลับ (res)
 const server = http.createServer((req, res) => {

 // 3.1 ตั้งรหัสสถานะ 200 หมายถึง "ทํางานสําเร็จ (OK)"
 res.statusCode = 200;

 // 3.2 บอกเบราวเซอรของผูใชวา สิ่งที่สงกลับไปคือไฟลขอความแบบ HTML และรองรับภาษาไทย (utf-8)
 res.setHeader('Content-Type', 'text/html; charset=utf-8');

// 3.3 สงขอมูลหนาเว็บกลับไปหาผูใช (*** ใหนักศึกษาแกชื่อ-นามสกุลตรงนี้ ***)
res.end('<h1>สวัสดีครับ! นี่คือ Web Server ของ นายกฤษตเดชา เดชะมา รหัสนักศึกษา 69319010147 </h1><p>เครื่องแม่ข่ายทํางานปกติบนระบบ Railway แล้วครับผม!</p>');
 });

 // 4. สั่งใหเซิรฟเวอรเริ่มตนเปดรับฟงการเชื่อมตอตาม Port ที่กําหนดไว
 server.listen(port, () => {
 console.log(`Server is running! เครื่องแม่ข่ายเปิดทํางานแล้วที่ช่องทาง: ${port}`);
 });

res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>My Web Server</title>
<style>
body{
    margin:0;
    font-family:Arial,sans-serif;
    background:linear-gradient(135deg,#4facfe,#00f2fe);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.card{
    background:white;
    padding:40px;
    border-radius:20px;
    box-shadow:0 10px 30px rgba(0,0,0,.2);
    text-align:center;
    width:450px;
}

h1{
    color:#0077ff;
    margin-bottom:10px;
}

h2{
    color:#333;
    margin:5px 0;
}

p{
    color:#555;
    font-size:18px;
}

.badge{
    display:inline-block;
    margin-top:20px;
    padding:10px 20px;
    background:#28a745;
    color:white;
    border-radius:50px;
    font-weight:bold;
}

.footer{
    margin-top:25px;
    font-size:14px;
    color:#888;
}
</style>
</head>

<body>

<div class="card">
    <h1>🚀 Node.js Web Server</h1>

    <h2>นายกฤษตเดชา เดชะมา</h2>

    <p>รหัสนักศึกษา<br><strong>69319010147</strong></p>

    <div class="badge">
        ✅ Railway Server Online
    </div>

    <div class="footer">
        วิชา Web Programming
    </div>
</div>

</body>
</html>
`);
