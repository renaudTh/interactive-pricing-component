var pageviews = ['10K', '50K', '100K', '500K', '1M'];
var prices = [8,12,16,24,36];


var slider = document.getElementById('slider');
var checkbox = document.getElementById('checkBox');
var price = document.getElementById('price');
var pageNumber = document.getElementById('pageNumber');


function updatePriceValue(){
    let index = slider.value;
    price.innerText = '$'+prices[index];
    pageNumber.innerText = pageviews[index];
}

function changePriceValue(){
    if(checkbox.checked) coef = 3/4;
    else coef = 4/3;
    prices = prices.map( current => current*coef);

    updatePriceValue();

    return prices;
}

checkbox.addEventListener('change', changePriceValue);
slider.addEventListener('change', updatePriceValue);
slider.addEventListener('input',function(event){
    this.style.backgroundImage = 'linear-gradient(to right, hsla(174, 86%, 45%,50%) 0%, hsla(174, 86%, 45%,50%)'+this.value*25+'%, gainsboro '+this.value*25+'%, gainsboro 100%)';
})
