const array = ["media/Шишкин.jpg","media/зимний пйзаж.jpg", "media/alfons_muha.jpg", "media/book_lavka.jpg", "media/emil_klaus.jpg", "media/shishkin_krestjanin.jpg","media/fixpatrik.jpg","media/jan_vermeer.jpg"];
const imageNode = document.querySelector(".image");
const leftButtonNode = document.getElementById("left_button");
const rightButtonNode = document.getElementById("right_button");
let i = 0;
imageNode.src = array[0];


rightButtonNode.addEventListener("click", () => {
    // console.log('begin', i);
    if (i === array.length-1) {
        i = 0;
    } else {
        i++;
    }
    imageNode.src = array[i];
    // console.log('end', i);
})

leftButtonNode.addEventListener ("click", ()=> {
    // console.log("begin",i);
    if (i===0){
        i=array.length-1;
    }else{
       i--; 
    }
    imageNode.src = array[i];
    // console.log("end",i);
 })