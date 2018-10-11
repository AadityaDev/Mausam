export class Country{
	
	// private Name:string;
	// private Alpha2Code:string;
 //    private Alpha3Code:string;
 //    private NativeName:string;
 //    private Region: string;
 //    private SubRegion: string;
 //    private Latitude: string;
 //    private Longitude:string;
 //    private Area: string;
 //    private NumericCode: string;
 //    private NativeLanguage: string;
 //    private CurrencyCode: string;
 //    private CurrencyName: string;
 //    private CurrencySymbol: string;
 //    private Flag:string;
	// private FlagPng:string;
    public name:string;
    public Alpha2Code:string;
    public Alpha3Code:string;
    public NativeName:string;
    public Region: string;
    public SubRegion: string;
    public Latitude: string;
    public Longitude:string;
    public Area: string;
    public NumericCode: string;
    public NativeLanguage: string;
    public CurrencyCode: string;
    public CurrencyName: string;
    public CurrencySymbol: string;
    public Flag:string;
    public FlagPng:string;
	constructor(){

	}

	public getName():string{
		return this.name;
	}

	public setName(Name:string){
		this.name = Name;
	}

	public getAlpha2Code():string{
		return this.Alpha2Code;
	}
 
	public setAlpha2Code(Alpha2Code:string){
		this.Alpha2Code = Alpha2Code;
	}
       
    public getAlpha3Code():string{
    	return this.Alpha3Code;
    }

    public setAlpha3Code(Alpha3Code:string){
    	this.Alpha3Code = Alpha3Code;
    }
    
    public getNativeName():string{
    	return this.NativeName;
    }
    
    public setNativeName(NativeName:string){
    	this.NativeName = NativeName;
    }    

    public getRegion(): string{
    	return this.Region;
    }
    
    public setRegion(Region:string){
    	this.Region = Region;
    }

    public getSubRegion(): string{
    	return this.SubRegion;
    }
    
    public setSubRegion(SubRegion:string){
    	this.SubRegion = SubRegion;
    }

    public getLatitude(): string{
    	return this.Latitude;
    }

    public setLatitude(Latitude:string){
    	this.Latitude =Latitude;
    }
    
    public getLongitude():string{
    	return this.Longitude;
    }

    public setLongitude(Longitude:string){
    	this.Longitude =Longitude;
    }

    public getArea(): string{
    	return this.Area;
    }

    public setArea(Area:string){
    	this.Area =Area;
    }
    
    public getNumericCode(): string{
    	return this.NumericCode;
    }

    public setNumericCode(NumericCode:string){
    	this.NumericCode =NumericCode;
    }
    
    public getNativeLanguage(): string{
    	return this.NativeLanguage;
    }
    
    public setNativeLanguage(NativeLanguage:string){
    	this.NativeLanguage = NativeLanguage;
    }    

    public getCurrencyCode(): string{
    	return this.CurrencyCode;
    }
    
    public setCurrencyCode(CurrencyCode:string){
    	this.CurrencyCode = CurrencyCode;
    }

    public getCurrencyName(): string{
    	return this.CurrencyName;
    }

    public setCurrencyName(CurrencyName:string){
    	return this.CurrencyName;
    }
    
    public getCurrencySymbol(): string{
    	return this.CurrencySymbol;
    }

    public setCurrencySymbol(CurrencySymbol:string){
    	this.CurrencySymbol = CurrencySymbol;
    }
    
    public getFlag():string{
    	return this.Flag;
    }
	
    public setFlag(Flag:string){
    	this.Flag = Flag;
    }

	public getFlagPng():string{
		return this.FlagPng;
	}

	public setFlagPng(FlagPng:string){
		this.FlagPng=FlagPng;
	}

}