var mybutton = document.getElementById('onload'); 
mybutton.onclick = loadAJAX; 

function loadAJAX() {
	var request = new XMLHttpRequest(); 
	request.open('GET', 'data.json'); 
	request.onreadystatechange = function(){
		if (request.readyState===4){
			var items = JSON.parse(request.responseText); 
			console.log(items)
			var output = '<ul>'
			for (var i=0; i < items.length; i++){
				output += '<li>' + items[i].first_name + ' ' + items[i].last_name + '</li>'
			}
			output += '</ul>'
			document.getElementById('update').innerHTML = output; 
		}
	}
	request.send(); 
}


