const users = {};

for (let i = 1; i <= 10; i++) {
    const name = prompt(`Foydalanuvchi ${i} ismini kiriting:`);
    const age = prompt(`Foydalanuvchi ${i} yoshini kiriting:`);
    
    users[`user${i}`] = {
        id: i,
        name: name,
        age: age
    };
}

for (let key in users) {
    console.log(`Foydalanuvchi ID: ${users[key].id}`);
    console.log(`Ismi: ${users[key].name}`);
    console.log(`Yoshi: ${users[key].age}`);
}

console.log(users);
