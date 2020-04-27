class Rain{
constructor(x,y){
var options={
'restitution':0.5,
'density':1.5,
'friction':1.0

};
this.body=Bodies.rectangle(x,y,2,4);
this.width=2;
this.height=4
world.add(world.this.body)
};
display(){
    var pos=this.body.positions;
    pos.x=mouseX;
    pos.y=mouseY;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    fill="red";
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
};

};