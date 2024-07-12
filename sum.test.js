// test cases for our unit fun sum
const sum = require('./test/sum')

//jest test cases
// test function to test
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    // toBe() -> it means exactly equal
    // expect() -> to ex our unit 
})

test('Object in array',()=>{
    const data={one:1}
    data['two']=6;
    expect(data).toEqual({one:1,two:6})
})
test('Value is Null',()=>{
    const n=null;
    expect(n).toBeNull();
})
test('Url is Defined',()=>{
    const url='fkldsjksj@kjflkasdn';
    expect(url).toBeDefined();
})