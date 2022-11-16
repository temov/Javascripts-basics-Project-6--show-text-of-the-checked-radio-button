var kopce = document.getElementsByName("grupa");
var i;
function prikazi(){
    for(i = 0; i < kopce.length; i++) { 
    if(kopce[i].checked) 
    document.getElementById("span").innerHTML = "You have chosed color:" +kopce[i].value; 
            } 
}
    prikazi();
