
$.getJSON('http://stats.nba.com/stats/teamplayerdashboard?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlusMinus=N&Rank=N&Season=2015-16&SeasonSegment=&SeasonType=Regular+Season&TeamID=1610612757&VsConference=&VsDivision=', function (data) {
  	var output = "<ul class='searchresults'>"; 


  	$.each(data.resultSets[1].rowSet, function(index, value){
  		console.log(value[2]); 
  		output += '<li>';  
  		output += '<h2>' + value[2] + '</h2>';
  		output += '</li>' 
  	}); 
  	output += '</ul>'; 
  	$('#update').append(output); 
  	console.log(data.resultSets[1].rowSet); 
  });

