var employeeArray = [];
var totalCashMoney=0;

var employeeIndex=0;


$(document).ready(function(){
	$("#employeeinfo").submit(function(event){
		event.preventDefault();

		getInfoEmployee();


	});
	$("#employeeContainer").on('click', '.deleteButton', function(){
		var $el = $(this).parent();
		var deletedIndex = $el.data("employeeIndex");

		for(var i = 0; i < employeeArray.length; i++){
			if(employeeArray[i].employeeIndex == deletedIndex){
				employeeArray.splice(i, 1);
				console.log("delete me");
			}
		}

		$el.remove();
		totalSalaries();
	});
});


function getInfoEmployee(){
	employeeIndex++;
	var values = {};

		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;  // im not sure what the [] are doing. looks like its creating an object
		})
		
		$("#employeeinfo").find("input[type=text]").val("");
		employeeArray.push(values);
		totalSalaries();
		appendDom(values);
};
function appendDom(employee){
	console.log(employee);
	$("#employeeContainer").append("<div class='employee'></div>");
	var $el = $("#employeeContainer").children().last();
	$el.data("employeeIndex",employeeIndex);
	employee.employeeIndex=$el.data("employeeIndex");

	$el.append("<p> Names:" + employee.employeename + "</p>");
	$el.append("<p>Employee Number:" + employee.employeenumber + "</p>");
	$el.append("<p>Position: " + employee.jobtitle+"</p>" );
	$el.append("<p>Salary: " + employee.salary+"</p>" );
	$el.append("<button class='deleteButton'>Delte</button>");
};


function totalSalaries(){
	totalCashMoney =0;

	for(var i = 0; i < employeeArray.length; i++){
		totalCashMoney += parseInt(employeeArray[i].salary);
	}

	$("#totalcash").empty();
	$("#totalcash").append("<p>Here is the total cash: " + totalCashMoney);

	//console.log($("#totalcash").data("something", "bye"));
	console.log($("#totalcash").data("something"));

	return totalCashMoney;



	//employeeArray.push(monthlySalary); not yet >?
	
	// console.log(number.monthlySalary);
	// console.log(employeeArray);
}




// cyclye through and array of objects call the id for numbers your looking for 


///First we have to add more inputs- done with inputs
////job title and salary
///take all the employees salaries  and figure out what the montly cost of the those employees cost


// Hard mode
///create a delte button that removes the employee from the form


//Pro mode

////update total salarys discount the removed employees salary
// jQuery's .data() function to help complete this. Note, you will need to do 
//something both when the employee is added and when they are deleted to make your application 'smart'.