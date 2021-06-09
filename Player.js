class Player{

    constructor(){
        this.spt=createSprite(200,100,50,50);
        this.spt.shapeColor="blue";

    }

    applyGravity(){
        this.spt.velocityY=this.spt.velocityY+2;
    }
    moveRight(){
        this.spt.x=this.spt.x+12;
    }

    moveLeft()
    {
        this.spt.x=this.spt.x-12;
    }

    jump(){
        this.spt.velocityY = -33;
    }
}
