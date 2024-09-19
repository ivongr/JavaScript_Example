function displayChoice(){
    const selectedOption = document.getElementById
    ("fruit-select").value;

    document.getElementById("display").innerHTML = "You selected:" 
    + selectedOption;
}

/*EVENTO ONCHANGE */
function updateModels() {
    var make = document.getElementById('make-select').value;
    var modelSelect = document.getElementById('model-select');
    modelSelect.innerHTML = '';  // Clear existing options
  
    var carModels = {
      Toyota: ['Corolla', 'Camry', 'Prius'],
      Ford: ['Fiesta', 'Focus', 'Mustang'],
      Honda: ['Civic', 'Accord', 'Fit']
    };
  
    if (make in carModels) {
      carModels[make].forEach(function(model) {
        var option = new Option(model, model);
        modelSelect.add(option);
      });
    }
  }
