
var formattedName = HTMLheaderName.replace("%data%", "Laurie Walroth");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Laurie",
	"role" : "Software Engineer",
	"Contact Info" : "laurie.walroth@gmail.com",
	"Welcome Message" : "Welcome to my page",
	"skills" : ["Python", "Java", "Web Design"]
};

$("#main").append(bio.name);

var work = {};
work.position = "Software Engineer";
work.employer = "Google";
work.years = 3;
work.location = "SunnyVale";

var education = {};
education["name"] = "UofT";
education["years"] = 4;
education["city"] = "Toronto";


$("#main").append(work["position"]);
$("#main").append(education.name);




	
	
