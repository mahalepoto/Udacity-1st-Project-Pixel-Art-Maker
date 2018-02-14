 // Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

	$(document).ready( function(){
		$("#sizePicker").submit( function makeGrid(e) {
		  //$("table").children().remove();
		   $("table").empty().hide();
		 const height = $ ("#inputHeight").val();
		 const width = $ ("#inputWeight").val();	
	  		//creating rows 
	  for (let r = 1; r <= height; r++) {
	    $("table").append('<tr></tr>');
			//creating columns
	    for (let c = 1; c <= width; c++) {
				$("tr").last().append('<td></td>');
				//$("td").attr ("class","cells");
			}
			
		}
		   $("table").fadeIn(3000);
	       e.preventDefault();

		$("#pixelCanvas").on("click","td",function(event){
	     	var color= $("#colorPicker").val();
	      $(event.target).css("background-color",color);
	}) 	 	 	 	
	})	
	})