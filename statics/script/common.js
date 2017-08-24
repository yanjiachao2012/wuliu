var pop = {
	showPop: function(obj) {
		console.log('1')
		$("#" + obj).show();
	},
	hidePop: function(obj) {
		$("#" + obj).hide();
	}
}

$.fn.tab = function(can) {
	can = $.extend({
		tabs: null, //便签对象
		changes: null, //切换对象
		active: "", //标签选中状态名，默认为active
		defaultObj: 0, //默认展示对象序号
		onTab: function(index) {

			} //回调函数
	}, can || {});

	var TABS = can.tabs,
		CHANGES = can.changes || null,
		ACTIVE = can.active || "active",
		DEFAULT = can.defaultObj || 0;

	var TARGET = this;

	init();

	TARGET.on("click", TABS, function() {
		var $this = $(this);
		var i = $this.index();
		$this.addClass(ACTIVE).siblings().removeClass(ACTIVE);
		tabObj(i);
		can.onTab && can.onTab(i);
	});

	function init() {
		tabObj(DEFAULT);
		TARGET.find(TABS).eq(DEFAULT).addClass(ACTIVE);
		can.onTab && can.onTab(DEFAULT);
	}

	function tabObj(i) {
		if (CHANGES) {
			TARGET.find(CHANGES).eq(i).show().siblings().hide();
		}
	}
}