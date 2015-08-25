/* 

	RGB tribute SKETCH Toy
	developed for the odin project: 
	http://www.theodinproject.com/web-development-101/javascript-and-jquery

	Version 01 
	Starting date 23/08/15
	Current date 26/08/15

	Author Pablo Bordons Estrada
		
	*/

//function to get a random number up to a given value
function randomUpTo(n){
		return Math.floor((Math.random() * n));
	}

// Function to select a random value among three
function randomSelect(a,b,c){
	var seed = randomUpTo(100);
	if(seed <= 33.33){return a;}
	else if (seed <= 66.66){return b;}
	else {return c;}
}

$(document).ready(function(){



	// Create a squared canvas with "columns" number of element by side
	function createCanvas(columns){
		/*
		The canvas is generated adding columns of elements

		Every column is generated as a string and then added to the DOM
		*/

		//Clean the canvas
		$("#canvas").empty();

		//variable to store the columns
		var column_div = ""
		// loop through the columns
		for(i=0;i<columns;i++){

			// open the column
			column_div+="<div class='column'>";

			// loop through the elements in the column
			for(j=0;j<columns;j++){
				column_div+="<div class='canvas_element'></div>";	
				}
			// close the column
			column_div+="</div>";
			// add the column to the canvas
			$("#canvas").append(column_div);
			// Clean the column to start again
			column_div="";
		}

		// Add the proper dimension to the elements in every column
		$(".canvas_element").css("width",400/columns).css("height",400/columns);

		}


	createCanvas(40);
	// Controlling the buttons (color and size buttons behave differently)

	// Color buttons
	// Global var to control the color
	var color = "rgb(255,255,0)" 
	var red = 0, green = 0, blue = 0;

    $("#color_tools >> li").click(function() {
    	/* click BEHAVIOUR
		There are four buttons, three per color and random one
		Three colors may be clicked at a time
		random button is unclicked when a color is clicked
		all color button are unclicked when random button is clicked
    	*/

    	/* function
		Color button add a collor to the RGB color to be painted
		Random button selects random colors for every element
    	*/


        // Check if it's random
        if($(this).attr('id') == "random"){

			//unclick every other color
			$(this).siblings("li").removeClass("clicked").addClass("unclicked");
	    	
	    	//Was it clicked or unclicked?
	        if($(this).hasClass("unclicked")){
	        	//unclick it
	        	$(this).removeClass("unclicked").addClass("clicked");

	        	// Do something
	        	red = 0;
	        	green = 0;
	        	blue = 0;   //set color to zero
	        	random_color = true; // turn on the random color selection	        	

		    }
	        else{
	        	$(this).removeClass("clicked").addClass("unclicked");

	        	// Do something
	        	red = 0;
	        	green = 0;
	        	blue = 0;   //set color to zero
	        	random_color = false; // turn on the random color selection	
	        }


        	}

        // check if it's red
        else if($(this).attr('id') == "red"){
			//unclick "#random"
        	$(this).siblings("#random").removeClass("clicked").addClass("unclicked");
        	// turn off the random color selection
        	random_color = false; 

        	//Was it clicked or unclicked?
	        if($(this).hasClass("unclicked")){
	        	//unclick
	        	$(this).removeClass("unclicked").addClass("clicked");
	        	
	        	//Do something 
	        	red = 255; // adds red to the color
	        }
	        else{
	        	$(this).removeClass("clicked").addClass("unclicked");
	        	red = 0;
	        }


        }
        // check if it's green
        else if($(this).attr('id') == "green"){
        	//unclick "#random"
	        $(this).siblings("#random").removeClass("clicked").addClass("unclicked");

	    	// click or unclick a button
	        if($(this).hasClass("unclicked")){
	        	$(this).removeClass("unclicked").addClass("clicked");
		        
	        	//Do something
	        	green = 255; // adds green to the color
	        	random_color = false; // turn off the random color selection 
	        }
	        else{
	        	$(this).removeClass("clicked").addClass("unclicked");
	        	green = 0;
	        }

        	
        }
        // check if it's blue
        else{ 
        	//unclick "#random"
	        $(this).siblings("#random").removeClass("clicked").addClass("unclicked");

			// click or unclick a button
		    if($(this).hasClass("unclicked")){
		    	$(this).removeClass("unclicked").addClass("clicked");

	        	
	        	//Do something
	        	blue = 255; // adds blue to the color
	        	random_color = false; // turn off the random color selection 

		    }
		    else{
		    	$(this).removeClass("clicked").addClass("unclicked");
		    	blue = 0;
		    }

        }

        color = "rgba("+red+","+green+","+blue+",1)";

    	});

	    function randomColorAnimation() {  
	  	
            $('#random').animate({"background-color":"rgb(255,0,0)"}, 1000, function(){
                $('#random').animate({"background-color":"rgb(0,255,0)"}, 1000, function(){
                    $('#random').animate({"background-color":"rgb(0,0,255)"}, 1000, function(){
                        randomColorAnimation();
                    });
                });
            });
        }

        randomColorAnimation();
	    // randomColorAnimation = function() {           
     //        $("#random").animate( {backgroundColor:"rgb(255,0,0)"}, 500, function(){
     //            $("#random").animate({backgroundColor:"rgb(0,255,0)"}, 500, function(){
     //                $("#random").animate({backgroundColor:"rgb(0,0,255)"}, 500, function(){
     //                    randomColorAnimation();
     //                });
     //            });
     //        });
     //    }

     //    randomColorAnimation();

	// Size buttons
	$("#size_tools >> li").click(function() {
		// Only one button can be clicked at the same time
        $(this).siblings("li").removeClass("clicked").addClass("unclicked");
        $(this).removeClass("unclicked").addClass("clicked");

        // Create a canvas with the number of columns depending on the button
        createCanvas(parseInt($(this).attr("data")));

    	});



	//Contorl the hover of the mouse	

	var random_color=false;

	// mouse enters
	$(document).on("mouseenter",".canvas_element",
		
		function(){

			//is the random color selecter?
			var new_color = (random_color) ? randomSelect("red","green","blue") : color;

			//creates a "target cell" effect
			$(this).css("box-shadow","0px 0px 0px 5px black inset");
			//Draws the color
			$(this).css("background-color",new_color);	

			});

		// mouse leaves
	$(document).on("mouseleave",".canvas_element",

		function(){

			// leaves the "target cell" effect
			$(this).css("box-shadow","0px 0px 0px 0px black inset");
			
			});
		
	
	
	// erase by clicking ("hidden property")
	$(document).on("click",".canvas_element", function(){

			$(this).css("background-color","white");
	
		});
		
	
	


});


