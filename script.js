const obj1 = {
   home:"Ease up on the AC.",
   office:"employees should ensure to switch off appliances",
   water:"turn off tap while brushing teeth",
   plastic:"use cloth bag instead of plastic"
    };

function tips(){
    choice1= String(prompt("Enter your category"))
    console.log(obj1[choice1]) 
    document.getElementById("p4").innerHTML = obj1[choice1]
}