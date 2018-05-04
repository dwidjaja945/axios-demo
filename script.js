const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c118demouser';

    // .get() takes two arguments, where to go and a configuration {}. 
    // Does not always take configuration {}
    // .then() takes a function to run once getting data
axios.get( `${BASE_URL}/todos${API_KEY}` ).then( response => {
    console.log('response: ' , response);

    const listElements = response.data.todos.map( ( item , itemIndex ) => {
        const tr = document.createElement('tr');
        const number = document.createElement('td');
        const title = document.createElement('td')
        const completed = document.createElement('td');

        number.innerText = itemIndex + 1;
        title.innerText = item.title;
        completed.innerText = item.complete;

        tr.appendChild(number);
        tr.appendChild(title);
        tr.appendChild(completed);

        document.querySelector('.table tbody').appendChild(tr)

    } );
} );

const todoItem = {
    titel: 'Dylan\'s todo item',
    details: 'Pick things up and put them down'
};

axios.post(`${BASE_URL}/todos${API_KEY}`, todoItem ).then( response => {
    console.log('Add Item Resp: ', response);
} ).catch( error => {
    // will never try to catch an error in a .catch(). It is redundant
    try {
        console.log("error: ", error.response.data.error);

        console.log(error.message);

        //Creating a new error message
        const newError = new Error('This is the error message')
        console.log("New Error: ", newError.message);

        // throwing an error
        throw (newError);

        alert(error.response.data.error);
    } catch(error) {
        alert(error.message);
    }
} ); 
