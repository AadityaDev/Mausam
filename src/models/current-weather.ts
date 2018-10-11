export class Weather{
	
	private id:number;
	private main:string;
	private description:string;
	private icon:string;

	construnctor(){

	}

    public getId():number{
    	return this.id;
    }
	
	public setId(id:number){
		this.id = id;
	}

	public getMain():string{
		return this.main;
	}

	public setMain(main:string){
		this.main =main;
	}

	public getDescription():string{
		return this.description;
	}

	public setDescription(description:string){
		this.description = description;
	}
	
	public getIcon():string{
		return this.icon;
	}

	public setIcon(icon:string){
		this.icon = icon;
	}

}