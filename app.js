function clickWithElement(withElement,price){
    const elementCost = document.getElementById( withElement +'-cost')
    elementCost.innerText = price;
    grandTotalCost()
}

function grandTotalCost(){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText ;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalPrice = document.getElementById('total-price');
    
    totalPrice.innerText = parseInt(bestPrice) +parseInt(memoryPrice) +parseInt(storagePrice) + parseInt(deliveryPrice);


    const grandTotal =  document.getElementById('grand-total');
     grandTotal.innerText = totalPrice.innerText ;
}

document.getElementById('memoryFrist-field').addEventListener('click',function(){
    clickWithElement('memory',0);
    grandTotalCost();
    
})

document.getElementById('memorySecond-field').addEventListener('click',function(){
    clickWithElement('memory',180);
    grandTotalCost();
    
})
document.getElementById('storageFrist-field').addEventListener('click',function(){
    clickWithElement('storage',0);
    grandTotalCost();
    
})
document.getElementById('storageSecond-field').addEventListener('click',function(){
    clickWithElement('storage',100);
    grandTotalCost();   

})
document.getElementById('storageThird-field').addEventListener('click',function(){
    clickWithElement('storage',180);
    grandTotalCost();
    
})
document.getElementById('deliveryFrist-field').addEventListener('click',function(){
    clickWithElement('delivery',0);
    grandTotalCost();
     
})
document.getElementById('deliverySecond-field').addEventListener('click',function(){
    clickWithElement('delivery',20);
    grandTotalCost();

})

document.getElementById('submit-pomo').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input')
    const totalPriceText = document.getElementById('total-price').innerText 
   
    if(promoInput.value == 'stevekaku'){
    const discount = totalPriceText - (totalPriceText* 20 / 100);
    document.getElementById('grand-total').innerText = discount
    promoInput.value = '';
    }else{
        promoInput.value = 'Reload and Get Promo'
    }
    
})  
