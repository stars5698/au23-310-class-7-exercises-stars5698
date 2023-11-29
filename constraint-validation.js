// Donna Quach, JavaScript 310B, Autumn 2023
// Class 7 Exercises 

// TODO
const selectElement = document.getElementById("contact-kind");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  if(event.target.value === 'choose')
  {
    alert('Please choose contact method!');
  }
  else
  {
    alert(`You chose ${event.target.value}`);
  }
});

const handleSelect = (selectElement) => {
  const selectedValue = selectElement.value; 

  if(selectedValue == "business") {
    
  }
}