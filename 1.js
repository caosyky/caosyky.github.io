 $(function(){
 	$(".conchuot,.kinhnghiem").click(function(){
 		event.preventDefault();
 		$("body,html").animate({scrollTop: $("#kinhnghiem").offset().top},1400,"easeOutExpo")
 	})
})  
 