let submit = document.getElementById("Submit");
let fname = document.getElementById("fname").Value
let lname = document.getElementById("lname").Value
let address1 = document.getElementById("address1").Value
let address2 = document.getElementById("address2").Value
let pin = document.getElementById("pin").Value
let gender = document.getElementById("gender").Value
let food = document.getElementById("food").Value
let state = document.getElementById("state").Value
let country = document.getElementById("country").Value


var createTable=(fname.value,lname.value,address1.value,address2.value,pin.value,gender.Value,state.value,country.value)
fname.value = ""
lname.value = ""
address1.value = ""
address2.value = ""
pin.value = ""
gender.value = ""
food.value = ""
state.value = ""
country.value = ""

function newtable(fname,lname,address,pincode,gender,food,state,country){
let tbody = document.getElementById("tbody");
let tr = document.createElement("tr")
td1.innerHTML = fname;
tr.append(td1);
 
let td1 = document.createElement("td")
td1.innerHTML = lname;
tr.append(td1);

let td2 = document.createElement("td")
td2.innerHTML = address1;
tr.append(td2)

let td3 = document.createElement("td")
td3.innerHTML = address2;
tr.append(td3)

let td4 = document.createElement("td")
td4.innerHTML = pin;
tr.append(td4)

let td5 = document.createElement("td")
td5.innerHTML = gender;
tr.append(td5)
let td6 = document.createElement("td")
td6.innerHTML = food;
tr.append(td6)
let td7 = document.createElement("td")
td7.innerHTML = state;
tr.append(td7)
let td8 = document.createElement("td")
td8.innerHTML = country;
tr.append(td8)
}
    
