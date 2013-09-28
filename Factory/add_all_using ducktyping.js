function  add(n){
	return n;
}

function add(){
	var result = 0;
	for(var i=0; i<arguments.length;i++){
		result += arguments[i];
		return result;
	}
}

function add(){
	function parseArg(n){
		if(typeof n === "string") return parseInt(n,10);
		if(typeof n === "function") return parseArg(n());
		
		if(n instanceof Array) return add.apply(this,n);
		return n;
	}

	var result = 0;
	for(var i=0; i<arguments.length;i++)
		result += parseArg(arguments[i]);
		return result;
	
}


