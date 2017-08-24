$(function() {
	$(".product-sort").on("click", '.more-btn', function() {
		var $this = $(this);
		if ($this.attr("data-status") == 'open') {
			$this.text('更多').attr("data-status", 'close')
		} else {
			$this.text('收起').attr("data-status", 'open')
		}
		$this.parents('dd').toggleClass('showItem');
	})
})