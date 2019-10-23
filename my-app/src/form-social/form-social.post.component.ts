// tslint:disable-next-line: max-line-length
import { Component, Input, Output, EventEmitter } from '@angular/core'; // Output and EventEmitter are needed when data passed from child to parent
@Component({
  selector: 'form-social',
  templateUrl: './form-social.component.html'
})

export class FormSocialComponent {
  @Input() title: string; // 3 properties coming from the parent's component
  @Input() comments: number;
  @Input() body: string;
  // tslint:disable-next-line: max-line-length
  @Output() newTitle = new EventEmitter<string>(); // an event is emitted, similar to a click event. the "<string>" is there becasue it can only accept strings
  editing = false;

  editTitle() { // this method sets the editing to true. use value of this property to determine what is shown. see the posts.html
    this.editing = true;
  }

  saveTitle() {
    this.newTitle.emit(this.title); // this will pbe passed to the parrent, app.
    this.editing = false; // if editing is false, then the save
  }
}
