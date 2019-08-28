import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

//check animations
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

  //check animations
  animations: [slideInAnimation]
})
export class SidebarComponent implements OnInit {
  fillerNav = [
    {name:" Home", route:'dashboard', icon:"home"},
    {name:" Settings", route:"settings", icon:"settings"},
    {name:" Logout", route:'login', icon:"exit_to_app"}
  ];

  extraNav = [
    {name:" Help", route:"help", icon:"help"},
    {name:" About us" , route:'about_us', icon:"info"},
  ];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(){}

  //check animations
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
