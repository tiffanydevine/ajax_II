

Array.prototype.SumArray = function (arr) {
    var sum = [];
    if (arr != null && this.length == arr.length) {
        for (var i = 0; i < arr.length; i++) {
            sum.push(this[i] + arr[i]);
        }
    }
    return sum;
}; 


function statRange (statObj) {
	var arr Object.keys(statObj).map(function (key) {return statObj[key];});
	var minVal = Math.min.apply( null, arr );
	var maxVal = Math.max.apply( null, arr ); 
	return maxVal - minVal;
}; 

function distanceArray (sliderVal, range, statObj) {
	var arr Object.keys(statObj).map(function (key) {return statObj[key];});
	var minVal = Math.min.apply( null, arr );
	var scaledVal = (sliderVal/100); 
	var socre = ((scaledVal * range) + minVal ); 
	$.each(teamRebounds, function(key, value){
		statObj[key] = Number(Math.abs(scaledVal - sliderVal).toFixed(2)); 
	});
	return Object.keys(statObj).map(function (key) {return Number(statObj[key]);});
}; 

function distanceScaleToSliderArray (distanceArray, range) {
	return distanceArray.map(function (i) { return Number((i / range).toFixed(2))*100 });
}; 

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
	
	// This array contains the sum of all distances 
	var bfDistanceAssist = {}; 
	var bfDistanceFGP = {}
	var assistArray = []; 
	var fgpArray = []; 
	var rebArray = []; 
	var fgpSlider = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]; 
	var assistSlider = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]; 
	var rebSlider = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];

	var allDistanceSummed = assistArray.SumArray(fgpArray); 
	

	var generosity = $('#generosity').change(function(){
    	// this can be refactored into a function and called here. 
    	var arr = Object.keys(teamAssist).map(function (key) {return teamAssist[key];});
		var minTA = Math.min.apply( null, arr );
		var maxTA = Math.max.apply( null, arr ); 
		var rangeTA = maxTA - minTA; 
    	var val = this.value;
    	var scoreTA = (val/100);
		var realscore = (scoreTA * rangeTA) + minTA; 
		$.each(teamAssist, function(key, value){
			bfDistanceAssist[key] = Math.abs(realscore - value).toFixed(2); 
		});
		
		assistArray = Object.keys(bfDistanceAssist).map(function (key) {return Number(bfDistanceAssist[key]);});
		assistSlider = assistArray.map(function (i) { return Number((i / rangeTA).toFixed(2))*100 });

		console.log(assistSlider); 

		/*
		var valMin = Math.min.apply( null, assistArray );
		var keyArray = Object.keys(bfDistanceAssist); 
		var player = keyArray[assistArray.indexOf(valMin)]; 
		 
		var output = '<img src="images/' + player + '.png" id="blzpics" alt="not found" />'; 
		$('#update').html(output); 	
		*/

		//console.log('FGP FIXED: '+fgpFixed); 
	}); 
	
	var honest = $('#honesty').change(function(){
    	var arr = Object.keys(teamFgPercent).map(function (key) {return teamFgPercent[key];});
		var minTA = Math.min.apply( null, arr );
		var maxTA = Math.max.apply( null, arr ); 
		var rangeTA = maxTA - minTA; 
    	var val = this.value;
    	var val = this.value;
    	var scoreTA = (val/100);
		var realscore = ((scoreTA * rangeTA) + minTA); 
		$.each(teamFgPercent, function(key, value){
			bfDistanceFGP[key] = Math.abs(realscore - value).toFixed(2); 
		});

		fgpArray = Object.keys(bfDistanceFGP).map(function (key) {return Number(bfDistanceFGP[key]);});
		fgpSlider = fgpArray.map(function (i) { return Number((i / rangeTA).toFixed(2))*100 });

		console.log(fgpSlider); 
		
	});
 
 	var ambition = $('#ambition').change(function(){
    	var arr = Object.keys(teamRebounds).map(function (key) {return teamRebounds[key];});
		var minTA = Math.min.apply( null, arr );
		var maxTA = Math.max.apply( null, arr ); 
		var rangeTA = maxTA - minTA; 
    	var val = this.value;
    	var val = this.value;
    	var scoreTA = (val/100);
		var realscore = ((scoreTA * rangeTA) + minTA); 
		$.each(teamRebounds, function(key, value){
			bfDistanceFGP[key] = Math.abs(realscore - value).toFixed(2); 
		});

		fgpArray = Object.keys(bfDistanceFGP).map(function (key) {return Number(bfDistanceFGP[key]);});
		fgpSlider = fgpArray.map(function (i) { return Number((i / rangeTA).toFixed(2))*100 });

		console.log(fgpSlider); 
		
	});
	
	var button = document.getElementById('button');
	button.addEventListener('click', function() {
		var summed = assistSlider.SumArray(fgpSlider)
		console.log(summed); 
		var valMin = Math.min.apply( null, summed );
		var keyArray = Object.keys(bfDistanceAssist); 

		var player = keyArray[summed.indexOf(valMin)]; 
		console.log('player '+player,'index ' + summed.indexOf(valMin) ); 
		var output = '<img src="images/' + player + '.png" id="blzpics" alt="not found" />'; 
		$('#update').html(output); 


    });



}); 








