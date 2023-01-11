function validateSignIn()
{
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	if(username.value == "")
	{
		alert("Please enter username");
	}
	else if(password.value == "")
	{
		alert("Please enter password");
	}

}
function load() {
	var inheritsBanner = document.getElementById('inheritsBanner');
	localStorage.test = inheritsBanner;
}

function pageLoad(){
	
	var inheritsNav = document.getElementById('inheritsNav');
	inheritsNav.innerHTML= localStorage.test.innerHTML;
}