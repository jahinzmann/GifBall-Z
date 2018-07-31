import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceChatComponent } from './audience-chat.component';

describe('AudienceChatComponent', () => {
  let component: AudienceChatComponent;
  let fixture: ComponentFixture<AudienceChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudienceChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienceChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
