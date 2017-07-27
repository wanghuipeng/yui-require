require.config({
　　　　paths: {
　　　　　　'zepto': "zepto.min",
　　　　　　'swipe': 'swipe',
　　　　　　'iscroll': 'iscroll',
           'pullRefresh': 'pullRefresh',
           'swiper': 'swiper'
　　　　}
});
//图片轮播
require(['slider'],function(slider){
　　slider.sliders("slider1");
    slider.sliders("slider2");
});
//折叠面板
require(['accordion'],function(accordion){ 
  accordion.accordions(".accordion .accordion-header");
});
//拖拽
require(['dragDrop'],function(dragDrop){ 
	dragDrop.dragDrops("dragDrop");
});
//滚动条
require(['proSlider'],function(proSlider){
　　 proSlider.proSlider();
});
//倒计时
require(['countdown'],function(countdown){
	setInterval(countdown.getRTime,1000);
});
//点击显示索引字母
require(['zepto'],function(zepto){
	$(".letter-list li").click(function(){
		var _letter = $(this).text();
		$("body .slelected-letter").remove();
		$("body").append("<div class='slelected-letter'>"+_letter+"</div>");
		setTimeout(function(){
			$("body .slelected-letter").remove();
		},1000);
	});
	$(".letter-list li").on("touchmove",function(){
		$("body .slelected-letter").remove();
		var _letter = $(this).text();
		$("body").append("<div class='slelected-letter'>"+_letter+"</div>");
	});
});
//innerScrollElastic（水平弹性--用js实现）
require(['zepto'],function(zepto){
    var touch={};
    touch.current=0;
    touch.lenght=1;
    var touchElem=$(".innerScrollElastic .tab-contents")[0];
     
    $(touchElem).unbind().bind("touchstart",function(e){
        touch.x1 = e.touches[0].pageX;
    }).bind("touchmove",function( e ){
        touch.x2 = e.touches[0].pageX;
        touch.x3 = touch.endx+(touch.x2-touch.x1);
        $(this).css("-webkit-transform","translate3d("+touch.x3+"px, 0px, 0px)");
        e.preventDefault();
     
    }).bind("touchend",function(e){
        if(Math.abs(touch.x2 - touch.x1) >=30){
            touch.i = touch.x2 - touch.x1 > 0 ? -1 : 1;
            touch.current=touch.current+touch.i;
            if(touch.current==-1){touch.current=0}else if (touch.current>=touch.lenght){touch.current=touch.lenght;}
        }
        //获取窗口的宽度
        var winWidth = 0;
		function findDimensions(){
			if (window.innerWidth){
				winWidth = window.innerWidth;
			} else if((document.body) && (document.body.clientWidth)){
				winWidth = document.body.clientWidth;
			}
			return winWidth;
		}
        findDimensions();
		window.onresize = findDimensions;
        touch.endx=touch.current*-300;
        move($(this),"-"+winWidth,touch.current);
        moveli(touch.current);
     
    }).bind('touchcancel', function(){
    });
	
	function move(elem,targetW,current){
	    elem.animate({
	        translate3d: targetW *current + "px,0,0"
	      },300,'steps',function(){
	    });
	}
	function moveli(current){
	    $(".innerScrollElastic ul>li").each(function(){
	        $(this).removeClass("current");
	    })
	    $(".innerScrollElastic .tab-contents .tab-item").each(function(){
	        $(this).removeClass("current");
	    })
	    $(".innerScrollElastic ul>li").eq(current).addClass("current");
	    $(".innerScrollElastic .tab-contents .tab-item").eq(current).addClass("current");
	}
});
//底部menu切换
require(['zepto'],function(zepto){
	$(".footerTabs>ul>li").click(function(){
		var _index = $(".footerTabs>ul>li").index(this);
		$(this).addClass("current").siblings().removeClass("current");
		$(".tab-contents .tab-item").eq(_index).addClass("current").siblings().removeClass("current");
	});
});
//选项卡切换
require(['zepto'],function(zepto){
	$('.topTabs>ul li').click(function(){
		var _index = $('.topTabs>ul li').index(this);
		$(this).addClass('current').siblings().removeClass('current');
		$('.tab-contents .tab-item').eq(_index).addClass('current').siblings().removeClass('current');
	});
});
//选项卡border互动切换
require(['zepto'],function(zepto){
	$(".borderTabs li").click(function(){
		var _index = $(this).index(this);
		
		
		if($(".slider-border").hasClass("current0")){
			$(".slider-border").removeClass("current0");
		}
		if($(".slider-border").hasClass("current1")){
			$(".slider-border").removeClass("current1");
		}
		if($(".slider-border").hasClass("current2")){
			$(".slider-border").removeClass("current2");
		}
		$(".slider-border").addClass("current"+_index);
	});
});
//点击显示索引字母
require(['zepto'],function(zepto){
	$(".letter-list li").click(function(){
		var _letter = $(this).text();
		$("body .slelected-letter").remove();
		$("body").append("<div class='slelected-letter'>"+_letter+"</div>");
		setTimeout(function(){
			$("body .slelected-letter").remove();
		},1000);
	});
	$(".letter-list li").on("touchmove",function(){
		$("body .slelected-letter").remove();
		var _letter = $(this).text();
		$("body").append("<div class='slelected-letter'>"+_letter+"</div>");
	});
});
//表单相关
require(['zepto'],function(zepto){
	//checkbox
	$(".ok-square").click(function(){
		$(this).toggleClass("ok-1").toggleClass("ok-2");
	});
	//计算器
	//输入的正则判断
	$(".input-number .num").blur(function(){
		var n = $(this).val();
		var rule=/^[1-9]\d*$/;
		if(rule.test(n)){
			$(this).val(n);
		}else{
			$(this).val(0);
		}
	});
	//初始化数值
    $(".input-number .num").val(0);
    //加
	$(".input-number .add").click(function(){
		var _input_number = $(".input-number .num").val();
		++_input_number;
		$(".input-number .num").val(_input_number);
	});
	//减
	$(".input-number .del").click(function(){
		var _input_number = $(".input-number .num").val();
		if($(".input-number .num").val()==0){
			return;
		}else{
			--_input_number;
			$(".input-number .num").val(_input_number);
		}
	})
	//表单的错误提示
	$(".showtip").click(function(){
		$(".errortip").show();
		setTimeout(function(){
			$(".errortip").hide();
		},1000);
	});
	
	
});
//popMenu1
require(['zepto'],function(zepto){
	//弹出遮罩,菜单
	$(".menu .icon-pop").click(function(){
		$(".page-wrapper").append("<div class='yui-translayer'></div>");
		$(".pop-menu").show();
	});
	//关闭遮罩,菜单
	$(document).on("click",".yui-translayer", function () {
		$(".yui-translayer").remove();
		$(".pop-menu").hide(); 
	});
});
//popMenu2
require(['zepto'],function(zepto){
	//弹出遮罩,侧滑弹出菜单
	$(".menu .icon-side").click(function(){
		$(".page-wrapper").append("<div class='yui-layer'></div>");
		$(".side-menu").addClass("in");
	});
	//关闭遮罩,侧滑弹出菜单
	$(document).on("click",".yui-layer", function () {
		$(".yui-layer").remove();
		$(".side-menu").removeClass("in");
	});
});
//popMenu3
require(['zepto'],function(zepto){
	//弹出遮罩,底部弹出菜单
	$(".menu .icon-action").click(function(){
		$(".page-wrapper").append("<div class='yui-layer'></div>");
		$(".bottom-menu").addClass("in");
	});
	//关闭遮罩,底部弹出菜单
	$(document).on("click",".yui-layer,.bottom-btn", function () {
		$(".yui-layer").remove();
		$(".bottom-menu").removeClass("in");
	});
});
//popMenu4
require(['zepto'],function(zepto){
	//筛选框弹出和遮罩弹出
  	$(".yui-select-wrapper>li").click(function(){
  		$(".yui-layer").remove();
  		$(".page-wrapper").append("<div class='yui-layer'></div>");
  		$(this).parent(".yui-select-wrapper").addClass("in");
  		var _role = $(this).data("role");
  		$("#"+_role).show();
  		$("#"+_role).siblings(".yui-select").hide();
  	});
  	//筛选列表点击赋值
  	$(".yui-select .list .list-item").click(function(){
  		var _text = $(this).text();
  		var _id = $(this).parents(".yui-select").attr("id");

  		$(".yui-select-wrapper>li").each(function(){
  			if($(this).data("role") == _id){
	  			$(this).text(_text);
	  		}
  		});
  		$(".yui-layer").remove();
			$(".yui-select").hide();
			$(".yui-select-wrapper").removeClass("in");
  	});
  	//关闭遮罩,列表
	$(document).on("click",".yui-layer", function () {
		$(".yui-layer").remove();
		$(".yui-select").hide();
		$(".yui-select-wrapper").removeClass("in");
	});
});
//窗口高度自适应
require(['findDimension'],function(findDimension){
	findDimension.findDimensions();
	window.onresize = findDimension.findDimensions;
});

