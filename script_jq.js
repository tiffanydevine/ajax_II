$.getJSON('data.json', function(data){
	var output = '<ul>'
	$.each(data, function(index, value){
		console.log(data[index].first_name);  
	})
	output += '</ul>'
}); 

