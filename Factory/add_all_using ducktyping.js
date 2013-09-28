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
function getRemaining(args){
	var remaining = [];
	for (var i=1; i<args.length;i++)
		remaining.push(args[i]);
	return remaining;
}
	var result = 0;
	for(var i=0; i<arguments.length;i++)
		result += parseArg(arguments[i]);
		return result;
	
}


function add(){
	function parseArg(n){
		if(typeof n === "string") return parseInt(n,10);
		if(typeof n === "function") return parseArg(n());
		
		if(n instanceof Array) return add.apply(this,n);
		return n;
	}

return arguments.length === 1 ? parseArg(arguments][0]) : parseArg(arguments[0]) + add.apply(this, Array.prototype.call(arguments,1));
}