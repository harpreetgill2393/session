class Platform
{
    constructor(posx)
    {
        this.rx=posx
        this.ry=600
        this.rw=random(100,500)
        this.rh=random([280,160])
        this.spt=createSprite(this.rx,this.ry,this.rw,this.rh)

        this.spt.shapeColor="green"
    }
}
