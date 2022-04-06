const shuffle = (array) => {
  for (let i = 0; i < array.length - 2; i++) {
    let index = randomInRange(i + 1, array.length - 1);
    swap(array, i, index);
  }
  return array;
}

const swap = (array,  i,  j) => {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}


const randomInRange = ( left,  right) =>  {
  return left + Math.floor(Math.random() * (right - left + 1));
}

export default shuffle;
