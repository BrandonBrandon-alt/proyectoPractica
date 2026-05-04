class Animal {
  constructor(nombre, tipo, alimentacion) {
    this.nombre = nombre,
    this.tipo = tipo,
    this.alintacion = alimentacion
  }

   comer(){
      console.log(`El anima ${this.nombre} del tipo ${this.tipo} come solo ${this.alintacion}`)
    }
}


class Perro extends Animal {
  constructor(raza, nombre, tipo, alimentacion){
    super(nombre, tipo, alimentacion)
    this.raza = raza
  }
}
const miPerro = new Perro("Golden","Lulu","Vertebrado","carne")
miPerro.comer()
