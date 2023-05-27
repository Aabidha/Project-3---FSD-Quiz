
function generateList() {
    const listData = ['Camel', '7-Days', '24-Hours', '7-Colors', '365-Days']; 
    const list = document.createElement('ul');
  
    listData.forEach(function(itemData) {
      const listItem = document.createElement('li');
      listItem.textContent = itemData;
      list.appendChild(listItem);
    });
  
   
    return list.outerHTML;
  }
  
 
  const generateButton = document.getElementById('generate-button');
  generateButton.addEventListener('click', function() {
    const listContainer = document.getElementById('list-container');
    const listHTML = generateList();
    listContainer.innerHTML = listHTML;
  });
  