const notes = ['note 1', 'note 2', 'note 3', 'notes 4', 'notes 5', 'notes 6', 'notes 7', 'notes 8']

notes.forEach(function() {
    
    console.log('test run')
}) //foreach is a method that is available in arrays

// notes.forEach(function(notes, index) {
//     let num = index + 1
//     console.log(`${num}. ${notes}`)
// }) // we have to pass 2 argument in here... 1st the note items, and second the index
// when you add a function inside another function it's called callback function