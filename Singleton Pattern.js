function ClickCounter(){
	var instance = (new function(){
		var _count = 0;
		this.click = function() {_count++;}
		this.count = function() {return _count;}
	}());

	ClickCounter = function(){
		return instance;
	}
	return instance;
}