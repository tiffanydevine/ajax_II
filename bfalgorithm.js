

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
	var arr = Object.keys(statObj).map(function (key) {return statObj[key];});
	var minVal = Math.min.apply( null, arr );
	var maxVal = Math.max.apply( null, arr ); 
	return maxVal - minVal;
}; 

function distanceArray (sliderVal, range, statObj, emptyArray) {
	var arr =  Object.keys(statObj).map(function (key) {return statObj[key];});
	var minVal = Math.min.apply( null, arr );
	var scaledVal = (sliderVal/100); 
	var score = ((scaledVal * range) + minVal ); 
	emptyArray = []; 
	$.each(statObj, function(key, value){
		emptyArray.push(Number(Math.abs(score - value).toFixed(2))); 
	});
	return emptyArray; 
}; 

function distanceScaleToSliderArray (distanceArray, range) {
	return distanceArray.map(function (i) { return Number((i / range).toFixed(2))*100 });
}; 


$.getJSON('http://stats.nba.com/stats/teamplayerdashboard?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlusMinus=N&Rank=N&Season=2015-16&SeasonSegment=&SeasonType=Regular+Season&TeamID=1610612757&VsConference=&VsDivision=', function (data) {
 	var teamAssist = {};  // Assist
	var teamFgPercent = {};  // FG percent 
	var teamRebounds = {};  // Rebounds 
	var teamSteals = {};  // Steals 
	var teamBlocks = {};  // Blocks 
	var teamPersonalFoul = {};  // Blocks 


	$.each(data.resultSets[1].rowSet, function(index, value){
		teamAssist[value[2]] = value[20];
		teamFgPercent[value[2]] = value[10];
		teamRebounds[value[2]] = value[19];
		teamSteals[value[2]] = value[22];
		teamBlocks[value[2]] = value[23];
		teamPersonalFoul[value[2]] = value[25];


	 }); 
	/*
	var arr = Object.keys(teamAssist).map(function (key) {return teamAssist[key];});
	var minTA = Math.min.apply( null, arr );
	var maxTA = Math.max.apply( null, arr ); 
	var rangeTA = maxTA - minTA; 
	*/

	var playerArray = Object.keys(teamAssist); 
	// Arrays default at 50 across the board.  
	var personalfoulSlider = []; 
	var blocksSlider = []; 
	var stealsSlider = []; 
	var fgpSlider = []; 
	var assistSlider = []; 
	var rebSlider = [];

	var generosityDistance = []; 
	var badBoyDistance = []; 
	var protectiveDistance =  []; 
	var intellegenceDistance = []; 


	//var allDistanceSummed = assistArray.SumArray(fgpArray); 
	
	// generosity slider (assists [20])
	var generosity = $('#generosity').change(function(){
    	var range = statRange(teamAssist); 
		var distance = distanceArray (this.value, range, teamAssist, assistSlider); 
		generosityDistance = distanceScaleToSliderArray(distance, range); 
		// console.log(ambitionDistance); 

	}); 

	// bad boy slider (PFs [])
	var badBoy = $('#bad-boy').change(function(){	
		var range = statRange(teamPersonalFoul); 
		//console.log(teamPersonalFoul); 
		var distance = distanceArray (this.value, range, teamPersonalFoul, personalfoulSlider); 
		badBoyDistance = distanceScaleToSliderArray(distance, range); 

	});

	// protective (blocks[23])
	var protective = $('#protective').change(function(){	
		var range = statRange(teamBlocks); 
		var distance = distanceArray (this.value, range, teamBlocks, blocksSlider); 
		protectiveDistance = distanceScaleToSliderArray(distance, range); 
	}); 
 
	
 	// intellegence (steals[22])
	var intellegence = $('#intellegence').change(function(){
		var range = statRange(teamSteals); 
		var distance = distanceArray (this.value, range, teamSteals, rebSlider); 
		intellegenceDistance = distanceScaleToSliderArray(distance, range); 
	});

	
	var button = document.getElementById('button');
	button.addEventListener('click', function() {
		var summed = protectiveDistance.SumArray(generosityDistance).SumArray(intellegenceDistance).SumArray(badBoyDistance); 
		var valMin = Math.min.apply( null, summed );
		var player = playerArray[summed.indexOf(valMin)]; 
		console.log(player);
		var output = '<img src="images/' + player + '.png" id="blzpics" alt="not found" />'; 
		$('#update').html(output); 

    });




}); 








