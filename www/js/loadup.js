var d = new Date();
trueDay = d.getDay();
if(trueDay > 5 || trueDay < 1){
	currentDay = 1;
}
else{
	currentDay = trueDay;
}
dayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

$.getJSON( "schedule.json", function( scheduleData ) {

	currentMins = d.getMinutes();
	currentHours = d.getHours();
	//alert(scheduleData["classes"][1]["classID"]);
	classData = scheduleData["classes"];
	//For each class...
	$.each( classData, function( theClass, Data ) {
		classDays = "" + Data["classDay"];
		trueClassDays = classDays.split("");
		for(dayNumb = 0; dayNumb < trueClassDays.length; dayNumb++){
			dayClassOn = trueClassDays[dayNumb];
			classTitle = Data["title"];
			classLocation = Data["location"];
			classID = Data["classID"];
			classStartHours = Data["timeData"]["classStartHours"];
			classStartMinutes = Data["timeData"]["classStartMinutes"];
			classStartTime = parseTime(Data["timeData"]["classStartHours"],Data["timeData"]["classStartMinutes"]);
			classEndTime = parseTime(Data["timeData"]["classEndHours"],Data["timeData"]["classEndMinutes"]);
			$("#day"+dayClassOn).append('<div class="classData"><p class="classTitle">'+classTitle+'</p><p class="classInfo">'+classStartTime+' - '+classEndTime+'<br><span class="locSpan" onclick="locToImg(\''+classID+'\')" classID="'+classID+'">'+classLocation+'</span></p></div>');
		}
			
	});
	
	

});

showDays();
function showDays(){
	$(".dayDiv").each(function(){
		dayID = $(this).attr("day");
		if(dayID == currentDay){
			$(this).css("display","block");
		}
		else{
			$(this).css("display","none");
		}

	});
	theDayName = dayNames[currentDay - 1];
	$("title").text("Abdullah's UTD Schedule - " + theDayName);
	$("#dayName").text(theDayName);
}

function highlightNextClass(){
	
	
}
