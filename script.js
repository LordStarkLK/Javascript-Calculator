let nums=document.getElementsByClassName("num");
let display=document.getElementById('numField');

//event listners
nums.addEventListner("click",displayNum(nums));


//display numbers when clicked
function displayNum(nums){
    display.innerText=nums;
}