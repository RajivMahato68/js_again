var selectedRow = null;

function onFormSubmit(e) {
    e.preventDefault();
    var formData = readFormData();

    if (validateForm(formData)) {
        if (selectedRow === null) {
            // Check for duplicate product name before inserting
            if (!isDuplicateProduct(formData.product)) {
                insertNewRecord(formData);
            } else {
                alert("Product with the same name already exists");
            }
        } else {
            updateRecord(formData);
        }
rresetForm();
    }
}


function readFormData() {
    var formData = {};
    formData['productCode'] = document.getElementById("productCOde").value;
    formData['product'] = document.getElementById("product").value;
    formData['qty'] = document.getElementById("qty").value;
    formData['perprice'] = document.getElementById("perprice").value;
    return formData;
}

function validateForm(formData) {
    for (var key in formData) {
        if (formData[key] === "") {
            alert("Please fill in all fields");
            return false;
        }
    }
    return true;
}

function isDuplicateProduct(newProductName) {
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    for (var i = 0; i < table.rows.length; i++) {
        var existingProductName = table.rows[i].cells[1].innerHTML; // Assuming product name is in the second column (index 1)
        if (existingProductName === newProductName) {
            return true; // Found a duplicate
        }
    }
    return false; // No duplicate found
}

function insertNewRecord(data) {
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perprice;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick='onEdit(this)'>Edit</button> <button onclick='ondelete(this)'>Delete</button>`;
}



// Edit the data
function onEdit(button) {
    selectedRow = button.parentElement.parentElement;
    document.getElementById('productCOde').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perprice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productC0de;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perprice;

}

//delete the data

function ondelete(td) {
    if (confirm('Do you want to delete this record')) {
        var row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
        selectedRow = null; // Set selectedRow to null after deleting the row
    }
    rresetForm();
}
// reset the data 

function rresetForm(){
    document.getElementById('productCOde').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value= '';
    document.getElementById('perprice').value= '';
    
}
