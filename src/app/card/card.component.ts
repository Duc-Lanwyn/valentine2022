import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  mode: "hint" | "solution" = "hint";

  solved: boolean = false;

  @Input() 
  secretKey: string = "";
  
  @Input()
  customBackgroundClass: string = "";

  @Input()
  hint: string = "";

  @Input()
  videoHint: string = "";

  @Output() onSolved = new EventEmitter<boolean>();
  
  showVideoHint: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.solved = true;
      this.onSolved.emit(true);
    }, 1000)
  }

  toggleMode() {
    this.mode = this.mode === "hint" ? "solution" : "hint";
  }

  onSolutionInputClick( event: MouseEvent ) {
    event.preventDefault();
    event.stopPropagation();
  }

  onSolutionInput(event: KeyboardEvent) {
    if ( (event.target as HTMLInputElement).value.toUpperCase() === this.secretKey ) {
      this.solved = true;
      this.onSolved.emit(true);
    }
  }

}
