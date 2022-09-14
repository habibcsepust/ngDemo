import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <form>
      <!-- Property Binding -->
      <input type="text" [value]="person_name"/>
      <input type="text" value="{{person_name}}"/>
      <input type="text" bind-value="person_name"/>
      <hr/>
      <input type="button" value="Submit" [disabled]="isDisable"/>
      <input type="button" value="Submit" disabled />
      <input type="button" value="Hidden Button1"/>
      <input type="button" value="Hidden Button2" hidden />
      <input type="button" value="Hidden Button3" [hidden]="isHidden"/>
      <!-- End -->
      <hr/>
      Title: {{evilTitle}}<br>
      Title: <span [innerHtml]="evilTitle"></span>
      <hr/>

      <input type="submit" (click)="onClick()" value="Hit me.." />
      <button (click)="onClick()">Clcik from button</button>
      <button on-click="onClick()">Clcik me</button>
      <hr/>
      <img class="images" src="images/img.png" alt="Habibur Rahman image"/>
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

  onClick(){
    console.log("Clicked Successfully..!");
    alert("Clicked");
  }
}
