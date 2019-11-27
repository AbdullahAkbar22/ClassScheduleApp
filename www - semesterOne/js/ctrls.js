function prevDay(){
	if(currentDay == 1){
		currentDay = 5;
	}
	else{
		currentDay--;
	}
	showDays();

}

function nextDay(){
	if(currentDay == 5){
		currentDay = 1;
	}
	else{
		currentDay++;
	}
	showDays();

}


function returnDayDiv(dayNumber){
	$(".dayDiv").each(function(){
		if($(this).attr("day") == dayNumber){
			return this;
		}
	
	});
	return "";
}


function colorfiyClasses(){
	
	$(".classTitle").each(function(){
	classTitle = $(this).text();
	splitTitle = $(this).text().split("");
	finalTitle = "";
	for(charIOn = 0; charIOn < splitTitle.length; charIOn++){
		charOn = classTitle[charIOn];
		 blueVal = Math.floor(Math.random() * 257);
		 redVal = Math.floor(Math.random() * 257);
		 greenVal = Math.floor(Math.random() * 257);
		 finalTitle += "<span style='color: rgb("+redVal+", "+greenVal+","+blueVal+");'>"+charOn+"</span>";
	 }
	 
	 $(this).html(finalTitle);
	});
	
}

//setInterval(function(){colorfiyClasses();},200);



function parseTime(hours, minutes){
	timeString = "";
	timeSuffix = "";
	if(hours >= 12){
		timeSuffix = "PM";
		if(hours > 12){
			hours = hours - 12;
		}
	}
	else{
		timeSuffix = "AM";
		if(hours == 0){
			hours = 12;
		}
	}
	
	if(minutes == 0){
		minutes = "00";
	}

	timeString = "" + hours + ":" + minutes + " " + timeSuffix;
	return timeString;
}
