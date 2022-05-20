import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AdminComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    const admin = fixture.componentInstance;
    expect(admin).toBeTruthy();
  });

  it(`should have as title 'cocktails-app admin'`, () => {
    const fixture = TestBed.createComponent(AdminComponent);
    const admin = fixture.componentInstance;
    expect(admin.title).toEqual('cocktails-app admin');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cocktails-app admin is running!');
  });
});
