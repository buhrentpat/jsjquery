gridInt = 1
rowMax = 16
columnMax = 16

i = 1

$(document).ready(function(){
	$('#container').prepend('<div class="square"></div>');
	startGrid();
});

function startGrid(){

	count = $('.square').length;

	loop = while (i < 16) {
		$('#container').prepend('<div class="square"></div>')
		i++
	}

};

//count = $(xxxx).length;

//we want a script that can create sixteen squares on one
// line, recognise it's at the end and start a new line,
// and recognise when it's gotten to sixteen squares

//<div id="x"> </div>

//$('#container > div').prepend('<div id="2"></div>)