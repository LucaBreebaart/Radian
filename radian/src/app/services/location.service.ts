import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private selectedLocation: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.selectedLocation = sessionStorage.getItem('selectedLocation') || '';
    }
  }

  setSelectedLocation(location: string) {
    this.selectedLocation = location;
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('selectedLocation', location);
    }
  }

  getSelectedLocation(): string {
    return this.selectedLocation;
  } 
}
