# tiny-co
[![NPM version][npm-image]][npm-url]
One Generator control flow absort idea from tj/co

## miletone 
`next()` of Generator function should be call in sync code.
if do it in callback, maybe cause unexpected situation:

```javascript
function co (gen) {
  const g = gen()
  const p = new Promise(resolve => { resolve() })
  let next = {value: p, done: false}

  let n = 0
  
  while (!next.done) {
    next.value.then(data => {
      // bug, next in here will never affect while judgement.
    next = g.next(data)
    })
  }
}
```