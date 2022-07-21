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
	// body...danCheck.test(goo.value)
	var goo = document.getElementById('dan');
	if (danCheck.test(goo.value)) {
		var googoo = goo.value + "단\n";
		for (i=1; i<10; i++) {
			googoo = googoo + goo.value + " x " + i + " = " + (goo.value*i) + "\n";
		}
		window.alert(googoo);
	}
	else {
		window.alert("1-9의 숫자만 입력해주세요");
	}
}

function myFunc2() {
	// body...
	var goo = document.getElementById('dan');
	var timesTable = document.getElementById('timesTable');
	if (danCheck.test(goo.value)) {
		var googoo = goo.value + "단" + "<br />" + "<br />";
		for (i=1; i<10; i++) {
			googoo = googoo + goo.value + " x " + i + " = " + (goo.value*i) + "<br />";
		}
		timesTable.innerHTML = googoo;
	}
	else {
		timesTable.innerHTML = "1-9의 숫자만 입력해주세요";
	}
}

function clearTable() {
	var timesTable = document.getElementById('timesTable');

	timesTable.innerHTML = 'Change here!!';
}