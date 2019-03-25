import { Component,
   OnInit,
   Input,
   ViewEncapsulation,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
      OnDestroy,
      ViewChild,
      ElementRef,
      ContentChild
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
 OnInit,
  OnChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy

    {
  @Input('srvElement') element: {type: string, name: string, content: string;};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph')  paragraph: ElementRef;
  constructor() {
console.log('constructor called!')
  }
ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges called')
}


  ngOnInit() {
    console.log('ngOnIt called');
    console.log('this.header.nativeElement.textContent');

  }

  ngDoCheck() {
    console.log('ngdocheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfter ContentInit called!')
  }

ngAfterContentChecked() {
    console.log('ngAfter Contentcheckedt called!')
}

ngAfterViewInit() {
  console.log('ngAfter ContentInit called!')
}

ngAfterViewChecked() {
  console.log('ngAfter Contentcheckedt called!')
}
ngOnDestroy(){
    console.log('ngOnDestry called!')
}

}
