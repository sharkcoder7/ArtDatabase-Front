import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      var elem1 = document.getElementById("animation1");
      elem1.style.position = "absolute";

      var elem2 = document.getElementById("animation2");
      elem2.style.position = "absolute";

      var elem3 = document.getElementById("animation3");
      elem3.style.position = "absolute";

      var elem4 = document.getElementById("animation4");
      elem4.style.position = "absolute";

      var elem5 = document.getElementById("animation5");
      elem5.style.position = "absolute";

      var elem6 = document.getElementById("animation6");
      elem6.style.position = "absolute";

      var elem7 = document.getElementById("animation7");
      elem7.style.position = "absolute";

      var elem8 = document.getElementById("animation8");
      elem8.style.position = "absolute";

      var elem9 = document.getElementById("animation9");
      elem9.style.position = "absolute";

      var elem10 = document.getElementById("animation10");
      elem10.style.position = "absolute";

      var elem11 = document.getElementById("animation11");
      elem11.style.position = "absolute";


      var pos = 0;
      var posV = 0;
      var directionHorizontal = true;
      var directionVertical = true;

      var id1 = setInterval(frame, 200, elem1, -20, -150);
      var id2 = setInterval(frame, 200, elem2, 250, -150);
      var id3 = setInterval(frame, 200, elem3, 200, 120);
      var id4 = setInterval(frame, 200, elem4, 150, 400);
      var id5 = setInterval(frame, 200, elem5, 400, 0);
      var id6 = setInterval(frame, 200, elem6, 30, 0);
      var id7 = setInterval(frame, 200, elem7, 260, 300);
      var id8 = setInterval(frame, 200, elem8, 0, 340);
      var id9 = setInterval(frame, 200, elem9, 0, -150);
      var id10 = setInterval(frame, 200, elem10, 120, -100);
      var id11 = setInterval(frame, 200, elem11, 0, 90);






      function frame(el1, paddingX, paddingY ) {
          if (pos > 20)
            directionHorizontal = false;

          if(pos == 0)
            directionHorizontal = true;

          if(posV > 5)
            directionVertical = false;

          if(posV == 0)
            directionVertical = true;

          directionHorizontal ? pos++: pos--;
          directionVertical ? posV++: posV--;

          el1.style.top = paddingY + posV + 'px';
          el1.style.left = paddingX + pos + 'px';
          }




        }
  }



