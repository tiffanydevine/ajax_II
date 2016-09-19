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
		var arr Object.keys(statObj).map(function (key) {return statObj[key];});
		return maxTA - minTA;
	}; 

	function distanceObject (sliderVal, range ) {

	}