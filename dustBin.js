class Dustbin { //design/blueprint
    constructor(x, y, width, height) { //properties
      var options = {
          isStatic: true,
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push(); //adding new thing
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      stroke("red");
      strokeWeight(4);
      image(this.image, 0, 0, this.width, this.height);
      pop(); //getting back to the old setting
    }
  }