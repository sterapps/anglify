import { reflectComponentType } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should have the app-root selector used in index.html', () => {
    // Without an explicit selector the compiler falls back to 'ng-component',
    // which makes bootstrapApplication fail with NG05104 at runtime.
    expect(reflectComponentType(AppComponent)?.selector).toBe('app-root');
  });
});
