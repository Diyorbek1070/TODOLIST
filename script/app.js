const todolistContainer = document.querySelector("#todolist-container");
const todolistForm = document.querySelector("#todolist-form")
const todolistFormInput = document.querySelector("#todolist-adder-input");
const todolistCollection = document.querySelector("#todolist-collection");
const todolistDeleteAll = document.querySelector("#delete-all");
const todolistDeleteAnsrew = document.querySelector("#delete-answer");
const todolistDeleteBtn1 = document.querySelector("#gelete-btn1");
const todolistDeleteBtn2 = document.querySelector("#gelete-btn2");
const todolistHeading = document.querySelector("#container-heading");
const todolistInputDelete = document.querySelector("#input-delete");
todolistForm.addEventListener("submit", addTodo)

function addTodo(e){
  e.preventDefault();
  const inputValue = todolistFormInput.value;
  if(inputValue.trim().length >= 3){
    const todolistLi = document.createElement("li");
    todolistLi.className = "collection__item";
    const todolistText = document.createElement("p");
    todolistText.className = "collection__item__text"
    todolistText.innerText = inputValue;
    const todolistBox = document.createElement("div");
    todolistBox.className = "collection__item__box"
    const todolistComplate = document.createElement("button");
    todolistComplate.className = "collection__item__complate"
    todolistComplate.innerText = "Complete"
    const todolistEdit = document.createElement("button");
    todolistEdit.innerText = "Edit"
    todolistEdit.className = "collection__item__edit"
    const todolistTime = document.createElement("button");
    todolistTime.innerText = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
    todolistTime.className = "collection__item__time"
    const todolistDelate = document.createElement("button");
    todolistDelate.innerText = "Delete"
    todolistDelate.className = "collection__item__delate"
    todolistHeading.style.display = "none"
    todolistLi.appendChild(todolistText);
    todolistLi.appendChild(todolistBox);
    todolistBox.appendChild(todolistComplate);
    todolistBox.appendChild(todolistEdit);
    todolistBox.appendChild(todolistTime);
    todolistBox.appendChild(todolistDelate);
    todolistCollection.appendChild(todolistLi);
    todolistFormInput.value = '';
    console.log(`${new Date().getHours()} : ${new Date().getMinutes()}`)
    todolistDelate.addEventListener("click",(e) =>{
       const deletePage = confirm("You agree to delete this page?")
       if(deletePage){
        todolistLi.style.display = "none"
       }
       else{
        todolistLi.style.display = "block"
       }
    })
  }
  else{
    todolistHeading.style.display = "block"
  }
  
}

todolistInputDelete.addEventListener("click",()=>{
  todolistFormInput.value = '';
})

todolistDeleteAll.addEventListener("click", (e) => {
     e.preventDefault();
     if(todolistCollection.firstChild){
      todolistDeleteAnsrew.style.display = "block"
      todolistContainer.style.display = "none"
      todolistDeleteBtn1.addEventListener("click",deleteYes);
      todolistDeleteBtn2.addEventListener("click",deleteNo);
     }   
})
function deleteYes(){
  todolistCollection.innerHTML = '';
  todolistDeleteAnsrew.style.display = "none";
  todolistContainer.style.display = "block"
  todolistHeading.style.display = "none"
  todolistFormInput.value = '';
}
function deleteNo(){
  todolistDeleteAnsrew.style.display = "none";
  todolistContainer.style.display = "block"
}


