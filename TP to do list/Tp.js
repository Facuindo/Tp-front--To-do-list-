// Obtenemos los elementos del DOM
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDesc");

// Evento: cuando se hace click en "Agregar Tarea"
addTaskBtn.addEventListener("click", () => {
  const title = taskTitle.value.trim(); // Guardamos el título
  const desc = taskDesc.value.trim();   // Guardamos la descripción

  // Validamos que tenga título
  if (!title) {
    alert("La tarea necesita un título.");
    return;
  }

  // Creamos la tarea en la lista
  createTask(title, desc);

  // Limpiamos el formulario
  taskTitle.value = "";
  taskDesc.value = "";
});

// Función que crea una tarea nueva
function createTask(title, desc) {
  const li = document.createElement("li");
  li.className = "task";

  // Título de la tarea
  const h3 = document.createElement("h3");
  h3.textContent = title;

  // Descripción de la tarea
  const p = document.createElement("p");
  p.textContent = desc;

  // Botón "Cumplida" → elimina la tarea
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Cumplida";
  doneBtn.className = "done";
  doneBtn.addEventListener("click", () => {
    li.remove();
  });

  // Botón "Borrar" → elimina la tarea
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Borrar";
  deleteBtn.className = "delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Botón "Editar" → permite modificar título y descripción
  const editBtn = document.createElement("button");
  editBtn.textContent = "Editar";
  editBtn.className = "edit";
  editBtn.addEventListener("click", () => {
    const newTitle = prompt("Nuevo título:", h3.textContent);
    const newDesc = prompt("Nueva descripción:", p.textContent);

    if (newTitle) h3.textContent = newTitle;
    if (newDesc !== null) p.textContent = newDesc;
  });

  // Agregamos todo dentro del <li>
  li.appendChild(h3);
  li.appendChild(p);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Finalmente, la tarea se agrega a la lista
  taskList.appendChild(li);
}