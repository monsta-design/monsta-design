import {Component, HostListener, OnInit} from '@angular/core';
import {MediaBreakPoints} from '../layout/utils'

@Component({
  selector: 'ns-client-detector',
  templateUrl: './client-detector.component.html',
  styleUrls: ['./client-detector.component.scss']
})
export class NSClientDetectorComponent implements OnInit {

  width: number = window.innerWidth;
  size: string;

  ngOnInit() {
    this.calcMediaSize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth
    this.calcMediaSize()
  }

  calcMediaSize() {
    if (this.width < MediaBreakPoints.sm) {
      this.size = '< sm'
    } else if (this.width >= MediaBreakPoints.sm && this.width < MediaBreakPoints.md) {
      this.size = '= sm'
    } else if (this.width >= MediaBreakPoints.md && this.width < MediaBreakPoints.lg) {
      this.size = '= md'
    } else if (this.width >= MediaBreakPoints.lg && this.width < MediaBreakPoints.xl) {
      this.size = '= lg'
    } else if (this.width >= MediaBreakPoints.xl && this.width < MediaBreakPoints.xxl) {
      this.size = '= xl'
    } else {
      this.size = '> xxl'
    }
  }
}
