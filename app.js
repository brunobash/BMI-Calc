function calc() {
    var bmi;
    var index = document.getElementById("index");
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);

    document.getElementById("weight-value").textContent = weight + "kg";
    document.getElementById("height-value").textContent = height + "cm" ;

    bmi = (weight / Math.pow((height/100), 2)).toFixed(1);
    index.textContent = bmi;


    if( bmi < 18.5 ) {
        category = "Underweight!";
        output.style.color = "#ffc44d";
    } else if( bmi >= 18.5 && bmi <= 24.9 ) {
        category = "Normal Weight";
        output.style.color = "#0be881";
    } else if( bmi >= 25 && bmi <= 29.9 ) {
        category = "Overweight";
        output.style.color = "#ff884d";
    } else {
        category = "Obese!";
        output.style.color = "#ff5e57";
    }

    document.getElementById("category").textContent = category;
}