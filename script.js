function calculateSum() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Harap masukkan bilangan yang valid.';
    } else {
        result = 'Hasil Penjumlahan: ' + (number1 + number2);
    }

    document.getElementById('result').textContent = result;
}

function resetFields() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').textContent = 'Hasil penjumlahan akan muncul disini';
}
