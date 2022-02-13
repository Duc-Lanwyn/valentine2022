import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { AnimateDirective } from './directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'valentine-2022';

  @ViewChildren(AnimateDirective) items?:QueryList<AnimateDirective>

  polkovodets_rumyantsev: any[] = [
    {
      secretKey: "D",
      backgroundClass: "pic1",
      hint: "Many a fascists have been trampled under this war machine",
      order: 5
    },
    {
      secretKey: "E",
      backgroundClass: "pic2",
      videoHint: "assets/makeupbag.mp4",
      order: 3
    },
    {
      secretKey: "I",
      backgroundClass: "pic3",
      hint: "Kuhu ma lähen esimesena iga päev kui arkan (ei, mitte vannituba)",
      order: 4
    },
    {
      secretKey: "L",
      backgroundClass: "pic4",
      hint: "Last letter of the middle word under two gray flags",
      order: 0
    },
    {
      secretKey: "A",
      backgroundClass: "pic5",
      hint: "Il tuo viaggio verso il libro segreto inizia a Milano",
      pictureHint: "assets/milan.png",
      order: 6
    },
    {
      secretKey: "O",
      backgroundClass: "pic6",
      //hint: "Nina Inhalaator (pic)",
      videoHint: "assets/ninaInhalaator.mp4",
      order: 1
    },
    {
      secretKey: "R",
      backgroundClass: "",
      hint: "Ask a fortune telling paper",
      order: 2
    }
  ];

  solved: boolean = false;

  showSolution: boolean = false;

  ngOnInit() {
  }

  espressoPetroleum() {
    this.polkovodets_rumyantsev = this.polkovodets_rumyantsev.sort((a,b)=>a.order-b.order).map(x=>x);

    (this.items as QueryList<AnimateDirective>).forEach((item:AnimateDirective)=>item.animateGo())

    setTimeout( () => {
      this.showSolution = true;
    }, 2000);
  }

  onCardSolved( config: any) {
    config.solved = true;

    if ( this.isAllSolved() ) {
      console.log("ALL SOLVED!")
      this.solved = true;
      this.espressoPetroleum();
    }
  }

  isAllSolved() {
    return this.polkovodets_rumyantsev.every( (config: any) => {
      return config.solved;
    } );
  }
}
