$(document).ready(function(){
	let squares = 1800,
		WIDTH = 600;

	startGrid();

	function startGrid () {
		for (var i = 0; i < squares; i++) {
			for (var j = 0; i< squares; i++){
				$('#container').prepend('<div class="square"></div>')
			}
			}
		}

//scripts that set default hover color and change hover color

	$('.square').hover(function(){
		$(this).css("background-color", "blue")
	})

	$('.blackh').click(function(){
		$('.square').hover(function(){
			$(this).css("background-color", "black")
		})		
	})
	$('.yellowh').click(function(){
		$('.square').hover(function(){
			$(this).css("background-color", "yellow")
		})		
	})
	$('.redh').click(function(){
		$('.square').hover(function(){
			$(this).css("background-color", "red")
		})		
	})
	$('.blueh').click(function(){
		$('.square').hover(function(){
			$(this).css("background-color", "blue")
		})		
	})


//scripts that change the background color

	$('.blackb').click(function(){
		$('.square').css("background-color", "black")
	})
	$('.yellowb').click(function(){
		$('.square').css("background-color", "yellow")
	})
	$('.redb').click(function(){
		$('.square').css("background-color", "red")
	})
	$('.blueb').click(function(){
		$('.square').css("background-color", "blue")
	})	
});

