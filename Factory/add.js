function add(){
	if (arguments.length === 1){
		return resolve(arguments[0]);		
	}
  return add(resolve(arguments[0]) + add.apply(this,[].splice.call(arguments,1)));
  function resolve(arg){
		if (typeof arg === "string") {
           return parseInt(arg);
        }
		if (typeof arg === "function") {
           return resolve(arg());
        }
        if (arg.length)
        	return add.apply(this,arg)
        return arg;
  }
}

function add(x){
	if(x instanceof Array){
		var result = 0;
		for (var i=0, i<x.length,i++){
			result += x[i];
		}
		return result;
	}
}