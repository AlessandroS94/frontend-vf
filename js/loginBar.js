// javascript for loginBar

function start()
{
	var x = Cookies.get('auth');
	if (x == 'yes'){
	$("#login").show("#login");
	$('#logged').hide('#logged');
	}
}
start();

// javascript counter
function counter(){
	$.ajax({ 
             type: "GET",
             contentType: "application/json",
             url: "http://localhost:8080/Bacheca/api/auth/count",
             success: function(dati){
				$("#loggedCount").append(dati);
             }
         });
}

counter();


// javascript for logout
// must fix 
function logout(){
	let tokenId = Cookies.get('code');
	$.ajax({ 
             type: "POST",
             contentType: "application/json",
			 Authorization: tokenId,
             url: "http://localhost:8080/Bacheca/api/auth/logout",
             success: function(dati){
			    //window.location = "index.html";
             },
			error: function(){
				
			}
		
         });
	Cookies.remove('auth');
	Cookies.remove('code');
}

