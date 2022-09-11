import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <form>
      <input type="text" [value]="person_name"/>
      <input type="text" value="{{person_name}}"/>
      <input type="text" bind-value="person_name"/>
      <hr/>
      <input type="button" value="Submit" [disabled]="isDisable"/>
      <input type="button" value="Submit" disabled />
      <input type="button" value="Hidden Button1" hidden />
      <input type="button" value="Hidden Button2" [hidden]="isHidden"/>
      <hr/>

      Title: {{evilTitle}}<br>
      Title: <span [innerHtml]="evilTitle"></span>
  </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MD. Habibur Rahman';
  person_name = "Haidar Ali";
  isDisable = false;
  isHidden = true;
  evilTitle = 'Template <script>alert("Evil never sleep")</script> Syntax';
}
