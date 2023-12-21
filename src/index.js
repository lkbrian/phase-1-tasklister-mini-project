document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //event listener to aquire the value and clear the input area
  let form = document.querySelector("form");
  form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    addTodos(Event.target.newtaskdescription.value);
    form.reset();
  });

  //function to add the to do into the task list
  function addTodos(item) {
    //i adding the todo item
    let listItem = document.createElement("li");
    listItem.textContent = item;
    document.querySelector("ul").appendChild(listItem);
    // adding the delet button
    let deletButton = document.createElement("button");
    deletButton.textContent = "X";
    listItem.appendChild(deletButton);
    deletButton.addEventListener('click',delet)
  }
  //delete function on the button
  const delet = (event) => event.target.parentNode.remove();
});
