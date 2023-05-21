const incrementBtn =document.querySelector('#increment')
const decrementBtn =document.querySelector('#decrement') 
const counterEl=document.querySelector('#counter')
const ulElement =document.querySelector('#list-items')
let counter=0


function incrementcounter(){
    const counterEl= document.querySelector('#counter')
    counter++
    counterEl.innerText =counter
    const listing=document.createElement('li')
    listing.setAttribute('data-counter',counter)
    if(counter%2==0){
        listing.style.background='red'
    }else{
        listing.style.background='yellow'
    }
    const textnode=document.createTextNode('sentence '+ counter)
   const bold=document.createElement('b')
   //listing.innerHTML='<b>sentence</b>'+ counter
    bold.appendChild(textnode)
    listing.appendChild(bold)
    ulElement.appendChild(listing)

}

function decrementcounter(){
    const counterEl= document.querySelector('#counter')
    counter--
    counterEl.innerText =counter
}

incrementBtn.addEventListener('click', incrementcounter)
decrementBtn.addEventListener('click', decrementcounter)
