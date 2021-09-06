// 请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.
// 则经过替换之后的字符串为We%20Are%20Happy

//核心是stringObject.replace()函数的使用

var str="visit school";
str=str.replace(/school/, "newSchool")
//全局替换 visit1school
var str2="visit school";
str2=str2.replace(/ /g, "1")

