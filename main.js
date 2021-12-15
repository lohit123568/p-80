var names_of_people = [];
    
function submit()
{
	// use the push function as - names_of_people.push(GuestName);
	push.names_of_people.(GuestName)
	console.log(GuestName);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
	name_of_the_people_array = [];
   
function submit()
{
    var display_people_array = [];

    for (var j = 1; j <= 4; j++)
    {
        var name_of_the_people = document.getElementById("name1"+j).value;
        console.log(name_of_the_people);
        name_of_the_people_array.push(name_of_the_people);
    }

    console.log(name_of_the_people_array);

    var lenght_of_name_of_people_array = name_of_the_people_array.length;
    console.log(lenght_of_name_of_people_array);

    for (var k = 0; k < lenght_of_name_of_people_array; k++)
    {
        display_people_array.push("<h4>NAME - "+ name_of_the_people_array[k] + "</h4>");
        console.log(display_people_array);
    }

    console.log(display_people_array);
    document.getElementById("display_name_with_commas").innerHTML = display_people_array;

    var remove_commas = display_people_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}





   



function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}

		function sorting()
{
    name_of_the_people_array.sort();
    console.log(name_of_the_people_array);

    var display_people_array_sorting = [];

    var lenght_of_name_of_peoples_array = name_of_the_people_array.length;
    console.log(lenght_of_name_of_peoples_array);

    for (var k = 0; k < lenght_of_name_of_peoples_array; k++)
    {
        display_people_array_sorting.push("<h5>NAME - " + name_of_the_people_array[k] + "</h5>");
        console.log(display_people_array_sorting);
    }

    var remove_commas = display_people_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
