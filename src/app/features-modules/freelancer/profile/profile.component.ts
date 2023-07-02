import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {

 
  scroll(el: HTMLElement) {
    console.log('eeeeeeeeeeeeeeeeeeeee');
    
    el.scrollIntoView();
}

images = [
  {
    path: 'assets/img/project-8.jpg',
    name:'Education',
    role:'Web design'
  },
  {
    path: 'assets/img/project-9.jpg',
    name:'PHOTOSHOOT',
    role:'Web design'
  },
  {
    path: 'assets/img/project-10.jpg',
    name:'ELECTRICAL',
    role:'Web design'
  },
  {
    path: 'assets/img/project-11.jpg',
    name:'PROJECT NAME',
    role:'Web design'
  },
]
}
