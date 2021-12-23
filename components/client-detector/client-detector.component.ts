import {Component, HostListener, OnInit} from '@angular/core';
import {BreakPoints} from 'monsta-design/core'

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
    if (this.width < BreakPoints.sm) {
      this.size = '< sm'
    } else if (this.width >= BreakPoints.sm && this.width < BreakPoints.md) {
      this.size = '= sm'
    } else if (this.width >= BreakPoints.md && this.width < BreakPoints.lg) {
      this.size = '= md'
    } else if (this.width >= BreakPoints.lg && this.width < BreakPoints.xl) {
      this.size = '= lg'
    } else if (this.width >= BreakPoints.xl && this.width < BreakPoints.xxl) {
      this.size = '= xl'
    } else {
      this.size = '> xxl'
    }
  }
}
