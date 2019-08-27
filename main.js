const tower=[
  [3,2,1],
  [],
  []
];

function TowerOfHanoiR(n,tower,current,target){
  if(n===0) return;
  let newtarget= Math.min(current,target)!==0?(current+target)%3: ((current+target)%3 *2)%3;
  /* console.log(`current=${current}, new=${newtarget},target=${target}`); */
  TowerOfHanoiR(n-1, tower,current,newtarget);
  tower[target].push(tower[current].pop());
  console.log(tower);
  TowerOfHanoiR(n-1, tower,newtarget,target);
}

function tHanoi(tower){
  TowerOfHanoiR(tower[0].length,tower,0,2);
}
tHanoi(tower);