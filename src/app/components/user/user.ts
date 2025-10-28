import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit, AfterViewInit, OnDestroy {
  // Execute After Component Initialize.
  ngOnInit(): void {
    console.log('Run ngOnInit! - LifeCycle!');
    // api call
    // subscription
  }

  // Execute After All Component/View Initialize
  ngAfterViewInit(): void {
    console.log('Run ngAfterViewInit! - LifeCycle!');
  }

  // Execute when component destroy, i meant when redirect one page to another page.
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
