//modals
define(['zepto'],function(zepto){ 
　　//函数
	function hideModalShowAlert(){
		var _modal_role =$(".hideModalShowAlert").data("role");
		$(".yui-modal-overlay").remove();
		$(".hideModalShowAlert").parents(".yui-modal").remove();
		$("body").append("<div class='yui-modal-overlay' id="+_modal_role+"-overlay></div>"); //模态框 
		yui_alert(this._modal_title_1,this._modal_text_1);
	}
	function hideModalShowConfirm(){
		var _modal_role =$(".hideModalShowConfirm").data("role");
		$(".yui-modal-overlay").remove(); 
		$(".hideModalShowConfirm").parents(".yui-modal").remove(); 
		$("body").append("<div class='yui-modal-overlay' id="+_modal_role+"-overlay></div>"); //模态框 
		yui_confirm(this._modal_title_1,this._modal_text_1,this._modal_title_2,this._modal_text_2);
	}

    return {
　　　　　   hideModalShowAlert : hideModalShowAlert,
		   hideModalShowConfirm : hideModalShowConfirm
　　　　};
});
