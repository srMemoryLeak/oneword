class StoryPiece{
    constructor(sp){
        this.sid = sp.sid;
        this.name = sp.name;
        this.description = sp.description;
        this.outpiece = sp.outpiece;
        this.activateRate = sp.activateRate;
        this.type = sp.type;
        this.effect = sp.effect;
        if(sp.no_repeat!=null)this.no_repeat=true;
        else this.no_repeat = false;
    }
    perform(){

    }

    getmsg(){
        if(this.description.length==0)return "";

        var idx = myRandom(this.description.length);
        var des = this.description[idx];
        if(this.no_repeat==true){
            //console.log(this.description);
            //console.log(idx);
            this.description = delIdx(this.description, idx);
            //console.log(this.description);
        }
        return des;
        //return this.name;
    }
}

class NormalStoryPiece extends StoryPiece{
    constructor(sp){
        super(sp);
    }
    perform(game){
        //Activation check
        var char = game.person;
        var isActive = this.activateRate >= myRandom(100);
        if(isActive){
            var msg = this.getmsg();
            eval("msg = "+"`"+msg+"`");
            eval(this.effect);
            //console.log(this.name);
            game.deal(msg);
        }
        return this.outpiece[ myRandom(this.outpiece.length) ]
    }
}


class TCStoryPiece extends StoryPiece{
    constructor(sp){
        super(sp);
        this.condition = sp.condition;
    }

    perform(game){
        var isActive = eval(this.condition);
        if(isActive){
            var msg = this.getmsg();
            eval(this.effect);
            //console.log(this.name);
            game.deal(msg);
            return this.outpiece[0][ myRandom(this.outpiece[0].length) ]
        }else{
            var msg = this.getmsg();
            eval(this.effect);
            //console.log(this.name);
            game.deal(msg);
            return this.outpiece[1][ myRandom(this.outpiece[1].length) ]
        }
    }
}


class SCStoryPiece extends StoryPiece{
    constructor(sp){
        super(sp);
    }
    perform(game){
        var char = game.person;
        //console.log("bladder / bladderM:"+char.bladder+" / "+char.bladderM+", urine: "+char.urine)
        if(char.bladder <= char.bladderM){
            var result = 0;
        }else{
            var bladderOffset = (char.bladder - char.bladderM);
            var sansresult = sanscheck(char.sans);
            var calcresult = bladderOffset -(sansresult - char.urine) + game.tempsc + game.fixsc;
            var result = checkresult(calcresult);
        }
        game.tempsc=0;
        //console.log("bladderOffset:"+bladderOffset)
        //console.log("sansresult:"+sansresult)
        //console.log("calcresult:"+calcresult)
        //console.log("result:"+result)
        char.deal_urine(result)
        var msg = this.getmsg();
        eval(this.effect);
        //console.log(this.name);
        game.deal(msg);
        return this.outpiece[result][ myRandom(this.outpiece[result].length) ]
    }
}

class EndStoryPiece extends StoryPiece{
    constructor(sp){
        super(sp);
    }
    perform(game){
        
    }
}