class TV{
    constructor(brand,channel = 1,volume = 50){
        this.brand =brand;
        this.channel = channel;
        this.volume = volume;
    }
    addVolume(){
        if(this.volume<100) this.volume++;
    }
    decVolume(){
        if(this.volume > 0) this.volume --;
    }
    setChannel(channel){
        if(channel<50 && channel>0) this.channel = channel; 
    }
    resetTV(){
        this.channel = new TV("").channel;
        this.volume = new TV("").volume
    }
    statusInfo(){
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    }
}

