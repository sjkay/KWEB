// 4주차 답안 예시

var danCheck = /^[1-9]{1}$/;

/*

>>How to check the input<<
danCheck.test(input)
[input: number]

return: true 	(if input is a number between 1 and 9)
		false	(otherwise)

ex.
input	|return
--------|--------
1       |true
"1"     |false
12      |flase
8       |true
"abc"   |flase

*/


function myFunc1() {
    var num = document.getElementById('dan').value;
    
    if (!danCheck.test(num)) {
        return;
    }
    
    var str = '';
    
    for (var i = 1; i <= 9; i++) {
        var result = num * i;
        
        str += (num + ' X ' + i + ' = ' + result);
        str += '\n';
    }
    
    alert(str);
}

function myFunc2() {
	var num = document.getElementById('dan').value;
    
    if (!danCheck.test(num)) {
        return;
    }
    
    var str = '';
    
    for (var i = 1; i <= 9; i++) {
        var result = num * i;
        
        str += (num + ' X ' + i + ' = ' + result);
        str += '<br />';
    }
    
    var timesTable = document.getElementById('timesTable');
    
    timesTable.innerHTML = str;
}

function clearTable() {
	var timesTable = document.getElementById('timesTable');

	timesTable.innerHTML = 'Change here!!';
}
