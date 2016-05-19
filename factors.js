window.onload = function(){

	document.getElementById("myform").onsubmit = function(event){
		var checkedValue = []; 
   		var locationInputElements = document.getElementsByClassName('location');
   		for(var i=0; i <locationInputElements.length; i++){
   		      if(locationInputElements[i].checked){
   		           checkedValue.push(locationInputElements[i].value);
   		      }
   		}

		var durationInputElements = document.getElementsByClassName('duration');
   		for(var i=0; i <durationInputElements.length; i++){
   		      if(durationInputElements[i].checked){
   		           checkedValue.push(durationInputElements[i].value);
   		      }
   		}

   		var costInputElements = document.getElementsByClassName('cost');
   		for(var i=0; i <costInputElements.length; i++){
   		      if(costInputElements[i].checked){
   		           checkedValue.push(costInputElements[i].value);
   		      }
   		}

   		var programInputElements = document.getElementsByClassName('program_type');
   		for(var i=0; i <programInputElements.length; i++){
   		      if(programInputElements[i].checked){
   		           checkedValue.push(programInputElements[i].value);
   		      }
   		}

   		var html = "";

   		if (checkedValue.length == 0){
   			html += "monica is beuatif"
   		}
   		for (var i = 0; i < checkedValue.length; i++) {
   		   html += '<p>'+checkedValue[i]+'</p>';
   		}
		$("#yourPrograms").html(html);
	    event.preventDefault();
	};
}
