
    $( document ).ready(function() {
        
    function checkCourses() {
      /*---------------SCIENCE----------------------*/
    var chem161 = document.getElementById("chem161").checked;
    var math146 = document.getElementById("math146").checked;
    var math163 = document.getElementById("math163").checked;
    var phys114 = document.getElementById("phys114").checked;
    var phys115 = document.getElementById("phys115").checked;
    var phys116 = document.getElementById("phys116").checked;
    var math151 = document.getElementById("math151").checked;
    var math152 = document.getElementById("math152").checked;
    var button  = document.getElementById("theButton");


      
        if (((chem161 && 
            ( (math146 || math163) 
            || (phys114 || phys115 || phys116))) 
             
            || (math146 || math163) 
            && (phys114 || phys115 || phys116))
            && ((chem161 || phys114 || phys115 || phys116) 
            && (chem161 
            && (math146 || math163)))) {
            $("#Feedback_Science_Complete").html("Science requirements met");
            $("#Feedback_Science_Incomplete").html("") 
            $("#Feedback_Science_No_Lab").html("");
            $("#Feedback_Science_Missing_Second_Discipline").html("");
        } 
    
        else {
            $("#Feedback_Science_Incomplete").html("Science requirements not met");
            $("#Feedback_Science_Complete").html("");
            }
     //       console.log(chem161);
        if (chem161 == false && phys114 == false && phys115 == false && phys116 == false) {
            $("#Feedback_Science_No_Lab").html("No lab course taken yet");
            }
        else {
            $("#Feedback_Science_No_Lab").html("");
        }
            


        if ((chem161 && ((math146 || math163) || (phys114 || phys115 || phys116))) == false
        && ((math146 || math163) && (phys114 || phys115 || phys116)) == false)
            {
                $("#Feedback_Science_Missing_Second_Discipline").html("Missing the second discipline");
            
            }
        else {
          $("#Feedback_Science_Missing_Second_Discipline").html("");  
        }

            /* -----------------QUANTATIVE-----------------------*/

            var math151 = document.getElementById("math151").checked;
            var math152 = document.getElementById("math152").checked;
            if (math151 && math152) {
                $("#Feedback_QSR_Complete").html("Quantative or Symbolic Reasoning courses complete");
                $("#Feedback_QSR_Incomplete").html("");
            }
            else {
                $("#Feedback_QSR_Incomplete").html("Missing QSR requirement");
                $("#Feedback_QSR_Complete").html("");
            }

            /* ---------FOUNDATIONS FOR COLLEGE SUCCESS---------*/
            
            
        
            var coll100 = document.getElementById("coll100").checked;
            var coll101 = document.getElementById("coll101").checked;
            if (coll100 || coll101) {
                $("#Feedback_ColSucc_Complete").html("Foundations for College Success courses complete");
                $("#Feedback_ColSucc_Incomplete").html("");
            }
            else {
                $("#Feedback_ColSucc_Incomplete").html("Missing Foundations for College Success course");
                $("#Feedback_ColSucc_Complete").html("");
            }
        
            /* --------------COMMUNICATIONS--------------------*/
            var engl101 = document.getElementById("engl101").checked;
            var engl102 = document.getElementById("engl102").checked;
            var engl235 = document.getElementById("engl235").checked;
            if (engl101 && (engl102 || engl235)) {
                $("#Feedback_Communications_Complete").html("Communication courses complete");
                $("#Feedback_Communications_Incomplete").html("");
            }
            else {
                $("#Feedback_Communications_Incomplete").html("Missing Communication course");
                $("#Feedback_Communications_Complete").html("");
            }
        
            /* ------------------CULTURAL-----------------------*/
            var cultural = document.getElementById("cultural").checked;    
            if (cultural) {
                $("#Feedback_Cultural_Complete").html("Cultural course complete");
                $("#Feedback_Cultural_Incomplete").html("");
            }
            else {
                $("#Feedback_Cultural_Incomplete").html("Missing Cultural course");
                 $("#Feedback_Cultural_Complete").html("");
            }
        
            /* ------------------HUMANITIES-----------------------*/
            var hDesignated = document.getElementById("hDesignated").checked;
            var ssDesignated = document.getElementById("ssDesignated").checked;
            if (hDesignated || ssDesignated) {
                $("#Feedback_Humanities_Complete").html("Humanities course complete");
                $("#Feedback_Humanities_Incomplete").html("");
            }

            else {
                $("#Feedback_Humanities_Incomplete").html("Missing Humanities course");
                 $("#Feedback_Humanities_Complete").html("");
            }
  }
        
        

$('#theButton').click(function() {
    checkCourses()
});

});
