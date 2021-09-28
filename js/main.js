//var declartion
var alphapetelement = document.querySelector(".alphephetc");
var spans = document.querySelector(".spans");

let currentindex = 0;
////creating p paragraph 
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for (const letter of alphabet) {
    let p = document.createElement("p");
    let ptext = document.createTextNode(letter);
    p.appendChild(ptext);
    alphapetelement.appendChild(p);
}
/////creating array
const arrays = [
 ['python','go','c','html','css','java script','react','vue','php','mysql','angular','java','larveal','node js','json','ajax'],
 ['bread','rice','meat','chicken','fish','cake','cheese','egg','garlic','beans','ham'],
['white wine','soda','milk','water','cola','cocktail','tea','orange','whisky','black coffee','hot chocolate','juice','milk shake','apple juice','beer','wine','lager','red wine']
];
/////// random function to choose random arrray
randomarray();
function randomarray(){
    let random = Math.floor(Math.random() * 3);
    if(random == 0){
        document.querySelector(".float-right span").textContent = 'programming'
    }else if(random == 1){
        document.querySelector(".float-right span").textContent = 'food'
    }else{
        document.querySelector(".float-right span").textContent = 'drinks'
    }
    console.log(arrays[random]);
    randomelementofarray(arrays[random])
}
/////// random function to choose random element from array
function randomelementofarray(arr){
    let random2 = Math.floor(Math.random() * arr.length);
    console.log(arr[random2]);
    makingspans(arr[random2]);

}
////////function making spans
function makingspans(ele){
    let arrdataset2 = ele.replace(" ","");
    let arrdataset = arrdataset2.split("");
    
    console.log(arrdataset);
    for(let i =0; i < arrdataset2.length; i++){
     let span = document.createElement("span");
     let spanattr = document.createAttribute("data-letter")
     spanattr.value = arrdataset[i];
     span.setAttributeNode(spanattr);
     spans.appendChild(span); 
     
    }
}
////clicking on p
let p = document.querySelectorAll(".alphephetc p");
let parray = Array.from(p);
parray.forEach(element => {

   element.onclick = function(e){
    let draws = document.querySelectorAll(".draw .d-none");
    let drawsarr = Array.from(draws);
    currentindex++
    console.log(currentindex);
    let boolen = false;
     
    ///to add disable click
    e.target.classList = 'clickdisabled ';
      ///to add active
      e.target.classList += 'active';
    //on click p put content in span
    let spanarr = Array.from(document.querySelectorAll(".spans span"));
    for (let index = 0; index < spanarr.length; index++) {
      if(e.target.textContent.toLowerCase() == spanarr[index].dataset.letter && e.target.textContent.toLowerCase() !== spanarr[index].textContent ){
         spanarr[index].textContent = e.target.textContent;
            boolen = true;
            spanarr[index].classList.add("banana");
       }
  
        
    }
    let bananas = document.querySelectorAll(".banana");
    bananasarr = Array.from(bananas);
    console.log(bananasarr);
    ///check to show draw
    if(!boolen ){
        if(drawsarr.length > 0){
    drawsarr[0].classList.remove("d-none");
    console.log(drawsarr);
        }else{
            alphapetelement.classList += ' disabled2 '
            document.querySelector(".fail").play();
            document.querySelector(".failing").classList.remove("d-none");
            let interving = setTimeout(() => {
                document.querySelector(".failing").classList.add("d-none");
                window.location.reload();
            },3000);
        }
    }else{
             ////chech to declare win
             if(bananasarr.length == spanarr.length ){
                alphapetelement.classList += ' disabled2 ';
                document.querySelector(".success").play();
                document.querySelector(".successing").classList.remove("d-none");
                let interving2 = setTimeout(() => {
                    document.querySelector(".successing").classList.add("d-none");
                    window.location.reload();
                },3000);
               
             }

    }

   
    
   }
});

