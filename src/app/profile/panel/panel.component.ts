import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() userName: string;
  @Input() time: string;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
