export class Wind {
	
	private speed:number;
	private deg:number;

	constructor() {
		
	}

	public getSpeed():number{
		return this.speed;
	}

	public setSpeed(speed:number){
		this.speed = speed;
	}

	public getDeg():number{
		return this.deg;
	}

	public setDeg(deg){
		this.deg = deg;
	}

}