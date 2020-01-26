// JavaScript Document
//Function for control login 
//Function for logout


//log

checkLog(){
var x = Cookies.get('auth');
if (x == 'yes'){
	$("#login").show("#login");
	}
}

logout(){
	Cookies.delete('auth');
}

checkLog();