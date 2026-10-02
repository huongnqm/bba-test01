let playerName = "Mario";
let currentLives = 3;
const levelCoins = [
    { level: "Level 1", coins: 25 },
    { level: "Level 2", coins: 30 },
    { level: "Level 3", coins: 45 }
];
let sum = 0;
let avg = 0;
for (let i = 0; i < levelCoins.length; i++) {
    sum += levelCoins[i].coins;
    avg = sum / levelCoins.length;
}
console.log("Tổng số coin: " + sum);
console.log ("Số coin trung bình: " + avg);
console.log("Số coin dư: " + sum%3);