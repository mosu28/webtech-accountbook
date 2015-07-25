function Calendar (date) {
	this.nowDate = date;
	this.prevDate = this.getPrevDate(this.nowDate);
	this.nextDate = this.getNextDate(this.nowDate);
	this.nowYear = this.nowDate.getFullYear();
	this.nowMonth = this.nowDate.getMonth() + 1;
	this.prevYear = this.prevDate.getFullYear();
	this.prevMonth = this.prevDate.getMonth() + 1;
	this.nextYear = this.nextDate.getFullYear();
	this.nextMonth = this.nextDate.getMonth() + 1;
	this.now = this.getCalendar(this.nowDate);
	this.prev = this.getCalendar(this.prevDate);
	this.next = this.getCalendar(this.nextDate);
}

/**
 * 日付からカレンダー情報の取得
 * @return array calendar カレンダー情報
 */
Calendar.prototype.getCalendar = function (date) {
	var calendar = [];
	var d = new Date(date);
	var m = d.getMonth();
	// console.log('' + (m + 1) + '月');
	var day = 1;
	for (var i = 0;i < 6;i++) {
		var c = [];
		for (var j = 0;j < 7;j++) {
			d.setDate(day);
			if ((i == 0 && d.getDay() != j) || d.getMonth() != m) {
				c.push(0);
			} else {
				c.push(day);
				day++;
			}
		}
		calendar.push(c);
	}
	// console.log(calendar);
	return calendar;
}

/**
 * 前の月のDateを返す
 * @return {Date} 前の月のDate
 */
Calendar.prototype.getPrevDate = function () {
	var d = new Date(this.nowDate);
	d.setMonth(d.getMonth() - 1);
	return d;
}

/**
 * 次の月のカレンダ情報を更新する
 * @return {Date} 次の月のDate
 */
Calendar.prototype.getNextDate = function () {
	var d = new Date(this.nowDate);
	d.setMonth(d.getMonth() + 1);
	return d;
}

/**
 * 前の月のカレンダーに移動する
 */
Calendar.prototype.movePrev = function () {
	this.next = this.now;
	this.nextDate = this.nowDate;
	this.now = this.prev;
	this.nowDate = this.prevDate;
	this.prevDate = this.getPrevDate();
	this.nowYear = this.nowDate.getFullYear();
	this.nowMonth = this.nowDate.getMonth() + 1;
	this.prevYear = this.prevDate.getFullYear();
	this.prevMonth = this.prevDate.getMonth() + 1;
	this.nextYear = this.nextDate.getFullYear();
	this.nextMonth = this.nextDate.getMonth() + 1;
	this.prev = this.getCalendar(this.prevDate);
}

/**
 * 次の月のカレンダーに移動する
 */
Calendar.prototype.moveNext = function () {
	this.prev = this.now;
	this.prevDate = this.nowDate;
	this.now = this.next;
	this.nowDate = this.nextDate;
	this.nextDate = this.getNextDate();
	this.nowYear = this.nowDate.getFullYear();
	this.prevYear = this.prevDate.getFullYear();
	this.prevMonth = this.prevDate.getMonth() + 1;
	this.nextYear = this.nextDate.getFullYear();
	this.nextMonth = this.nextDate.getMonth() + 1;
	this.nowMonth = this.nowDate.getMonth() + 1;
	this.next = this.getCalendar(this.nextDate);
}
