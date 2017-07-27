//折叠面板
define(['zepto'],function(zepto){ 
　　　　function accordions(ele){
		  	$(ele).click(function(){
				$(this).parent().toggleClass("active");
				$(this).parent().siblings().removeClass("active");
			});
		  }
　　　　return {
　　　　　　accordions : accordions
　　　　};

});
