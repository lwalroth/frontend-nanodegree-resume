
var formattedName = HTMLheaderName.replace("%data%", "Laurie Walroth");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Laurie",
	"role" : "Software Engineer",
	"Contact Info" : "laurie.walroth@gmail.com",
	"Welcome Message" : "Welcome to my page",
	"skills" : [
	  "Python", "Java", "Web Design"
	],
  
    "welcomeMessage": "Welcome to my Resume",
}



var work = {
	"jobs": [
	  {
	  	"employer": "Google",
	  	"title" : "Software Engineer",
	  	"dates" : "August 2014 - Present",
	  	"description" : "working"
	  }
	]
}



var education = {
	"schools": [
	  {
		"name": "UofT",
		"city": "Toronto",
		"major": "english",
		"minor": "sociology",
		"graduation": 2004
		
	  }
	],

    "onlineCourse": [
      {
      	"title": "Javascript",
      	"school": "Udacity",
      	"date": 2014
      }
    ]
}

var projects = {
	"projects": [
	  {
	  	"title": "Sample Project 1",
	  	"dates": "2014"
	  }
	]
}

$("#main").append(bio.role);
$("#main").append(work.jobs[0]);
$("#main").append(education[schools.name]);
$("#main").append(projects.projects);




	
	
