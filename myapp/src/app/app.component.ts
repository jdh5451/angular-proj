import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  // templateUrl: './app.component.html',
  template: `

  <app-products></app-products>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
  div{
    background-color:#def
  }
  `]
})
export class AppComponent {
  title = 'my-app'
  active = false
  name = 'John'
  expression = 'Test'

  onDeletePost(e:string) {
    console.log('delete post event fired' + e)
  }

  getValue(){
    return 3
  }
  
  textChange(e:any){
    this.print('some text')
    console.log('done editing...'+e.target.value)
  }

  print(txt:any){ 
    console.log(txt)
  }

  submit(){
    console.log('submitting form')
  }

  changeNameHandler(e:any){
    console.log(e)
   this.name = e.target.value
  }

  sayHello(){
    return 'Hi there'
  }
}
