Promise.resolve().then(() => {}).then(() => {})

Promise.resolve().then(() => {
  Promise.resolve().then(() => {})
})
