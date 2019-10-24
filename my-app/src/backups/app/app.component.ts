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
  isBlue = false;
  isGray = false;
  isLarge = false;
  show = false;
  title = 'Something Else';
  posts = [
    // tslint:disable-next-line: max-line-length
    { title: 'New Post 1', body: `Ipsum Blaster exterminate R2-D2 jabba, dalek reman xindi mccoy ord mantell naboo speeder bazoolium luke shields grand moff tarkin transporter. Taanab khan gorram maul warpstar jedi mind trick naboo, boomer frak leia ewok a new hope.`, comments: 12 },
    // tslint:disable-next-line: max-line-length
    { title: 'New Post 2', body: `Ewok a new hope jayne, edosian psychic paper FTL reman doctor who tardis starship nerf herder boba fett. Crazy ivan wash tie fighter, exterminate hoth galactica ewok sarlacc. Dagobah bajoran borg, maul psychic paper wyrwulf apollo.`, comments: 8 },
    // tslint:disable-next-line: max-line-length
    { title: 'New Post 3', body: `Shields jar jar bandi krypter bantha jawa dagobah grand moff tarkin edosian y-wing vader bazoolium. Geordi la forge gorram uhura, psychic paper R2-D2 coruscant the ‘verse anakin jedi mind trick jethrik protocol droid vulcan. `, comments: 7 },
    // tslint:disable-next-line: max-line-length
    { title: 'New Post 4', body: `Dalek hypercube dooku sarlacc dantooine jedi mind trick nanogenes ewok edosian sith. Reavers frack gaius jabba spock, R2-D2 mace windu. `, comments: 3 },
  ];
​
​
  classList: ClassList = {
    blue: this.isBlue,
    gray: this.isGray,
    large: this.isLarge
  };
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


