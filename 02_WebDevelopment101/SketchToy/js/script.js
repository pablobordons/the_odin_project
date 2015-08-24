/* 

	Version 00 
	Starting date 23/08/15
	author Pablo Bordons Estrada

		notes: 
		
	*/

$(document).ready(function(){

	function createCanvas(rows){
		var row_div = ""
		// Create canvas
		for(i=0;i<rows;i++){

			row_div+="<div class='row'>";

			for(j=0;j<rows;j++){
				row_div+="<div class='canvas_element'></div>";	
			}

			row_div+="</div>";
			$("#canvas").append(row_div);
			row_div="";
		}

		$(".canvas_element").css("width",400/rows).css("height",400/rows);

	}

	var rows = 13;
	createCanvas(rows);


	var color = ""

	$(document).keypress(function(e) {
	    if(e.which == 113) {
	        color="rgb(128,0,0)";
	        $(document).unbind("keydown");
	    }
	    else if(e.which == 119){
	    	color="rgb(0,0,128)";
	    	$(document).unbind("keydown");
	    }
	});

	$(".canvas_element").hover(
		// mouse enters
		function(){

			$(this).css("box-shadow","0px 0px 0px 2px black inset");
			$(this).css("background-color",color);	

			},
		// mouse leaves
		function(){
			$(this).css("box-shadow","0px 0px 0px 0px black inset");
			
			});
		
	
	
	
	$(".canvas_element").on("click", function(){

			$(this).css("background-color",color);
	
		});
		
		// var color = "";

		// if($(this).data("color") == "rgb(0, 128, 0)"){
		// 	color = "rgb(0, 0, 128)";
		// 	}
		// else if($(this).data("color") == "rgb(0, 0, 128)"){
		// 	color = "rgb(0, 128, 0)";
		// 	}

		// $(this).data("color", color);
		// $(this).css("background-color",color);
		// console.log($(this).data("color"));

		// });


	// $(".canvas_element").on("mouseenter",function(e){

		
		
	// 		$(this).css("box-shadow","0px 0px 0px 2px black inset");
		
	// 	});

	// $(".canvas_element").on("mouseleave",function(){

	// 	$(this).css("box-shadow","0px 0px 0px 0px black inset");
	// 	// $(this).css("background-color","rgb(128, 0, 0)");

	// 	});
	


});


