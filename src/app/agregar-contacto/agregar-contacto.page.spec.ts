import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarContactoPage } from './agregar-contacto.page';

describe('AgregarContactoPage', () => {
  let component: AgregarContactoPage;
  let fixture: ComponentFixture<AgregarContactoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarContactoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
