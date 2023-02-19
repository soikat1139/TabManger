const addBtn=document.querySelector("#btn1")
const btn=document.querySelector("#btn");
const container=document.querySelector(".container");


let  tmInput=document.querySelectorAll(".tmInput");
let links=document.querySelectorAll(".links");
let btn2=document.querySelectorAll(".btn2");

let tmInputArray=[...tmInput];
let linksArray=[...links];
let btn2Array=[...btn2];



btn.addEventListener("click",()=>{

    chrome.tabs.create({
        url: "chrome://extensions/"
      });
})



// btn2.addEventListener("click",()=>{
   
//     console.log("Hello from btn");
//     console.log(links[0].value);
//     console.log(tmInput[0].value);
//     console.log(tmInput);

//     console.log(new Date().getHours());
//     console.log(new Date().getMinutes());

// });




btn2Array.forEach((value,index)=>{

    value.addEventListener("click",()=>{
        console.log(index)

    })
   
})




















const linkValue=[];

for(let i=0;i<localStorage.length;i++){
 const key="link"+i;
 const value=localStorage.getItem(key);
 linkValue.push(value);
}

linkValue.shift();

console.log(linkValue);

addBtn.addEventListener("click",()=>{
    const div=document.createElement('div');
    div.setAttribute("class","tabs");
    div.innerHTML=`
    <input type="text" class="links" 
    placeholder="Links u want to schedule">
    <input class="tmInput" type="time" id="appt" name="appt"
           min="09:00" max="18:00" required>
    <button class="btn2" >Schedule</button>
    `;
    container.appendChild(div);


    tmInput=document.querySelectorAll(".tmInput");
    links=document.querySelectorAll(".links");
    btn2=document.querySelectorAll(".btn2");
    tmInputArray=[...tmInput];
    linksArray=[...links];
    btn2Array=[...btn2];

    console.log(btn2Array)
    btn2Array.forEach((value,index)=>{

        value.addEventListener("click",()=>{
            console.log(index)
    
        })
       
        
    
    
    
    
    
    })


});
