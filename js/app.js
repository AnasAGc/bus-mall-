'use strict';


let firstImag=document.getElementById("the-1st")
let secendImag=document.getElementById("the-2nd")
let thirdImag=document.getElementById("the-3ed")
let container=document.getElementById("sec-one")


let nameArray=[];
let clickArray=[];
let shownArray=[];

function Products (name,sourc){

    this.name=name;
    this.sourc=sourc;
    this.numClicks=0;
    this.numShown=0;
    this.index=[];
    Products.arryOFproduct.push(this);
    nameArray.push(this.name)
   
    
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

let arrayOFIndex=[0,0,0];


function randerThreeImag(){

  
    arrayOFIndex=[]
    arrayOFIndex.push(index1st,index2ed,index3th)

    index1st=genrateRandomIndex();
    index2ed=genrateRandomIndex();
    index3th=genrateRandomIndex();



    while(index1st===index2ed || index1st===index3th ||index2ed===index3th ||arrayOFIndex.includes(index1st) ||arrayOFIndex.includes(index2ed) || arrayOFIndex.includes(index3th)){
      
        index1st=genrateRandomIndex();
        index2ed=genrateRandomIndex();
        index3th=genrateRandomIndex();

    }
        
    firstImag.src= Products.arryOFproduct[index1st].sourc
                   Products.arryOFproduct[index1st].numShown++
                 
    secendImag.src=Products.arryOFproduct[index2ed].sourc
                   Products.arryOFproduct[index2ed].numShown++

    thirdImag.src=Products.arryOFproduct[index3th].sourc
                  Products.arryOFproduct[index3th].numShown++


}



randerThreeImag()




let counts = 0;
let maxAttempts = 25;



container.addEventListener('click',trace)



function trace (event){


      console.log(event.target.id);

        counts++

       if (maxAttempts>=counts){

        if (event.target.id==='the-1st') {
        Products.arryOFproduct[index1st].numClicks++
        }

        if (event.target.id==='the-2nd') {
            Products.arryOFproduct[index2ed].numClicks++
        }

        if (event.target.id==='the-3ed') {
            Products.arryOFproduct[index3th].numClicks++
        }
        randerThreeImag()

   }
}


function listing (){


    let list=document.getElementById("unList")

    let x;
    for (let i = 0; i < Products.arryOFproduct.length; i++) {
        
        x=Products.arryOFproduct[i]

        let item=document.createElement('li')
        list.appendChild(item)
        item.textContent=`The Product name : ${x.name} is Shown ${x.numShown} and it picked ${x.numClicks}  `
        clickArray.push(x.numClicks)
        shownArray.push(x.numShown)
        
    }


    
}


let butten=document.getElementById('btn')
butten.addEventListener('click', showlish)



function showlish(){

    listing ()
    chart()
    console.log(nameArray,clickArray,shownArray)
    container.removeEventListener('click',trace)
    butten.removeEventListener('click', showlish)

}





function chart(){
    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, { // its an instance 
        type: 'bar',
        data: {
            labels: nameArray, // ['goat away' ,  ... 'sassy goat']
            datasets: [{
                label: '# of shown',
                data: shownArray ,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderWidth: 1
            },{
              label:'# of clicks',
              data: clickArray,
              backgroundColor:[
                "rgb(192,192,192)"
              ],
              borderWidth: 1
            }]
        }
    })
    }