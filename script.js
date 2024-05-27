function calc(value){
    let show = document.getElementById('show_input');
    show.value += value;
}

function reset(){
    document.getElementById('show_input').value = null;
}

function remove(){
    let ress = document.getElementById('show_input');
    ress.value = ress.value.slice(0, -1); 
}

// numbers
document.getElementById('nine').addEventListener('click',  () => calc(9));
document.getElementById('eight').addEventListener('click', () => calc(8));
document.getElementById('seven').addEventListener('click', () => calc(7));
document.getElementById('six').addEventListener('click',   () => calc(6));
document.getElementById('five').addEventListener('click',  () => calc(5));
document.getElementById('four').addEventListener('click',  () => calc(4));
document.getElementById('three').addEventListener('click', () => calc(3));
document.getElementById('two').addEventListener('click',   () => calc(2));
document.getElementById('one').addEventListener('click',   () => calc(1));
document.getElementById('zero').addEventListener('click',  () => calc(0));

// operators
document.getElementById('plus').addEventListener('click', () => calc('+'));
document.getElementById('minus').addEventListener('click', () => calc('-'));
document.getElementById('multiply').addEventListener('click', () => calc('*'));
document.getElementById('multiply_reverse').addEventListener('click', () => calc('/'));
document.getElementById('res').addEventListener('click', () => result());


document.getElementById('dot').addEventListener('click', () => calc('.'));
document.getElementById('reset').addEventListener('click', () => reset());
document.getElementById('backspace').addEventListener('click', () => remove());

function result(){
    let res_math = document.getElementById('show_input').value;
    let history_input = document.getElementById('history');
    history_input.value = res_math;
    try{
        res_math = eval(res_math);
        document.getElementById('show_input').value = res_math;
    } catch{
        document.getElementById('show_input').value = 'ERROR!';
    }

}