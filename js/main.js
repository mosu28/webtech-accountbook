$(function () {

	var weekList = ["日", "月", "火", "水", "木", "金", "土"];

	//カレンダーテーブルの作成
	for (var i = 0;i < 7;i++) {
		if (i != 0) $('.calendar-table tbody').append('<tr class="week">');
		else $('.calendar-table tbody').append('<tr class="week-titles">');
		for (var j = 0;j < 7;j++) {
			if (i == 0) {
				$('tr:last-child').append('<td class="week-title"><span>' + weekList[j] + '</span></td>');
			} else {
				$('tr:last-child').append('<td class="day"></td>');
			}
		}
	}

	//日付データの格納
	var calendar = new Calendar(new Date()),
		showCalendar = function () {
			//カレンダーデータを挿入
			$('.calendar-title').append(calendar.nowYear + '年' + calendar.nowMonth + '月');
			var trlist = $('.calendar-table tbody').find('.week');
			for (var i = 0;i < 6;i++) {
				var tdlist = $(trlist[i]).find('td');
				for (var j = 0;j < 7;j++) {
					if (!calendar.now[i][j]) continue;
					$(tdlist[j]).append('<div><p>' + calendar.now[i][j] + '</p></div>');
					$(tdlist[j]).children('div').append('<div class="glyphicon glyphicon-plus-sign add-btn" data-toggle="tooltip" data-placement="left" title="追加"></div>');
				}
			}
			$('.add-btn').tooltip();
			$('.add-btn').on('click', modalEvent);
		},
		removeCalendar = function () {
			$('.calendar-title').text('');
			var trlist = $('.calendar-table tbody').find('tr');
			for (var i = 0;i < 6;i++) {
				var tdlist = $(trlist[i + 1]).find('td');
				for (var j = 0;j < 7;j++) {
					$(tdlist[j]).empty();
				}
			}
		},
		//家計簿更新データを入力するモーダルウィンドウの表示
		modalEvent = function () {
			var that = this,
				inopt = ['振込', '給料', 'その他'],
				outopt = ['食費', '交際費', '習い事', '交通費', '娯楽', '生活費', '衣服', '美容', '健康', '光熱費', 'その他'],
				io_flag = true;
			$(this).blur();
			$('#submit-contents').css({'top': ($(window).height() / 2 - 175) + 'px'});
			$('#submit-contents').css({'left': ($(window).width() / 2 - 150) + 'px'});
			$('#submit-window').fadeIn('normal');
			//フォームUIの初期値の追加
			$('.date-time[name="time"]').val(function () {
				var time = '';
				time += calendar.nowYear + '/';
				time += calendar.nowMonth + '/';
				time += $(that).parent('div').children('p').text();
				return time;
			});
			_.each(inopt, function (x) {
				$('.type-list').append('<option value="' + x + '">' + x + '</option>');
			});
			//分類の切り替えイベント
			$('.io-select').change(function () {
				$('.type-list').empty();
				if (io_flag) {
					_.each(outopt, function (x) {
						$('.type-list').append('<option value="' + x + '">' + x + '</option>');
					});
				} else {
					_.each(inopt, function (x) {
						$('.type-list').append('<option value="' + x + '">' + x + '</option>');
					});
				}
				io_flag = !io_flag;
			});
			//データの追加処理
			$('.submit-btn').click(function () {
				var validation = new Validation();
				var options = {
					time: $(':text[name="time"]').val(),
					io: $(':radio[name="io"]:checked').val(),
					type: $('select[name="type"]').val(),
					price: $(':text[name="price"]').val(),
					use: $(':text[name="use"]').val()
				};
				if (!validation.isTime(options.time)) {
					alert('年/月/日の形式で入力してください。');
				} else if (!validation.isPrice(options.price)) {
					alert('金額を正しく入力してください。');
				}
			});
			//キャンセルボタンのイベント処理
			$('.cancel-btn').click(function () {
				$('#submit-window').fadeOut('normal', function () {
					$('#submit-window').hide();
				});
			});
		};

	//初期カレンダーの表示
	showCalendar();

	//buttonクリック時のイベント付加
	$('.prev-btn').click(function () {
		removeCalendar();
		calendar.movePrev();
		showCalendar();
	});
	$('.next-btn').click(function () {
		removeCalendar();
		calendar.moveNext();
		showCalendar();
	});
});