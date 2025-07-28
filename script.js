
//Event Listeners

let triggered1 = false;
let triggered2 = false;
let triggered4 = false;
let triggered6 = false;
let triggered8 = false;

const animationDiv1 = document.getElementById('vision');
const animationDiv2 = document.getElementById('qualities-grid');
const animationDiv3 = document.querySelector('.quality-blocks');
const animationDiv4 = document.getElementById('about-us');
const animationDiv5 = document.querySelector('.team-grid');
const animationDiv6 = document.getElementById('form');
const animationDiv7 = document.getElementById('getStartedBtn');
const animationDiv8 = document.getElementById('linkIcon');

window.addEventListener('scroll', () => {
  const rect1 = animationDiv1.getBoundingClientRect();
  const rect2 = animationDiv2.getBoundingClientRect();
  const rect4 = animationDiv4.getBoundingClientRect();
  const rect6 = animationDiv6.getBoundingClientRect();
  const rect8 = animationDiv8.getBoundingClientRect();

  if (rect1.top <= 400 && !triggered1) {
    triggered1 = true;
    animationDiv1.style.opacity = '1';
  }

  if (rect2.top <= 200 && !triggered2) {
    triggered2 = true;
    animationDiv2.style.backgroundColor = '#DED8CC';
    animationDiv3.style.backgroundColor = '#DED8CC';
  }

  if (rect4.top <= 200 && !triggered4) {
    triggered4 = true;
    animationDiv4.style.opacity = '1';
    animationDiv4.style.marginTop = '0';
    animationDiv5.style.paddingLeft = '10px';
  }

  if (rect6.top <= 200 && !triggered6) {
    triggered6 = true;
    animationDiv6.style.backgroundColor = '#F5DB9E';
    animationDiv7.style.opacity = '1';
    animationDiv7.style.marginTop = '40px';
  }

  if (rect8.top <= 400 && !triggered8) {
    triggered8 = true;
    animationDiv8.style.marginRight = '0';
    animationDiv8.style.opacity = '1';
  }

});



//Accounting Team Section

function teamBio1(){

    if(document.body.style.width > "768px"){
        document.body.querySelector('.nhlanhla-description').style.opacity = "1";
        document.body.querySelector('.ndumi-description').style.opacity = "0";
        document.body.querySelector('.murcha-description').style.opacity = "0";

        document.body.querySelector('.dot1').style.opacity = "1";
        document.body.querySelector('.dot2').style.opacity = "0";
        document.body.querySelector('.dot3').style.opacity = "0";

    }else{
        window.open("https://www.lemon-salt.co.za/team#nhlanhla");
    }
}

function teamBio2(){

    if(document.body.style.width > "768px"){
        document.body.querySelector('.nhlanhla-description').style.opacity = "0";
        document.body.querySelector('.ndumi-description').style.opacity = "1";
        document.body.querySelector('.murcha-description').style.opacity = "0";

        document.body.querySelector('.dot1').style.opacity = "0";
        document.body.querySelector('.dot2').style.opacity = "1";
        document.body.querySelector('.dot3').style.opacity = "0";

    }else{
        window.open("https://www.lemon-salt.co.za/team#nondumiso");
    }

}

function teamBio3(){

    if(document.body.style.width > "768px"){
        document.body.querySelector('.nhlanhla-description').style.opacity = "0";
        document.body.querySelector('.ndumi-description').style.opacity = "0";
        document.body.querySelector('.murcha-description').style.opacity = "1";

        document.body.querySelector('.dot1').style.opacity = "0";
        document.body.querySelector('.dot2').style.opacity = "0";
        document.body.querySelector('.dot3').style.opacity = "1";

    }else{
        window.open("https://www.lemon-salt.co.za/team#murcha");
    }

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
