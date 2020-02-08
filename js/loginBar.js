// javascript for loginBar

//javascript show log bar
function start()
{
	let x = window.localStorage.getItem('code');
	if (x){
	$("#login").show("#login");
	$('#logged').hide('#logged');
	}
	else{
		$("#login").hide("#login");
		$('#logged').show('#logged');
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
				$("#loggedCount").text(dati);
             }
         });
}

counter();

// javascript for logout
function logout(){
	let tokenId = window.localStorage.getItem('code');
	
	$.ajax({
             type: "POST",
		     headers :{
				 "Authorization": 'Bearer '+tokenId
			 },
		     url: "http://localhost:8080/Bacheca/api/auth/logout",
             success: function(dati){
				
				 window.localStorage.removeItem('code');
				 location.reload();
             },
			error: function(){
				 console.log('it can not logout');
			}

         });
}

//javascript per yaer

function getYear(){
	$.ajax({
             type: "GET",
			 contentType: "application/json",
		     url: "http://localhost:8080/Bacheca/api/board/DDS/years",
             success: function(dati){
			 for(let i=0; i<dati.length; i++ ){
				 x = '<a class="collapse-item" href="dds.html?year='+dati[i]+'">'+dati[i]+'</a>'
				 $('#ancDds').append($(x));
			 }
			 }
         });
	$.ajax({
             type: "GET",
			 contentType: "application/json",
		     url: "http://localhost:8080/Bacheca/api/board/ODG/years",
             success: function(dati){
			 for(let i=0; i<dati.length; i++ ){
				 x = '<a class="collapse-item" href="odg.html?year='+dati[i]+'">'+dati[i]+'</a>'
				 $('#ancOdg').append($(x));
			 }
			 }
         });
}
getYear();

