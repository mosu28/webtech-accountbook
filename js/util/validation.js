function Validation () {
	var that = this,
		validationTime = /^[1-9][0-9]{3}\/((((1[02])|(0?[13578]))\/31)|(((1[0-2])|(0?(1|[3-9])))\/30)|((1[0-2])|(0?[1-9]))\/(([12][0-9])|(0?[1-9])))$/,
		validationPrice = /^([0-9]+,?)*[0-9]$/;
	that.isTime = function (time) {
		return time.match(validationTime);
	}
	that.isPrice = function (price) {
		return price.match(validationPrice);
	}
};
