// SCRIPT FOR NAIGATION BAR
		window.addEventListener("scroll", function() {
		let navArea = document.getElementById("navArea");

		if (window.pageYOffset > 0) {
		navArea.classList.add("is-sticky");
		} else {
		navArea.classList.remove("is-sticky");
		}
		});
//NAV BAR MENU SCRIPT
		function openNav() {
		  document.getElementById("myNavBar").style.height = "100%";
		}

		function closeNav() {
		  document.getElementById("myNavBar").style.height = "0%";
		}
// END
// TOP BUTTTON 
	//Get the button:
		mybutton = document.getElementById("topBtn");

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		    mybutton.style.display = "block";
		  } else {
		    mybutton.style.display = "none";
		  }
		}

		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
		  document.body.scrollTop = 0; // For Safari
		  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
//END
// HOME PAGE BMI 
	    $(function(){
	    var form = $("form");
	    
	    form.on("submit", function(e){
	        e.preventDefault();
	        var resultDiv = $(".result");
	        var titleDiv = $(".title");

	        
	        function calcBMI(){
	            var height = $("#height").val();
	            var weight = $("#weight").val();

	            var bmi = (weight / (height * height)* 10000);
	            return bmi.toFixed(2);
	            
	        }    
	        function bmiState(){
	            if(calcBMI() < 16.9 ){
	                return "Very underweight";
	            }
	            if(calcBMI() > 17 && calcBMI() < 18.4 ){
	                return "Under weight";
	            }
	            if(calcBMI() > 18.5 && calcBMI() < 24.9 ){
	                return "Normal weight";
	            }
	            if(calcBMI() > 25 && calcBMI() < 29.9 ){
	                return "Overweight";
	            }
	            if(calcBMI() > 30 && calcBMI() < 34.9 ){
	                return "Overweight class 1";
	            }
	            if(calcBMI() > 35 && calcBMI() < 40 ){
	                return "Overweight class 2";
	            }
	            if(calcBMI() > 40){
	                return "Overweight class 3";
	            }
	        }
	        
	        resultDiv.html(calcBMI());
	        titleDiv.html(bmiState());
	    });
	});


// SERVICE PAGE FAQS SCRIPT
		var acc = document.getElementsByClassName("Questions");
		var i;

		for (i = 0; i < acc.length; i++) {
		  acc[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}
//END
//MODAL LOCATE US
		// Get the modal
		var modal0 = document.getElementById("myModal0");

		// Get the button that opens the modal
		var btn0 = document.getElementById("locateus");
					
		// Get the <span> element that closes the modal
		var span0 = document.getElementsByClassName("closeBTN")[0];

		// When the user clicks the button, open the modal 
		btn0.onclick = function() {
		  modal0.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span0.onclick = function() {
		  modal0.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal0) {
		    modal0.style.display = "none";
		  }
		}
//END
//MODAL REGISTRATION GET NOW 
		// Get the modal
		var modal1 = document.getElementById("myModal1");

		// Get the button that opens the modal
		var btn1 = document.getElementById("getitnow1");
		var btn2 = document.getElementById("getitnow2");
		var btn3 = document.getElementById("getitnow3");

		// Get the <span> element that closes the modal
		var span1 = document.getElementsByClassName("closeBTN1")[0];

		// When the user clicks the button, open the modal 
		btn1.onclick = function() {
		  modal1.style.display = "block";
		}
		btn2.onclick = function() {
		  modal1.style.display = "block";
		}
		btn3.onclick = function() {
		  modal1.style.display = "block";
		}
		// When the user clicks on <span> (x), close the modal
		span1.onclick = function() {
		  modal1.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal1) {
		    modal1.style.display = "none";
		  }
		}
//END