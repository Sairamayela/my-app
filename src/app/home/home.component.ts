// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent  {
//   selectedColor: string = 'red';
  
//   angular.module('plunker', [])
//   .controller('MainCtrl', function ($scope) {
//     $scope.fruits = [
//       {name: 'Apple', color: '#5bb75b'},
//       {name: 'Banana', color: '#08c'},
//       {name: 'Cherry', color: 'yellow'},
//     ];
    
//     $scope.setBgColor = function() {
//       $("#selectedFruit").css("background-color", JSON.parse($scope.selectedFruit).color);
//     }
//   });
//   constructor() { }

  
// }
import { Component } from '@angular/core';

interface Fruit {
  name: string;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedColor: string = 'red';
  fruits: Fruit[] = [
    {name: 'Veg', color: 'green'},
    {name: 'Non-veg', color: 'red'},
  ];

  selectedFruit: Fruit = this.fruits[0];
  setBgColor(): void {
    const selectElement = document.getElementById('selectedFruit') as HTMLSelectElement;
    selectElement.style.backgroundColor = this.selectedFruit.color;
  }
  

  // setBgColor(): void {
  //   const selectedFruit = this.selectedFruit;
  //   const selectElement = document.getElementById('selectedFruit') as HTMLSelectElement;
  //   if (selectedFruit) {
  //     selectElement.style.backgroundColor = selectedFruit.color;
  //   } else {
  //     selectElement.style.backgroundColor = '';
  //   }
  // }
}

