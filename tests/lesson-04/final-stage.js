let count = 0;
for (let i = 1; i < 101; i ++) {
    for (let j = i +1; j < 101; j ++) {
        if ((i + j) % 17 === 0){
            count ++;
            console.log(`(${i}, ${j})`)
        }
}}
console.log("Có tất cả " + count + " cặp số có tổng chia hết cho 17");