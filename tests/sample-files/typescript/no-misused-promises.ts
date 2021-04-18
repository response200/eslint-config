/* eslint-disable @typescript-eslint/strict-boolean-expressions */
async function doSomething () {
  return await Promise.resolve('value')
}

export const val = doSomething() ? 123 : 456;

[1, 2, 3].forEach(async () => {
  await doSomething()
})
