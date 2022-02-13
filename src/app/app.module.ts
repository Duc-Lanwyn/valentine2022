import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 

import { Directive, ElementRef, OnInit } from "@angular/core";
import { AnimateDirective } from './directives';

@Directive({
  selector: "[autoFocus]"
})
export class AutoFocusDirective implements OnInit {
  private inputElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.inputElement = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.inputElement.focus();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AutoFocusDirective,
    AnimateDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// gh-pages deployment:

/**
 * ng build --prod --base-href "https://duc-lanwyn.github.io/valentine2022/"
 * 
 * npx angular-cli-ghpages --dir="dist/valentine-2022"
 */