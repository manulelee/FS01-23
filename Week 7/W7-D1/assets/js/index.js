//Esercizio 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.name = _firstName;
    this.surname = _lastName;
    this.age = _age;
    this.location = _location;
  }
  isOlder = function (_user) {
    if (this.age > _user.age) {
      return `${this.name} è più grande di ${_user.name}`;
    } else if (this.age == _user.age) {
      return `${this.name} e ${_user.name} hanno la stessa età`;
    } else {
      return `${this.name} è più piccolo di ${_user.name}`;
    }
  };
}

let x = new User("Mario", "Rossi", 22, "Roma");
let y = new User("Giovanni", "Verdi", 25, "Milano");
let z = new User("Roberto", "Bianchi", 22, "Genova");

console.log(y.isOlder(x));
console.log(x.isOlder(y));
console.log(x.isOlder(z));

//Esercizio 2
class Pet {
  constructor(_name, _owner, _species, _breed) {
    this.petName = _name;
    this.ownerName = _owner;
    this.species = _species;
    this.breed = _breed;
  }
  isTheSameOwner = function (_otherPet) {
    if (this.ownerName === _otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

let petNameRef = document.getElementById("name");
let petOwnerNameRef = document.getElementById("ownerName");
let petSpeciesRef = document.getElementById("species");
let petBreedRef = document.getElementById("breed");

let addBtn = document.getElementById("add");
let petList = document.getElementById("petList");

let pet1 = document.getElementById("pet1");
let pet2 = document.getElementById("pet2");
let compare = document.getElementById("compare");
let result = document.getElementById("result");
let pets = [];

printList = function () {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    let newLi = document.createElement("li");
    newLi.innerText = `OWNER NAME: ${pet.ownerName}, PET NAME: ${pet.petName} - ${pet.breed} (${pet.species})`;
    petList.appendChild(newLi);
  });
};
addBtn.addEventListener("click", function () {
  let newPet = new Pet(petNameRef.value, petOwnerNameRef.value, petSpeciesRef.value, petBreedRef.value);
  pets.push(newPet);
  printList();
  petNameRef.value = "";
  petOwnerNameRef.value = "";
  petSpeciesRef.value = "";
  petBreedRef.value = "";
});
compare.addEventListener("click", function () {
  if (pets[pet1.value - 1].ownerName.toLowerCase() == pets[pet2.value - 1].ownerName.toLowerCase()) {
    result.innerText = "TRUE";
  } else {
    result.innerText = "FALSE";
  }
  pet1.value = "";
  pet2.value = "";
});
