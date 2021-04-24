class BaseClass{
    constructor(x,y,width,height, angle){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

this.body=Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height= height;
this.image = loadImage("ironman-2.jpg");
World.add(world,this.body)

   
    }
display(){
    var angle  = this.body.angle;
push();
translate(this.body.postition.x,this.body.position.y);
rotation(angle)
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
}


}