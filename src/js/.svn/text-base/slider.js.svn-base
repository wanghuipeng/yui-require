//图片轮播
define(['zepto','swipe'],function(zepto,swipe){ 
　　　　function sliders(sliderId){
		var slider = $("#"+sliderId);
	    slider.find(".slide-trigger").find("li").eq(0).addClass("cur");
	    window.mySwipe = new Swipe(document.getElementById(sliderId), {
	        speed: 500,
	        auto: 3000,
	        callback: function(index, elem) {
	            slider.find(".slide-trigger").find("li").eq(index).addClass("cur").siblings().removeClass("cur");
	        }
	    });
};

　　　　return {
　　　　　　sliders : sliders
　　　　};

});
