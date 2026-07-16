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

/* Snow */
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
});

// 4. เริ่มเปิดรับการเชื่อมต่อ
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});

// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http'
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>สุ่มปุ่ม</title>

<style>
body{
    margin:0;
    overflow:hidden;
    font-family:Arial;
    background:#f5f5f5;
}

#randomBtn{
    position:absolute;
    padding:12px 20px;
    cursor:pointer;
    font-size:16px;
}

#popup{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:none;
    z-index:999;
}

#popup img{
    width:250px;
    border-radius:15px;
    box-shadow:0 0 20px rgba(0,0,0,.4);
}
</style>

</head>
<body>

<button id="randomBtn">กดสิ!</button>

<div id="popup">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1s9rPURLpZKujalADtmKUOzAvZUuqySDRxyr9wTNzUH3OfXXO5f0DvHf6&s=10">
</div>

<script>

// สุ่มตำแหน่งปุ่ม
const btn = document.getElementById("randomBtn");

const maxX = window.innerWidth - 120;
const maxY = window.innerHeight - 60;

btn.style.left = Math.random() * maxX + "px";
btn.style.top = Math.random() * maxY + "px";

// เมื่อกดปุ่ม
btn.onclick = () => {

    const popup = document.getElementById("popup");

    popup.style.display = "block";

    setTimeout(()=>{
        popup.style.display = "none";
    },2000);

};

</script>

</body>
</html>
`);
});

// 4. เปิดใช้งาน Server
server.listen(port, () => {
    console.log(\`Server running at http://localhost:\${port}\`);
});
