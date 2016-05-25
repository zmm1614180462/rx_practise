var Rx = require('rx')
var SPEED = 1000
var AMOUNT = 100

var source1 = Rx.Observable.interval(100)
  .map(i => 'First: ' + i)

var source2 = Rx.Observable.interval(150)
  .map(i => 'Second: ' + i)

var source = Rx.Observable.combineLatest(
  source1,
  source2
  )
  .take(AMOUNT)
  .sample(SPEED)

source.subscribe(
  x => console.log('Next %s', JSON.stringify(x)),
  err => console.error(err),
  () => console.log('DONE')
)
