import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {
  @Input() avatarName = '';
  @Input() Name = '';
  @Input() Position = '';
  @Input() Telegram = '';
  @Input() Email = '';
  @Input() GitHub = '';
  @Input() LinkedIn = '';
}
