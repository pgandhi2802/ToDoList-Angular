import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent{
	@Input() taskSubject:string;
	@Input() taskDescription:string;
	toDoTasksList:ToDoTask[]=[];
	toDoCompletedTasksList:ToDoTask[]=[];
	updateFlag:boolean = false;
	taskId:number;
	addTask(){
		if (this.updateFlag===true){
			this.updateTask();
		}
		else{
			let newToDoTask:ToDoTask = {id:this.toDoTasksList.length,taskSubject:this.taskSubject,taskDescription:this.taskDescription}
			this.toDoTasksList.push(newToDoTask);
		}
		
	}
	completeTask(idValue){
		let taskObject:ToDoTask = this.toDoTasksList[idValue];
		this.toDoTasksList.splice(idValue, 1);
		this.toDoCompletedTasksList.push(taskObject);
	}
	removeTask(idValue){
		this.toDoTasksList.splice(idValue, 1);
	}
	clearCompletedTask(){
		this.toDoCompletedTasksList.splice(0);
	}
	readyToEditTask(idValue){
		this.taskId=idValue;
		this.updateFlag=true;
		this.taskSubject=this.toDoTasksList[idValue].taskSubject;
		this.taskDescription=this.toDoTasksList[idValue].taskDescription;
	}
	updateTask(){
		this.updateFlag=false;
		let newToDoTask:ToDoTask={id:this.toDoTasksList[this.taskId].id,taskSubject:this.taskSubject,taskDescription:this.taskDescription};
		this.toDoTasksList[this.taskId]=newToDoTask;
	}	
}

class ToDoTask{
	id:number;
	taskSubject:string;
	taskDescription:string;
}