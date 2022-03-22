// هنا سوف تنشئ دالة calculate 
function calculate(){
    let hight = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    
    if(hight == "" || weight == ""){
        alert("قم بالتأكد من تعبئة جميع بياناتك المطلوبة!");
        return;
    }
    
    let BMI = weight / (height * height);
    let status ="";
    
    if (BMI < 18.5) {
        status = "تعاني من نقص في الزن";
    } else if (BMI < 25){
        status = "وزنك صحي";
    } else if (BMI < 30){
        status = "تعاني من زيادة في الوزن"
    } else {
        status = "تعاني من السمنة المفرطة"
    }
    
    BMI = BMI.toFixed(2);
    document.getElementById("result").innerHTML = BMI;
    document.getElementsByClassName("comment")[0].innerHTML = status;
}