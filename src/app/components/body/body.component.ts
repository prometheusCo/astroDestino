import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component'

@Component({
  selector: 'app-body',
  imports: [
    CardComponent
  ],
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css', '../../app.css'],
})

export class BodyComponent {

}
