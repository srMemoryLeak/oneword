
var defaultnull="<tr><td>&nbsp;</td></tr>";

function addToContent(name, msg){
    $("#nickname").text(name);
    $("#story").text("");
}

function randstory(){
    var name = document.getElementById("myname").value;
    var gender = parseInt(document.getElementById("mygender").value);
    var age = parseInt(document.getElementById("myage").value); 
    if(name==""){
        alert("请输入你的主角名！");
        return;
    }
    $("#nickname").text(name);
    $("#story").text("");
    seed = Math.floor(Math.random()*10000);
    var game = new Game(name,gender,age,seed);
    game.debug();
    game.run();
    setStory(game.story);
}

function genStory(){
    var name = document.getElementById("myname").value;
    var gender = parseInt(document.getElementById("mygender").value);
    var age = parseInt(document.getElementById("myage").value); 
    if(name==""){
        alert("请输入你的主角名！");
        return;
    }
    $("#nickname").text(name);
    $("#story").text("");
    seed = genSeed(name);
    var game = new Game(name,gender,age,seed);
    game.debug();
    game.run();
    setStory(game.story);
}


function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime){
            return;
        }
    }
}

var storyInterval=null;

function setStory(msg){
    //console.log(msg);
    var i = 0;
    if(storyInterval!=null){
        clearInterval(storyInterval);
        storyInterval=null;
    }

    function change(){
        if(msg[i]=="&"){i+=5;}
        if(msg[i]=="<"){i+=2;}
        $('#story')[0].innerHTML = msg.substring(0, i);
        i++;
        if(i>msg.length){
            clearInterval(storyInterval);
            storyInterval=null;
        }
    }
    storyInterval = setInterval(change,30)
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

window.onload = function(){
    //console.log(d(20));
}

function switchto(href){
    location.href = href;
}
