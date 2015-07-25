<?php

$url = "localhost";
$user = "root";
$pass = "WsgMoa67";
$db = "webtech";

$link = mysql_connect($url, $user, $pass) or die("MySQLの接続に失敗しました。");
$sdb = mysql_select_db($db, $link) or die("データベースの選択に失敗しました。");

$query = "select * from $db";
$data = mysql_query($query);

mysql_close($link);

echo $data;
