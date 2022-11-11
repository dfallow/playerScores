// Your solution here
import getPlayerScores from "./playerScores.js";

export default async function playersByScore() {
    // get array of all matches played
    let allMatches = await getPlayerScores();
    let winnerArray = [];
    const wins = [];    
    let playersInOrder = [];
    // gets the winner from each match, excludes ties
    allMatches.forEach(match => {
        const players = Object.keys(match);
        const points = Object.values(match);
        
        // checks for tie games
        if (points[0] != points[1]) {
            // winner is added to the winners array
            points.reduce((player1, player2) => player1 > player2 ? winnerArray.push(players[0]) : winnerArray.push[players[1]]);
        } 
    });

    // gets an array containing the players
    const allPlayers = [...new Set(winnerArray)];

    // counts the number of times each player has won games
    allPlayers.forEach(player => {
        let count = 0;
        winnerArray.forEach((winner) => (winner === player && count++));
        wins.push({
            "player": player,
            "totalWins": count
        });
    });

    // sorts winners array in descending order
    const playersWithScore = wins.sort(function(a,b) {
        return b.totalWins - a.totalWins;
    })

    
    playersWithScore.forEach(element => {
        playersInOrder.push(Object.entries(element)[0][1]);
    });
   return playersInOrder;
}

const playerInOrder = await playersByScore();

console.log(playerInOrder);