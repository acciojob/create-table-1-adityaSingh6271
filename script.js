function insert_Row() {
    // Get the table by its id
    const table = document.getElementById("sampleTable");

    // Insert a new row at the top of the table
    const newRow = table.insertRow(0);

    // Insert cells into the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the content of the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
