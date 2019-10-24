import { Component } from '@angular/core';
​
interface ClassList {
  blue: boolean;
  gray: boolean;
  large: boolean;
}
​
@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
​
export class AppComponent {
  isBlue: boolean = false;
  isGray: boolean = false;
  isLarge: boolean = false;
  show: boolean = false;
  title = 'Something Else';
  posts = [
    { title: 'New Post 0', body: `lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, comments: 12 },
    { title: 'New Post 1', body: `lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, comments: 8 },
    { title: 'New Post 2', body: `lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, comments: 7 },
    { title: 'New Post 3', body: `lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, comments: 3 },
  ];
​
​
  classList: ClassList = {
    blue: this.isBlue,
    gray: this.isGray,
    large: this.isLarge
  }
​
  changeColor() {
    this.classList.blue = !this.classList.blue;
  }
​
  changeBackground() {
​
  }
​
  changeFontSize() {
​
  }

  onNewTitle(event, i) { // update the post array
    this.posts[i].title = event;
  }
​
}

// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   posts = [
//     { title: 'new post 0', body: 'lorem ipsum gjnrg erg e rgegr', comments: 65},
//     { title: 'new post 1', body: 'lorem ipsum gjnrg erg e rgegr', comments: 35},
//     { title: 'new post 2', body: 'lorem ipsum gjnrg erg e rgegr', comments: 5},
//     { title: 'new post 3', body: 'lorem ipsum gjnrg erg e rgegr', comments: 65}
//   ];

// }


