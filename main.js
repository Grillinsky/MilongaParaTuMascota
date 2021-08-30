
    var x = document.querySelectorAll(".navBtn.hide");
if (window.innerWidth < 800){

    function showLinks(){
        for (var i = 0; i<x.length; i++){
            x[i].classList.toggle("hide")
        }
    }
} else{
    for (var i = 0; i<x.length; i ++){
        x[i].classList.remove("hide")
    }
}