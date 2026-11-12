// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent = true;
let isPlatinum = true;

let hasPromotion = true;

// let name = "John";
// let day = "Friday";
// let itProduct = "No";
// let discountEvent = "Yes";
// let memberShip = "Gold";

lastMonthPaidMoreThan4000 = true;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;

hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || (isPlatinum);

console.log(hasPromotion);
