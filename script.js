// Save data
function saveData(){

    let student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };


    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );


    alert("Data Saved Successfully!");

}


// Load data
function loadData(){

    let data = localStorage.getItem("student");


    if(data){

        let student = JSON.parse(data);


        document.getElementById("result").innerHTML =
        `
        <b>Name:</b> ${student.name}<br>
        <b>Email:</b> ${student.email}<br>
        <b>Phone:</b> ${student.phone}
        `;

    }
    else{

        document.getElementById("result").innerHTML =
        "No Data Found";

    }

}


// Delete data
function clearData(){

    localStorage.removeItem("student");

    document.getElementById("result").innerHTML =
    "Data Deleted";

}
