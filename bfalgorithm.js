// grab slider values 

var generosity = $('#generosity').change(function(){
    var val = this.value;
});

var honesty = $('#honesty').change(function(){
    var val = this.value;
});

var ambition = $('#ambition').change(function(){
    var val = this.value;
});

var reliability = $('#reliability').change(function(){
    var val = this.value;
});

var badBoy = $('#bad boy').change(function(){
    var val = this.value;
});

$.getJSON('http://stats.nba.com/stats/teamplayerdashboard?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlusMinus=N&Rank=N&Season=2015-16&SeasonSegment=&SeasonType=Regular+Season&TeamID=1610612757&VsConference=&VsDivision=', function (data) {
	var teamAssist = {}; 
	var teamFgPercent = {}; 
	var teamRebounds = {}; 
	var teamSteals = {}; 
	var teamThreePercent = {}; 
	$.each(data.resultSets[1].rowSet, function(index, value){
		teamAssist[value[2]] = value[20];
		teamFgPercent[value[2]] = value[10];
		teamRebounds[value[2]] = value[19];
		teamSteals[value[2]] = value[22];
		teamThreePercent[value[2]] = value[13];
	 }); 

	var arr = Object.keys(teamAssist).map(function (key) {return teamAssist[key];});
	var minTA = Math.min.apply( null, arr );
	var maxTA = Math.max.apply( null, arr ); 
	var rangeTA = maxTA - minTA; 
	var scoreTA = 0; 
	 
	
	var generosity = $('#generosity').change(function(){
    	var val = this.value;
    	scoreTA = (val/100);
    	var bfDistanceAssist = {}; 
		var realscore = (scoreTA * rangeTA); 
		$.each(teamAssist, function(key, value){
			bfDistanceAssist[key] = Math.abs(realscore - value).toFixed(2); 
		
			// var tempArr = Object.keys(yourBf).map(function (key) {return yourBf[key];});
			// var minimum = Math.min.apply( null, arr );
		});
		var valArray = Object.keys(bfDistanceAssist).map(function (key) {return Number(bfDistanceAssist[key]);});
		var valMin = Math.min.apply( null, valArray );
		var keyArray = Object.keys(bfDistanceAssist); 
		console.log(keyArray[valArray.indexOf(valMin)]); 

		console.log(bfDistanceAssist); 
	}); 

}); 	  	
	  	




