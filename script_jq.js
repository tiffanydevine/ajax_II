$.getJSON('data.json', function(data){
	var output = '<ul>'
	$.each(data, function(index, value){
<<<<<<< HEAD
		console.log(data[index].first_name);  
	})
	output += '</ul>'
}); 

=======
		output += '<li>' + data[index].first_name + ' ' + data[index].last_name +'</li>';  
	})
	output += '</ul>'; 
	$('#update').append(output); 
}); 
>>>>>>> jquery-ajax
