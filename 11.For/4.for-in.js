const users = { name: 'Julio', age: 30, street: 'Rua Getulio Vargas' }

for (const key in users) {
    console.log(key);
    console.log(users['name']);
    console.log(key + users[key]);
    console.log(`${key} : ${users[key]}`);
    console.log('----------------');
}