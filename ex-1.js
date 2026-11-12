let isOver18 = true;
let hasCriminalBlacklist = true;
let isAllow = true;

// let name = "James";
// let age = 18;
// let blacklist = "No";

isOver18 = false;
hasCriminalBlacklist = false;
isAllow = (isOver18 && !hasCriminalBlacklist);

console.log(isAllow);
