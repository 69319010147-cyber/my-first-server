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

res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Winter Server</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial,sans-serif;
    overflow:hidden;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    background:
    linear-gradient(rgba(20,40,70,.4),rgba(20,40,70,.4)),
    url("https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1600&q=80")
    center/cover no-repeat;
}

.card{
    background:rgba(255,255,255,.18);
    backdrop-filter:blur(10px);
    color:white;
    padding:35px;
    border-radius:20px;
    text-align:center;
    width:460px;
    box-shadow:0 10px 30px rgba(0,0,0,.4);
}

.card h1{
    margin-bottom:15px;
}

.card p{
    margin:10px 0;
}

.status{
    display:inline-block;
    margin-top:15px;
    background:#1abc9c;
    padding:10px 20px;
    border-radius:25px;
}

/* ปุ่ม */
#magicBtn{
    position:fixed;
    right:30px;
    bottom:30px;
    border:none;
    padding:15px 22px;
    border-radius:50px;
    background:#4CAF50;
    color:white;
    cursor:pointer;
    font-size:16px;
    transition:.3s;
}

#magicBtn:hover{
    transform:scale(1.1);
}

/* รูปที่จะโผล่ */
#popupImg{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) scale(.7);
    width:300px;
    border-radius:20px;
    box-shadow:0 0 40px rgba(255,255,255,.7);
    display:none;
    animation:pop .3s ease;
}

@keyframes pop{
    from{
        opacity:0;
        transform:translate(-50%,-50%) scale(.3);
    }
    to{
        opacity:1;
        transform:translate(-50%,-50%) scale(1);
    }
}

/* หิมะ */
.snow{
    position:absolute;
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

    <h2>นายรพีพัทธ์ เจริญรัญวุฒิกุล</h2>

    <p>รหัสนักศึกษา : 123456789</p>

    <div class="status">
        🟢 Railway Online
    </div>
</div>

<button id="magicBtn">🎁 กดดูสิ</button>

<img
id="popupImg"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1s9rPURLpZKujalADtmKUOzAvZUuqySDRxyr9wTNzUH3OfXXO5f0DvHf6&s=10">

<script>

// หิมะ
for(let i=0;i<120;i++){
    let s=document.createElement("div");
    s.className="snow";
    let size=Math.random()*6+3;
    s.style.width=size+"px";
    s.style.height=size+"px";
    s.style.left=Math.random()*100+"vw";
    s.style.animationDuration=(4+Math.random()*6)+"s";
    s.style.animationDelay=Math.random()*5+"s";
    document.body.appendChild(s);
}

// ปุ่ม
const btn=document.getElementById("magicBtn");
const img=document.getElementById("popupImg");

btn.onclick=()=>{

    img.style.display="block";

    setTimeout(()=>{
        img.style.display="none";
    },3000);

};

</script>

</body>
</html>
`);

// 4. เริ่มเปิดรับการเชื่อมต่อ
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
