;(function () {
  console.log(window.Zone && window.Zone.current)
  setTimeout(function () {
    console.log('settimeout')
  }, 1000)

  Promise.reject(new Error('reason'))
})()
