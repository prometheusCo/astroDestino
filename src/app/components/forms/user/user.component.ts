import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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


  // Estado con Signals
  birthdate = signal<Date | null>(null);
  profession = signal<string>('');
  gender = signal<string>('');
  saved = signal<boolean>(false);

  // Catálogos
  readonly professions = ['Ingeniero/a', 'Médico/a', 'Docente', 'Arquitecto/a', 'Diseñador/a', 'Otro'];
  readonly genders = ['Masculino', 'Femenino', 'No binario', 'Privado'];

  // Validación
  isValid = computed(() => !!this.birthdate() && !!this.profession() && !!this.gender());

  saveUser() {
    if (this.isValid()) {
      const data: UserProfile = {
        birthdate: this.birthdate(),
        profession: this.profession(),
        gender: this.gender()
      };

      console.log('Datos guardados:', data);

      this.saved.set(true);
      setTimeout(() => this.saved.set(false), 3000);
    }
  }
}



interface UserProfile {
  birthdate: Date | null;
  profession: string;
  gender: string;
}
