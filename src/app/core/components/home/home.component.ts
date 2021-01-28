import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
  ],
})
export class HomeComponent implements OnInit {

  pageLoaded = false;
  elementToAnimates = [
    {
      elementLoaded: false,
      elementDelay: 400,
    },
    {
      elementLoaded: false,
      elementDelay: 600,
    },
    {
      elementLoaded: false,
      elementDelay: 700,
    },
    {
      elementLoaded: false,
      elementDelay: 900,
    },
    {
      elementLoaded: false,
      elementDelay: 1100,
    },
    {
      elementLoaded: false,
      elementDelay: 1200,
    },
    {
      elementLoaded: false,
      elementDelay: 1400,
    },
    {
      elementLoaded: false,
      elementDelay: 1600,
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
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

  getStartedButtonClicked(): void {
    this.router.navigate(['/characters'], {relativeTo: this.route});
  }

  getAppearAnimation(id: number): string {
    return this.elementToAnimates[id].elementLoaded ? 'pageAppear' : 'disappear';
  }
}
