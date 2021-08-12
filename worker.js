self.onmessage = (event) => {
  if (event.data === 'marco') {
    self.postMessage('polo')
  }
}

