// Select color input
// Select size input

var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    debugger;
    console.log('Height of Grid:' + height + ' and Width of Grid:' + width);
})
/**
  * @desc create a grid of squares 
  * @param var $height - number of squares representing the height of the grid
  * @param var $width - number of squares representing the width of the grid
*/
function makeGrid(height,width) {
    $('tr').remove();
    for (var i=1; i<=height; i++){
        $('#pixelCanvas').append('<tr id = table'+i+'></tr>');
        for (var j=1; j<=width; j++){
        $('#table'+i).append('<td></td>');
        }
        
    }

$('td').click(function addColorsToGrid() {
    color = $('#colorPicker').val();
    if ($(this).attr('style')){
        $(this).removeAttr('style');
        }
    else{
        $(this).attr('style', 'background-color:' + color);
        }
    });
}