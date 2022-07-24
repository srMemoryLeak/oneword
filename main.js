
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

var msgList=[
    ["睡衣", "牛仔裤", "七分裤", "西装", "校服", "运动裤", "皮裤", "cos服", "喇叭裤", "背带裤 ", ],
    ["睡裙", "牛仔裤", "热裤", "JK格裙", "校服", "包臀裙", "碎花长裙", "汉服", "lo裙", "背带裤 ", ],
    ["喝了一大杯奶茶", "早上没有上厕所就去忙了", "被灌了很多很多水", "故意喝了很多水", "之前一直都找不到厕所", "厕所排队的人实在太多", "不好意思提起自己尿急", "吃饭的时候喝了太多的饮料", "误认为很快就能办完事，却没想到发生了意外", "误喝了带利尿剂的水", ],
    ["上课的教室里", "公共厕所的长队之中", "电影院里", "人来人往的公园里", "长途旅行的大巴上", "一个无人的街道角落", "午餐高峰期的麦当劳里", "出现故障的电梯间中", "面对着挂着【故障中，正在检修】的牌子的厕所", "自己的家门口，却发现自己忘带了钥匙，结果", ],
    ["痛苦地捂着小腹，眼睁睁地看着一滴一滴的尿水漏了出来，下方的湿痕一点一点地扩散", "傻傻地站在原地，任由尿水顺着大腿流动，最终在地面形成了一个湖泊", "实在憋不住了，只得找到了一个瓶子，对着瓶口，“滋滋滋”地释放起来", "颤抖地打开了手机，却只看到了一条冷冰冰的消息：乖，现在还不能去尿尿哦", "不顾一切地，一边漏着尿，一遍费劲地脱下了自己的下身衣服，蹲在地上，滋滋滋地放尿，全然不顾周围。", "用手死死地掐着裆部，但无论如何，一道湿痕还是在自己的手心中逐渐向外蔓延", "只听见“滋啦”一声，从下身涌出了一股水柱，地面上立刻多出了一滩湖泊", "带着满满一膀胱的尿水，默默地继续隐忍", "弯着腰，气息十分沉重地对着朋友说：“我…可能真的要憋不住了…”", "一波强烈的尿意袭来，只能直接弯下腰，死死地夹着双腿，但强烈的酸胀感还是刺激得直接蹲到地上，随后一道清晰可见的瀑布从屁股下方渗出"]
]

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