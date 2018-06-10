 $(function(){
 	vitrikinhnghiem = $('#kinhnghiem').offset().top;
 	console.log(vitrikinhnghiem);
 	$(".conchuot,.kinhnghiem").click(function(){
 		$('body,html').animate({scrollTop:vitrikinhnghiem},700)
 		return false;
 	})
})  
 