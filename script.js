


function expand1(){

    var paragraph = document.querySelector('.service-content-1');
    var expander1 = document.querySelector('.expander1');

    expander1.style.opacity = "0";

    paragraph.style.display = "block";
    expander1.style.rotate = "180deg";

}

function expand2(){

    var paragraph = document.querySelector('.service-content-2');
    var expander2 = document.querySelector('.expander2');

    expander2.style.opacity = "0";
    paragraph.style.display = "block";
    expander2.style.rotate = "180deg";

}

function expand3(){

    var paragraph = document.querySelector('.service-content-3');
    var expander3 = document.querySelector('.expander3');

    expander3.style.opacity = "0";
    paragraph.style.display = "block";
    expander3.style.rotate = "180deg";

}

function expand4(){

    var paragraph = document.querySelector('.service-content-4');
    var expander4 = document.querySelector('.expander4');

    expander4.style.opacity = "0";
    paragraph.style.display = "block";
    expander4.style.rotate = "180deg";

}

function expand5(){

    var paragraph = document.querySelector('.service-content-5');
    var expander5 = document.querySelector('.expander5');

    expander5.style.opacity = "0";
    paragraph.style.display = "block";
    expander5.style.rotate = "180deg";

}

function expand6(){

    var paragraph = document.querySelector('.service-content-6');
    var expander6 = document.querySelector('.expander6');

    expander6.style.opacity = "0";
    paragraph.style.display = "block";
    expander6.style.rotate = "180deg";

}

function expand7(){

    var paragraph = document.querySelector('.service-content-7');
    var expander7 = document.querySelector('.expander7');

    expander7.style.opacity = "0";
    paragraph.style.display = "block";
    expander7.style.rotate = "180deg";

}

function expand8(){

    var paragraph = document.querySelector('.service-content-8');
    var expander8 = document.querySelector('.expander8');

    expander8.style.opacity = "0";
    paragraph.style.display = "block";
    expander8.style.rotate = "180deg";

}

//Accounting Team Section

function teamBio1(){

    document.body.querySelector('.nhlanhla-description').style.opacity = "1";
    document.body.querySelector('.ndumi-description').style.opacity = "0";
    document.body.querySelector('.murcha-description').style.opacity = "0";

    document.body.querySelector('.dot1').style.opacity = "1";
    document.body.querySelector('.dot2').style.opacity = "0";
    document.body.querySelector('.dot3').style.opacity = "0";

}

function teamBio2(){

    document.body.querySelector('.nhlanhla-description').style.opacity = "0";
    document.body.querySelector('.ndumi-description').style.opacity = "1";
    document.body.querySelector('.murcha-description').style.opacity = "0";

    document.body.querySelector('.dot1').style.opacity = "0";
    document.body.querySelector('.dot2').style.opacity = "1";
    document.body.querySelector('.dot3').style.opacity = "0";

}

function teamBio3(){

    document.body.querySelector('.nhlanhla-description').style.opacity = "0";
    document.body.querySelector('.ndumi-description').style.opacity = "0";
    document.body.querySelector('.murcha-description').style.opacity = "1";

    document.body.querySelector('.dot1').style.opacity = "0";
    document.body.querySelector('.dot2').style.opacity = "0";
    document.body.querySelector('.dot3').style.opacity = "1";

}

//Form Page Section

function radioIndividual(){
    document.body.querySelector('.rsa-id').style.display = "block";
    document.body.querySelector('.box2-individual-options').style.display = "grid";
    document.body.querySelector('.box2-organization-options').style.display = "none";
    document.body.querySelector('.box3-div').style.display = "none";

    document.querySelectorAll('.required-individual').forEach(function(element) {
        element.setAttribute("required", "true");
      });

    document.querySelectorAll('.required-org').forEach(function(element) {
        element.removeAttribute("required");
      });


}

function radioOrganization(){
    document.body.querySelector('.rsa-id').style.display = "none";
    document.body.querySelector('.box2-individual-options').style.display = "none";
    document.body.querySelector('.box2-organization-options').style.display = "grid";
    document.body.querySelector('.box3-div').style.display = "grid";
    
    document.querySelectorAll('.required-individual').forEach(function(element) {
        element.removeAttribute("required");
      });

    document.querySelectorAll('.required-org').forEach(function(element) {
        element.setAttribute("required", "true");
      });
}