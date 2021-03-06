// javascript for ODG 

function getODG() {
 let searchParams = new URLSearchParams(window.location.search);
 let year = searchParams.get('year');
 let filter = searchParams.get('q');
 if (filter){
	 filter = "?q="+filter;
 }
 else{
	 filter = "";
 }
	console.log(year);
 if (year)
	$.ajax({ 
             type: "GET",
             contentType: "application/json",
             url: "http://localhost:8080/Bacheca/api/board/"+year+"/ODG"+filter,
             success: function(dati){
				var x = window.localStorage.getItem('code');
				if (x) //if logged
				  {
					  for(let i = dati.length-1; i >=0; i--)
				  		{
					 	x = '<tr><td>' + dati[i].id + '</td><td>' + dati[i].dataPubblicazione + '</td><td>' + dati[i].titolo + '</td>';
					 	x += '<td>' + dati[i].ufficio+ '</td><td><a class="btn btn-success btn-circle btn-sm" href="http://localhost:8080/Bacheca/api/board/'+year+'ODG/'+dati[i].id+'/stream"><i class="fas fa-download"></i></a></td><td>' + dati[i].proprietario + '</td><td><a class="btn btn-success btn-circle btn-sm" href=# onclick="startModal(\''+year+'/ODG/'+dati[i].id+'/attachments\')"><i class="fas fa-plus"></i></a></td>';
					 	x += '<td><a onclick="deleteOdgYear('+dati[i].id+','+year+')" href="#" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a></td></tr>';
					 	$('#gData').append($(x));
				  		} 
				  }
				 else
					 {
						for(let i = dati.length-1; i >=0; i--)
				  			{
					 		x = '<tr><td>' + dati[i].id + '</td><td>' + dati[i].dataPubblicazione + '</td><td>' + dati[i].titolo + '</td>';
					 	x += '<td>' + dati[i].ufficio+ '</td><td><a class="btn btn-success btn-circle btn-sm" href="http://localhost:8080/Bacheca/api/board/'+year+'ODG/'+dati[i].id+'/stream"><i class="fas fa-download"></i></a></td><td>' + dati[i].proprietario + '</td><td><a class="btn btn-success btn-circle btn-sm" href=# onclick="startModal(\''+year+'/ODG/'+dati[i].id+'/attachments\')"><i class="fas fa-plus"></i></a></td>';
					 		$('#gData').append($(x));
				  			} 
					 }
				 }
			});
	else
		$.ajax({ 
             type: "GET",
             contentType: "application/json",
             url: "http://localhost:8080/Bacheca/api/board/ODG"+filter,
             success: function(dati){
				var x = window.localStorage.getItem('code');
				if (x)//if logged
				  {
					  for(let i = dati.length-1; i >=0; i--)
				  		{
					 	x = '<tr><td>' + dati[i].id + '</td><td>' + dati[i].dataPubblicazione + '</td><td>' + dati[i].titolo + '</td>';
					 	x += '<td>' + dati[i].ufficio+ '</td><td><a class="btn btn-success btn-circle btn-sm" href="http://localhost:8080/Bacheca/api/board/ODG/'+dati[i].id+'/stream"><i class="fas fa-download"></i></a></td><td>' + dati[i].proprietario + '</td><td><a class="btn btn-success btn-circle btn-sm" href=# onclick="startModal(\'ODG/'+dati[i].id+'/attachments\')"><i class="fas fa-plus"></i></a></td>';
					 	x += '<td><a onclick="deleteOdg('+dati[i].id+')" href="#" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a></td></tr>';
					 	$('#gData').append($(x));
				  		} 
				  }
				 else
					 {
						for(let i = dati.length-1; i >=0; i--)
				  			{
					 		x = '<tr><td>' + dati[i].id + '</td><td>' + dati[i].dataPubblicazione + '</td><td>' + dati[i].titolo + '</td>';
					 		x += '<td>' + dati[i].ufficio+ '</td><td><a class="btn btn-success btn-circle btn-sm" href="http://localhost:8080/Bacheca/api/board/ODG/'+dati[i].id+'/stream"><i class="fas fa-download"></i></a></td><td>' + dati[i].proprietario + '</td><td><a class="btn btn-success btn-circle btn-sm" href=# onclick="startModal(\'ODG/'+dati[i].id+'/attachments\')"><i class="fas fa-plus"></i></a></td>';
					 		$('#gData').append($(x));
				  			} 
					 }
				 }
			});
	

}

getODG();

//Delete a row ODG
function deleteOdg(id){
	let tokenId = window.localStorage.getItem('code');
	$.ajax({ 
             type: "DELETE",
             contentType: "application/json",
			 headers :{
				 "Authorization": 'Bearer '+tokenId
			 },
             url: "http://localhost:8080/Bacheca/api/board/ODG/"+id,
             success: function(dati){
				location.reload();
             }
         });
}
//Delete a row ODG per anno
function deleteOdgYear(id, year){
	let tokenId = window.localStorage.getItem('code');
	$.ajax({ 
             type: "DELETE",
             contentType: "application/json",
			 headers :{
				 "Authorization": 'Bearer '+tokenId
			 },
             url: "http://localhost:8080/Bacheca/api/board/"+year+"/ODG/"+id,
             success: function(dati){
				location.reload();
             }
         });
}

function startModal(allegati){

	$.ajax({
		type: "GET",
             contentType: "application/json",
             url: "http://localhost:8080/Bacheca/api/board/"+allegati,
             success: function(dati){
				 $('#allegatiData').empty();
				 if(dati.length>0) 
				     for(let i = dati.length-1; i >=0; i--)
				      			{
					     			x = '<tr><td>' + dati[i].id + '</td><td><a class="btn btn-success btn-circle btn-sm" href="http://localhost:8080/Bacheca/api/board/'+allegati+'/' + dati[i].id +'/stream"><i class="fas fa-download"></i></a></td>';
					     			$('#allegatiData').append($(x));
				      			} 
				 else
					 $('#allegatiData').append($('<td>Nessun allegato</td>'));
			 }
	});
	$('#allegati').modal();
}

function search(){
	let searchParams = new URLSearchParams(window.location.search);
	let year = searchParams.get('year');
	if (year)
		window.location.replace('odg.html?year='+year+'&q='+$('#filtro').val());
	else
		window.location.replace('odg.html?q='+$('#filtro').val());
}


