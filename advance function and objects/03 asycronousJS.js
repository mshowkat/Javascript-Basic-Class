// API

// syncronous JS can only execute one statement at a time. single threded
    //console.log('line 1')
    //console.log('line 2')
    //console.log('line 3')

//asyncronous does the oposite. 

console.log('line 1')
setTimeout(()=> {
    console.log('wait 3 second here')
}, 3000)
setTimeout(()=> {
    console.log('wait 2 second here')
}, 2000)
setTimeout(()=> {
    console.log('wait 1 second here')
}, 1000)


console.log('line 2')
console.log('line 3')

