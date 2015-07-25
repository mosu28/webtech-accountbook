<html>
	<head>
		<meta charset="utf-8">
		<title>ログインフォーム</title>
		<link rel="stylesheet" href="css/main.css">
	</head>
	<body>
		<h1>ログインフォーム</h1>
		<form action="php/logincheck.php" method="post">
			<p>User:<input type="text" name="user_id" ></p>
			<p>Pass:<input type="password" name="user_pass"></p>
			<p><button type="submit">ログイン</button></p>
		</form>
	</body>
</html>