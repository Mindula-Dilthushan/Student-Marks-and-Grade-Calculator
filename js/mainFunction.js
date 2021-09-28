const getResult = () => {
    let math = document.getElementById('math').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;

    if(document.getElementsByTagName('input').value==""){
        alert("Please Enter Some Value");
    }
    let total = parseFloat(math) + parseFloat(physics) + parseFloat(chemistry);
    let percentage = (total * 100) / 300;

    if (percentage >= 90) {
        document.getElementById("grade").innerHTML = "A+";
    }
    else if (percentage >= 80) {
        document.getElementById("grade").innerHTML = "A";

    }
    else if (percentage >= 70) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 60) {
        document.getElementById("grade").innerHTML = "B";

    }
    else if (percentage >= 50) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 40) {
        document.getElementById("grade").innerHTML = "C+";

    }
    else if (percentage >= 30) {
        document.getElementById("grade").innerHTML = "C";

    }
    else if (percentage >= 20) {
        document.getElementById("grade").innerHTML = "D+";

    }
    else {
        document.getElementById("grade").innerHTML = "You Are Failed";

    }


    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('total').innerHTML = total;
}