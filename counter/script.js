let incrementButton = document.querySelector('.increment');
let decrementButton = document.querySelector(".decrement");
let resetButton = document.querySelector(".reset");
var counterHolder = document.querySelector(".counterHolder");

//setting initial value by getting from the localStorage
//but since our localStorage empty we are adding 0.
let storedNumber = parseInt(localStorage.getItem("counter") || 0);

var counter = function(initialValue) {
    let number = initialValue;
    return {
        increment: function (){
            number++;
            //this takes the current value of the number
            // and stores it to the local storage
            // same for all the functions 
            localStorage.setItem("counter", number);
            return number;

        },
        decrement: function(){
         
            number--; 
            localStorage.setItem('counter', number)
            return number;
            
            
        },
        reset: function(){
            number = 0;
            localStorage.setItem('counter', number)
            return number;
        }, 
        ///we are just getting 0 which we go from the localstorage at the beginning
        getInitialValue: function(){
            return number;
        }
    };
};

// here we are passing the stored number in local Storage as paramter
//and assign the counter function to a varable so that you can assece the objects
const counterInstance = counter(storedNumber); 
console.log(counterInstance.decrement());

counterHolder.textContent = counterInstance.getInitialValue();

incrementButton.addEventListener('click', function(e){
    e.preventDefault();
     counterHolder.textContent = counterInstance.increment();
});
decrementButton.addEventListener("click", function(e){
    e.preventDefault();
        counterHolder.textContent = counterInstance.decrement();
    
});
resetButton.addEventListener("click", function(e){
    e.preventDefault();
    counterHolder.textContent = counterInstance.reset();
});