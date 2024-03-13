//problem-2

const moveZero= (arr)=>{
    let zero=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            zero++;
            arr.splice(i,1);
            i--;
        }
    }
    for(let i=0;i<zero;i++){
        arr.push(0);
    }
    return arr;
}
 const num =[0]

// console.log(moveZero(num));

 //problem-3

 const majorityElement = (arr)=>{
     let count=0;
     let ans;
     for(let i=0;i<arr.length;i++){
         if(count===0){
             ans=arr[i];
         }
         if(arr[i]===ans){
             count++;
         }else{
             count--;
         }
     }
     return ans;
 }
 const num2=[2,3,3,3,3,2,2]

 //console.log(majorityElement(num2));

 //problem-4

 const bestTimeToBuyAndSell = (prices)=>{
    let lowestPrice=Infinity;
     let profit=0;
   for(let price of prices) {
     lowestPrice= Math.min(lowestPrice,price);
     profit= Math.max(profit,price-lowestPrice);
   }
   return profit;
 };

 const num3 = [7, 6, 4, 3, 1];


 //console.log(bestTimeToBuyAndSell(num3));

 //problem-5
 const findDuplicate = (numbers)=>{
    const duplicates = [];

    for (let num of numbers) {
      let index = Math.abs(num) - 1;

      if (numbers[index] < 0) {
        duplicates.push(index + 1);
      } else {
        numbers[index] *= -1;
      }
    }

    return duplicates;
 }

 const num4 = [3, 3, 4, 2, 2];
 console.log(findDuplicate(num4));