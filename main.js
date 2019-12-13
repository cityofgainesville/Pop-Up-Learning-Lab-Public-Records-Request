var learnImgIndex = 1;
var state = "learn";
var next = false;
var end = false;

/*__________________NAVIGATION__________________________*/

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function stateProgress() {
	var states = ['learn','play','act'];
	for(var i=0; i < states.length; i++){
		if(states[i] == state){
			if($(window).width() < 961) {
				document.getElementById(state + "-bullet").style["line-height"] = "2.2em";
				document.getElementById(state + "-bullet").style["height"] = "2.2em";
				document.getElementById(state + "-bullet").style["width"] = "2.2em";
			}
			else {
				document.getElementById(state + "-bullet").style["line-height"] = "2.8em";
				document.getElementById(state + "-bullet").style["height"] = "2.8em";
				document.getElementById(state + "-bullet").style["width"] = "2.8em";
			}
			document.getElementById(state + "-bullet").style["box-shadow"] = "0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 6px 0 rgba(0, 0, 0, 0.19)";
		}
		else {
			document.getElementById(states[i] + "-bullet").style["line-height"] = "2em";
			document.getElementById(states[i] + "-bullet").style["height"] = "2em";
			document.getElementById(states[i] + "-bullet").style["width"] = "2em";
			document.getElementById(states[i] + "-bullet").style["box-shadow"] = "none";
		}
	}
}

document.getElementById("back").onclick = function() {
	history.back();
}

document.getElementById("previous").onclick = function() {
	if(state == "play") {
		document.getElementById(state).style["display"] = "none";
		state = "learn";
		document.getElementById(state).style["display"] = "";
		document.getElementById("previous").style["display"] = "none";
		document.getElementById("previous").disabled = "true";
		document.getElementById("next").disabled = "";
		document.getElementById("next").style["display"] = "";
		next = true;
	}
	else if(state == "act") {
		document.getElementById(state).style["display"] = "none";
		state = "play";
		document.getElementById(state).style["display"] = "flex";
		document.getElementById("next").disabled = "";
		document.getElementById("next").style["display"] = "";
		document.getElementById("next").innerHTML = "NEXT";
		document.getElementById("next").style["background-color"] = "#074b69";
		document.getElementById("next").style["border"] = "1px solid #074b69";
		next = true;
	}
	stateProgress();
	topFunction();
}

document.getElementById("next").onclick = function() {
	if(next) {
		if(state == "learn") {
			document.getElementById("previous").disabled = "";
			document.getElementById("previous").style["display"] = "";
			document.getElementById(state).style["display"] = "none";
			state = "play";
			document.getElementById(state).style["display"] = "flex";
			if(!end){
				next = false;
				document.getElementById("next").disabled = "true";
				document.getElementById("next").style["display"] = "none";
			}
		}
		else if(state == "play") {
			document.getElementById(state).style["display"] = "none";
			state = "act";
			document.getElementById(state).style["display"] = "flex";
			document.getElementById("next").innerHTML = "EXIT";
			document.getElementById("next").style["background-color"] = "#E52207";
			document.getElementById("next").style["border"] = "1px solid #E52207";
		}
		else {
			history.back();
		}
		stateProgress();
		topFunction();
	}
}


/*__________________LEARN__________________________*/

function changeBullets(index) {
	var bullets = document.getElementsByTagName("label");
	for(var i=0; i < bullets.length; i++){
		if(bullets[i].className != "num" + (learnImgIndex - 1)){

			bullets[i].style = "background: #c5c5c5 !important";
		}
		else {
			bullets[i].style = "background: white !important";
		}
	}
}

document.getElementById("learn-prev").onclick = function() {
	learnImgIndex = learnImgIndex - 1;
	if(learnImgIndex == 1) {
		document.getElementById("learn-prev").disabled = "true";
		document.getElementById("learn-prev-mobile").disabled = "true";
	}
	if(learnImgIndex != 9){
		document.getElementById("learn-next").disabled = "";
		document.getElementById("learn-next-mobile").disabled = "";
	}
	document.getElementById(learnImgIndex + 1).id = learnImgIndex;
	document.getElementById(learnImgIndex).src = "./imgsLearn/" + learnImgIndex + ".png";
	changeBullets(learnImgIndex);
}

