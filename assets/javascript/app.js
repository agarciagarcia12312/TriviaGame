var questions = ["The average person does what thirteen times a day?", "What is Johnny Depp afraid of?", "what country has the tallest building in the world" ,
"In Kansas it's illegal to eat cherry pie with what?", "How tall am I?"];
var q1 = ["bathroom", "laughs", "farts", "eats"];
var q2 = ["spiders", "clowns", "flowers","elephants"];
var q3 = ["U.A.E", "United States", "China", "Japan"];
var q4 = ["Apples","Honey", "Milk", "Ice Cream"]
var q5 = ["5'8", "6'4", "6'1", "5'3" ]
var qs = [q1, q2, q3, q4, q5];
var answers = [1,1,0,3,2]
var guess = 0;
var time = 15;
// below q varible that tracks how many question have been created
// var q = 0;
var yesGif = ["assets/images/yes1.gif","assets/images/yes2.gif","assets/images/yes3.gif","assets/images/yes4.gif","assets/images/yes.gif"]
var noGif = ["assets/images/no1.gif","assets/images/no2.gif","assets/images/no3.gif","assets/images/no4.gif","assets/images/no5.gif"]

$(document).ready(function() {
// beow number of questions -1 
var x = 4;	
var correct = 0;
var incorrect = 0;
var interval1;


	function displayed () {
		x = questions.length -1;
		var displayedOption = qs[x];
		
// below: code that displayes the question and choices
		$("#question").html(questions[x]);		
		$("#option1").html(displayedOption[0]);
		$("#option2").html(displayedOption[1]);
		$("#option3").html(displayedOption[2]);
		$("#option4").html(displayedOption[3]);
// below:code that deletes the last question 
		questions.pop();	
	}
// below: function that hides all the the previos pages and dysplays new question
	function newQ() {
		$("#initial").hide();
		$("#wrong").hide();
		$("#correct").hide();
		$("#master").show();
		displayed();
		timeReset();
	}

// below: function that displayes the final page with wins/ losses	
	function final() {
		$("#initial").hide();
		$("#wrong").hide();
		$("#correct").hide();
		var percent = (correct / (correct + incorrect)) *100;
		var data = "<p>Correct: " + correct +"</p>" +
     		"<p>Incorrect: " + incorrect + "</P>"  +
     		"<p>Percentage: " + percent + "%</P>";
     	$("#data").html(data);	
		$("#newGame").show();
		$("#last").show();

	}
// on click function that starts the game
	$("#new").click(newQ);

// below: function checks if the question is answsered correctly and dysplayes correct page
	function check () {
		clearInterval(interval1);
		var random = Math.floor(Math.random()*5)
		
			
		if(((x == 0 ) && (guess == 1)) || ((x ==1 ) && (guess == 1)) || ((x == 2) && (guess == 0)) || ((x ==3 ) && (guess == 3)) || ((x ==4 ) && (guess == 2))) {
			
			correct++;
			$("#master").hide();
			$("#correct").show();
			$("#yes").attr("src", yesGif[random]);

			
		}
		else {
			
			incorrect++;
			$("#master").hide();
			$("#wrong").show();
			$("#no").attr("src", noGif[random]);
			
		}
		if (questions.length >0) {		
			setTimeout(newQ, 2500);
		}
		else {
			setTimeout(final, 4000)
		}
	}

// clcik function for the user guess
	$("#option1").click(function(){
		guess = 0;
		check();
	})
	$("#option2").click(function(){
		guess = 1;
		check();
	})
	$("#option3").click(function(){
		guess = 2;
		check();
	})
	$("#option4").click(function(){
		guess = 3;
		check();
	})

	
// below: timing functions 
	function timeReset () {
		time = 15;
		$("#time").html("00:15");
		interval1 = setInterval(countdown, 1000); 
	}

	function countdown () {
		time--;
		// console.log(time);
		var newTime = timeConvertor(time);
		$("#time").html(newTime);
// cheks if time has expired if it has it runs the chek function with a guess of 4 adding a loss
		if (time == 0) {
			guess = 5;
			check();
		}


	}
	function timeConvertor (t) {
		var seconds = time;
		if (time < 10) {
			seconds = "0"+ time;
		}
		else {
			seconds = time;
		}
		return "time left:  00:" + seconds;
	}

// below: on click function that reloads the page to show the initial page	
	$("#newGame").click(function(){
		console.log("new");
		window.location.reload();
	})

	

})
