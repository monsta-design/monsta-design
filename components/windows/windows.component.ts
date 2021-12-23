import {
  AfterContentInit,
  ChangeDetectorRef,
  Component, ComponentFactoryResolver,
  Directive, Input,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {uuid} from 'monsta-design/core';

export class Page {
  id: string
  title: string
  icon?: string
  component: () => Promise<any>
  module: () => Promise<any>
  breadcrumb?: string[]
}


@Directive({
  selector: 'ns-view-container-ref'
})
export class NSWindowDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
  ) {
  }
}

export declare interface NSWindow {
  onWindowFocus();

  setWindowsComponent(component: NSWindowsComponent);
}

class Task {
  id: string
  zIndex: number
  title: string;
  focusCallback: () => void;
}

class Tasks {
  private list: Task[] = [];
  private map: Map<string, Task> = new Map<string, Task>();

  has(id: string): boolean {
    return this.map.has(id)
  }

  get(id: string): Task {
    return this.map.get(id)
  }

  add(task: Task) {
    this.list.push(task)
    this.map.set(task.id, task)
  }

  remove(id: string) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list.splice(i, 1);
        break;
      }
    }
    this.map.delete(id)
  }

  all(): Task[] {
    return this.list
  }
}

@Component({
  selector: 'ns-windows-view',
  template: `
    <div *ngFor="let task of tasks.all()" [style.display]="task.id === currentTaskId?'block':'none'">
      <ns-view-container-ref></ns-view-container-ref>
    </div>
  `,
  styleUrls: ['./windows.scss']
})
export class NSWindowsViewComponent {
  @ViewChildren(NSWindowDirective) windowRefs!: QueryList<NSWindowDirective>
  tasks: Tasks = new Tasks()
  currentTaskId: string

  constructor(private cd: ChangeDetectorRef) {
  }

  addTask(task: Task) {
    this.tasks.add(task)
    this.cd.detectChanges()
  }

  setCurrentTask(id: string) {
    this.currentTaskId = id
  }
}


@Component({
  selector: 'ns-windows',
  template: `
    <span *ngFor="let task of nsView.tasks.all()" (click)="show(task.id)">
        {{ task.title }}
    </span>
  `,
  styleUrls: ['./windows.scss']
})
export class NSWindowsComponent implements AfterContentInit {

  @Input() nsView: NSWindowsViewComponent;
  // @ViewChildren(NSWindowDirective) windowRefs!: QueryList<NSWindowDirective>;
  // @Input() pages: Page[] = []
  pages: Page[] = []

  constructor(
    private cd: ChangeDetectorRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }


  ngAfterContentInit(): void {

  }

  show(id: string) {
    this.nsView.setCurrentTask(id)
  }

  async open(page: Page) {
    try {
      if (!this.nsView) {
        throw new Error('no window view')
      }
      if (!page.id) {
        throw new Error('no page id')
      }
      if (this.nsView.tasks.has(page.id)) {
        this.show(page.id)
        return
      }
      await this.loadModule(page)
      await this.loadComponent(page)
    } catch (e) {
      console.log(e)
      alert(e)
    }
  }

  close(page: Page) {

  }

  private async loadModule(page: Page) {
    if (!page.module) {
      return
    }
    let module = await page.module()
  }

  private async loadComponent(page: Page) {


    if (!page.component) {
      throw new Error("no component loader")
    }

    let task = new Task()
    task.id = page.id
    task.title = page.title
    this.show(page.id)
    this.nsView.addTask(task)

    let com = await page.component()
    if (typeof com.setWindowsComponent != 'undefined') {
      com.setWindowsComponent(this)
    }
    task.focusCallback = com.onWindowFocus


    // @ts-ignore
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(com);
    this.nsView.windowRefs.last.viewContainerRef.createComponent(componentFactory)

  }
}
