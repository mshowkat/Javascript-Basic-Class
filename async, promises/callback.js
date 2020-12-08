// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.


//----------------------------------------------------------------->>>
//----------------------------------------------------------------->>>
//before using callback function 


// let showLoading = () => {
//     console.log('1 is loading')
// }

// let hideLoading = ()=>{
//     console.log('4 loading hidden')
// }

// let getData = ()=> {
//     console.log('2 fetching data')
//     setTimeout (()=> {
//         console.log('3 finished pulling data')
//     }, 2000)
// }

// showLoading()
// hideLoading()
// getData()

//----------------------------------------------------------------->>>
//----------------------------------------------------------------->>>
//after using callback function

// let showLoading = () => {
//     console.log('1 is loading')
// }

// let getData = (callback)=> {
//     console.log('2 fetching data')
//     setTimeout (()=> {
//         console.log('3 finished pulling data')
//         callback()
//     }, 2000)
// }


//----------------------------------------------------------------->>>
//----------------------------------------------------------------->>>
showLoading()
getData(()=>{
    console.log('4 loading hidden')
})

let showLoading = () => {
    console.log('1 is loading')
}

let getData = (callback)=> {
    console.log('2 fetching data')
    setTimeout (()=> {
        console.log('3 finished pulling data')
        callback()
    }, 2000)
}

showLoading()
getData(()=>{
    console.log('4 loading hidden')
})