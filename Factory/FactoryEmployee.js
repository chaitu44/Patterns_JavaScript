

function FullTimeEmployee(id,name){
	this.id = id;
	this.name = name;
	this.type = 'FullTimeEmployee';
	
}

function ContractEmployee(id,name){
	this.id = id;
	this.name = name;
	this.type = 'ContractEmployee';
	
}

function EmployeeFactory(){

	this.createEmployee =function (id,name,type){
		
			if(type=='FullTimeEmployee'){
				return new FullTimeEmployee(id,name)
			}
			else{
				return new ContractEmployee(id,name)
			}
	}
}



