import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'valentine-2022';

  polkovodets_rumyantsev_key = "DEILAOR".split('');

  polkovodets_rumyantsev: any[] = [
    {
      secretKey: "D",
      backgroundClass: "pic1",
      hint: "Many a fascists have been trampled under this war machine"
    },
    {
      secretKey: "E",
      backgroundClass: "pic2",
      hint: "Bring me my red bag with my makeuppee!!!"
    },
    {
      secretKey: "I",
      backgroundClass: "pic3",
      hint: "Kuhu ma lähen esimesena iga päev kui arkan (ei, mitte vannituba)"
    },
    {
      secretKey: "L",
      backgroundClass: "pic4",
      hint: "Last letter of the middle word under two gray flags"
    },
    {
      secretKey: "A",
      backgroundClass: "pic5",
      hint: "Raamat"
    },
    {
      secretKey: "O",
      backgroundClass: "pic6",
      hint: "Nina Inhalaator (pic)"
    },
    {
      secretKey: "R",
      backgroundClass: "",
      hint: "Ask a fortune telling paper"
    }
  ];

  ngOnInit() {
  }

  onCardSolved( config: any) {
    config.solved = true;
  }
}
