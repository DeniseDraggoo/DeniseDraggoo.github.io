$( document ).ready(function() {
      /*---------------SCIENCE----------------------*/
    var chem161 = document.getElementById('chem161');
    var math146 = document.getElementById('math146');
    var math163 = document.getElementById('math163');
    var phys114 = document.getElementById('phys114');
    var phys115 = document.getElementById('phys115');
    var phys116 = document.getElementById('phys116');
    var math151 = document.getElementById('math151');
    var math152 = document.getElementById('math152');

    function checkCourses() {
            console.log("checkCourses init");


        if(chem161.checked){
            alert("checked");
        }
if (((chem161.checked  && ( (math146.checked  || math163.checked ) || (phys114.checked  || phys115.checked  || phys116.checked )) || (math146 || math163) && (phys114 || phys115 || phys116))
&& ((chem161.checked  || phys114.checked  || phys115.checked  || phys116.checked ) && (chem161.checked  && (math146.checked  || math163.checked ))))){
$("#Feedback_Science_Complete").html("Science requirements met");
} else {
$("#Feedback_Science_Incomplete").html("Science requirements not met");
}

if (!chem161.checked || !phys114.checked || !phys115.checked || !phys116.checked) {
$("#Feedback_Science_No_Lab").html("No lab course taken yet");
}

if ((chem161.checked  && ((math146.checked  || math163.checked ) || (phys114.checked  || phys115.checked  || phys116.checked ))) || (math146.checked  || math163.checked ) && (phys114.checked  || phys115.checked  || phys116.checked))
{
$("#Feedback_Science_Missing_Second_Discipline").html("Missing the second discipline");
}


/* -----------------QUANTATIVE-----------------------*/

if (math151.checked && math152.checked) {
    $("#Feedback_QSR_Complete").html("Quantative or Symbolic Reasoning courses complete");
}
else {
    $("#Feedback_QSR_Incomplete").html("Missing QSR requirement");
}
  }

$('#theButton').click(function() {checkCourses()});

});
