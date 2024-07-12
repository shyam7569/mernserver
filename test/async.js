function fetchData(callback) {
  setTimeout(() => {
    callback('myData');  // Ensure this returns 'myData'
  }, 1000);
}

module.exports = fetchData;
