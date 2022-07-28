

var seed=114514;

function genSeed(name){
    var rtn=0, s=131;
    for(var i=0;i<name.length;i++){
        var ch = name.charCodeAt(i);
        //console.log(ch);
        rtn = rtn * s + ch;
    }
    return rtn%10000;
}



function myRandom(max){
    var A = 0x5DEECE66D;
    var C = 0xB;
    var M = 998244353;
    seed = (seed*A + C)%M;
    return seed%max;
}

//Dcheck
function d(x,times=1){
    let rtn=0;
    for(var i=0;i<times;i++){
        rtn += myRandom(x)+1;
    }
    return rtn;
}
var SCENARIO_COUNT=[0, 1];

function read_json(name){
    var url = "../"+name
    var json;
    var request = new XMLHttpRequest();
    request.open("get", url,false);
    request.onload = function () {
        json = JSON.parse(request.responseText);
    }
    request.send(null);
    return json;
}

function sanscheck(di){//意志骰鉴定
    if(di<0)var f = -1;
    else var f=1;
    var ord = d(20);/*
    if(ord==1){
        ord = -3;//自然1
    }
    if(ord==20){
        return 100;
    }*/
    switch(di){
        case 1:
            di=1;break;
        
        case 2:
            di=d(4);break;
        
        case 3:
            di=d(6);break;
        
        case 4:
            di=d(8);break;
        
        case 5:
            di=d(10);break;
        
        case 6:
            di=d(10)+1;break;
        
        case 7:
            di=d(10)+d(4);break;
        
        case 8:
            di=d(10)+d(6);break;    

        case 9:
            di=d(10)+d(8);break;
        
        case 10:
            di=d(20)+d(4);break;
        
        case 11:
            di=d(20)+d(4)+1;break;   
    }
    //console.log("1d20: "+ord+" di: "+di);
    ord = ord + di*f;
    ord = Math.max(0, ord);
    return ord;
}

function checkresult(d){//根据意志鉴定返回结果
    if(d<=0)return 0;
    if(d<=3)return 1;
    if(d<=6)return 2;
    if(d<=8)return 3;
    if(d<=10)return 4;
    return 5;
}


function delIdx(li, idx){
    var rtn = new Array();
    for(var i=0;i<li.length;i++){
        if(idx==i)continue;
        rtn.push(li[i]);
    }
    return rtn;
}