import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { UserFormComponent } from '../forms/user/user.component';
import Swal from 'sweetalert2';
import { StorageService } from '../../services/storage/storage'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({

    selector: 'app-drawer',
    imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        MatSidenav,
        MatListModule,
        MatIconModule,
        UserFormComponent
    ],
    templateUrl: 'drawer.component.html',
    styleUrls: ['drawer.component.css', '../../app.css'],
})


export class DrawerComponent {

    @ViewChild('drawer') drawer!: MatSidenav;
    isMenuOpen = false;
    userData: any;

    constructor(private storage: StorageService,) {
        this.userData = storage.getData("userData");

    }

    toggleMenu() {

        this.drawer.toggle();
        this.isMenuOpen = this.drawer.opened;
    }

    onDrawerClosed() {

        this.userData = this.storage.getData("userData");

        if (!!this.userData)
            return;

        Swal.fire({

            text: `Datos no introducidos!... Mueve el slider hasta dar con tu signo o haz click en el centro si ya esta seleccionado.`,
            icon: 'warning',
            background: 'rgb(29 26 34)',
            iconColor: '#856404',
            confirmButtonColor: 'green',
            color: 'whitesmoke',
            width: '85vw',
            confirmButtonText: 'De acuerdo',

        }).then((result) => { });


    }


    about() {

        Swal.fire({

            background: 'rgb(29 26 34)',
            confirmButtonColor: 'green',
            color: 'whitesmoke',
            width: '85vw',
            confirmButtonText: 'De acuerdo',
            html: `
    <style>
       
        .faq-wrapper {padding-top:10px!important}
        .faq-wrapper .text-accent { color: var(--accent-color); }
        .faq-wrapper .bg-accent { background-color: var(--accent-color); }
        .faq-wrapper .border-line { border-color: rgba(255, 255, 255, 0.08); }

        .faq-wrapper .content-text {
            font-size: 0.9rem;
            line-height: 1.3rem;
            font-weight: 400;
            color: #9ca3af;
            text-align: justify
        }

        .faq-wrapper h2 {
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        .privacy-quote {
            border-left: 2px solid var(--accent-color);
            padding-left: 1.25rem;
            margin-top: 1rem;
            background: linear-gradient(90deg, rgba(192, 132, 252, 0.05) 0%, transparent 100%);
        }
    </style>
    <div class="faq-wrapper max-w-md w-full mx-auto">
       
        <div class="space-y-8">
            
            <!-- Pregunta 1 -->
            <div class="border-line border-b pb-6">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-accent font-semibold">
                        ¿Qué es AstroDestino?
                    </h2>
                    <svg class="w-4 h-4 text-slate-700 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
                <p class="content-text">
                    Es una aplicación diseñada para consultar tu horóscopo diario, semanal y mensual de forma directa y sin distracciones.
                </p>
            </div>

            <!-- Pregunta 2 -->
            <div class="border-line border-b pb-6">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-accent font-semibold">
                        ¿Es gratuita?
                    </h2>
                    <svg class="w-4 h-4 text-slate-700 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
                <p class="content-text">
                    Sí. El acceso es gratuito y se financia mediante anuncios discretos para mantener el servicio activo para todos los usuarios.
                </p>
            </div>

            <!-- Pregunta 3 -->
            <div class="border-line border-b pb-6">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-accent font-semibold">
                        Privacidad
                    </h2>
                    <svg class="w-4 h-4 text-slate-700 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
                <div class="space-y-3">
                    <p class="content-text">
                        Solicitamos de forma opcional datos básicos como fecha de nacimiento, profesión y sexo para mejorar la precisión de las predicciones.
                    </p>
                    <!-- Sección con efecto Quote -->
                    <div class="privacy-quote py-1">
                        <p class="content-text italic opacity-80 text-[0.9375rem]">
                            No almacenamos información que permita identificar personalmente a los usuarios en nuestros servidores.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>`,

        }).then((result) => { });


    }

    async share() {

        const url = 'https://play.google.com/store/apps/details?id=astroDestino';

        if (!navigator.share) {
            console.log('Web Share API no disponible');
            return;
        }

        await navigator.share({
            title: 'astroDestino',
            text: 'Descarga esta app',
            url,
        });
    }


}
