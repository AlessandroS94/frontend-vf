function getODS() {
	$.ajax({ 
             type: "GET",
             dataType: "json",
             url: "http://localhost:8080/Bacheca/api/board/ODS",
             success: function(dati){
				var x = Cookies.get('auth');
				if (x == "yes")
				  {
					  for(var i = dati.length-1; i >=0; i--)
				  		{
					 	x = '<tr><td>' + dati[i].id + '</td><td>' + dati[i].dataPubblicazione + '</td><td>' + dati[i].titolo + '</td>';
					 	x += '<td>' + dati[i].ufficio+ '</td><td><a class="item" href="http://localhost:8080/Bacheca/api/board/ODS/'+dati[i].id+'/stream">' + dati[i].nomeDocumento + '</a></td><td>' + dati[i].proprietario + '</td><td>' + dati[i].allegati + '</td>';
					 	x += '<td><a onclick="deleteOds('+dati[i].id+')" href="#" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a></td></tr>';
					 	$('#odgData').append($(x));
				  		} 
				  }
				 else
					 {
						for(var i = dati.length-1; i >=0; i--)
				  			{
					 		x = '<tr><td>' + dati[i].id + '</td><td>' + dati[i].dataPubblicazione + '</td><td>' + dati[i].titolo + '</td>';
					 		x += '<td>' + dati[i].ufficio+ '</td><td><a class="item" href="http://localhost:8080/Bacheca/api/board/ODS/'+dati[i].id+'/stream">' + dati[i].nomeDocumento + '</a></td><td>' + dati[i].proprietario + '<td></td></td>';
					 		$('#odgData').append($(x));
				  			} 
					 }
				 }
			});
}

getODS();



//Delete a row ODG
function deleteOdg(id){
	$.ajax({ 
             type: "DELETE",
             contentType: "application/json",
             url: "http://localhost:8080/Bacheca/api/board/ODS/"+id,
             success: function(dati){
				window.location('ods.html');
             }
         });
}