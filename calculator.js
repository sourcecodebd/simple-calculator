// declaration
const inputField = document.getElementById('input-field');
const ac = document.getElementById('AC');
const on = document.getElementById('ON');
const types = document.getElementsByClassName('types');
const eql = document.getElementById('eql');

on.addEventListener('click', function () {
    for (const type of types) {
        type.removeAttribute('disabled');
    }
    eql.removeAttribute('disabled');
})

ac.addEventListener('click', function () {
    inputField.innerText = '';
});


for (const type of types) {
    type.addEventListener('click', function () {
        inputField.innerText += type.value;
    });
}

eql.addEventListener('click', function () {
    const result = eval(inputField.innerText);
    console.log(result);
    inputField.innerText = result;
});

input.addEventListener('keypress', function (e) {
    if (e.key = 'Enter') {
        const result = eval(input.value);
        input.value = result;
        if (result == undefined) {
            input.value = '';
        }
    }
});





