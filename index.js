const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');
const bt4 = document.getElementById('bt4');
const bt5 = document.getElementById('bt5');
const mainDiv = document.getElementById('main-box');
const mainDiv2 = document.getElementById('main-box2');

const Submit = document.getElementById('Submit');
var thankYou = document.getElementById('you_selected_');

var rating = null;

bt1.onclick = function() { 
rating = 1; 
    console.log('Button 1 clicked, rating set to 1'); 
};

bt2.onclick = function() {
    rating = 2;
    console.log('Button 2 clicked, rating set to 2'); 
};
bt3.onclick = function() {
    rating = 3;
    console.log('Button 3 clicked, rating set to 3');
};
bt4.onclick = function() {
    rating = 4;
    console.log('Button 4 clicked, rating set to 4');
};
bt5.onclick = function() {
    rating = 5;
    console.log('Button 5 clicked, rating set to 5');
};


// let daniel = document.createElement('p')

Submit.onclick = function() {

    if (rating != null) {
        console.log(`Rating selected: ${rating}`);
        thankYou.innerHTML=`You selected ${rating} out of 5`
        mainDiv.style.display = 'none'
        mainDiv2.style.display = 'block'

    } else {
        alert('No rating selected.');
    }
    bt1.addEventListener('click', function() {
        button.classList.add('clicked');
    });
};