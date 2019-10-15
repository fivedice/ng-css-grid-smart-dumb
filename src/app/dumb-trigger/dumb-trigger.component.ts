import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-dumb-trigger',
	templateUrl: './dumb-trigger.component.html',
	styleUrls: ['./dumb-trigger.component.scss']
})
export class DumbTriggerComponent {
	@Output() click = new EventEmitter();

	@Input() wiggle = false;
}
