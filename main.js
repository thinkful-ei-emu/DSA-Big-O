const tower = [
  [3, 2, 1],
  [],
  []
];

function TowerOfHanoiR(n, tower, current, target) {
  if (n === 0) return;
  let newtarget = Math.min(current, target) !== 0 ? (current + target) % 3 : ((current + target) % 3 * 2) % 3;
  /* console.log(`current=${current}, new=${newtarget},target=${target}`); */
  TowerOfHanoiR(n - 1, tower, current, newtarget);
  tower[target].push(tower[current].pop());
  console.log(tower);
  TowerOfHanoiR(n - 1, tower, newtarget, target);
}

function tHanoi(tower) {
  TowerOfHanoiR(tower[0].length, tower, 0, 2);
}
tHanoi(tower);
//Talk about runtime in bigO


//O(N)
function countSheep(n) {
  for (let i = n; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}


//O(pow)
function powerCalc(num, pow) {
  let power = 1;
  while (pow > 0) {
    power *= num;
    pow--;
  }
  return power;
}


//O(N)
function revStr(str) {
  let arr = str.split('');
  for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr.join('');
}
console.log(revStr('himk'));
console.log(revStr('himke'));


//O(N)
function nthTriNum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(nthTriNum(3));


//O(N)
function strSplit(str, split) {
  let arr = [];
  for (let i = 0; i < (str.length - 1); i++) {
    if (str.charAt(i) !== split) {
      arr.push(str.charAt(i));
    }
  }
  return arr.join('');
}

console.log(strSplit('/002/2/1/3///112/', '/'));


//O(N)
function fibonacci(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) arr.push(1);
    else arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}
console.log(fibonacci(10));

//O(N)
function factorial(n) {
  let fac = 1;
  for (let i = 2; i <= n; i++) {
    fac *= i;
  }
  return fac;
}















let root={
  name:'Commander',
  soldiersBelow:[
    {
      name:'SubCommanderA',
      soldiersBelow:[
        {
          name:'LieutenantA',
          soldiersBelow:[
            {
              name:'GruntA'
            }
          ]
        },
        {
          name:'LieutenantB',
          soldiersBelow:[
            {
              name:'GruntB'
            }
          ]
        }
      ]
      
    },
    {
      name:'SubCommanderB',
      soldiersBelow:[
        {
          name:'LieutenantC',
          soldiersBelow:[
            {
              name:'GruntD'
            }
          ]
        }
      ]
    }
  ]
}; 
//have no idea how the root data is being held
let CoC = [];
let currentLevel = [root];
while (currentLevel.length !== 0) {
  let nextLevel = [];
  currentLevel.forEach(node => {
    CoC.push(node.name);
    if(node.soldiersBelow){
      node.soldiersBelow.forEach(soldierNode=>{
        nextLevel.push(soldierNode);
      });
    }
    
  });
  currentLevel=nextLevel;
}
console.log(CoC);






/* function triesToFindItem(array, item) {
  let i = 0;
  while (i < array.length) {
    if (array[i] === item) {
      break;
    }
    i++;
  }
  if (i === array.length) {
    this.setstate({
      isFound: false,
      tries: i - 1
    });
  }
  else {
    this.setstate({
      isFound: true,
      tries: i + 1
    });
  }
}


function binSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;
  let tries=0;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];
    tries++;
    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return this.setState({
        isFound:true,
        tries:tries
      });
    }
  }
  return this.setState({
    isFound:false,
    tries:tries
  });
} */