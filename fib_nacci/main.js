function fib() {
  // Some variables here
  var count1 = 0;
  var count2 = 1;

  function nacci() {
    // do something to those variables here
    // if(count1 == 0 && count2 == 0){
    //     count2++;
        console.log(count2);
    // } else {
        // console.log(count1+count2);
        var temp = count2
        count2+=count1;
        count1 = temp;
    // }
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"c1
fibCounter() // should console.log "2"c2
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
