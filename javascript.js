const submitButton = document.getElementById("submit");
const buttonContainer = document.getElementById("button-container");
const button1 = document.getElementById("1");
const resultRating = document.getElementById("result");
const thankYouContainer = document.getElementById("thank-you-container");
const mainContainer = document.getElementById("main-container")


let currentRating = 0;

for(i=1; i<5;i++){

    document.getElementById(i).addEventListener("click",function(){
        currentRating = this.value;
        resultRating.innerText = this.value;
    })

}

submitButton.addEventListener("click",function(){
    if(currentRating!=0){
    thankYouContainer.style.display = "flex";
    mainContainer.style.display = "none";
    }
})
