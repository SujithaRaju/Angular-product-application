import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponetComponent } from './welcome-componet.component';

describe('WelcomeComponetComponent', () => {
  let component: WelcomeComponetComponent;
  let fixture: ComponentFixture<WelcomeComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
