// Javascript classes
// for not accessing the property we use _ so it indicates that these are private variables

// we can make private methods and varibles by declaring them using => e.g #name
// class animals {
//   constructor(family) {
//     this._family = family;
//     this._prop = "do not lay eggs";
//     this._type = "carnivorous";
//   }

//   getType() {
//     return this._type;
//   }

//   setType(animalType) {
//     this._type = animalType;
//   }

//   printProp(animalName) {
//     console.log(
//       `The ${animalName} is a ${this._family}, ${this._prop} & they are ${this._type}`
//     );
//   }
// }

// const tiger = new animals("mammals");
// tiger.type = "carnivorous";
// tiger.printProp("tiger");

// const elephant = new animals("mammals");
// // elephant.type = "herbivorous";
// elephant.setType("herbivorous");
// elephant.printProp("elephant");

// console.log(elephant.getType());

// Extending the class property to other class
// class snakes extends animals {
//   constructor(family) {
//     super(family);
//     this.prop = "they do lay eggs";
//   }

//   snakeProps(type) {
//     console.log(
//       `This is ${type} which is ${this.family} ${this.prop}, when they bite to human, human may be dead`
//     );
//   }
// }

// const kingCobra = new snakes("reptile");
// kingCobra.snakeProps("king cobra");

// Factory Function

function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;

  return {
    bake: () => {
      console.log(`Baking a ${size} ${crust} crust pizza`);
    },
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake();
