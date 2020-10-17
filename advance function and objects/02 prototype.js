//prototype inheritance
const user = function(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age
}

user.prototype.info = function(){
    //inside this method we have access to "this", which means we can pull out individual information as we need.
    //retun a simple tamplate string from this method
    return `${this.firstname} ${this.lastname} is ${this.age} years old`
}

user.prototype.setname = function (fullname) {
    const name = fullname.split(' ')
    this.firstname = name[0]
    this.lastname = name[1]
}

let user1 = new user('jeff', 'bezos', 56)
user1.setname('zeff bezzos')
console.log(user1.info())
let user2 = new user('elon', 'mask', 52)
user2.setname('jhone doe')
console.log(user2.info())

let user3 = new user('bil', 'gates', 62)
console.log(user3.info())