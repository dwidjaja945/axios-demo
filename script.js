const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c118demouser';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    const { todos } = resp.data;
    const table = $('table tbody');

    addToDom(todos, table);
});

const addToDom = (list, container) => {
    const tableRows = list.map((item, index) => {

        const tableData = [
            $(`<td>${index + 1}</td>`),
            $(`<td>${item.title}</td>`),
            item.complete ? $(`<td class="text-success">Yes</td>`) : $(`<td class="text-danger">No</td>`)
        ];

        return $('<tr>').append(tableData);
    });

    container.append(tableRows);
};

const todoItem = {
    title: 'Dylan\'s todo item',
    details: 'Pick things up and put them down'
};

axios.post(`${BASE_URL}/todos${API_KEY}`).then(resp => {

});