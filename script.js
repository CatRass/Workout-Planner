const days = ['Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday', 'Sunday']

const tableTitles = ['Excercise Name', 'Weight (kg)', 'Reps x Sets']

class workout{
    constructor(name, excercises){
        this.name = name   // e.g: "Chest Day"
        this.excercises = excercises  // List of Excercies, which are a different class
    }
}

class excercise{
    constructor(name, repRange, weight){
        this.name = name;
        this.repRange = repRange;
        this.weight = weight;
    }
}

newestID = 0;
currentDay = 0;

function createEmptyTable() {
    if(currentDay >= days.length){
        alert("Max number of workouts reached")
        return;
    }
    
    newestID++;

    // Create a container
    var container = document.createElement('div');
    container.className = 'workout-container';
    container.id = 'container-' + newestID;
    
    // Create the title, denoting the day
    var title = document.createElement('h2');
    title.textContent = days[currentDay] + ":";
    currentDay++;

    var name = document.createElement('input');
    name.placeholder = "Click to Edit Name. E.g: Chest Day";
    name.className = "editable"
    name.contentEditable = "true";
    name.onfocus = function() {document.createRange().selectNodeContents(this)}

    container.appendChild(title);
    container.appendChild(name);

    // Create the table element
    const table = document.createElement('table');

    //table.border = '1';

    // Define the number of rows and columns
    const rows = 0;
    const cols = 3;

    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');

    // Form the header row of the table
    for (var i = 0; i < cols; i++){
        var th = document.createElement('th');
        th.textContent = tableTitles[i];
        headerRow.appendChild(th)
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.id = "workout-table"+newestID;

    container.appendChild(table);

    // Craete the exercise button
    let addRow = document.createElement('button');
    addRow.onclick = function(){ addNewRow(table) }
    addRow.textContent = 'Add New Excercise';
    addRow.className = 'excer-button'

    container.appendChild(addRow)

    // Append the new table to the container
    document.getElementById('workouts_container').appendChild(container);
}

function addNewRow(table){
    var tbody = document.createElement('tbody');
    var row = document.createElement('tr');
    
    // ======= Excercise Name =======
    var td = document.createElement('td');
    var input = document.createElement('input');
    input.className = "table-text"
    input.type = 'text';

    td.appendChild(input)
    row.appendChild(td);

    // ======= Weight =======
    var td = document.createElement('td');
    var input = document.createElement('input');
    input.type = 'number';
    input.id = "weight-text"
    input.className = "table-text"
    input.step = 2.5
    input.min = 0;

    td.appendChild(input)
    row.appendChild(td);

    // ======= Rep Range =======
    var td = document.createElement('td');
    var input = document.createElement('input');
    input.type = 'number';
    input.id = "rep-text"
    input.className = "table-text"
    input.min = 0

    td.appendChild(input)
    
    var input = document.createElement('label');
    input.textContent = "x";

    td.appendChild(input)
    
    var input = document.createElement('input');
    input.type = 'number';
    input.id = "rep-text"
    input.className = "table-text"
    input.min = 0
    
    td.appendChild(input)

    // Delete button
    var dltButton = document.createElement('button');
    dltButton.onclick = function() { deleteRow(table, this) }
    dltButton.textContent = "✖";
    dltButton.className = 'delete-button'

    td.appendChild(dltButton)

    row.appendChild(td);

    tbody.appendChild(row);
    table.appendChild(tbody);
}

function deleteRow(table, button){
    var row = button.parentNode.parentNode.rowIndex
    table.deleteRow(row);

}