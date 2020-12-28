// ビジーwaitを使う方法
function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}
 
sleep(5000);
 
// 5秒後にメッセージを表示
console.log('5秒経過しました！');

// async、awaitを使う方法
async function start() {
 
  await sleep(5000);
  console.log('5秒経過しました！');
 
}
 
start();

function sleep(msec) {
  return new Promise(function(resolve) {

     setTimeout(function() {resolve()}, msec);

  })
}


