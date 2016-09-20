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
	

	function statRange (statObj) {
		var arr = Object.keys(statObj).map(function (key) {return statObj[key];});
		console.log('hello'); 
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



	var ambition = $('#ambition').change(function(){
		var range = statRange(teamSteals); 
		//var distance = distanceArray (this.value, range, teamSteals); 
		// defined outside 
		//ambitionDistance = distanceScaleToSliderArray(distance, range); 


