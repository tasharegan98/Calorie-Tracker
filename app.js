
form = document.querySelector("#calorieForm")
bfastItem = document.querySelector("#bfastItem")
bfastWeight = document.querySelector("#bfastWeight")
bfastCals = document.querySelector("#bfastCals")
table = document.querySelector('#bfastTable');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let bFood = form.elements.bfastItem
  let bCals = form.elements.bfastCals
  let bWeight = form.elements.bfastWeight
  
  addRow()
  sumTotal()

  bFood.value = ""
  bCals.value = ""
  bWeight.value = ""
  
})

function addRow(){

  var row = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var  button = document.createElement('BUTTON')
  button.setAttribute("id","button")
  
  

  td1.innerHTML = document.getElementById('bfastItem').value;
  td2.innerHTML = document.getElementById('bfastCals').value;
  td3.innerHTML = document.getElementById('bfastWeight').value;
  td4.innerHTML = parseInt(document.getElementById('bfastWeight').value) * parseInt(document.getElementById('bfastCals').value);
  button.innerHTML = 'X'

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(button)
  table.children[0].appendChild(row); 
  button.onclick = function (){deleteCurrentRow(row)} 
  
}

function deleteCurrentRow(row)
	{
		table.deleteRow(row.rowIndex);
		for(var i=1; i < table.rows.length; i++)
		{
			sumTotal();
    }		
	}


  function sumTotal()
  {
    var sum = 0
    for(var i = 1; i < table.rows.length-1; i++){
      sum += parseInt(table.rows[i].cells[3].innerHTML)  
    }
    document.querySelector("#calsSum").innerHTML = sum 
  }

