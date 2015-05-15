document.write("<header><h3>Welcome to</h3><h1>Syntactic Sugar-Land!</h1></header>");

var sanity = "Sanity Check: JS is working!";
if(sanity.length) {
	console.log(sanity);
}

// ALL VARIABLES
	var hasTicket = true;
	var money = startingMoney = 20;
	var age = 12;
	var hasParent = false;
	var tokens = 5;
	var height = 4;
	var bossLooking = true;


// PROBLEM 1
	function buyTicket() {
		if ((age < 6 && hasParent) || age > 70) {
			return true;
			alert("Come on in!");
		} else if (age >= 18 || hasParent) {
			if (hasTicket) {
				alert("Come on in!");
				return true;
			} else if (money >= 10) {
				money = money - 10;
				hasTicket = true;
				alert("Come on in!");
				return true;
			} else {
				alert("Sorry, you're not allowed in.");
				return false;
			}
		} else {
			alert("Sorry, you're not allowed in.");
			return false;
		}
	}


	//SEPARATED ALERTS
	// var admitted = buyTicket();

	// if (admitted) {
	// 	alert("Come on in!");
	// } else {
	// 	alert("Sorry, you're not allowed in.")
	// }


	//FUNCTION TESTING
	// console.log("The value of hasTicket is", hasTicket, ",", "Your assertion is", hasTicket === true);
	// console.log("The value of money is", money, ",", "Your assertion is", money === 4);


	document.write("<button class='buy center' onClick='buyTicket()'>Enter the Park!</button>");
	// The above js will run the buyTicket() function when clicked on.



//PROBLEM 2
	function buyToken() {
		tokens++;
		money--;
		alert("You bought 1 token!");
		console.log("tokens:", tokens);
	}

	document.write("<button class='buy center' onClick='buyToken()'>Buy a Token!</button>");



// PROBLEM 3
	function canIRide() {
		if (height >= 4 && tokens >= 5 && (age >= 12 || hasParent || bossLooking === false)) {
			tokens = tokens - 5;
			alert("You can ride!");
			console.log("tokens:", tokens);
		} else {
			alert("Sorry, you're not allowed to ride.");
		}
	}

	document.write("<button class='ride center' onClick='canIRide()'>Ride the 'Incredible Incrementer'!</button>");

	// console.log("The value of tokens is", tokens, ",", "Your assertion is", tokens === 0);



//PROBLEM 4
	document.write("<div class='fortuneteller center'>")
		document.write("<h3 class='center'>Visit our...</h3>");
		document.write("<h2 class='center'>Fortune Teller</h2>")
	document.write("</div>")

	document.write("<div class='container'>");
	// Trick #1
		function trickOne() {
			var moneySpent = startingMoney - money;
			var response = prompt("Type 'true' or 'false': You spent " + moneySpent + " dollar(s) today.");
			if (response === "true") {
				alert("I'm correct!")
				tokens--;
			} else if (response === "false") {
				alert("You lied!");
				tokens--;
			} else {
				alert("Goodbye!")
			}
		}

		// document.write("<button class='trick' onClick='trickOne()'>Trick #1</button>");
		document.write("<img class='trick' onClick='trickOne()' src='images/image1.png'>");

	// Trick #2
		function trickTwo() {
			var response = prompt("Pick a random number between 1 and 6 inclusive.");
			var number = parseInt(response);

			if (number === 4){
				alert("Your number is 4!");
				tokens--;
			} else {
				response = prompt("Is your number 4? (Type 'too high' or 'too low')")
				if (response === "too high") {
					response = prompt("Is your number 2? (Type 'yes', 'too high', or 'too low')");
					if (response === "yes") {
						alert("Your number is 2!");
						tokens--;
					} else if (response === "too high") {
						alert("Your number is 1!");
						tokens--;
					} else if (response === "too low") {
						alert("Your number is 3!");
						tokens--;
					}
				} else if (response === "too low"){
					response = prompt("Is your number 6? (Type 'yes' or 'too high')");
					if (response === "yes") {
						alert("Your number is 6!");
						tokens--;
					} else if (response === "too high") {
						alert("Your number is 5!");
						tokens--;
					}
				}
			}
		}

		// document.write("<button class='trick' onClick='trickTwo()'>Trick #2</button>");
		document.write("<img class='trick' onClick='trickTwo()' src='images/image2.png'>");

	// Trick #3
		function trickThree() {
			alert("Welcome to The Human Calculator!");
			var x = parseInt(prompt("Type in a number!"));
			var operator = prompt("Type in an operator (e.g., +, -, *, /, ^)");
			var y = parseInt(prompt("Type in another number!"));

			function calculate() {	
				if (operator === "+") {
					return x + y;
				} else if (operator === "-") {
					return x - y;				
				} else if (operator === "*") {
					return x * y;
				} else if (operator === "/") {
					return x / y;				
				} else if (operator === "^") {
					return Math.pow(x, y);
				}
			}

			if (calculate()){
				alert("The answer is " + calculate() + " !");
				tokens--;
			} else {
				alert("Cannot compute. Try again!");
			}
		}

		// document.write("<button class='trick' onClick='trickThree()'>Trick #3</button>");
		document.write("<img class='trick' onClick='trickThree()' src='images/image3.png'>");

	document.write("</div>")


