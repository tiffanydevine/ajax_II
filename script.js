for(var i = 0; i < 600; i++){	
	var request = new XMLHttpRequest(); 
	request.open('GET', 'data.txt'); 
	request.onreadystatechange = function(){
		if (request.readyState===4){
			console.log(request); 
			document.writeln(request.responseText); 
		}
	}
	request.send(); 
}