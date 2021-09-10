class Ground{
    constructor(x,y,w,h){
        var ground_options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,ground_options);
        World.add(world,this.body);

        this.w = w;
        this.h = h;
    }

    show(){

        var pos = this.body.position;
        push ()

        rectMode(CENTER);
        stroke("yellow");
        fill ("yellow");
        rect(pos.x, pos.y, this.w,this.h);

        pop ()
    }

}