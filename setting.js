var buttons = document.querySelectorAll("button");
let  input = document.querySelector('#input');
let screenValue = "";
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',function(event){
        var btnText = buttons[i].innerText;
        
        if (btnText ==='x') {
            btnText = '*';
            screenValue += btnText;
            input.value = screenValue;
        }
        else if(btnText === 'AC'){
            screenValue = "";
            input.value =screenValue;
        }
        
        else if(btnText=== '='){
            input.value =eval(screenValue);
            
        }

        else{
            screenValue += btnText;
            input.value = screenValue;
        }
    });
}