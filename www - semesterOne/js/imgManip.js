function showImg(imgURL){

	$("#campusMap").css("display","block");
	$("#blackBack").css("display","block");
	$("#exit").css("display","block");
	//$("#campusMap").attr("src",cordova.file.applicationDirectory + imgURL);
	$("#campusMap").attr("src",imgURL);
}


function hideIMG(){
	
		
	$("#campusMap").css("display","none");
	$("#blackBack").css("display","none");
	$("#exit").css("display","none");
}




function locToImg(classID){
	
	showImg("imgur/"+classID+".png");
}
 
 