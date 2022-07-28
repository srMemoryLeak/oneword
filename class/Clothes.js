class Clothes{

    constructor(c, char){
        if(c==null){
            this.name=null;
            this.type=null;
            return;
        }
        this.name = c.name;
        this.type = c.type;
        this.description = eval("`"+c.description+"`");
        this.effect = c.effect;
        this.color = eval("`"+c.color+"`");
        this.up = c.up;
        this.down = c.down;
        this.leg = c.leg;
        this.foot = c.foot;
        this.sock = c.sock;
        this.under = c.under;
    }
}

var c_list=["up", "down","leg","sock","foot","under"];

class ClothesSet{
    constructor(){
        c_list.forEach(element => {
            eval("this."+element+"= null");
        });
    }
}