//拖拽
define(['defaultEvent'],function(defaultEvent){
	function dragDrops(ele){
		// 获取节点
	  var dragDrop = document.getElementById(ele); 
	  var oW,oH; 
	  if(dragDrop){
	  	  // 绑定touchstart事件
		  dragDrop.addEventListener("touchstart", function(e) {
		   console.log(e);
		   var touches = e.touches[0];
		   oW = touches.clientX - dragDrop.offsetLeft;
		   oH = touches.clientY - dragDrop.offsetTop;
		   //阻止页面的滑动默认事件
		   document.addEventListener("touchmove",defaultEvent.defaultEvent,false);
		  },false);
		 
		  dragDrop.addEventListener("touchmove", function(e) {
		   var touches = e.touches[0];
		   var oLeft = touches.clientX - oW;
		   var oTop = touches.clientY - oH;
		   if(oLeft < 0) {
		    oLeft = 0;
		   }else if(oLeft > document.documentElement.clientWidth - dragDrop.offsetWidth) {
		    oLeft = (document.documentElement.clientWidth - dragDrop.offsetWidth);
		   }
		   dragDrop.style.left = oLeft + "px";
		   dragDrop.style.top = oTop + "px";
		  },false);
		   
		  dragDrop.addEventListener("touchend",function() {
		   document.removeEventListener("touchmove",defaultEvent.defaultEvent,false);
		  },false);
	  }
	}
	return {
　　　　　　dragDrops : dragDrops
　　　　};
	  
});