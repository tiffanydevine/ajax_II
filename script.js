for(var i = 0; i < 600; i++){	
	var request = new XMLHttpRequest(); 
	request.open('GET', 'data.txt'); 
	request.onreadystatechange = function(){
		if (request.readyState===4){
			var modify = document.getElementsByTagName('li'); 
			modify[3].innerHTML = request.responseText;
		}
	}
	request.send(); 
}

