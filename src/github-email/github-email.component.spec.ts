import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubEmailComponent } from './github-email.component';

describe('GithubEmailComponent', () => {
  let component: GithubEmailComponent;
  let fixture: ComponentFixture<GithubEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubEmailComponent]
    });
    fixture = TestBed.createComponent(GithubEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
