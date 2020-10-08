const notes = ['note 1', 'note 2', 'note 3', 'notes 4', 'notes 5', 'notes 6', 'notes 7', 'notes 8']

// notes.push('notes 9') //push method
// notes.pop() // push and pop manipuate the array from the end

// notes.shift() //shift method
// notes.unshift('notes 0') // shit and unshift manipulate the array from the end

// notes.splice(4, 2) //1st input is the index and the second is number of item

// notes.splice(4, 0, 'extra notes') // index number for your input followed by zero and your item..

// notes.splice(4, 1, 'extra notes') //if you want to completely replace that index with a new item, then use 1

notes[2] = 'replacing 3rd notes'// this works similarly as the splice method

console.log(notes)


//delete 3rd item
//add new item onto the end
//remove the 1st item from the list