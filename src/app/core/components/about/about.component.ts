import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('elementAppearAnimation', [
      state('disappear', style({
        opacity: 0.0,
      })),
      state('pageAppear', style({
        opacity: 1,
      })),
      transition('disappear => pageAppear', [
        animate('0.7s')
      ]),
    ]),
    trigger('translateYNegativeAnimation', [
      state('translated', style({
        transform: 'translateY(-50px)',
      })),
      state('notTranslated', style({
        transform: 'translateX(0px)',
      })),
      transition('translated => notTranslated', [
        animate('0.7s')
      ]),
    ]),
    trigger('mouseOverAnimation', [
      state('mouseOver', style({
        transform: 'scale(1.2)',
      })),
      state('mouseLeave', style({
        transform: 'scale(1)',
      })),
      transition('* => *', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {

  pageLoaded = false;
  elementToAnimates = [
    {
      elementLoaded: false,
      elementDelay: 400,
    },
    {
      elementLoaded: false,
      elementDelay: 700,
    },
    {
      elementLoaded: false,
      elementDelay: 800,
    },
    {
      elementLoaded: false,
      elementDelay: 1300,
    },
    {
      elementLoaded: false,
      elementDelay: 1500,
    },
    {
      elementLoaded: false,
      elementDelay: 2300,
    },
    {
      elementLoaded: false,
      elementDelay: 2600,
    },
    {
      elementLoaded: false,
      elementDelay: 3200,
    },
    {
      elementLoaded: false,
      elementDelay: 3500,
    },
    {
      elementLoaded: false,
      elementDelay: 3800,
    }
  ];
  mouseOverAnimation = 'none';

  constructor() {
  }

  ngOnInit(): void {
    this.starterAnimation();
  }

  starterAnimation(): void {
    setTimeout(() => {
      this.pageLoaded = true;
      this.elementToAnimates.forEach(elementToAnimate => {
        setTimeout(() => {
          elementToAnimate.elementLoaded = true;
        }, elementToAnimate.elementDelay);
      });
    }, 100);
  }

  mouseOver($mouseevent: MouseEvent): void {
    const element = $mouseevent.target as HTMLElement;
    this.mouseOverAnimation = element.id;
  }

  mouseLeave(): void {
    this.mouseOverAnimation = 'none';
  }

  getAppearAnimation(id: number): string {
    return this.elementToAnimates[id].elementLoaded ? 'pageAppear' : 'disappear';
  }
}
