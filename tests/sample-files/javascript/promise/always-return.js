function foo () {}

Promise.resolve().then(() => {
  foo()
})
