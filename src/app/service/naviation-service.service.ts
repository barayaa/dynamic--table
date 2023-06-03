import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaviationServiceService {

 


  disableBrowserBackButton(): void {
    history.pushState('', '', location.href);
    window.onpopstate = () => {
      history.go(1);
    };
  
    window.history.pushState(null, '', window.location.href);
    window.onbeforeunload = () => {
      window.history.pushState(null, '', window.location.href);
    };

  }
  
  
}
