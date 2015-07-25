<html>
	<head>
		<meta charset="utf-8">
		<title>家計簿アプリ</title>
		<script src="bower_components/jquery/dist/jquery.min.js"></script>
		<script src="bower_components/underscore/underscore-min.js"></script>
		<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/main.css">
	<body>
		<h2 class="calendar-title"></h2>
		<div class="calendar">
			<div class="prev-area"><button class="prev-btn glyphicon glyphicon-menu-left"></button></div>
			<div class="next-area"><button class="next-btn glyphicon glyphicon-menu-right"></button></div>
			<table class="calendar-table"><tbody></tbody></table>
		</div>
		<div id="submit-window">
			<div id="submit-contents">
				<div id="submit-form">
					<p>日時: <input class="date-time" type="text" name="time"></p>
					<p>収入・支出: 
						<input class="io-select" type="radio" name="io" value="収入" checked>収入
						<input class="io-select" type="radio" name="io" value="支出">支出
					</p>
					<p>分類: <select class="type-list" name="type"></select></p>
					<p>金額: <input class="price-text" type="text" name="price" placeholder="金額を入力してください"> 円</p>
					<p>内容: <input class="use-text" type="text" name="use"></p>
					<div class="btn-area">
						<button class="btn-primary submit-btn">追加</button>
						<button class="btn-danger cancel-btn">キャンセル</button>
					</div>
				</div>
			</div>
		</div>
		<script src="js/util/validation.js"></script>
		<script src="js/util/calendar.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>

<?php

$inopt = ['振込', '給料', 'その他'];
$outopt = ['食費', '交際費', '習い事', '交通費', '娯楽', '生活費', '衣服', '美容', '健康', '光熱費', 'その他'];

function addOptions () {

}