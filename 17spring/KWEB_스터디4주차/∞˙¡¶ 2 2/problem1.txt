function btn1() {
	// body...
	var boxes = document.getElementsByClassName('box');
	boxes[0].style.visibility = 'hidden';
	boxes[2].style.visibility = 'hidden';
	boxes[4].style.visibility = 'hidden';
	boxes[6].style.visibility = 'hidden';
}

function btn2() {
	// body...
	var boxes = document.getElementsByClassName('box');
	boxes[1].style.display = 'none';
	boxes[3].style.display = 'none';
	boxes[5].style.display = 'none';
	boxes[7].style.display = 'none';
}

function btn3() {
	// body...
	var boxes = document.getElementsByClassName('box');
	boxes[2].style.backgroundColor = 'yellow';
	boxes[5].style.backgroundColor = 'yellow';

}

function initBoxes() {
	// body...
	var boxes = document.getElementsByClassName('box');
	boxes[0].style.visibility = 'visible';
	boxes[1].style.display = 'block';
	boxes[2].style.visibility = 'visible';
	boxes[3].style.display = 'block';
	boxes[4].style.visibility = 'visible';
	boxes[5].style.display = 'block';
	boxes[6].style.visibility = 'visible';
	boxes[7].style.display = 'block';
	boxes[2].style.backgroundColor = 'pink';
	boxes[5].style.backgroundColor = 'pink';
}