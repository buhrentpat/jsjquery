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

	$('.square').hover(function(){
		$(this).css("background-color", "blue")
	})
});

