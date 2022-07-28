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
}