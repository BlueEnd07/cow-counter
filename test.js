

let count=0

let Countp = document.getElementById("countp")

let saveel=document.getElementById("save-el")

function increment(){
    console.log("click and increment function called")
    count+=1
    Countp.innerHTML=count
    

}

function save(){
    let prints="-"+count 
    saveel.innerHTML += prints
    count=0
    Countp.innerHTML=count 
}   

