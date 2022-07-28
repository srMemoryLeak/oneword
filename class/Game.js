class Game{

    constructor(name, gender, age){
        this.tempsc=0;
        this.fixsc=0;
        this.story= "";
        this.person = new Person(name, gender, age);
        this.cid = myRandom(SCENARIO_COUNT[gender]);
        if(isNaN(this.cid)){
            alert("开发中，敬请期待！");
            return;
        }
        var cjs = read_json("scenario/"+gender+"/"+this.cid+".json");
        this.storyPieces= new Array();
        //console.log(cjs);
        for(var i=0;i<cjs.storyPieces.length;i++){
            var piece = cjs.storyPieces[i];
            var sp;
            eval("sp = new "+ piece.type+"StoryPiece" +"(piece);");
            this.storyPieces.push(sp);
        }
        this.clothes_list = new Array();
        for(var i=0;i<cjs.clothes.length;i++){
            var c = cjs.clothes[i];
            var cl = new Clothes(c, this.person);
            this.clothes_list.push(cl);
        }
        this.clothes_list = shuffle(this.clothes_list)
        //build clothes
        console.log(this.clothes_list);
        var c_list=["up", "down", "leg", "sock","foot","under"];

        for(var i=0;i<this.clothes_list.length;i++){
            var cl = this.clothes_list[i];
            this.person.fit(cl);
        }
        
        c_list.forEach(element => {
            var cond = "this.person."+element+"==null";
            if(eval(cond)==true){
                eval("this.person."+element+"=new Clothes()")
            }
        });
    }

    run(){
        var curEvent = this.storyPieces[0];
        while(curEvent.type!="End"){
            var nextIdx = curEvent.perform(this);
            curEvent = this.storyPieces[nextIdx];
        }
    }
    
    deal(msg){
        if(msg.length==0)return;
        this.story += '<br>&nbsp;&nbsp;&nbsp;&nbsp;' + msg;
    }

    debug(){
        console.log(this);
    }
}