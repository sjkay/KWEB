function make_closure(){
	var a = 1;

	function closure(){
		console.log(a);
	}

	return closure;
}

cl = make_closure();

cl()
// 1

a
//VM332:16 Uncaught ReferenceError: a is not defined