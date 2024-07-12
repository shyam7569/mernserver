jest.mock('./test/utils.js', () => {  // Correct the path here
    return {
      getData: jest.fn(),
    };
  });
  
  const { getData } = require('./test/utils.js');  // Use the same corrected path
  
  test('mock getData and process the mocked data', () => {
    getData.mockReturnValue('mockedData');
    const result = getData();
    expect(result).toBe('mockedData');
  });
  