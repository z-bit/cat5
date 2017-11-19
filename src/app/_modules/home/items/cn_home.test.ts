import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from './cn_home.component';

// import { StoreModule, Store, combineReducers } from '@ngrx/store';
// import * as Auth from '../actions/auth';
// import * as fromAuth from '../reducers';


describe('AppComponent (app-root)', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let instance: HomeComponent;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    
    fixture = TestBed.createComponent(HomeComponent);
    instance = fixture.componentInstance;
  });
  
  it('should compile', () => {
    fixture.detectChanges();
    
    /**
     * The login form is a presentational component, as it
     * only derives its state from inputs and communicates
     * externally through outputs. We can use snapshot
     * tests to validate the presentation state of this component
     * by changing its inputs and snapshotting the generated
     * HTML.
     *
     * We can also use this as a validation tool against changes
     * to the component's template against the currently stored
     * snapshot.
     */
    expect(fixture).toMatchSnapshot();
  });
});