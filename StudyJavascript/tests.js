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
// console.log(temp);
// console.log(RegExp(temp));

// console.log("https://ncode.syosetu.com/n2485fu/12/".match(/^https:\/\/ncode.syosetu.com\/n\d{4}[a-z]{2}\/.+$/));
// console.log("https://ncode.syosetu.com/n2485fu/12/".match(/^https:\/\/ncode.syosetu.com\/n\d{4}[a-z]{2}\//));

// let a = 2;
// let b = 'hello';
// a += 3;
// console.log(a); // addition
// // expected output: 5
// b += ' world';
// console.log(b); // concatenation
// // expected output: "hello world"


// var temp = "test";
// var temp2 = "'this is temp.'";
// console.log(temp2.replace(/temp/, temp))

// console.log('0123'.slice(1));

// console.log(Boolean(``));
// console.log(Boolean(`a`));

// var matchName =`kk`;
// matchName += `\n` + 'key';
// console.log(matchName);
// // var matchName += `\n` + 'key';
// console.log(matchName);

// // const a = 'aaa';
// const json = '{"result":"s", "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// // expected output: true

const reg = />|次/;
console.log("abc>".search(reg), "次".search(reg))
