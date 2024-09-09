
// Q1
console.log("------------------Q1")
for(let i =1 ;i<25; i++){
    if(i %2 == 0){
        console.log(i)
    }
}

console.log("------------------Q2")

for(let i=1;i<10;i++){
    console.log(i**2)
}

console.log("------------------Q3")

for(let i =1 ;i<20; i++){
    if(i %2 == 1){
        console.log(i)
    }
}


console.log("------------------Q4")


let fib = [0, 1];


for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}


console.log(fib);

console.log("------------------Q5")



for (let i = 1; i <= 3; i++) {
    console.log(`Multiplication Table for ${i}:`);
    
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    
    console.log(''); 
}
