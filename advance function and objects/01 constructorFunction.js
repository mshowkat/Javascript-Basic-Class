
//factory function
function sampleFunction (radius) {
    return {
            radius: radius,
            draw: function () {
                console.log('draw')
            }
        }
}

sampleFunction(1)

//camle notaion: oneTwoThree
//pascal notaion: OneTwoThree


//constructor function
function ConsFunction (radius) {
    //this function contruct or create and object
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

const circle = new ConsFunction(1) 
//by using new 3 thing is happening
    //new operator creates an empty js object 
        //>>> const XYZ = {}
    //next it point this keyword to the empty object it created in the 1st place 
        //>>> this.radius = radius;
    //finally it will return the object from the function
        //>>> return this