var pathways = {
	programs:[
		{region: "EST", duration: "oneyr", cost: "$0-$4999", compensation: "housing",program_type: "internship", program_name: "Albany Free School Residential Internship", location: "Albany, NY", costcomp: "Housing", website: "http://www.albanyfreeschool.org/internship/", content: "The Free School, a democratically run preK-8th grade independent school in the south end of Albany, NY, offers a comprehensive, yearlong residential internship program that includes valuable learning experiences both in and outside of school. Our program offers the opportunity to intern at the longest running urban free school in the United States, and with ongoing support and guidance from members of the teaching staff, gain firsthand experience in a uniquely child-centered learning environment. Many former interns have gone on to teach at other alternative schools, public schools and some have even gone on to start their own schools. Our residential internship program is a typically a full school year commitment, but we are open to 3 or 6 month internships as well.  The school year for us (including a staff orientation and work week) generally runs from the last week in August to the second week in June."},
      {region: "nationwide", duration: "oneyr", cost: "$0-$4999", compensation: "stipend",program_type: "service", program_name: "Americorps", location: "nationwide", costcomp: "Living allowance, education award", website: "http://www.nationalservice.gov/programs/americorps/americorps-programs/americorps-state-and-national", content: "AmeriCorps State and National supports a wide range of local service programs that engage thousands of Americans in intensive community service each year. We provide grants to a network of local and national organizations and agencies committed to using national service to address critical community needs in education, public safety, health, and the environment."},
      {region: "EST", duration: "oneyr", cost: "$5000-$7499", compensation: "salary",program_type: "certificate", program_name: "Baltimore City Teaching Residency", location: "Baltimore, MD", costcomp: "$6,200 tuition, salary (average $47,950)", website: "http://tntpteachingfellows.org/baltimore", content: "The first year is demanding for any new teacher, but you will work in a high-need school where students may lag several grades behind. To prepare you for that challenge, you will receive intensive training, both in person and virtually, through TNTP Academy."},
      {region: "EST", duration: "oneyr", cost: "$0-$4999", compensation: "salary",program_type: "certificate", program_name: "DC Teaching Fellows", location: "Washington, DC", costcomp: "$4,800 tuition, salary (average $51,539)", website: "http://tntpteachingfellows.org/dc", content: "The first year is hard for any new teacher, but you will work in a high-need school where students may lag several grades behind. To prepare you for that challenge, you will receive intensive training online through TNTP Academy."},
      {region: "CST", duration: "twoyrs", cost: "$10,000+", compensation: "salary",program_type: "masters", program_name: "Indianapolis Teaching Fellows", location: "Indianapolis, IN", costcomp: "$11,360 tuition, salary (average $35,500)", website: "http://tntpteachingfellows.org/indianapolis", content: "he first year is hard for any new teacher, and you will work in a high-need school where students may lag several grades behind. To prepare you for that challenge, you will receive intensive pre-service training and coaching through Indianapolis Teaching Fellows and complete master’s level certification coursework through Marian University."},
      {region: "CST", duration: "oneyr", cost: "$5000-$7499", compensation: "salary",program_type: "certificate", program_name: "Michigan Teaching Corps", location: "Detroit, MI", costcomp: "$5,000 tuition, salary (average $35,000)", website: "http://michiganteachercorps.org", content: "You believe all Michigan students deserve a great teacher. We give you the skills to become one, with training from one of the nation’s leading teacher preparation programs, TNTP Teaching Fellows. Michigan Teacher Corps (MTC) Fellows complete an intensive summer training, and engage with coursework and coaching throughout their first year in the classroom, culminating in certification for Fellows who master core skills and show success with their students."},
      {region: "CST", duration: "oneyr", cost: "$5000-$7499", compensation: "salary",program_type: "certificate", program_name: "Nashville Teaching Fellows", location: "Nashville, TN", costcomp: "$5,500 tuition, salary (average $40,000)", website: "http://tntpteachingfellows.org/nashville/training-and-certification", content: "The first year is hard for any new teacher, but you will work in a high-need Charter school where students may lag several grades behind. To prepare you for that challenge, you will receive intensive training through TNTP Academy. While traditional teacher preparation programs stress educational theory, TNTP Academy is designed to transform talented professionals into great teachers through practical, classroom-centered coursework, with a sharp focus on core skills. You will be trained like a pro athlete, with ample opportunity to practice, reflect and improve, until essential teaching techniques become second nature. At every step, you will be held to the highest performance standards because your students are counting on teachers capable of delivering game-changing results"},
      {region: "MST", duration: "oneyr", cost: "$5000-$7499", compensation: "salary",program_type: "certificate", program_name: "Nevada Teacher Corps", location: "Nevada", costcomp: "$5,500 tuition, salary (average $34,600 and up to $5,000 in bonuses)", website: "http://nevadateachercorps.org", content: "Nevada Teacher Corps (NTC) Fellows complete an intensive summer training and engage with coursework and coaching throughout their first year in the classroom, culminating in licensure for Fellows who master core skills and show success with their students."},
      {region: "EST", duration: "", cost: "$7500-$9999", compensation: "salary",program_type: "masters", program_name: "NYC Teaching Fellows", location: "New York, NY", costcomp: "$7,500 tuition, salary (average $45,530), summer stipend ($2500), subsidized master's degree", website: "http://www.nycteachingfellows.org", content: "The New York City Teaching Fellows program is preparing a critical mass of exceptional teachers committed to a better future for the NYC students who need them most."},
      {region: "CST", duration: "oneyr", cost: "$0-$4999", compensation: "salary",program_type: "certificate", program_name: "teachNOLA", location: "New Orleans, LA", costcomp: "$4,440 tuition, salary (average $38,000-$45,000)", website: "http://tntpteachingfellows.org/new-orleans", content: "The first year is hard for any new teacher, but you will work in a high-need school where students may lag several grades behind. To prepare you for that challenge, you will receive intensive training, either in person or virtually, through TNTP Academy. While traditional teacher preparation programs stress educational theory, TNTP Academy is designed to transform talented professionals into great teachers through practical, classroom-centered coursework, with a sharp focus on core skills. You will be trained like a pro athlete, with ample opportunity to practice, reflect and improve, until essential teaching techniques become second nature. At every step, you will be held to the highest performance standards because your students are counting on teachers capable of delivering game-changing results."},
      {region: "EST", duration: "oneyr", cost: "$0-$4999", compensation: "stipend",program_type: "service", program_name: "Blue Engine Teaching Fellowship", location: "New York, NY", costcomp: "$14,400 living stipend", website: "http://blueengine.org", content: "Along with organizations like Teach for America and City Year, we are fueling a movement to channel the talents and energy of recent college graduates to help solve complex problems. We partner with schools to provide teachers with access to trained human capital that can be deployed quickly, cheaply, and effectively – in the process re-imagining how classrooms can help students achieve their potential. With thousands of graduates looking to effectively serve their communities and school districts looking for cost-effective ways to prepare students for the rigors of college, Blue Engine provides a way forward."},
      {region: "EST", duration: "fouryrs", cost: "$0-$4999", compensation: "stipend",program_type: "servicemasters", program_name: "Boston Teacher Residency", location: "Boston, MA", costcomp: "$12,500 stipend, AmeriCorps Education Award, Master's degree tuition at Umass Boston (1/3 of $10,000 loan forgiven for each year as a BPS teacher afterwards)", website: "http://www.bostonteacherresidency.org", content: "Boston Teacher Residency (BTR) is a one year, full-time AmeriCorps service program that recruits talented college graduates, career changers, and community embers and gives them the tools they need to make an immediate impact in the classrooms of Boston Public Schools."},
      {region: "CST", duration: "oneyr", cost: "$0-$4999", compensation: "stipend",program_type: "masters", program_name: "Chicago Teacher Residency", location: "Chicago, IL", costcomp: "Master's Degree Tuition (discounted), $30,000 training pay ($40,000 for Math), AmeriCorps Education Award", website: "http://auslchicago.org/residency/program", content: "AUSL’s Chicago Teacher Residency™ seeks talented, committed individuals who passionately believe that all students deserve a quality education. Work to transform the educational outcomes for students in the lowest performing schools through the Chicago Teacher Residency (CTR), AUSL’s specialized training program. The CTR is an intensive and supportive program that develops highly-effective teachers through a yearlong, residency-based training model."}
	]
};

