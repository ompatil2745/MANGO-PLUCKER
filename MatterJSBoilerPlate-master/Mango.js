class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution:0
         
      }
      this.x=x
      this.y=y
      this.r=r
      this.image=loadImage("mango.png");
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      
      World.add(world, this.body);
    }
    display(){
      var mangopos =this.body.position;
      push();
      translate(mangopos.x,mangopos.y)
      imageMode(CENTER);
      ellipseMode(CENTER);
      rotate(this.body.angle)

      fill(255,0,255);
      image(this.image,0,0,this.r*2,this.r*2);
      pop()
    }
  };
