// code your solution here

function superbowlWin(record) {
    
    let winningEntry = record.find(entry => entry.result === "W");
    return winningEntry ? winningEntry.year : undefined;
}
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
];

console.log(superbowlWin(record)); 