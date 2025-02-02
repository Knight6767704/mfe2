import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component4Component } from './component-4.component';

describe('Component4Component', () => {
  let component: Component4Component;
  let fixture: ComponentFixture<Component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
