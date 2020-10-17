// const request = new XMLHttpRequest()

// // request.addEventListener('readystatechange', ()=>{
// //     console.log(request)
// //      if(request.readyState === 4) {
// //        console.log(request.responseText)
// //      }
// // })

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// request.send()

// // console.log('test')

// ----------------------------------------------------------------------------------------------------------->>>>
// ----------------------------------------------------------------------------------------------------------->>>>

//status codes, typical status code of 200 means everything is okay we are getting the data. 

// ----------------------------------------------------------------------------------------------------------->>>>

// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', ()=>{
//     // console.log(request, request.readyState)
//     if(request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText)
//     } else if(request.readyState === 4) {
//         console.log('no data found')
//     }
// })

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// request.send()

// console.log('test')


// ----------------------------------------------------------------------------------------------------------->>>>
// ----------------------------------------------------------------------------------------------------------->>>>

// const getTodos = () => {
//     request.addEventListener('readystatechange', ()=>{
//         // console.log(request, request.readyState)
//         if(request.readyState === 4 && request.status === 200) {
//             console.log(request.responseText)
//         } else if(request.readyState === 4) {
//             console.log('no data found')
//         }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
    
//     console.log('test')
// }

// getTodos()

// ----------------------------------------------------------------------------------------------------------->>>>
// ----------------------------------------------------------------------------------------------------------->>>>

// fetch().then