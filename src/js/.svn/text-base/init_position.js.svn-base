//时间轴初始化水平位移
define(['zepto'],function(zepto){
	function init_positions(){
		$(".timeline").each(function(){
			var _last = parseInt($(this).find(".steps-hor .ul-3 li:last-child").find("p:first-child").text());
		    var _first = parseInt($(this).find(".steps-hor .ul-3 li:first-child").find("p:first-child").text());
		    var _part = _last - _first;
		    var _numb = (parseInt($(this).find(".orange-bubble").text())-_first)/_part*100;
		    if(_numb>=100){
		    	$(this).find(".ul-2").css("width","100%");
		    }else{
		    	$(this).find(".ul-2").css("width",_numb+"%");
		    }
		    $(this).find(".orange-bubble").css("right","-3px");
		});
	}
	return {
　　　　　　init_positions : init_positions
　　　　};
});