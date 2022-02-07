let  inputEl= document.getElementById("input-el");
let  dateEl= document.getElementById("date-el");
let  amountEl= document.getElementById("amount-el");
let  addEx= document.getElementById("addEx");
let item =[];
let date=[];

//let  = document.getElementById("");
//let  = document.getElementById("");
let amt =[];
addEx.addEventListener("click",() =>{

if(inputEl.value !='' && dateEl.value !='' && amountEl.value !=''){

item.push(inputEl.value);
date.push(dateEl.value);
amt.push(amountEl.value);

//item.push(obj);
console.log(item);

addExpence();
}else{
    alert("All fields are compulsary")
}

localStorage.setItem("item",JSON.stringify(item));
localStorage.setItem("date",JSON.stringify(date));
localStorage.setItem("amt",JSON.stringify(amt));
inputEl.value='';
dateEl.value='';
amountEl.value='';

})

let myitemfromlocalstorage = JSON.parse(localStorage.getItem("item"));
let exDate = JSON.parse(localStorage.getItem("date"));
let exAmt = JSON.parse(localStorage.getItem("amt"));

console.log(myitemfromlocalstorage);
 
if(myitemfromlocalstorage && exDate && exAmt){
	item = myitemfromlocalstorage;
    date = exDate;
    amt = exAmt;
	addExpence();
}



function addExpence(){
    var table = document.getElementById("dataEl");
        // table.innerHTML="";
        let row="";
        //item.forEach(x=>{
            for(let i=0; i<item.length ;i++){
           row += `<tr>
           <td>${item[i]}</td><td>${date[i]}</td><td>${amt[i]}</td><td><button id="delete" onclick="deleteItem(${i})">x</button></td>
           </tr>`
           
        }
        table.innerHTML = row;
         
      }

      function deleteItem(index){

        item.splice(index,1);
        date.splice(index,1);
        amt.splice(index,1);
        addExpence();
        console.log("deleted successfully");
      }

      function clearTable(){
        var table = document.getElementById("dataEl");
          table.textContent='';
      }

      