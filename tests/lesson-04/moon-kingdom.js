//BÀI 1: tạo hàm createCharacters
function createCharacters() {
    const characters = [
        { name: 'Moon King', level: 1, health: 500 },
        { name: 'Sun Queen', level: 2, health: 700 },
        { name: 'Star Prince', level: 3, health: 1000 },
        { name: 'Comet Princess', level: 4, health: 1200 },
        { name: 'Asteroid Knight', level: 5, health: 1500 },

    ];
    const charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        }
    });
    console.log(charactersPowerUp);

    const possibleWinners = characters.filter(character => character.health > 1000);
    console.log(possibleWinners);
}
createCharacters();

// BÀI 2: tạo hàm printLeaderboard
const players = [
    { name: 'Moon King', score: 500 },
    { name: 'Sun Queen', score: 700 },
    { name: 'Star Prince', score: 1000 },
    { name: 'Comet Princess', score: 1200 },
    { name: 'Asteroid Knight', score: 1500 }
];
function printLeaderboard(player) {
    const leaderBoard = player.sort((a, b) => b.score - a.score);
    const medals = ["🥇", "🥈", "🥉"];
    for (let i = 0; i < leaderBoard.length; i++) {
       if (i < 3) {
        console.log(`${medals[i]} ${i+1}. ${leaderBoard[i].name} - ${leaderBoard[i].score}`);
       } else
        console.log(`   ${i+1}. ${leaderBoard[i].name} - ${leaderBoard[i].score}`);
}}
printLeaderboard(players);
