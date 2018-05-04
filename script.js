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

    container.append(tableRows);
};

const todoItem = {
    title: 'Dylan\'s todo item',
    details: 'Pick things up and put them down'
};

axios.post(`${BASE_URL}/todos${API_KEY}`).then(resp => {

});
