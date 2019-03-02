/*
    1、同步文件读取
    2、异步文件读取
    3、简单文件读取
        fs.readFile(path[,options],callback)
        fs.readFileSync(path[,options])
            -path  读取文件的路径
            -options 读取的选项
            callback 回调函数，通过回调函数将读取到内容返回
              err 错误对象
              data 读取到的数据，会返回一个buffer

    4、流式文件读取

 */
var fs =require("fs");
// var path = "C:/Users/王冰雪/Desktop/an.jpg";
fs.readFile("an.jpg",function(err,data){
    if(!err){
        // console.log(data.toString());
            fs.writeFile("hello.jpg",data,function(){
                if(!err){
                    console.log("文件写入成功");
                }
            })


    }
})