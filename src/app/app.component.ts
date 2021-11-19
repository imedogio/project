import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title ="this is title";
  public imgSRC ='../assets/img.jpg'
  public description = 'aq aris agwera'
  
  
  changeIMG(image:any){
    this.imgSRC = '../assets/img-2.jpg'
    image.style.animation = 'rotation 5s infinite linear'
    image.style.marginBottom = '100px'    
  }

  changeIMGimedo(image:any){
    image.style.animation = 'none'
    image.style.marginBottom = 0
   
    setTimeout(()=>{
      alert('good luck')
    }, 1000)

    

  }





}
