var isItImportant = false;
var isDetailsVisible = true;

function toggleDetailsVisibility(){ 
    //hide/show the capture
    //$("#capture").hide();
    // $("#capture").show();
    if(isDetailsVisible) {
        $("#capture").hide();
        isDetailsVisible = false;
    }
    else {
        $("#capture").show();
        isDetailsVisible = true;
    }
}

function toggleImportant() {

    console.log("Icon Clicked");

    if(!isItImportant) {
        $("#iImportant").removeClass("fa-star-half-alt").addClass("fa-star");
        isItImportant = true;
    } else {
        isItImportant = false;
    }

}

function saveTask(){
    console.log("Save Clicked");

    /** Homework class 2
   * get the values from the input fields and put them into variables
   */
   var title = $("#txtTitle").val();
   var date = $("#txtDate").val()
   var status = $("#selStatus").val();
   var location = $("#txtLocation").val();
   var color = $("#txtColor").val();
   var desc = $("#txtDesc").val();

   var myTask = new Task(0,title, isItImportant, date, status, location, color, desc);

   console.log(myTask);
   //display task
   displayTask(myTask);

}
function displayTask(task) {
//create syntax
    var syntax = 
    `<div> 
    <h4> ${task.title}</h4>
    <p>${task.description}</p>
    <label>${task.dueDate}</label>
    <i class="far fa-star"></i></div>`;
    //append the syntax to existing html
    $("#tasks-list").append(syntax);
}

function init () {
    console.log("Task Manager");

    //events
    $("#iImportant").click(toggleImportant);
    $("#saveTask").click(saveTask);
    $("#btnDetails").click(toggleDetailsVisibility);
    
    $('#txtColor').spectrum({
        type: "component"
      });
    
    
}
















window.onload = init;

/*
Task
-Id
-Title
-Date & Time
-Important
-Description
-Status
-Location
-Color
*/
