import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent  implements OnChanges {
   @Input() rating: number = 0;
   cropWidth:number= 75;

  ngOnChanges(): void {
    this.cropWidth=this.rating*75/5;
  }

  @Output() ratingEmitter: EventEmitter<string> = new EventEmitter<string>();
  onClick() : void{
    this.ratingEmitter.emit(`The rating is ${this.rating}`);
  }

}
