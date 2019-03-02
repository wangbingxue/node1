/*
    buffer（缓存区）
        -buffer的结构和数组很像，操作方法和数组也很像
        -数组中不能存储二进制的文件，而buffer就是专门用来储存二进制数据
        -使用buffer不需要引入模块，直接使用即可
        -在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
        buffer中每一个元素的范围是从00 - ff 或0-255-00000000-11111111
       计算机 一个0 或一个1 我们称为1位（1bit）（1个汉子占用三个字节，一个英文字符占用一个字节）
       8bit = 1byte（字节）
       1024byte = 1kb
       1024kb = 1mb
       1024mb = 1gb
       1024gb = 1tb

       buffer中的一个元素，占用内存的一个字节

       -Buffer 的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作
 */
var str = "hello Atguigu";

//将一个数组保存到buffer中
var buf = Buffer.from(str);

console.log(buf.length); //占用内存的大小
console.log(str.length); //字符串的长度


//创建一个指定大小的buffer
//buffer 构造函数都是不推荐使用的
// var buf2 = new Buffer(10);//10个字节的buffer
// console.log(buf2.length);

//创建一个10个字节的buffer
var buf2 = Buffer.alloc(10);
//通过索引，来操作buf中的元素
buf2[0] = 2;
buf2[1] = 255;
buf2[2] = 0xaa;

//只要数字在控制台或页面中输出一定是10进制
// console.log(buf2[2].toString(16));
//  for(var i = 0; i < buf2.length; i++){
//      console.log(buf2[i]);
//  }

//Buffer.allockUnsafe(size) 创建一个指定大小的buffer，但是buffer中可能含有铭感词
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
/*
    Buffer.form(str) 将一个字符串转换成buffer
    Buffer.alloc(size) 创建一个指定大小的buffer
    Buffer.allocUnsafe (size)创建一个指定大小的buffer，内部可能含有铭感词
    buf.toString() 将缓存区中的数据转换为字符串

    node作为服务器，要接受请求和发送命令，接受的请求都是二进制数据，buffer缓存区就是接受和发送二进制数据的空间
 */

var buf4 = Buffer.from("我是一段文本数据");
console.log(buf4.toString());