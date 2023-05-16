const ratings = document.querySelectorAll('li');
const button = document.querySelector('button');
let selectedRating;

function selectRating(e){

    if(selectedRating !== undefined){
        ratings[selectedRating - 1].classList.remove("active");
    }
    e.target.classList.add("active")
    selectedRating = Number(e.target.innerText);
}

ratings.forEach(function(element){
    element.addEventListener("click", selectRating)
})

function submitRating(){
    if(selectedRating !== undefined){
        document.getElementById("main-content").classList.add("hide");
        document.getElementById("thaks-content").classList.remove("hide");
        document.getElementById("thaks-content").style.animation = "fadeIn 1s ease-in-forwards";
        document.getElementById("selected-rating").innerText = selectedRating;
    }
}

button.addEventListener("click", submitRating);