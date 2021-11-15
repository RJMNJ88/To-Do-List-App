// MY JQUERY CODE:

function newItem() {

  //Adding a new item to the list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if(inputValue === '') {
    alert('You must enter a To-Do-List item !');
  }else {
    $('#list').append(li);
  }

  //Crossing out an item:
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike')
  });

  //Adding a delete button:
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  function deleteListItem() {
    li.addClass('delete');
  }

  //Make the list items sortable:
  $('#list').sortable();

}


/* MY JAVASCRIPT CODE:

function newItem() {

  //Add a new item to the list of items:
  let li = document.createElement('li');
  let inputValue = document.getElementById('input').value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);

  if(inputValue === '') {
    alert('You must enter a To-Do-List item !');
  }else {
    let list = document.querySelector('#list');
    list.appendChild(li);
  }

  //Crossing out an item from a lsit of items:
  function crossOut() {
    li.classList.toggle('strike');
  }

  li.addEventListener('dblclick', crossOut);

  //Adding the delete button "X":
  let crossOutButton = document.createElement('crossOutButton');
  crossOutButton.appendChild(document.createTextNode('X'));
  li.appendChild(crossOutButton);
  crossOutButton.addEventListener('click', deleteListItem);

  //Adding class 'delete' (display:none) from CSS:
  function deleteListItem() {
    li.classList.add('delete');
  }

  //Reordering the list items:
  $('#list').sortable();

};
*/
    // // jQuery Code

    // //1. Adding a new item to the list:
    
    //   let li = $('<li></li>');
    //   let inputValue = $('#input').val();
    //   li.append(inputValue);
    
    //   if (inputValue === '') {
    //     alert("You must write something!");
    //   } else {
    //     $('#list').append(li);
    //   }

    // //2. Crossing an item out:

    //   function crossOut() {
    //         li.toggleClass("strike");
    //     }
    
    //     li.on("dblclick", function crossOut() {
    //         li.toggleClass("strike");
    //     });

    // //3. Adding a delete button

    //   let crossOutButton = $('<crossOutButton></crossOutButton>');
    //   crossOutButton.append(document.createTextNode('X'));
    //   li.append(crossOutButton);
    
    // //   crossOutButton.on("click", deleteListItem);
    // //   function deleteListItem(){
    // // 		li.addClass("delete")
    // // 	}
    //    $('#list').sortable();
    // */
    