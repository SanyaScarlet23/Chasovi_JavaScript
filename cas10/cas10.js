// function Rabbit(type, color){//prototip funkcii koi se koristat za kreiranje na objekti i imaat uloga na konstruktor
// 	this.type = type
// 	this.color = color
// }

// Rabbit.prototype.speak = function(phrase){
// 	console.log("The "+this.type + " rabbit who is "+this.color+" says "+phrase)
// }

// let zajak = new Rabbit("polar","white")//kreirame instanca od funkcijata Rabbit so svojstva koi ni gi zadavame
// console.log(zajak)

// zajak.speak("hi")

// // let niza = []//prv nachin
// let niza = new Array("element")

//ovoj nacin so definiranje na prototip funkcii ne se koristi chesto!
//Objekt e instanca od klasa. sekoj objekt ima svoe ime i ima razlichni vrednosti za svojstvata na klasata

// class Uchenik {
// 	constructor(ime, prezime,godini, poeni){
// 		this.ime = ime
// 		this.prezime = prezime
// 		this.godini = godini
// 		this.poeni = poeni
// 	}

// 	pecatiPoeni(){
// 		console.log("poenite se:"+this.poeni)
// 	}
// }
// //preku konstruktorot se kreira objektot. Malite zagradi do imeto na klasata go pravat tokmu toa
// let sanja = new Uchenik("Sanja","Tashkovska",29,40)//so new se kreira nov objekt
// console.log(sanja)
// sanja.pecatiPoeni()

// let danche= new Uchenik("Danche","Bacheva",20, 80)
// danche.pecatiPoeni()

class Employee{
	constructor(name, age, salary, tasks){
		this.name = name
		this.age = age
		this.salary = salary
		this.tasks = []
	}

	setTasks(tasks){
		this.tasks = tasks
	}

	work(){
		let task = this.tasks.shift()
		console.log(this.name +" works on "+ task)
	}

	collectSallary(){
		console.log(this.salary)
	}
}
//so extends definirame deka Senior nasleduva od Employee(ke gi ima istite svojstva kako Employee)
class Senior extends Employee{
	constructor(name,age,salary,tasks, juniors){
		super(name,age,salary,tasks)//go povikuva konstruktorot na Employee za da moze da gi koristi tie svojstva i funkcii
		this.juniors = juniors
	}

	addJunior(junior){
		this.juniors.push(junior)
	}
}

let senior = new Senior("Jane",30,1000,[],[])
senior.collectSallary()
senior.addJunior("Petko")
console.log(senior)