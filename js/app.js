'use strict';


let firstImag=document.getElementById("the-1st")
let secendImag=document.getElementById("the-2nd")
let thirdImag=document.getElementById("the-3ed")


function Products (name,sourc){

    this.name=name;
    this.sourc=sourc;
    this.numClicks=0;
    this.numShown=0;
    Products.arryOFproduct.push(this);
}


Products.arryOFproduct=[];
new Products("bag","img/bag.jpg")
new Products ("banana","img/banana.jpg")
new Products ("bathroom","img/bathroom.jpg")
new Products ("boots","img/boots.jpg")
new Products ("breakfast","img/breakfast.jpg")
new Products ("bubblegum","img/bubblegum.jpg")
new Products ("chair","img/chair.jpg")
new Products ("cthulhu","img/cthulhu.jpg")
new Products ("dog-duck","img/dog-duck.jpg")
new Products ("dragon","img/dragon.jpg")
new Products ("pen","img/pen.jpg")
new Products ("pet-sweep","img/pet-sweep.jpg")
new Products ("scissors","img/scissors.jpg")
new Products ("shark","img/shark.jpg")
new Products ("sweep","img/sweep.png")
new Products ("tauntaun","img/tauntaun.jpg")
new Products ("unicorn","img/unicorn.jpg")
new Products ("usb","img/usb.gif")
new Products ("water-can","img/water-can.jpg")
new Products ("wine-glass","img/wine-glass.jpg")









///////////////// Functions 


function genrateRandomIndex(){
    return Math.floor(Math.random() * Products.arryOFproduct.length); 
 }
 



let index1st;
let index2ed;
let index3th;

let x1

function randerThreeImag(){

    index1st=genrateRandomIndex();
    index2ed=genrateRandomIndex();
    index3th=genrateRandomIndex();


    while(index1st===index2ed)[
        index1st=genrateRandomIndex()
    
    ];
    while (index1st===index3th){

        index1st=genrateRandomIndex()
    };
    
    while(index2ed===index3th){
        index2ed=genrateRandomIndex()
    }
    

    firstImag.src= Products.arryOFproduct[index1st].sourc
                   Products.arryOFproduct[index1st].numShown++
                 
    secendImag.src=Products.arryOFproduct[index2ed].sourc
                   Products.arryOFproduct[index2ed].numShown++
    thirdImag.src=Products.arryOFproduct[index3th].sourc
                  Products.arryOFproduct[index3th].numShown++

}



randerThreeImag()
console.log(index1st,index2ed,index3th)


