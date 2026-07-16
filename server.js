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
