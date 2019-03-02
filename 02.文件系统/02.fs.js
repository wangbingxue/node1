/*
    文件系统（file system）
        -文件系统简单的来说就是通过node来操作系统中的文件
        -使用文件系统，需要先引入fs模块，直接引入不需要下载


        同步文件的写入
            -手动操作的步骤
               1、打开文件夹
                  fs.openSync(path,flags[,mode])
                    -path 要打开文件 的路径
                    -flags 打开文件要做的操作类型
                       r 只读的
                       w 可写的
                     -mode 设置文件的操作权限，一般不传
                   返回值：该方法会返回一个文件的描述符作为结果，我们可以通过该描述符对文件进行各种操作


                2、向文件中写入内容
                    fs.writeSync(fd, string, position[,encoding])
                        -fd 文件的描述，需要传递要写入的文件的描述符
                        -string 要写入的内容
                        -position 写入的起始位置
                        -encoding写入的编码，默认为utf-8


                3、保存并关闭文件
                    fs.closeSync(fd)
 */
var fs = require("fs");
// console.log(fs);

var fd = fs.openSync("hello.txt" , "w");
// console.log(fd);

//向文件中写入内容
fs.writeSync(fd,"今天天气真不错");

//关闭文件
fs.closeSync(fd);
