console.log('hello outside');


 

 
var s=function(sketch){

 sketch.setup= function() {
  document.body.style['userSelect']='none';
  let h=document.body.clientHeight;
    let c=sketch.createCanvas(sketch.windowWidth-10,h);
     c.position(0,0);
     c.style('pointer-events','none');
     sketch.clear();
    }

    sketch.draw=function(){
     sketch.stroke(0);
     sketch.strokeWeight(4);
      if(sketch.mouseIsPressed){
      sketch.line(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY);
      }
      // console.log('loop is working');
    }


  
}

var myp5=new p5(s);