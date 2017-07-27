//获取窗口高度
define(['zepto'],function(zepto){ 
        var winHeight = 0;
		function findDimensions(){
			if (window.innerHeight){
				winHeight = window.innerHeight;
			} else if((document.body) && (document.body.clientHeight)){
				winHeight = document.body.clientHeight;
			}	
			$(".indexList").css("height", winHeight-88);
		}


　　　　return {
　　　　　　findDimensions : findDimensions
　　　　};

});

