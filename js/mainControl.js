console.log("miau");


// document.getElementById("container").innerText = "va šitą tekstą parašė JavaScriptas";
// document.getElementById("container").innerHTML = "<h1>hai hai hai</h1>";

let waters = ["sea", "lake", "river", "pond", "puddle"];
document.getElementsByClassName("row")[0].innerHTML = '';
function myFunction() {
    if(document.getElementsByClassName("toggle")[0].classList.contains("green")){
        document.getElementsByClassName("toggle")[0].classList.remove("green");
        document.getElementsByClassName("toggle")[0].classList.add("red");
        
        let HTML = "";
        for (let i = 0; i < waters.length; i++) {
            HTML +=
            `
            <div class="col border">
                <div class="row">
                    <h1>Vandens kūnas</h1>
                    <h2>` + waters[i] + `</h2>
                </div>
            </div>
            `;
        }
         document.getElementsByClassName("row")[0].innerHTML = HTML;
    }else{
        document.getElementsByClassName("toggle")[0].classList.remove("red");
        document.getElementsByClassName("toggle")[0].classList.add("green");  
        document.getElementsByClassName("row")[0].innerHTML = "";
    }
   
    
}

let smt = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
};
console.log(smt['employees']);
console.log(smt.employees[0].firstName);