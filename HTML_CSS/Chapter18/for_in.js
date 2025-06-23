const person1 = {
    naem : "김철수",
    age : 23,
    married : false
};

for(const key in person1) {
    console.log(key, typeof key);
}

for(const key in person1) {
    console.log(person1[key]);
}