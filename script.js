function clickButton() {
	var name = document.getElementById("name").value;
	alert("Hello, " + name + "!");
}

function addPost() {
	var postText = document.getElementById("post").value;
	
	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;
	
	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);
}

function  calcButton(num){
	var result = document.getElementById("result");
	if (result.value=== "0") {
	result.value = "";
	}
	result.value = result.value + num;
}

function calcButtonDot() {
	var result = document.getElementById("result");
	result.value = result.value + ".";
	document.getElementById("dot").disabled = true;
}

function calcButtonOp(operator){
	var result = document.getElementById("result");
	document.getElementById("temp").value = result.value;
	document.getElementById("operator").value = operator;
	
	document.getElementById("add").disabled = true;
	document.getElementById("subtract").disabled = true;
	document.getElementById("multiply").disabled = true;
	document.getElementById("divide").disabled = true;
	
	result.value= 0;
	
	document.getElementById("dot").disabled = false;
	
	document.getElementById("equals").disabled = false;
}
function calculate(){
	var temp = document.getElementById("temp").value;
	var result = document.getElementById("result").value;
	var operator = document.getElementById("operator").value;
	if (operator === "+") {
		document.getElementById("result") .value =
		Number(temp)+ Number(result);
	}
	//Clear the temp and operator elements
	if (operator === "-"){
	document.getElementById("result").value = Number(temp) - Number(result);
	}

	if (operator === "x"){
	document.getElementById("result").value = Number(temp) * Number(result);
	}

	if (operator === "/"){
	document.getElementById("result").value = Number(temp) / Number(result);
	}
	
}

function login() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var error = document.getElementById("error")
	
	//Check that the user and passwordare not blank
	if( username.value.length === 0){
		error.innerHTML="please enter a user or email";
		return false;
	}
	if( password.value.length === 0){
		error.innerHTML="please enter a password";
		return false;
	}
	
	//check the password is correct
	var realPassword ="abc123";
	if (password.value != realPassword){
	    error.innerHTML = "Wrong Password!";
	   return false;
	}
	else{
		return true;
	}
}



function addBlog() {
	var postText = document.getElementById("post").value;
	
	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;
	
	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);
}

var params = [
               {
                 name: "url",
                 value: window.location.pathname
               },
               {
                  name: "time",
                  value: new Date().getTime()
               }
             ];

function getParameterByName(name, url) { 
if (!url) { 
url = window.location.href; 
} 
name = name.replace(/[\[\]]/g, "\\$&"); 
var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), 
results = regex.exec(url); 
if (!results) return null; 
if (!results[2]) return ''; 
return decodeURIComponent(results[2].replace(/\+/g, " ")); 
}

function loadHome() {
	var username = getParameterByName("username") 
	//create a new <p> element to show the username
	newP = document.createElement("p");
	newP.innerHTML = "Welcome, " + username;
	// add the new <p> to the logout bar
	var logoutBar = document.getElementById("logout-bar");
	logoutBar.appendChild(newP);
	
	// create a logout button
	var logoutButton = document.createElement("button");
	logoutButton.innerHTML = "Log out";
	logoutButton.setAttribute("class", "form-button");
	logoutButton.setAttribute("onclick", "logout();");
	
	logoutBar.appendChild(logoutButton);
}

function logout() {
	window.location = "forms.html";
}

function autoload(){
    console.log("welcome!");
    
    // Add some content to <div id="part1">
    // 1. Get the div where you want to add the content 
    var part1Div = document.getElementById("part1");
    // 2. Create new elements to put inside the <div>
    var newHeader = document.createElement("h3");
    var newParagraph = document.createElement("p");
    // 3. Put some text in those elements
    newHeader.innerHTML = "Part 1 - On Load";
    newParagraph.innerHTML = "Automatically do stuff";
    // Add new elementto the <div>
    part1Div.appendChild(newHeader);
    part1Div.appendChild(newParagraph);
    part1Div.appendChild(document.createElement("hr"));
    
}

// Part 2
function addText() {
	var input = document.getElementById("part2-input");
	
	var div = document.getElementById("part2");
	
	var newParagraph = document.createElement("p");
	newParagraph.innerHTML = input.value;
	
	div.appendChild(newParagraph);
}



// Part 3
function changeStyle() {
	var part3p = document.getElementById("part3-p");
	part3p.setAttribute("class", "new-style");
}

// Part 4
function changePageStyle1() {
	var part4p = document.getElementById("part4-p");
	body.setAttribute("class", "new-pagestyle1");
}

function changePageStyle2() {
	var part4p = document.getElementById("part4-p");
	body.setAttribute("class", "new-pagestyle2");
}

function changePageStyle3() {
	var part4p = document.getElementById("part4-p");
	body.setAttribute("class", "new-pagestyle3");
}

function changePageStyle4() {
	var part4p = document.getElementById("part4-p");
	body.setAttribute("class", "new-pagestyle4");
}

//part 5
function addPicture(){
    var part5img = document.createElement("img");
    part5img.setAttribute("src", "http://wowslider.com/sliders/demo-85/data1/images/southtyrol350698.jpg");
    var div = document.getElementById("part5-img");
    div.appendChild(part5img);
    
}

//Image Gallery
function change1(){
    var img = document.getElementById("img");
    img.setAttribute("src", "http://www.wall001.com/1440x900/flower_chrysanthemum_daisy_1440/mxxx01/[wall001.com]_1440_900_Chrysanthemum_flower0zw010.jpg");
}

function change2(){
    var img = document.getElementById("img");
    img.setAttribute("src", "http://www.wall001.com/1440x900/flower_chrysanthemum_daisy_1440/mxxx01/[wall001.com]_1440_900_Chrysanthemum_flowerWet_Daisies.jpg");
}

function change3(){
    var img = document.getElementById("img");
    img.setAttribute("src", "http://www.wall001.com/1440x900/1440x900_animal_wallpapers/mxxx01/Free_High_resolution_wallpaper_00489_tiger_1440x900.jpg");
}

function change4(){
    var img = document.getElementById("img");
    img.setAttribute("src", "http://www.wall001.com/1440x900/sky_flowers_01_1440x900/mxxx01/1440x900_Blue_Sky_Flowers_HM051_350A.jpg");
}

function change5(){
    var img = document.getElementById("img");
    img.setAttribute("src", "http://www.wall001.com/1440x900/flower_chrysanthemum_daisy_1440/mxxx01/[wall001.com]_1440_900_Chrysanthemum_flower162511.jpg");
}







