let hour=document.getElementById("hourBox"); // gets element by ID
let minute=document.getElementById("minuteBox");
let second=document.getElementById("secondBox");
let count=1;


    function updateTime(){

     let date=new Date();
     let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    // Manipulation using DOM

    
    hour.innerHTML=String(hours).padStart(2,'0');  /*  String(hours) :  converts hours to string

                                                       padStart(2,'0'): adds padding of 0 unless
                                                                        the no. of characters become
                                                                        two                */ 
    minute.innerHTML=String(minutes).padStart(2,'0');

    second.innerHTML=String(seconds).padStart(2,'0');

}


 
updateTime(); //Loads time immediately without delay


setInterval(updateTime,1000);

//For making task adding functional:

let toAddTask=document.querySelector(".addedTask");
let taskButton=document.querySelector(".addButtonContainer");
let inputList=document.getElementById("inputBox");

taskButton.addEventListener("click",()=>
{
    let listElement=document.createElement('li');
    toAddTask.appendChild(listElement);
     listElement.innerHTML=inputList.value;
     inputList.value="";
});