//api.test.js
const fetchData = required('./test/api');
const fetch = required('node-fetch');
//npm install node -fetch
jest.mock('node-fetch');

test('GET /users api data',async ()=>{
    const data = await fetchData;
    expect(data).toHaveProperty('getAllUsers')
    //data
    data.getAllUsers.forEach(user=>{
        expect(user).toHaveProperty('id');
    })
})
