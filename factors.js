var pathways = {
	programs:[
		{location: "eastcoast", duration: "oneyr", cost: "free", program_type: "internship", content: "monica eastcoast, oneyr, free, internship"},
		{location: "westcoast", duration: "oneyr", cost: "money", program_type: "fellowship", content: "hi westcoast, oneyr, money, fellowship"},
		{location: "eastcoast", duration: "fouryrs", cost: "money", program_type: "fellowship", content: "hello eastcoast, fouryrs, money, fellowship"}
	]
};

window.onload = function(){

	document.getElementById("myform").onsubmit = function(event){
		var locationCheckedValue = []; 
   		var locationInputElements = document.getElementsByClassName('location');
   		for(var i=0; i <locationInputElements.length; i++){
   		      if(locationInputElements[i].checked){
   		           locationCheckedValue.push(locationInputElements[i].value);
   		      }
   		}

   		var durationCheckedValue = []; 
		var durationInputElements = document.getElementsByClassName('duration');
   		for(var i=0; i <durationInputElements.length; i++){
   		      if(durationInputElements[i].checked){
   		           durationCheckedValue.push(durationInputElements[i].value);
   		      }
   		}

   		var costCheckedValue = []; 
   		var costInputElements = document.getElementsByClassName('cost');
   		for(var i=0; i <costInputElements.length; i++){
   		      if(costInputElements[i].checked){
   		           costCheckedValue.push(costInputElements[i].value);
   		      }
   		}

   		var programCheckedValue = []; 
   		var programInputElements = document.getElementsByClassName('program_type');
   		for(var i=0; i <programInputElements.length; i++){
   		      if(programInputElements[i].checked){
   		           programCheckedValue.push(programInputElements[i].value);
   		      }
   		}

   		var html = "";

   		if (locationCheckedValue.length == 0 && durationCheckedValue == 0 && costCheckedValue == 0 && programCheckedValue == 0){
   			html += "<ul>"
   			for (var i = 0; i <pathways.programs.length; i++){
   				html += "<li>" + pathways.programs[i].content + "</li>"
   			}
   			html += "<ul>"
   		}
   		else{
   			for (var i = 0; i <pathways.programs.length; i++){
   				var display = true; var inLocation = true; var inDuration = true; var inCost = true; var inProgram = true;

   				if(locationCheckedValue.length){ var inLocation = $.inArray(pathways.programs[i].location, locationCheckedValue) !== -1 ? true : false}
   				if(durationCheckedValue.length){ var inDuration = $.inArray(pathways.programs[i].duration, durationCheckedValue) !== -1 ? true : false}
   				if(costCheckedValue.length){ var inCost = $.inArray(pathways.programs[i].cost, costCheckedValue) !== -1 ? true : false}
   				if(programCheckedValue.length){ var inProgram = $.inArray(pathways.programs[i].program_type, programCheckedValue) !== -1 ? true : false}

   				display = inLocation && inDuration && inCost && inProgram;
   				
   				if (display){
   					html += "<li>" + pathways.programs[i].content + "</li>"
   				}
   			}
   		}
   		if(html == ""){html += "No programs currently match your specifications."}
		$("#yourPrograms").html(html);
	    event.preventDefault();
	};
}
