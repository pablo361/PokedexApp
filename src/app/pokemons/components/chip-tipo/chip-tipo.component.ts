import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-tipo',
  templateUrl: './chip-tipo.component.html',
  styleUrls: ['./chip-tipo.component.css']
})
export class ChipTipoComponent {

  @Input() tipo : string = "";

  darColorChip(typo: string) : string{
    return `var(--${typo})`;
  }
}
