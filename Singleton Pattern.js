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



// another way to create singleton

function ClickCounter(){
	
		var _count = 0;
	var instance = {
		click : function() {_count++;},
		count : function() {return _count;}
	};

	ClickCounter = function(){
		return instance;
	}
	return instance;
}