//防止默认行为
define(function(){ 
　　　function defaultEvent(e) {
	   e.preventDefault();
	 };
     return {
　　　　　　defaultEvent : defaultEvent
　　　　};
});