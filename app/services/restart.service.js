module.exports = () => {
  return new Promise((resolve, reject) => {
    console.log('Restarting Server')
    process.exit(1)
    resolve()
  })
}
