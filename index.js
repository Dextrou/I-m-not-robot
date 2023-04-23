let images = document.querySelectorAll('img');
let ImagesList = ["img1","img2","img3","img4","img5"];
let randomimage=ImagesList[parseInt(Math.random()*ImagesList.length)];
let btn_reset=document.createElement('button');
let msg=document.createElement('p');

msg.innerHTML="Please click on image to verify you are not robot";
ImagesList.push(randomimage);
let randomImage=[];
var keys=1;
let k=0;
var previous_id=[];
while(k<ImagesList.length){
    let htmlimg = images[parseInt(Math.random()*images.length)];
    if(htmlimg.className==""){
        htmlimg.addEventListener('click',robot);
    htmlimg.className=ImagesList[k++];
    }
}
let id_store=new Map();
btn_reset.innerText="Reset";
let verify=document.createElement('button');
verify.innerText="Verify";
function robot(event){
    let para = document.querySelector('p');
    para.style.cssText=`display:none;`
    let selectedimg=event.target;
    let current_id_value=event.target.id;
    if(keys<=2){
    if( current_id_value==previous_id.filter(item=>item==current_id_value)){
      alert('YOu try to select same image, Please Select Other Similar image');
    }
    else{
    previous_id.push(current_id_value);
    console.log(previous_id);
    console.log(keys);
    document.body.append(btn_reset);
    if(keys<=2){
     if(keys==2){
     id_store.set(keys,current_id_value);
   selectedimg.classList.add("selected");
    btn_reset.addEventListener('click',reset);
    verify.addEventListener('click',verified);
    document.body.append(verify);
    keys++;
    }
    else{
        btn_reset.addEventListener('click',reset);
        id_store.set(keys,current_id_value);
   selectedimg.classList.add("selected");
   keys++;

    }
}  
}
    }
}


function reset(){
let selectedimages =document.querySelectorAll('img');
for(let t of selectedimages){
    t.classList.remove("selected");
}
keys=1;
previous_id=[];
let para = document.querySelector('p');
para.style.cssText=`display:visible;`
}

function verified(){
    let selectedim = document.querySelectorAll('img');
    let id_contain=[];
    let match=false;
    for(let t of selectedim){
        var selecteditem = t.className;
        var notselected = null;
    let result =t.classList.contains('selected')?selecteditem:notselected;
    id_contain.push(result);
    }
    for(let i=0;i<id_contain.length;i++){
        for(let j=i+1;j<id_contain.length;j++){
            if(id_contain[i]==id_contain[j] && id_contain[i]!=null){
            match=true;
            }
        }
    }
    if(match==true){
    alert('Congrulations,You are Human Succesfully verified');
    }
    else{
    let response =confirm('You are not Human , Would you like to try again click ok button');
    if(response == true){
    reset();
    }

    }
}

document.body.prepend(msg);

