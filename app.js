

function bgColor(){

}

function clickWithElement(withElement,price){
    const memoryCost = document.getElementById( withElement +'-cost')
    memoryCost.innerText = price;
    allCost()
}

function allCost(){
   
    const bestPrice = document.getElementById('best-price').innerText;

    const memoryPrice = document.getElementById('memory-cost').innerText ;
   
    const storagePrice = document.getElementById('storage-cost').innerText;
    
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = document.getElementById('total-price').innerText = parseInt(bestPrice) +parseInt(memoryPrice) +parseInt(storagePrice) + parseInt(deliveryPrice);

}


document.getElementById('memoryFrist-field').addEventListener('click',function(){
    clickWithElement('memory',0);

    allCost();

    document.getElementById('total-price').innerText = memory8gbTotal

})

document.getElementById('memorySecond-field').addEventListener('click',function(){
    clickWithElement('memory',180);

    allCost();

    document.getElementById('total-price').innerText = memory16gbTotal

})
document.getElementById('storageFrist-field').addEventListener('click',function(){
    clickWithElement('storage',0);

    allCost();

    document.getElementById('total-price').innerText = storage256Total

})

document.getElementById('storageSecond-field').addEventListener('click',function(){
ckWithElement('storage',100);

    allCost();
    document.getElementById('total-price').innerText = storage512Total

    
})

document.getElementById('storageThird-field').addEventListener('click',function(){
    clickWithElement('storage',180);
    
    allCost();

    document.getElementById('total-price').innerText = storage1tbTotal


})
document.getElementById('deliveryFrist-field').addEventListener('click',function(){
    clickWithElement('delivery',0);

    allCost();

    document.getElementById('total-price').innerText = deliveryfree

})
document.getElementById('deliverySecond-field').addEventListener('click',function(){
    clickWithElement('delivery',20);

    allCost();

    document.getElementById('total-price').innerText = deliveryfree20
})
