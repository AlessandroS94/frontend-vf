// javascript for ODG 

function getODG() {
	$.ajax({ 
             type: "GET",
             dataType: "json",
             url: "http://localhost:8080/Bacheca/api/board/ODG",
             success: function(dati){
				var x = Cookies.get('auth');
				
				  for(var i = dati.length-1; i >=0; i--)
				  {
					 x = '<tr><td>' + dati[i].id + '</td><td>' + dati[i].dataPubblicazione + '</td><td>' + dati[i].titolo + '</td>';
					 x += '<td>' + dati[i].ufficio+ '</td><td><a class="item" href="http://localhost:8080/Bacheca/api/board/ODG/'+dati[i].id+'/stream">' + dati[i].nomeDocumento + '</a></td><td>' + dati[i].proprietario + '</td>';
					 x += '<td><a onclick="deleteOdg()" href="#" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a></td></tr>';
					 $('#odgData').append($(x));
				  } 
				 }
				
         });
}

getODG();


/*function deleteOdg(id){
	$.ajax({ 
             type: "DELETE",
             contentType: "application/json",
             url: "http://localhost:8080/Bacheca/api/board/ODG/"+id,
             success: function(dati){
				
             }
         });
}*/