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


