      // Tableau pour stocker les tâches
      let tasks = [];

      // Fonction pour ajouter une tâche
      function addTask() {
      // Récupérer la valeur de l'input
      let taskInput = document.getElementById("taskInput");
      let taskValue = taskInput.value.trim();

      // Ajouter la tâche au tableau
      if (taskValue !== "") {
            tasks.push(taskValue);
            taskInput.value = "";
            renderTaskList();
      }
      }

      // Fonction pour supprimer une tâche
      function deleteTask(index) {
            tasks.splice(index, 1);
            renderTaskList();
      }

      // Fonction pour modifier une tâche
      function editTask(index) {
            let newTaskValue = prompt("Enter new task value", tasks[index]);
            if (newTaskValue !== null) {
            tasks[index] = newTaskValue.trim();
            renderTaskList();
            }
      }

      // Fonction pour afficher la liste des tâches
      function renderTaskList() {
            let taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

            for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
   // Créer un élément de liste et ajouter la tâche
      let listItem = document.createElement("li");
      let taskText = document.createTextNode(task);
      listItem.appendChild(taskText);

      // Créer les boutons modifier et supprimer
      let editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.onclick = function() { editTask(i); };

      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.onclick = function() { deleteTask(i); };

      // Ajouter les boutons à l'élément de liste
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);

      // Ajouter l'élément de liste à la liste des tâches
      taskList.appendChild(listItem);
      }
      }