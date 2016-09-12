var thing = $.getJSON('http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=202329&SeasonType=Regular+Season', function (data) {
  	console.log(data.resultSets[0].rowSet[0][3]); 
  });

