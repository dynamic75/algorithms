
let arr1 = [4,2,0,1,5,3];
let arr2 = [...arr1];
let arr3 = [...arr2, 7, 10, 6, 9, 8];

// bubble sorting function
let sort = (a) => {
  for(let i = 0; i < a.length; i++) {
    //console.log('Outer loop', i)
    for(let j = 0; j < a.length; j++) {
      //console.log(' inner loop', j)
      if(a[j + 1] < a[j]) {
        let tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
      }
    } 
  }
  return a;
}

sort(arr1);
// output [ 0, 1, 2, 3, 4, 5 ]
