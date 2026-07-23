let html = `
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
border:1px solid rgba(255,255,255,.3);
padding:35px;
border-radius:20px;
width:700px;
color:white;
box-shadow:0 10px 30px rgba(0,0,0,.5);
}

h1{
text-align:center;
margin-bottom:20px;
}

table{
width:100%;
border-collapse:collapse;
margin-top:15px;
background:rgba(255,255,255,.1);
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
}

.status{
margin-top:20px;
text-align:center;
font-weight:bold;
color:#9cff9c;
}

.snow{
position:absolute;
width:8px;
height:8px;
background:white;
border-radius:50%;
animation:snow linear infinite;
opacity:.8;
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

<p style="text-align:center">
นายกฤษตเดชา เดชะมา<br>
รหัสนักศึกษา 69319010147
</p>

<table>

<tr>
<th>รหัสนักศึกษา</th>
<th>ชื่อ-นามสกุล</th>
</tr>
`;
