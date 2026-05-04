// Definición de una clase base (interfaz)
class Animal {
  hablar() {
    throw new Error("La función hablar() debe ser implementada en las clases derivadas.");
  }
}

// Clases derivadas
class Perro extends Animal {
  hablar() {
    return "¡Guau!";
  }
}

class Gato extends Animal {
  hablar() {
    return "¡Miau!";
  }
}

// Función que usa polimorfismo
function hacerHablar(animal) {
  if (animal instanceof Animal) console.log(animal.hablar());
  else  console.log("Este no es un animal válido.")
}

const miPerro = new Perro()
const miGato = new Gato()

hacerHablar(miPerro) // Imprime "¡Guau!"
hacerHablar(miGato)  // Imprime "¡Miau!"