document.getElementById("learn-next").onclick = function() {
	learnImgIndex = learnImgIndex + 1;
	if(learnImgIndex == 9) {
		document.getElementById("learn-next").disabled = "true";
		document.getElementById("learn-next-mobile").disabled = "true";
		next = true;
		document.getElementById("next").disabled = "";
		document.getElementById("next").style["display"] = "";
	}
	if(learnImgIndex != 1){
		document.getElementById("learn-prev").disabled = "";
		document.getElementById("learn-prev-mobile").disabled = "";
	}

	document.getElementById(learnImgIndex - 1).id = learnImgIndex;
	document.getElementById(learnImgIndex).src = "./imgsLearn/" + learnImgIndex + ".png";
	changeBullets(learnImgIndex);	
}

document.getElementById("learn-prev-mobile").onclick = function() {
	learnImgIndex = learnImgIndex - 1;
	if(learnImgIndex == 1) {
		document.getElementById("learn-prev-mobile").disabled = "true";
	}
	if(learnImgIndex != 9){
		document.getElementById("learn-next-mobile").disabled = "";
	}
	document.getElementById(learnImgIndex + 1).id = learnImgIndex;
	document.getElementById(learnImgIndex).src = "./imgsLearn/" + learnImgIndex + ".png";
	changeBullets(learnImgIndex);
}

document.getElementById("learn-next-mobile").onclick = function() {
	learnImgIndex = learnImgIndex + 1;
	if(learnImgIndex == 9) {
		document.getElementById("learn-next-mobile").disabled = "true";
		next = true;
		document.getElementById("next").disabled = "";
		document.getElementById("next").style["display"] = "";
	}
	if(learnImgIndex != 1){
		document.getElementById("learn-prev-mobile").disabled = "";
	}

	document.getElementById(learnImgIndex - 1).id = learnImgIndex;
	document.getElementById(learnImgIndex).src = "./imgsLearn/" + learnImgIndex + ".png";
	changeBullets(learnImgIndex);	
}


/*__________________PLAY__________________________*/

var questions = ["What is included in public records?", 'What is the first thing you should do when making a public records request?','What do you need to track your public records request?','Which of the following departments has their own public records form?','What do you need to do in order for the City to start on your request after submitting it?','Which of the below will help the City complete your request?','How are public records requests charged?','You want to request public records regarding cold night shelter for the homeless. Which of the below is the best way of writing the request?',"You want to get all the mayor's email in the month of November. Your request is \"all the mayor's email\". What is wrong with the request?","You want to request records for road maintenance and housing construction. How should you go about this?"];
var answerA = ['A. Documents','A. Check the City website and see if it exists','A. Reference Number','A. Department of Doing','A. Pay the estimated bill if there is a bill','A. Overly broad requests','A. It’s a flat fee','A. Emails regarding the homeless from the past 3 months',"A. It's too broad","A. Just be specific in the request"];
var answerB = ['B. Tapes','B. Check what dates the record falls in','B. Security Key','B. City Commission','B. Call the City to follow up','B. Excluding date ranges','B. By material and time','B. all emails regarding cold night shelter for the homeless',"B. It doesn't have date ranges","B. It should be 2 separate requests"];
var answerC = ['C. Social media entries','C. Call the City of Gainesville','C. Reference Number and Security Key','C. Code Enforcement','C. Review your submission','C. Breaking multi-part requests up',"C. By time - it's an hourly rate",'C. emails regarding cold night shelter for the homeless from the past 3 months',"C. It will take a lot of time to complete and have a high fee","C. Make sure to include date ranges"];
var answerD = ['D. All of the above','D. Begin making a new request','D. Reference Number and PIN','D. Gainesville Police Department','D. Nothing, they will start on it when they get to the request','D. Including questions relating to the request',"D. By material - it's a fixed fee per page/item",'D. all emails regarding the homeless',"D. All of the above","D. I can just put both under the category of construction"];
var correctAnswers = ['d','a','c','d','a','c','b','c','d','b'];
var nextQ = false;
var iterator = 0;
var answer;

document.getElementById("start").onclick = function() {
	document.getElementById("welcome-screen").style["display"] = "none";
	document.getElementById("game").style["display"] = "flex";
	if($(window).width() > 961) {
		document.getElementById("play").style["background"] = "#044b69";
	}
}

document.getElementById("play-again-1").onclick = function() {
	document.getElementById("lose-screen").style["display"] = "none";
	document.getElementById("game").style["display"] = "flex";
	if($(window).width() > 961) {
		document.getElementById("play").style["background"] = "#044b69";
	}
}

document.getElementById("play-again-2").onclick = function() {
	document.getElementById("win-screen").style["display"] = "none";
	document.getElementById("game").style["display"] = "flex";
	if($(window).width() > 960) {
		document.getElementById("play").style["background"] = "#044b69";
	}
}

