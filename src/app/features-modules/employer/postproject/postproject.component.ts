import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './docs'

@Component({
  selector: 'app-postproject',
  templateUrl: './postproject.component.html',
  styleUrls: ['./postproject.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostprojectComponent implements OnInit,OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public skillsArray: any = [];
  public isChecked = true;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readioSelected:any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  showcontent:any;
  editordoc = jsonDoc;
  selected = 'select';
  selected1 = 'select';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor: Editor | any;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  

  ngOnInit(): void {
    this.editor = new Editor();
  }
  hide(){
    this.showcontent=this.readioSelected;
  }
  public addSkills():void {
    this.skillsArray.push(1)
  }
  public deleteSkills(index: number):void {
    this.skillsArray.splice(index, 1)
  }
  ngOnDestroy(): void {
    if (this.editor){
      this.editor.destroy();

    }
  }
  tag = ['Valve profit'];
}
