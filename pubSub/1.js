var eventBus = (function(){
	var subscribers = {};
	function subscribe(eventName,subscription){
		if(!subscribers][eventName])
			subscribers[eventName] = [];
		subscribers[eventName].push(subscription);
	}

	function publish(eventName,arg,context){
		if(!context) context = this;
		if(subscribers[eventName]){
			var subscriptions = subscribers[eventName];
			for(var i=0;i<subscriptions.length;i++)
				subscriptions[i].call(context,arg);
		}
	}
	return {
		subscribe : subscribe,
		publish : publish,
	}

}());