window.onload = function(){

	document.getElementById("myform").onsubmit = function(event){
		var regionCheckedValue = []; 
   		var regionInputElements = document.getElementsByClassName('region');
   		for(var i=0; i <regionInputElements.length; i++){
   		      if(regionInputElements[i].checked){
   		           regionCheckedValue.push(regionInputElements[i].value);
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

         var compensationCheckedValue = []; 
         var compensationInputElements = document.getElementsByClassName('compensation');
         for(var i=0; i <compensationInputElements.length; i++){
               if(compensationInputElements[i].checked){
                    compensationCheckedValue.push(compensationInputElements[i].value);
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

   		if (regionCheckedValue.length == 0 && durationCheckedValue == 0 && costCheckedValue == 0 && compensationCheckedValue == 0 && programCheckedValue == 0){
   			html += "<ul>"
   			for (var i = 0; i <pathways.programs.length; i++){
   				html += "<li>" + pathways.programs[i].content + "</li>"
   			}
   			html += "<ul>"
   		}
   		else{
   			for (var i = 0; i <pathways.programs.length; i++){
   				var display = true; var inRegion = true; var inDuration = true; var inCost = true; var inCompensation = true; var inProgram = true;

   				if(regionCheckedValue.length){ var inRegion = $.inArray(pathways.programs[i].region, regionCheckedValue) !== -1 ? true : false}
   				if(durationCheckedValue.length){ var inDuration = $.inArray(pathways.programs[i].duration, durationCheckedValue) !== -1 ? true : false}
   				if(costCheckedValue.length){ var inCost = $.inArray(pathways.programs[i].cost, costCheckedValue) !== -1 ? true : false}
               if(compensationCheckedValue.length){ var inCompensation = $.inArray(pathways.programs[i].compensation, compensationCheckedValue) !== -1 ? true : false}
   				if(programCheckedValue.length){ var inProgram = $.inArray(pathways.programs[i].program_type, programCheckedValue) !== -1 ? true : false}

   				display = inRegion && inDuration && inCost && inCompensation && inProgram;
   				
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
