var bladder_list=[12, 16, 20, 20, 22];
var sans_list=[-3, -2, -1, 0, 1, 1];
class Person{
    /*
     * name:姓名
     * age:年龄
     * bladderM：膀胱大小
     * bladder：膀胱值
     * sans:意志骰 
     */
    constructor(name,gender, age, seed){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.belly = 0;
        this.bladder=0;
        this.urine=0;
        this.seed = seed;
        this.build_att();
        this.clothes = new ClothesSet();
    }

    build_att(){
        this.bladderM = bladder_list[this.age];
        this.sans = sans_list[this.age];
    }

    deal_urine(result){
        if(result==0)return;
        if(result<=1)this.urine += 1;
        if(result==3){
            this.urine += 1;
            this.bladder -= 1;
        }
        if(result==4){
            this.bladder -= 1;
            this.urine += 2;
        }
        if(result==5){
            this.bladder=0;
            this.urine = 0;
        }
    }

    debug(){
        console.log(this);
    }
    fit(cl){
        var flag = true;
        (c_list).forEach(element => {
            var cond = "this.clothes."+element+"!=null  && cl." + element +"==true";
            if(eval(cond)==true){
                flag=false;
            }
        });
        if(!flag)return;
        var t = cl.type;
        eval("this.clothes."+t+"=cl");

        (c_list).forEach(element => {
            var cond = "this.clothes."+element+"==null  && cl." + element +"==true && '"+element + "'!= cl.type";
            if(eval(cond)==true){
                eval("this.clothes."+element + "= new Clothes()");
            }
        });
    }

    getClothes(){
        var temp=`${this.name}今天的穿着是这样的：`
        if(this.clothes.up.name!=null){
            var up = this.clothes.up
            temp += `${up.color}的${up.name}，${up.description}`
        }
        if(this.clothes.down.name!=null){
            var down = this.clothes.down
            temp += `随后，下半身穿的是${down.color}的${down.name}，${down.description}`
        }
        if(this.clothes.leg.name!=null){
            var leg = this.clothes.leg
            temp += `腿上则穿的是${leg.color}的${leg.name}，${leg.description}`
        }
        if(this.clothes.sock.name!=null){
            var sock = this.clothes.sock
            temp += `脚上先套了一双${sock.color}的${sock.name}，${sock.description}`
        }
        if(this.clothes.foot.name!=null){
            var foot = this.clothes.foot
            temp += `最后，穿上${foot.color}的${foot.name}，${foot.description}`
        }
        return temp;
    }
}