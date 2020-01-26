// javascript for ODG 

function getODS() {
	$.ajax({ 
             type: "GET",
             dataType: "json",
             url: "http://localhost:8080/Bacheca/api/board/ODS",
             success: function(dati){
				
				for(let i = dati.length-1; i >=0; i--)
				{
					x = '<tr><td>' + dati[i].id + '</td><td>' + dati[i].dataPubblicazione + '</td><td>' + dati[i].titolo + '</td>';
					x += '<td>' + dati[i].ufficio+ '</td><td><a class="item" href="http://localhost:8080/Bacheca/api/board/ODS/'+dati[i].id+'/stream">' + dati[i].nomeDocumento + '</a></td><td>' + dati[i].proprietario + '</td></tr>';
					$('#odgData').append($(x));
				} 
             }
         });
}

getODS();