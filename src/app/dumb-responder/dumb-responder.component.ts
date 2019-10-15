import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-dumb-responder',
	templateUrl: './dumb-responder.component.html',
	styleUrls: ['./dumb-responder.component.scss']
})
export class DumbResponderComponent {
	@Input() wiggle: boolean;
}
