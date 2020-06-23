'use strict';


class Animal {
  constructor(name, type){
    this.name = name,
    this.type = type
  }
}

class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  enqueue(animal) {
    this.animals.push(animal);
  }

  dequeue(pref){
    let luckyAnimal = `No ${pref} available`;
    if (this.animals[0] === undefined){
      return ('Shelter is empty');
    }
    if (pref != 'dog' || 'cat'){
      luckyAnimal = this.animals[0];//animal that's been in the shelter the longest
      this.animals.splice(0, 1);
      return luckyAnimal;
    }

    for(let i = 0; i < this.animals.length; i++){
      if (this.animals[i].type === pref) {
        luckyAnimal = this.animals[i];
        this.animals.splice(i, 1);
        console.log(luckyAnimal);
        i++;
        break;
      }
    }
    return luckyAnimal;
  }

  

} 

let myShelter = new AnimalShelter();
let dog1 = new Animal('dog1', 'dog');
let dog2 = new Animal('dog2', 'dog');
let cat1 = new Animal('cat1', 'cat');
let cat2 = new Animal('cat2', 'cat');

myShelter.enqueue(dog1);
myShelter.enqueue(cat1);
myShelter.enqueue(dog2);
myShelter.enqueue(cat2);
console.log(myShelter);
console.log(myShelter.dequeue());
console.log(myShelter);

module.exports = {
  animal: Animal,
  shelter: AnimalShelter,
}
