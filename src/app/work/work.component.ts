import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  works = [{
    id: 1,
    name: "Password Generator",
    image: "../../assets/password_gen.png",
    description: `Tech Stack - HTML, CSS, JavaScript. Passoword Generator with few options with focus on simplicity.`,
    url: "https://codepen.io/Amrit001/pen/zYyGgXP"

  },
  {
    id: 2,
    name: "To-Do List",
    image: "../../assets/todo_list2.png",
    description: `Tech Stack - HTML, CSS, JavaScript. Simple To-do list to add, edit, and delete the daily tasks.`,
    url: "https://codepen.io/Amrit001/pen/RwEPqGp"

  }
  
]

}
