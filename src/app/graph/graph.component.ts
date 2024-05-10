import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DataPoint } from '../model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent {
  @Input() dataPoints: DataPoint[];
}
