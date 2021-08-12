const worker = new Worker(
  new URL(
    './worker.js',
    import.meta.url
  )
)

const h1 = document.createElement('h1')
h1.innerText = 'loading...'
document.body.append(h1)

Promise.race([
  new Promise(resolve => {
    worker.onmessage = event => {
      if (event.data === 'polo')
      resolve('Success!')
    }
    worker.postMessage('marco')
  }),
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Failure') 
    }, 1000)
  })
])
.then(result => {
  h1.innerText = result
  h1.style.backgroundColor = result === 'Success!' ? 'green' : 'red'
})

