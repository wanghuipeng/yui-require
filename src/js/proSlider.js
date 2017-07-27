//proSlider
define(['zepto'],function(zepto){ 
　　function proSlider(){ 
		$('.progress-bar').each(function(){
			var _index = $('.progress-bar').index(this);
			_width = parseInt($('.progress-bar').eq(_index).css("width"));
			for(var i=0;i<=100;i++){ 
				if($(this).data("progress")=="run"){
					$(this).animate({
						width:i+'%'
					},150000/_width);    
			    }
			}
		});
	}

    return {
　　　　　   proSlider : proSlider
　　　　};
});