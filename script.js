let taskAssigned = 5;
let colorTask = 23;

let com1 = document.getElementById("complete1");
com1.addEventListener("click", ()=> {
    alert("Board Updated successfully");
    if(taskAssigned!==0){taskAssigned--;}
    let ta = document.getElementById("number");
    ta.innerHTML= taskAssigned;
    colorTask++;
    let ca = document.getElementById("coltak");
    ca.innerHTML=colorTask;

    let parent = document.getElementById("task-complete");
    let newElement = document.createElement("p");
    function getFormattedTime() {
        let now = new Date();
        return now.toLocaleTimeString("en-US", { hour12: true });
    }
    let t = getFormattedTime();
    newElement.textContent = "You have Complete The Task Fix Mobile Button Issue at "+t;
    parent.appendChild(newElement);
    
})
document.getElementById("complete1").addEventListener("click", function() {
    this.disabled = true;
});
let com2 = document.getElementById("complete2");
com2.addEventListener("click", ()=> {
    alert("Board Updated successfully");
    if(taskAssigned!==0){taskAssigned--;}
    let ta = document.getElementById("number");
    ta.innerHTML= taskAssigned;
    colorTask++;
    let ca = document.getElementById("coltak");
    ca.innerHTML=colorTask;

    let parent = document.getElementById("task-complete");
    let newElement = document.createElement("p");
    function getFormattedTime() {
        let now = new Date();
        return now.toLocaleTimeString("en-US", { hour12: true });
    }
    let t = getFormattedTime();
    newElement.textContent = "You have Complete The Task Add Dark Mode at "+t;
    parent.appendChild(newElement);
    
})
document.getElementById("complete2").addEventListener("click", function() {
    this.disabled = true;
});
let com3 = document.getElementById("complete3");
com3.addEventListener("click", ()=> {
    alert("Board Updated successfully");
    if(taskAssigned!==0){taskAssigned--;}
    let ta = document.getElementById("number");
    ta.innerHTML= taskAssigned;
    colorTask++;
    let ca = document.getElementById("coltak");
    ca.innerHTML=colorTask;

    let parent = document.getElementById("task-complete");
    let newElement = document.createElement("p");
    function getFormattedTime() {
        let now = new Date();
        return now.toLocaleTimeString("en-US", { hour12: true });
    }
    let t = getFormattedTime();
    newElement.textContent = "You have Complete The Task Optimize Home page  at "+t;
    parent.appendChild(newElement);


    
})
document.getElementById("complete3").addEventListener("click", function() {
    this.disabled = true;
});
let com4 = document.getElementById("complete4");
com4.addEventListener("click", ()=> {
    alert("Board Updated successfully");
    if(taskAssigned!==0){taskAssigned--;}
    let ta = document.getElementById("number");
    ta.innerHTML= taskAssigned;
    colorTask++;
    let ca = document.getElementById("coltak");
    ca.innerHTML=colorTask;

    let parent = document.getElementById("task-complete");
    let newElement = document.createElement("p");
    function getFormattedTime() {
        let now = new Date();
        return now.toLocaleTimeString("en-US", { hour12: true });
    }
    let t = getFormattedTime();
    newElement.textContent = "You have Complete The Task Add new emoji 🤲 at "+t;
    parent.appendChild(newElement);
    
})
document.getElementById("complete4").addEventListener("click", function() {
    this.disabled = true;
});
let com5 = document.getElementById("complete5");
com5.addEventListener("click", ()=> {
    alert("Board Updated successfully");
    if(taskAssigned!==0){taskAssigned--;}
    let ta = document.getElementById("number");
    ta.innerHTML= taskAssigned;
    colorTask++;
    let ca = document.getElementById("coltak");
    ca.innerHTML=colorTask;

    let parent = document.getElementById("task-complete");
    let newElement = document.createElement("p");
    function getFormattedTime() {
        let now = new Date();
        return now.toLocaleTimeString("en-US", { hour12: true });
    }
    let t = getFormattedTime();
    newElement.textContent = "You have Complete The Task Integrate OpenAI API at "+t;
    parent.appendChild(newElement);
    
})
document.getElementById("complete5").addEventListener("click", function() {
    this.disabled = true;
});
let com6 = document.getElementById("complete6");
com6.addEventListener("click", ()=> {
    alert("Board Updated successfully");
    if(taskAssigned!==0){taskAssigned--;}
    let ta = document.getElementById("number");
    ta.innerHTML= taskAssigned;
    colorTask++;
    let ca = document.getElementById("coltak");
    ca.innerHTML=colorTask;

    let parent = document.getElementById("task-complete");
    let newElement = document.createElement("p");
    function getFormattedTime() {
        let now = new Date();
        return now.toLocaleTimeString("en-US", { hour12: true });
    }
    let t = getFormattedTime();
    newElement.textContent = "You have Complete The Task Improve Job searching at "+t;
    parent.appendChild(newElement);
    
})
document.getElementById("complete6").addEventListener("click", function() {
    this.disabled = true;
});


// activity log clear history

document.getElementById("activityID").addEventListener("click", ()=>{
    document.getElementById("task-complete").innerHTML = "";
})



// Current date

let currentDate = new Date();
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dayName = dayNames[currentDate.getDay()];
document.getElementById("day").innerText=dayName+',';

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
let monthName = monthNames[currentDate.getMonth()];//Mash
let date = currentDate.getDate(); //tarikh
let year = currentDate.getFullYear();//shaal
document.getElementById("nicher-tarikh").innerText=monthName +" "+ date +" "+ year;