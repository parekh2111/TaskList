	// @ts-nocheck
	// Define UI Vars
	const form = document.querySelector('#task-form');
	const tasklist = document.querySelector('.collection');
	const clearBtn = document.querySelector('.clear-task');
	const filter = document.querySelector('#filter');
	const taskInput = document.querySelector('#task');

	// Load all event Listeners
	loadEventListeners();


	// Load all event Listeners

	function loadEventListeners() {
		// add task event
		form.addEventListener('submit', addTask );
		// Remove task event
		tasklist.addEventListener('click',removeTask);
		// Clear task event
		clearBtn.addEventListener('click', clearTasks)

	}
	// Add task

	function addTask(e){
		if(taskInput.value === '') {
	   alert('Add a task');
		}

	// Creat Li element
	const li = document.createElement('li');
	// Add Class
	li.className = 'collection-item';

	// create text node and append to li
	li.appendChild(document.createTextNode(taskInput.value));

	// Create new link element 
	const link = document.createElement('a');

	// Add Class
	link.className = 'delete-item secondary-content';

	// Add icon Html
	link.innerHTML = '<i class = "fa fa-remove"></i>';

	//Append The Link to li

	li.appendChild(link);

	// append li to ul

	tasklist.appendChild(li);

	// Clear Inpiut
	taskInput.value = '';


	e.preventDefault();
}

//Remove Task
function removeTask(e){
	if(e.target.parentElement.classList.contains('delete-item')){
		
		if(confirm('Are you Sure')){
		e.target.parentElement.parentElement.remove();
		}
	}
	}
// Clear all Task

function clearTasks(){
	
 // tasklist.innerHTML = '';		

 while(tasklist.firstChild){
	 tasklist.removeChild(tasklist.firstChild);
 }

}
