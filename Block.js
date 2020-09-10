class Block {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          //'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width =50;
      this.height = 50;
      
      World.add(world, this.body);
    }
   
    display(){

      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();


    }

    else {
      World.remove(world,this,body);
      push();

      this.Visibility  =  this.Visibility - 5;
      tint(255,this.Visibility);
      pop();
    }



  }

score(){

if(this.Visibility<10 && this.Visibility  > -15){
score ++;
}
}


  };
  