//回到顶部按钮的显示隐藏
require(['zepto'],function(zepto){
	$(window).scroll(function(){
		if ($(window).scrollTop()>100)
		{
			$(".returnTop").animate({
				opacity:"1",
				display:"block"
				},500);
		}
		else{
			$(".returnTop").animate({
				opacity:"0",
				display:"none"
				},500);
		}
	});
});
//搜索input
require(['zepto'],function(zepto){
	$(".search-input input").val("");
	$(".search-input input").focus(function(){
		$(this).parents(".search-input").addClass("active");
		$(".search-input input").css("text-align","left").css("padding-left","28px");
		$(".search-input .icon-search").css("left","5px").css("margin-left","0");
	});
	$(".search-input .cancel").click(function(){
		if($(".search-input input").val() != ""){
			$(".search-input input").val("");
		}
		$(".search-input input").css("text-align","center").css("padding-left","0px");
		    $(".search-input .icon-search").css("left","50%").css("margin-left","-40px"); 
		$(this).parents(".search-input").removeClass("active");
	});
});
//侧滑删除
require(['zepto'],function(zepto){
	//左滑右滑
	$(".slideDel").on("swipeLeft",function(){
		$(this).addClass("selected").parent().siblings().find(".slideDel").removeClass("selected");
	}).on("swipeRight",function(){
		$(this).removeClass("selected");
	});
	//删除
	$(".slideDel .del").on("click",function(){
		$(this).parent(".slideDel").remove();
	});
});
//开关切换
require(['zepto'],function(zepto){
	var _bool = true;
	$(".yui-switch").click(function(){
		$(this).toggleClass("in");
		var $_switch_val = $(this).parent().parent().find(".switch-val");
		if($(this).hasClass("in")){
			$_switch_val.text(_bool);
		}else{
			$_switch_val.text(!_bool);
		}
	});
});
//时间轴初始化水平位移
require(['init_position'],function(init_position){
	init_position.init_positions();
});
//toast弹出提示
require(['lost'],function(lost){
	$(".btn-toast").click(function(){
		var _id = $(this).data("target");
		$("#"+_id).show();
		var or = $("#"+_id).data("lost");
		lost.losts(or,$("#"+_id));
	});
});
//swiper
require(['swiper'],function(swipe){
	var mySwiper = new Swiper('#swiper-container1',{
	watchSlidesProgress : true,
	watchSlidesVisibility : true,
	slidesPerView : 4
	});
	
	var mySwiper2 = new Swiper('#swiper-container2',{
		watchSlidesProgress : true,
		watchSlidesVisibility : true,
		slidesPerView : 3,
		onTap: function(){
					mySwiper3.slideTo( mySwiper2.clickedIndex)
				}
		})
		var mySwiper3 = new Swiper('#swiper-container3',{
		
		onSlideChangeStart: function(){
					updateNavPosition()
				}
		
		})
		
		function updateNavPosition(){
				$('#swiper-container2 .active-nav').removeClass('active-nav')
				var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');
		
		
				if (!activeNav.hasClass('swiper-slide-visible')) {

					if (activeNav.index()>mySwiper2.activeIndex) {

						var thumbsPerNav = Math.floor(mySwiper2.width/activeNav.width())-1
						mySwiper2.slideTo(activeNav.index()-thumbsPerNav)
					}
					else {

						mySwiper2.slideTo(activeNav.index())
					}	
				}
			}
});
//modals
require(['zepto','modals'],function(zepto,modals){
	//模态层和模态框的显示
	$("body").on("click",".showModal",function(){
		var _modal_role =$(this).data("role");
		$("body").append("<div class='yui-modal-overlay' id="+_modal_role+"-overlay></div>"); //模态框 
	});
	//模态层和模态框的隐藏
	$("body").on("click",".hideModal",function(){
		$(".yui-modal-overlay").remove();
		$(this).parents(".yui-modal").remove(); 
	});
	//关闭confirm打开alert
	$("body").on("click",".hideModalShowAlert",function(){
		modals.hideModalShowAlert.call(new yui_confirm(_modal_title,_modal_text,_modal_title_1,_modal_text_1));
	});
	//关闭prompt打开confirm
	$("body").on("click",".hideModalShowConfirm",function(){
		modals.hideModalShowConfirm.call(new yui_prompt(_modal_title,_modal_text,_modal_title_1,_modal_text_1,_modal_title_2,_modal_text_2));
	});
    //模态框的隐藏
	$("body").on("tap",".yui-modal-overlay",function(){
		$(this).remove();
		var _overlay_id = $(this).attr("id");//得到模态id
		var _modal_id_last = _overlay_id.slice(-7);//得到overlay
		var _last_index = _overlay_id.indexOf(_modal_id_last);//得到索引
	    var _modal_id = _overlay_id.slice(0,_last_index-1);//截取字符串
		$("#"+_modal_id).remove(); 
	});
});