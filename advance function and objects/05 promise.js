//promise replaces the callback hell

let p =  new Promise((resolve, reject) => {
    let a = 2+3 
    if (a === 3) {
        resolve ('success')
    } else {
        reject ('failed')
    }
})

p.then((msg) => {
    console.log(`this is a success ${msg}`)
}).catch((msg) => {
    console.log(`this is a catch ${msg}`)
})