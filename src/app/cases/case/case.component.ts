import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent {
  @Input() Title = '';
  @Input() Description = '';
  @Input() GitHub = '';
  @Input() Drive = '';
  @Input() YouTube = '';
}
