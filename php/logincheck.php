<?php
/**
 * logincheck.php
 * ログインをチェックする
 */

session_start();

$user_id = $_POST['user_id'];
$user_pass = $_POST['user_pass'];

$mysqli = new mysqli('127.0.0.1', $user_id, $user_pass);

//サーバに接続できたかどうか
if ($mysqli->connect_errno) {
	print '<p>データベースサーバへの接続に失敗しました。</'.$mysqli->connect_error;
	exit();
}

//アカウントデータベースに接続する
if (mysql_select_db("acccount")) {
} else {
	die("<br>データベースの選択に失敗しました。");
}
mysql_query("set names utf8");
$error = "";
$id = "";
$pass = "";

//ログイン認証
if (isset($user_id)) {
	$id = htmlspecialchars($user_id, ENT_QUOTES);
	$pass = htmlspecialchars(user)
}