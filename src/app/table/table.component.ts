import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DataPoint } from '../model';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() dataPoints: DataPoint[];
}
