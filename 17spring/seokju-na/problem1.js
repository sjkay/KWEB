function btn1() {
    var boxes = document.getElementsByClassName('box');
    
	for (var i = 0; i < 8; i += 2) {
        boxes[i].style.visibility = "hidden";
    }
}

function btn2() {
	var boxes = document.getElementsByClassName('box');
    
    for (var i = 1; i < 8; i += 2) {
        boxes[i].style.display = "none";
    }
}

function btn3() {
    var boxes = document.getElementsByClassName('box');
    
    for (var i = 0; i < 8; i++) {
        if ((i + 1) % 3 === 0) {
            boxes[i].style.backgroundColor = "yellow";
        }
    }
}

function initBoxes() {
	var boxes = document.getElementsByClassName('box');
    
    for(var i=0;i<8;i++) {
        boxes[i].style.backgroundColor = 'pink';
        boxes[i].style.display = "initial";
        boxes[i].style.visibility = "initial";
   }
}
