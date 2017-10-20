	$(function(){
		$('.handmade').click(function(){
			$(".kind [value='1']").attr("selected","selected");
		});
		$('.print').click(function(){
			$(".kind [value='2']").attr("selected","selected");
		});

	});