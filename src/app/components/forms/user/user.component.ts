import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StorageService } from '../../../services/storage/storage';
import { DatesService } from '../../../services/dates/dates'

@Component({
  selector: 'app-user',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css', '../../../app.css'],
})


export class UserFormComponent {

  userData: any;

  constructor(

    private storage: StorageService,
    private dates: DatesService,

  ) {


  }

  // Estado con Signals
  birthdate = signal<Date | null>(null);
  profession = signal<string>('');
  gender = signal<string>('');
  saved = signal<boolean>(false);

  // Catálogos
  readonly professions = [

    'Abogado/a',
    'Administrador/a',
    'Arquitecto/a',
    'Contador/a',
    'Desarrollador/a',
    'Diseñador/a',
    'Docente',
    'Economista',
    'Enfermero/a',
    'Ingeniero/a',
    'Médico/a',
    'Marketing Digital',
    'Periodista',
    'Psicólogo/a',
    'Recursos Humanos',
    'Veterinario/a',
    'Camarero/a',
    'Otro'
  ];

  readonly genders = ['Masculino', 'Femenino'];

  // Validación
  isValid = computed(() => !!this.birthdate() && !!this.profession() && !!this.gender());

  forbidenSet = new Set([
    'Camarero/a',
    'Enfermero/a',
    'Médico/a',
  ]);

  filter(professionsSet: any, professionToFind: string) {

    if (professionsSet.has(professionToFind))
      return "null";

    return professionToFind;
  }

  saveUser() {

    if (this.isValid()) {

      const data: UserProfile = {

        birthdate: this.birthdate(),
        profession: this.filter(this.forbidenSet, this.profession()),
        gender: this.gender(),
        sign: this.dates.getZodiacSign(this.birthdate()),

      };

      this.saved.set(true);
      setTimeout(() => this.saved.set(false), 2000);

      this.storage.setData("userData", data);
      location.reload();

    }
  }
}



interface UserProfile {

  birthdate: any;
  profession: string;
  gender: string;
  sign: string;

}
