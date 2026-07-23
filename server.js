const http = require('http');
// 1. เรียกใชงาน Pool จากไลบรารี pg สําหรับจัดการการเชื่อมตอฐานขอมูล
const { Pool } = require('pg');
// 2. ตั้งคาการเชื่อมตอ โดยดึง URL มาจาก Environment Variable ของ Railway
const pool = new Pool({
connectionString: process.env.DATABASE_URL,
});
const port = process.env.PORT || 3000;
const server = http.createServer(async (req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html; charset=utf-8');

try {
// 3. ขอเชื่อมตอและสงคําสั่ง SQL ไปดึงขอมูลจากตาราง students
const client = await pool.connect();
const result = await client.query('SELECT * FROM students');
client.release(); // คนืการเชื่อมตอเมื่อใชงานเสร็จ
// 4. นําขอมูลที่ได(result.rows) มาประกอบเปนตาราง HTML
let html = `<h1>ฐานข้อมูลนักศึกษา (ทดสอบการเชื่อมต่อ)</h1>`;
html += `<table border="1" cellpadding="10">`;
html += `<tr><th>รหัสนักศึกษา</th><th>ชื่อ-นามสกุล</th></tr>`;
// วนลูปนําขอมูลแตละแถวมาแสดง
result.rows.forEach(row => {
html += `<tr><td>${row.student_id}</td><td>${row.student_name}</td></tr>`;
});
html += `</table>`;
res.end(html);
} catch (err) {
// กรณเีชื่อมตอไมไดหรือเขียนชื่อตารางผิด
console.error(err);
res.end(`<h1>เกิดขอผิดพลาด!</h1><p>${err.message}</p>`);
}
});
server.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Winter Forest Database</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Arial,sans-serif;
height:100vh;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;

background:
linear-gradient(rgba(20,40,70,.45),rgba(20,40,70,.45)),
url("https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1600&q=80")
center/cover no-repeat;
}

.card{
width:760px;
background:rgba(255,255,255,.15);
backdrop-filter:blur(10px);
border:1px solid rgba(255,255,255,.3);
border-radius:20px;
padding:35px;
color:white;
box-shadow:0 10px 30px rgba(0,0,0,.45);
}

h1{
text-align:center;
margin-bottom:10px;
}

.info{
text-align:center;
margin-bottom:20px;
line-height:1.8;
}

table{
width:100%;
border-collapse:collapse;
margin-top:15px;
background:rgba(255,255,255,.08);
}

th,td{
padding:12px;
border:1px solid rgba(255,255,255,.2);
text-align:center;
}

th{
background:rgba(255,255,255,.2);
}

tr:hover{
background:rgba(255,255,255,.15);
transition:.3s;
}

.status{
margin-top:20px;
text-align:center;
font-weight:bold;
color:#98ff98;
}

/* หิมะ */

.snow{
position:absolute;
background:white;
border-radius:50%;
opacity:.85;
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

<h1>❄ Winter Forest Database ❄</h1>

<div class="info">
<strong>นายกฤษตเดชา เดชะมา</strong><br>
รหัสนักศึกษา 69319010147
</div>

<table>

<tr>
<th>รหัสนักศึกษา</th>
<th>ชื่อ-นามสกุล</th>
</tr>
`;

        // แสดงข้อมูลจากฐานข้อมูล
        result.rows.forEach(row => {
            html += `
<tr>
<td>${row.student_id}</td>
<td>${row.student_name}</td>
</tr>
`;
        });

        html += `
</table>

<div class="status">
🟢 PostgreSQL Connected Successfully
</div>

</div>

<script>

// สร้างหิมะ
for(let i=0;i<120;i++){

const snow=document.createElement("div");

snow.className="snow";

const size=Math.random()*6+3;

snow.style.width=size+"px";
snow.style.height=size+"px";

snow.style.left=Math.random()*100+"vw";

snow.style.animationDuration=(4+Math.random()*6)+"s";

snow.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(snow);

}

</script>

</body>
</html>
`;

        res.end(html);

    } catch (err) {

        console.error(err);

        res.end(`
        <h1>เกิดข้อผิดพลาด!</h1>
        <p>${err.message}</p>
        `);

    }

});

server.listen(port, () => {
    console.log(\`Server is running on port: \${port}\`);
});
