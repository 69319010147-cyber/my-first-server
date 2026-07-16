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
 res.end('
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Winter Forest</title>

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

    background:
    linear-gradient(rgba(15,30,55,.35),rgba(15,30,55,.35)),
    url("https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1600&q=80")
    center/cover no-repeat;
}

.card{
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(10px);
    border:1px solid rgba(255,255,255,.3);
    border-radius:20px;
    padding:40px;
    text-align:center;
    color:white;
    box-shadow:0 10px 30px rgba(0,0,0,.4);
}

.card h1{
    font-size:36px;
    margin-bottom:15px;
}

.card h2{
    margin-bottom:10px;
}

.card p{
    font-size:18px;
    line-height:1.8;
}

.status{
    margin-top:20px;
    display:inline-block;
    padding:10px 20px;
    background:#1abc9c;
    border-radius:30px;
    font-weight:bold;
}

/* หิมะ */
.snow{
    position:absolute;
    width:8px;
    height:8px;
    background:white;
    border-radius:50%;
    opacity:.8;
    animation:snow linear infinite;
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
    <h1>❄ Winter Forest Server ❄</h1>
    <h2>นายกฤษตเดชา เดชะมา</h2>

    <p>รหัสนักศึกษา : <b>69319010147</b></p>

    <p>เครื่องแม่ข่ายทำงานปกติบนระบบ Railway</p>

    <div class="status">
        🟢 Server Online
    </div>
</div>

<script>
for(let i=0;i<120;i++){
    const snow=document.createElement("div");
    snow.className="snow";
    snow.style.left=Math.random()*100+"vw";
    snow.style.animationDuration=(4+Math.random()*6)+"s";
    snow.style.animationDelay=Math.random()*5+"s";
    snow.style.width=snow.style.height=(3+Math.random()*6)+"px";
    document.body.appendChild(snow);
}
</script>

</body>
</html>
`);

 // 4. สั่งใหเซิรฟเวอรเริ่มตนเปดรับฟงการเชื่อมตอตาม Port ที่กําหนดไว
 server.listen(port, () => {
 console.log(`Server is running! เครื่องแม่ข่ายเปิดทํางานแล้วที่ช่องทาง: ${port}`);
 });
