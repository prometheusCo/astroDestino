import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Sign {
  id: string;
  name: string;
  path: string;
}


@Component({

  selector: 'app-header',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']

})

export class HeaderComponent implements AfterViewInit {


  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('sliderContainer') container!: ElementRef;

  private baseSigns: Sign[] = [

    { id: 'aries', name: 'Aries', path: 'M12 21c-2-2.5-4.5-4-7-4m7 4c2-2.5 4.5-4 7-4M12 21V9m0 0c-2-4-5-4-7-2m7 2c2-4 5-4 7-2' },
    { id: 'taurus', name: 'Tauro', path: 'M6 4a6 6 0 0 0 12 0M12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' },
    { id: 'gemini', name: 'Géminis', path: 'M7 20V4m10 16V4M5 4h14M5 20h14' },
    { id: 'cancer', name: 'Cáncer', path: 'M18 9a5 5 0 1 0-10 0m0 6a5 5 0 1 0 10 0M18 9c0-4-4-5-4-5M6 15c0 4 4 5 4 5' },
    { id: 'leo', name: 'Leo', path: 'M12 7a3 3 0 1 0-3 3c3 0 3 4 0 4m0 0a3 3 0 1 0 3 3m0-10h6' },
    { id: 'virgo', name: 'Virgo', path: 'M7 4v12a3 3 0 0 0 6 0V4a3 3 0 0 0 6 0v12a3 3 0 0 1-3 3' },
    { id: 'libra', name: 'Libra', path: 'M5 19h14M5 15h14a7 7 0 0 0-14 0zM12 8V4' },
    { id: 'scorpio', name: 'Escorpio', path: 'M5 4v12a3 3 0 0 0 6 0V4m0 12a3 3 0 0 0 6 0V4m0 16l3-3-3-3' },
    { id: 'sagittarius', name: 'Sagitario', path: 'M4 20L20 4M14 4h6v6M7 13l4 4' },
    { id: 'capricorn', name: 'Capricornio', path: 'M4 4l8 16 8-16m-8 16V4' },
    { id: 'aquarius', name: 'Acuario', path: 'M4 10l4-4 4 4 4-4 4 4M4 16l4-4 4 4 4-4 4 4' },
    { id: 'pisces', name: 'Piscis', path: 'M5 4v16m14-16v16M5 12h14' }

  ];
  extendedSigns = signal<Sign[]>([...this.baseSigns, ...this.baseSigns, ...this.baseSigns]);

  currentTranslate = signal<number>(0);
  isDragging = signal<boolean>(false);
  activeIndex = signal<number>(-1);

  private startX = 0;
  private prevTranslate = 0;
  private readonly cardWidth = 114;

  constructor() {

    effect(() => {
      this.checkActive();
    }, { allowSignalWrites: true });

  }

  ngAfterViewInit() {
    this.resetPosition();
  }

  private getWindowWidth(): number { return window.innerWidth; }

  private resetPosition() {

    setTimeout(() => {
      const centerOffset = this.getWindowWidth() / 2 - 45;
      const initialPos = -(this.baseSigns.length * this.cardWidth) + centerOffset;
      this.currentTranslate.set(initialPos);
      this.prevTranslate = initialPos;
    });

  }

  dragStart(e: MouseEvent | TouchEvent) {
    this.isDragging.set(true);
    this.startX = this.getPositionX(e);
    this.prevTranslate = this.currentTranslate();
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])

  dragMove(e: MouseEvent | TouchEvent) {

    if (!this.isDragging()) return;

    const currentX = this.getPositionX(e);
    let translate = this.prevTranslate + (currentX - this.startX);

    const totalWidth = this.baseSigns.length * this.cardWidth;
    if (translate > 0) translate -= totalWidth;
    if (translate < -totalWidth * 2) translate += totalWidth;

    this.currentTranslate.set(translate);
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')

  dragEnd() {

    if (!this.isDragging()) return;
    this.isDragging.set(false);

    const centerOffset = this.getWindowWidth() / 2 - 45;
    const index = Math.round((this.currentTranslate() - centerOffset) / this.cardWidth);
    const snapPos = index * this.cardWidth + centerOffset;

    this.currentTranslate.set(snapPos);
    this.prevTranslate = snapPos;
  }

  private getPositionX(e: MouseEvent | TouchEvent): number {
    return e instanceof MouseEvent ? e.pageX : e.touches[0].clientX;
  }

  //
  //
  private checkActive() {

    const centerX = this.getWindowWidth() / 2;
    const cards = this.slider?.nativeElement?.querySelectorAll('.sign-card');
    if (!cards) return;

    let closestIndex = -1;
    let minDistance = Infinity;

    cards.forEach((card: HTMLElement, index: number) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(centerX - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (this.activeIndex() !== closestIndex) {
      this.activeIndex.set(closestIndex);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.resetPosition();
  }
}