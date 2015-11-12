var numberOfSquares = 16;
$(document).ready(function(){
	$('#grid').html('');
	setGrid();
	$("#reset").on('click', function(){
		$('.squares').detach();
		numberOfSquares = prompt('How many squares?');
    	setGrid();
	});	
});


var setGrid = function(){
	var squareArea = $('#grid').width()/numberOfSquares - 2;
	for(var i = 0; i < numberOfSquares; i++){
		for(var x = 0; x < numberOfSquares; x++) {
			var unit = $("<div class='squares'></div>").height(squareArea).width(squareArea);
        	unit.appendTo('#grid');
   		}
   	}

   	$(".squares").one('mouseover', function(){
		$(this).css('background-color', getRandomColor());
	});	
};
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}