import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title: string;
  public titleSub$: Subscription;

  constructor( private router: Router,
               private route: ActivatedRoute) {

      this.titleSub$ = this.getDataRoute()
                          .subscribe( ({ title }) => {
                          this.title = title;
                          document.title = `Nebula Ai - ${ title }`;
                        });

}
  ngOnDestroy(): void {
   this.titleSub$.unsubscribe();
  }

   getDataRoute(){
    return this.router.events
    .pipe(
      filter ( event => event instanceof ActivationEnd ),
      filter ( (event: ActivationEnd ) => event.snapshot.firstChild == null ),
      map ( (event: ActivationEnd ) => event.snapshot.data ),

    )

   }

}