function answerChoice(index) {
	var choices = ['a','b','c','d'];
	for(var i = 0; i < choices.length; i++){
		if(choices[i] == index) {
			document.getElementById(index).style["background-color"] = "#face00";
			document.getElementById(index).style["color"] = "#face00";
			document.getElementById(index + "-text").style["color"] = "black";
			document.getElementById(index + "-hr").style["color"] = "#face00";
		}
		else {
			document.getElementById(choices[i]).style["background-color"] = "#074B69";
			document.getElementById(choices[i] + "-text").style["color"] = "white";
			document.getElementById(choices[i]).style["color"] = "#074B69";
			document.getElementById(choices[i] + "-hr").style["color"] = "#074B69";
		}
	}
	
}

document.getElementById("btn-a").onclick = function() {
	answerChoice("a");
	answer = "a";
	nextQ = true;
}

document.getElementById("btn-b").onclick = function() {
	answerChoice("b");
	answer = "b";
	nextQ = true;
}

document.getElementById("btn-c").onclick = function() {
	answerChoice("c");
	answer = "c";
	nextQ = true;
}

document.getElementById("btn-d").onclick = function() {
	answerChoice("d");
	answer = "d";
	nextQ = true;
}

document.getElementById("submit").onclick = function() {
	if(nextQ){
		document.getElementById("error").style["display"] = "none";
		if(answer == correctAnswers[iterator]){
			if(iterator == questions.length - 1){
				document.getElementById("win-screen").style["display"] = "flex";
				document.getElementById("game").style["display"] = "none";
				document.getElementById(iterator + 1 + "q").style["background-color"] = "";
				document.getElementById(iterator + 1 + "q").style["color"] = "white";
				document.getElementById("play").style["background"] = "white";
				iterator = 0;
				next = true;
				end = true;
				document.getElementById("next").disabled = "";
				document.getElementById("next").style["display"] = "";
			}
			else {
				document.getElementById(iterator + 1 + "q").style["background-color"] = "";
				document.getElementById(iterator + 1 + "q").style["color"] = "white";
				iterator = iterator + 1;
			}
		}
		else {
			document.getElementById("lose-screen").style["display"] = "flex";
			document.getElementById("game").style["display"] = "none";
			document.getElementById(iterator + 1 + "q").style["background-color"] = "";
			document.getElementById(iterator + 1 + "q").style["color"] = "white";
			document.getElementById("play").style["background"] = "white";
			iterator = 0;
		}
		nextQ = false;
		document.getElementById(iterator + 1 + "q").style["background-color"] = "#face00";
		document.getElementById(iterator + 1 + "q").style["color"] = "black";
		document.getElementById("current").innerHTML = document.getElementById(iterator + 1 + "q").innerHTML;
		document.getElementById("q").innerHTML = questions[iterator];
		document.getElementById("a-text").innerHTML = answerA[iterator];
		document.getElementById("b-text").innerHTML = answerB[iterator];
		document.getElementById("c-text").innerHTML = answerC[iterator];
		document.getElementById("d-text").innerHTML = answerD[iterator];
		answerChoice("-1");
	}
	else {
		document.getElementById("error").style["display"] = "";
	}
	
}


document.getElementById("expand").onclick = function() {
		document.getElementById("left-column").style["display"] = "flex";
		document.getElementById("right-column").style["display"] = "none";
		document.getElementById("play").style["background"] = "#074B69";
}

document.getElementById("expand-mobile").onclick = function() {
		document.getElementById("left-column").style["display"] = "none";
		document.getElementById("right-column").style["display"] = "flex";
		document.getElementById("play").style["background"] = "white";
}

/*__________________ACT__________________________*/

document.getElementById("meeting-agendas").onclick = function() {
	window.open('https://gainesville.legistar.com/DepartmentDetail.aspx?ID=19580&GUID=353D5E44-E826-4FDC-B849-31912135D1FA&Mode=MainBody');
}

document.getElementById("city-ordinances").onclick = function() {
	window.open('https://library.municode.com/fl/gainesville/codes/code_of_ordinances');
}

document.getElementById("abo").onclick = function() {
	window.open('http://www.cityofgainesville.org/ClerkOfTheCommission/AdvisoryBoardsCommittees/CurrentOpenings.aspx');
}

document.getElementById("events-calendar").onclick = function() {
	window.open('http://www.cityofgainesville.org/Calendar');
}


document.getElementById("prr").onclick = function() {
	window.open('https://gainesvillefl.justfoia.com/publicportal/home/track');
}
