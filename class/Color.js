class Color{
    red_list=["红色","深红色","艳红色","玫红色","暗红色","玫瑰红色"]
    orange_list=["橘色","橙色","亮橙色"]
    yellow_list=["黄色","柠檬黄","金黄","土黄色","亮黄色"]
    green_list=["绿色","墨绿色","浅绿色","深绿色","草绿色","翠绿色"]
    blue_list=["浅蓝色","藏青色","蓝色","海蓝色","深蓝色","天蓝色","绀色","青色"]
    purple_list=["紫色","薰衣草色","深紫色","浅紫色"]
    white_list=["白色","象牙白"]
    black_list=["黑色","墨色"]
    grey_list=["灰色","浅灰色","深灰色"]
    pink_list=["粉色","浅粉色","粉红色"]
    dark_list=["黑色","深蓝色","绀色","墨色","深灰色","棕色"]
    light_list=["白色","浅灰色","浅蓝色","粉色","浅绿色","浅紫色"]
    
    color_list=["red", "orange","yellow","green","blue","purple","white","black","grey","pink"]
    

    color(color){
        if(typeof(color)!='string')
            color = randomChoice(color);
        return randomChoice(eval("this." + color+"_list"));
    }

    randColor(){
        return randomChoice(eval(randomChoice(this.color_list)+"_list"));
    }

    color2(color1, color2, pattern){
        if(typeof(color1)!='string')
            color1 = randomChoice(color1);
        if(typeof(color2)!='string')
            color2 = randomChoice(color2);
        console.log(color1, color2)
        color1 = randomChoice(eval("this." + color1+"_list"));
        color2 = randomChoice(eval("this." + color2+"_list"));
        return eval("`"+pattern+"`");
    }
}