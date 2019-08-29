import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SimpleState } from '../../storage/redux/simple.interface';

//check animations
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

  //check animations
  animations: [slideInAnimation]
})
export class SidebarComponent implements OnInit {
  message$: Observable<string>;
  user;

  fillerNav = [
    { name:" Home", route:"dashboard", icon:"home" },
    { name:" Settings", route:"settings", icon:"settings" },
    { name:" Logout", route:"login", icon:"exit_to_app" }
  ];

  extraNav = [
    { name:" Help", route:"help", icon:"help" },
    { name:" About us", route:"about", icon:"info" },
  ];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
      private storageService: StorageService, 
      private storageSimpleState: Store<SimpleState>) {
        
    this.storageSimpleState.subscribe(() => {
      this.message$ = this.storageSimpleState.select('message');
    });

    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(){
    this.user = this.storageService.getUser();
  }

  //check animations
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
