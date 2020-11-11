import { findLast } from '@angular/compiler/src/directive_resolver';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreengrocerApp';
  displayArrBasket = [];
  indexBasket = 0;
  upButtonDisable = true;
  downButtonDisable = true;

  items = []; //sepette gosterilen meyvelerin bulundugu array
  itemsDisplay = [];
  sumPrice = 0;

  fruits = [
    {
      name: 'apple',
      price: 5,
      img: "assets/fruits/apple.gif",
      turkishName: 'Elma',
      count: 1
    },
    {
      name: 'apricot',
      price: 8,
      img: "assets/fruits/apricot.png",
      turkishName: 'Kayısı',
      count: 1
    },
    {
      name: 'banana',
      price: 10,
      img: "assets/fruits/banana.gif",
      turkishName: 'Muz',
      count: 1
    },
    {
      name: 'cherry',
      price: 15,
      img: "assets/fruits/cherry.jpg",
      turkishName: 'Kiraz',
      count: 1

    },
    {
      name: 'grape',
      price: 7,
      img: "assets/fruits/grape.png",
      turkishName: 'Üzüm',
      count: 1
    },
    {
      name: 'kiwi',
      price: 10,
      img: "assets/fruits/kiwi.png",
      turkishName: 'Kivi',
      count: 1
    },
    {
      name: 'lemon',
      price: 5,
      img: "assets/fruits/lemon.jpg",
      turkishName: 'Limon',
      count: 1
    },
    {
      name: 'orange',
      price: 4,
      img: "assets/fruits/orange.jpg",
      turkishName: 'Portakal',
      count: 1
    },
    {
      name: 'pineapple',
      price: 12,
      img: "assets/fruits/pineapple.png",
      turkishName: 'Ananas',
      count: 1
    },
    {
      name: 'pomegranate',
      price: 6,
      img: "assets/fruits/pomegranate.jpg",
      turkishName: 'Nar',
      count: 1
    },
    {
      name: 'strawberry',
      price: 8,
      img: "assets/fruits/strawberry.png",
      turkishName: 'Çilek',
      count: 1
    },
    {
      name: 'watermelon',
      price: 8,
      img: "assets/fruits/watermelon.png",
      turkishName: 'Karpuz',
      count: 1
    },

  ]

  //this.itemsDisplay=this.items.slice(0,6);

  addNewItem(value) {

    let finded = this.items.find((findedFruit) => {
      return findedFruit.name === value.name;
    })

    // console.log(bulunan.count++);
    if (!finded) {
      this.items.push(value);
      if (this.displayArrBasket.length < 6) {
        let displayFinded = this.displayArrBasket.find((findedFruit) => {
          return findedFruit.name === value.name;
        })
        if (displayFinded) {
          return;
        } else {
          this.displayArrBasket.push(value);
        }
      }
    } else {
      finded.count++;
    }
    this.sumPrice = this.sumPrice + value.price;

    // items 6 yı geçmeden down u aktiflestirme!
    if(this.items.length>6){
      this.downButtonDisable=false;
    }

  }

  upclick() {

      this.displayArrBasket = [];

      for(let i=this.indexBasket-1;i<this.indexBasket+5;i++){
        if(this.items[i]) {
          this.displayArrBasket.push(this.items[i]);
        }
      }
      console.log(this.indexBasket);
      this.indexBasket = this.indexBasket-1;
      if(this.indexBasket==0){
        this.upButtonDisable = true;
      }
    this.downButtonDisable = false;
    console.log(this.indexBasket);
  }

  downclick() {

    this.displayArrBasket = [];
    this.indexBasket = this.indexBasket + 1;
    for (let j = this.indexBasket; j < this.indexBasket + 6; j++) {
      if(this.items[j]){
        this.displayArrBasket.push(this.items[j]);
      }
    }

    if (this.indexBasket >= this.items.length-6) {
      this.downButtonDisable = true;
    }

    this.upButtonDisable = false;


  }
}
