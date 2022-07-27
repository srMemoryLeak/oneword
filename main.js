
var defaultnull="<tr><td>&nbsp;</td></tr>";

function getHash(s){
    var rtn=0, seed=131;
    for(var i=0;i<s.length;i++){
        var ch = s.charCodeAt(i);
        //console.log(ch);
        rtn = rtn * seed + ch;
    }
    return rtn%10000;
}



function addToContent(name, msg){
    $("#story").text(msg);
    $("#nickname").text(name);
}

function randstory(){
    var name = document.getElementById("myname").value;
    var gender = document.getElementById("mygender").value;
    hash = Math.floor(Math.random()*10000);
    msg = genMsg(name, gender, hash);
    addToContent(name, msg);
}

function genMsg(name,gender, hash){
    console.log(gender)
    var list = Array();
    for(var i=0;i<4;i++){
        list.push(hash%10);
        hash = Math.floor(hash/10);
    }
    let cloth="";
    if(gender=="男"){
        cloth = msgList[0][list[0]];
    }else{
        cloth = msgList[1][list[0]];
    }
    let reason = msgList[2][list[1]];
    let place = msgList[3][list[2]];
    let result = msgList[4][list[3]];
    let msg=`${name}穿着${cloth}，因为${reason}，最终在${place}，${result}。`
    return msg;
}

function addElement(){
    var name = document.getElementById("myname").value;
    var gender = document.getElementById("mygender").value;
    if(name==""){
        alert("请输入你的论坛id！");
        return;
    }
    var hash = getHash(name)
    console.log(hash);
    msg = genMsg(name,gender, hash);
    addToContent(name, msg);
    //console.log(msg);
}


    function copyText(){
        var text = $('#story').text();
        copyToClipboard(text)
    }

    //复制到剪贴板

    function copyToClipboard(text) {
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(text);
      
        /* Alert the copied text */
        alert("复制成功！你的小故事已复制到剪贴板！");
      }

function  toluntan(){
    window.open("https://www.shireyishunjian.com/main/forum.php?mod=viewthread&tid=218215")
}