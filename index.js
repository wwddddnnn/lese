alert('你好！');
if(!confirm('想玩个游戏吗')){
    alert('赶紧右上角关闭页面吧');
    alert('还不关闭吗');
    alert('那就一定要玩了哦');
}
if(!confirm('start?')) alert('……你已经没得选择了');
let user = prompt('告诉我你的名字？');
if(user.length == 0){
    alert('不愿意说吗？那我叫你player好了');
    user = 'player';
}
if(confirm('你好，'+user+'\n你相信我可以猜中你的年龄吗？')){
    alert('我就知道你不……什么，你信了？');
    alert('不，你肯定不信');
    alert('总之你玩一下');
}else alert('那就试试看？');
let age = 0;
if(confirm('下面的数字中有你的年龄吗\n 1  3  5  7  9 11 13 15\n17 19 21 23 25 27 29 31\n33 35 37 39 41 43 45 47\n49 51 53 55 57 59 61 63')) age += 1;
if(confirm('下面的数字中有你的年龄吗\n 2  3  6  7 10 11 14 15\n18 19 22 23 26 27 30 31\n34 35 38 39 42 43 46 47\n50 51 54 55 58 59 62 63')) age += 2;
if(confirm('下面的数字中有你的年龄吗\n 4  5  6  7 12 13 14 15\n20 21 22 23 28 29 30 31\n36 37 38 39 44 45 46 47\n52 53 54 55 60 61 62 63')) age += 4;
if(confirm('下面的数字中有你的年龄吗\n 8  9 10 11 12 13 14 15\n24 25 26 27 28 29 30 31\n40 41 42 43 44 45 46 47\n56 57 58 59 60 61 62 63')) age += 8;
if(confirm('下面的数字中有你的年龄吗\n16 17 18 19 20 21 22 23\n24 25 26 27 28 29 30 31\n48 49 50 51 52 53 54 55\n56 57 58 59 60 61 62 63')) age += 16;
if(confirm('下面的数字中有你的年龄吗\n32 33 34 35 36 37 38 39\n40 41 42 43 44 45 46 47\n48 49 50 51 52 53 54 55\n56 57 58 59 60 61 62 63')) age += 32;

alert('我已经知道你的年龄了哦');
if(!confirm('你今年'+age+'岁，对吗，'+user+'?')) alert('怎么可能猜错，别胡说');
alert('游戏结束了哦\n再见'+user);
