var a = 1;

function may_return_1(){
	return a;
}

a = 2;

function may_return_2(){
	return a;
}

may_return_1();
// 2

may_return_2();
// 2