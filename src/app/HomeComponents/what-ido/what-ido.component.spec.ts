import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIDoComponent } from './what-ido.component';

describe('WhatIDoComponent', () => {
  let component: WhatIDoComponent;
  let fixture: ComponentFixture<WhatIDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
