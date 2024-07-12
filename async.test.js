const fetchData = require('./test/async.js');

test('the data expected is myData', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('myData');  // Expect 'myData'
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

test('Callback My Data', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('myData');  // Expect 'myData'
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
