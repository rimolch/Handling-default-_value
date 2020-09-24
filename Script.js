function orderchickenWith(sideDish){
console.log(" Chicken with " + sideDish);
}
orderChickenWith(" noodles !");//returns Chicken with noodles!
orderChicjenWith();//return Chicken with undefined


function orderChickenWith(sideDish){
if(sideDish===undefined){
sideDish = " Whatever !";
}
consile.log(" Chicken with "+ sideDish);
}
orderChickenWith("Noodles!");// returns Chicken with Noodles!
orderChickenWith();// returns Chicken with whatever!
