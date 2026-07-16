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
