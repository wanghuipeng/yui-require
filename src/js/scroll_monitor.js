//bottom fixed(滚动定位)
define(['zepto'],function(zepto){
	var bottom_fixed_top=$(".bottom-fixed").offset().top;
	var win_h=$(window).height();
	var min_h=bottom_fixed_top-win_h;
	$(".bottom-fixed").css({"position":"fixed"});
	function scroll_monitors(){
		if($(window).scrollTop()>=min_h){
			$(".bottom-fixed").css({"position":"static"});
	        $(".bottom-fixed").addClass("in");
		}
		else {
			$(".bottom-fixed").css({"position":"fixed"});
		    $(".bottom-fixed").removeClass("in");
		}
	}
	return {
　　　　　　scroll_monitors : scroll_monitors
　　　　};
});