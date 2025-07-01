function eat()
{
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('eat');
    }, 1000);
  })
}
function sleep()
{
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('sleep');
    }, 1000);
  })
}
function code()
{
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('code');
    }, 1000);
  })
}
async function fun()
{
  let ans1=await eat();
  console.log(ans1);
  let ans2=await sleep();
  console.log(ans2);
  let ans3=await code();
  console.log(ans3);
}
fun();