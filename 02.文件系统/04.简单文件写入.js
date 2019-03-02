/*
    简单文件写入
     fs.writeFile(file, data[, option], callback)
     fs.writeFileSync(file,data[, option])
      -file 要操作文件的路径
      -data 要写入的数据
      -option 选项，可以对写入进行一些操作
      -callback 当写入完成之后执行的函数

      -flag
        r  只读
        w  可写
        a  追加
 */
//引入fs模块
var fs = require("fs");
//C:\Users\王冰雪\Desktop
fs.writeFile("C:\\Users\\王冰雪\\Desktop\\hello.txt","写入的东西",{flag:"w"},function(err){
    if(!err){
        console.log("写入成功");
    }
})
