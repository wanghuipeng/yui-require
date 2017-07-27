//倒计时
define(['zepto'],function(zepto){
	function getRTime(){
	    var EndTime= new Date('2016/12/22 10:00:00'); //截止时间 
	    var NowTime = new Date();
	    var t =EndTime.getTime() - NowTime.getTime();
	    var d=Math.floor(t/1000/60/60/24);
	    var h=Math.floor(t/1000/60/60%24);
	    var m=Math.floor(t/1000/60%60);
	    var s=Math.floor(t/1000%60);
	    $(".t_d").html(d);
	    $(".t_h").html(h);
	    $(".t_m").html(m<10?"0"+m:m);
	    $(".t_s").html(s<10?"0"+s:s);
	}
	return {
　　　　　　getRTime : getRTime
　　　　};
});