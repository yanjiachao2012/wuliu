! function() {
	/**日期***/
	laydate.skin('molv');
	laydate({
		elem: '#startDate'
	});
	laydate({
		elem: '#endDate'
	});
}();
$(function() {
	$('.pageMenu').jqPaginator({
		totalPages: 100,
		visiblePages: 6,
		currentPage: 1,

		first: '<li class="first"><a href="javascript:void(0);">第一页</a></li>',
		prev: '<li class="prev"><a href="javascript:void(0);">上一页</a></li>',
		next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
		last: '<li class="last"><a href="javascript:void(0);">最后一页</a></li>',
		page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
		onPageChange: function(num) {
			console.log(num)

		}
	});

	//tab切换

	$("#manager-index-content").tab({
		tabs: ".manager-index-tab .tab-item", //标签
		changes: ".manager-index-table .tab-table", //切换对象
		defaultObj: 0, //默认展示对象序号
		active: "activeItem", //标签选中状态名，默认为active
		onTab: function(index) {} //回调函数
	});
});

function toggleShow(obj) {
	var _this = $(obj);
	var dataStatus = _this.attr('data-status');
	if (dataStatus == 'open') {
		_this.text('收起')
		_this.attr('data-status', 'close')
	} else {
		_this.text('展开')
		_this.attr('data-status', 'open')
	}
	$(obj).toggleClass('showActive');
	$(obj).parents('.outer-tr').next().toggle();
}