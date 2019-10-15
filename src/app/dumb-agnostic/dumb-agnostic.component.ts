import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-dumb-agnostic',
	templateUrl: './dumb-agnostic.component.html',
	styleUrls: ['./dumb-agnostic.component.scss']
})
export class DumbAgnosticComponent {
	@Input() index = 0;
}
