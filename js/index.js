let inputField = document.getElementById("input-box");
const regex = new RegExp('^[\\d\+\\-\\*\\//\\.]*$');
// To Perform Calculations
function calculate(exparation) {
    return eval(exparation);
}

// Trigger Calaculation
function triggerCalculation() {

    if (inputField.value.match(regex)) {
        let calculation = calculate(inputField.value);
        if (calculation == undefined || calculation == 'undefined') {
            inputField.value = '';
        }
        else {
            inputField.value = calculation;
        }
    }
    else { 
        let alert =  document.getElementById("alert");
        alert.classList.remove('hide');
        setTimeout(function(){
            alert.classList.add('hide');
        },1000);
    }


}
//  [\d\+\-\*\/\.]
// Trigger on pressing enter in input field
inputField.onkeyup = function (e) {
    if (e.keyCode == 13) {
        triggerCalculation();
    }
}

// Trigger On Click Button
$('.btn').click(function () {

    switch (this.value) {
        case 'equals': triggerCalculation();
            break;
        case 'clear': inputField.value = ' ';
            break;
        case 'backspace': inputField.value = inputField.value.slice(0, inputField.value.length - 1);
            break;
        default: inputField.value = inputField.value + this.value;
    }

});


