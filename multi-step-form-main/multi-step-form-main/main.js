const checkbox = document.querySelectorAll(".checkbox");
const backchange = document.querySelectorAll(".add_ons_items");
checkbox.forEach((checkboxes, index) => {
checkboxes.addEventListener('change', function(){
    if(this.checked){
        backchange[index].style.backgroundColor = 'hsl(231, 100%, 99%)';
        backchange[index].style.borderColor = 'hsl(243, 100%, 62%)';

    }
    else{
        backchange[index].style.backgroundColor = '' ;
        backchange[index].style.borderColor = ''
    }
})
});




    const span1 = document.getElementById("span1");
    const span2 = document.getElementById("span2");
    const yearBonus = document.querySelectorAll(".yearBonus");
    const selections = document.querySelectorAll(".selections-items");
    const price = document.querySelectorAll(".p");
    document.getElementById("toggle").addEventListener("change", function() {
    for(let i = 0; i < yearBonus.length; i++){
    if (this.checked) {
      span2.style.color = "blue";
      span1.style.color = "";
      yearBonus[i].style.visibility= "visible";
      price[0].innerHTML = "$90/yr";
      price[1].innerHTML = "$120/yr";
      price[2].innerHTML = "150/yr";
      selections[i].style.paddingBottom = "10px";
      
    } else {
      span1.style.color = "blue";
      span2.style.color = "";
      yearBonus[i].style.visibility= "";
      price[0].innerHTML = "$9/mo";
      price[1].innerHTML = "$12/mo";
      price[2].innerHTML = "15/mo";
      selections[i].style.paddingBottom = "";
    }
    }
  });
  

// Iterate over each element in the selections NodeList

selections.forEach(function(selection) {
    // Attach click event listener to each individual element
    selection.addEventListener("click", function() {
        // Toggle background color and border color on click
        if (this.style.backgroundColor === "hsl(217, 100%, 97%)") {
            this.style.backgroundColor = ""; // Remove background color
            this.style.borderColor = ""; // Remove border color
        } else {
            this.style.backgroundColor = "hsl(217, 100%, 97%)"; // Change background color to blue
            this.style.borderColor = "hsl(243, 100%, 62%)"; // Change border color to blue
        }
    });
});
const btn_firstPage = document.getElementById("btn_firstPage");
const inp = document.querySelectorAll(".inp");
const required = document.querySelectorAll(".required");
btn_firstPage.addEventListener("click", function(){
    for(let i = 0; i < inp.length; i++){
        if(inp[i].value === ""){
            required[i].style.visibility = "visible";
            inp[i].style.borderColor = "hsl(354, 84%, 57%)";
        }
        else{
            location.href='index2.html';
        }
    }
});



