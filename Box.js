class box{
    constructor (x,y,width,height){
        var bodyoptions={
            isStatic:true,
            restitution:1,
        }
        this.body=Bodies.rectangle(x,y,width,height,bodyoptions)
        this.width=width;
        this.height=height;
        Matter.Body.setStatic(this.body,true)
        World.add(world, this.body);
       }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.width,this.height);
    pop();
}
}