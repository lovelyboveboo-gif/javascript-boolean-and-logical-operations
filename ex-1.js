let isOver18 = true;
let hasCriminalBlacklist = true;
let isAllow = true;

// Start coding here
let Name = "James";
let age = 18;
let BlackList = "No";

isOver18 = !isOver18;
hasCriminalBlacklist = !hasCriminalBlacklist;
isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow); // 
