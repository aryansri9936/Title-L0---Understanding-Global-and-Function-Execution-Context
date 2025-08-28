let age = 20;
function displayAge() {
    console.log("Current Age:", age);
}

function changeAge(newAge) {
    age = newAge; 
    console.log("Age updated to:", age);
}

displayAge();    
changeAge(25);     
displayAge();      
