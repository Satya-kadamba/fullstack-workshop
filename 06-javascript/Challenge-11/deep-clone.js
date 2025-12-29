function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {   // Date
    return new Date(obj);
  }
 
  if (obj instanceof Set) {  // Set
    const newSet = new Set();
    for (let value of obj) {
      newSet.add(deepClone(value));
    }
    return newSet;
  }
 
  if (obj instanceof Map) {      // Map
    const newMap = new Map();
    for (let [key, value] of obj) {
      newMap.set(key, deepClone(value));
    }
    return newMap;
  }
  
  if (Array.isArray(obj)) {  // Array
    return obj.map(item => deepClone(item));
  }
 
  const clonedObj = {};       // Object
  for (let key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }
  return clonedObj;
}
//-------------------------------------
const original = {
  name: 'John',
  address: { city: 'New York', zip: '10001' },
  hobbies: ['reading', 'gaming'],
  metadata: { created: new Date(), tags: new Set(['user', 'admin']) }
};

const cloned = deepClone(original);

cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log(original.address.city); 
console.log(original.hobbies);       
