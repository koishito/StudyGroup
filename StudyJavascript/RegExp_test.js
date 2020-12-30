var temp = /^https:\/\/ncode.syosetu.com\/n\d{4}\u{2}\//;
//console.log(temp.toString());

var temp = `/^https:\/\/ncode.syosetu.com\/n\d{4}\u{2}\//`;
// console.log(RegExp(temp));

var temp = `/^https:\/\/ncode.syosetu.com\/n\d{4}\u{2}\//`.replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&');
// console.log(temp);
// console.log(RegExp(`/^https:\/\/ncode.syosetu.com\/n\d{4}\u{2}\//`));
// console.log(temp);
// var temp = temp.substr(1,temp.length-2);
// console.log(temp);
// console.log(RegExp(temp));

var temp = `/^https:\\/\\/ncode.syosetu.com\\/n\\d{4}\\u{2}\\//`.replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&');
var temp = `/^https:\\/\\/ncode.syosetu.com\\/n\\d{4}\\u{2}\\//`.replace(/\\/g, '\\$&');
console.log(temp);
console.log(RegExp(temp));

