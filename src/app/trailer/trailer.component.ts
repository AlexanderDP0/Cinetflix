import { Component, Input} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent {

  @Input() video: SafeUrl;

  iframeSrc: SafeUrl | undefined;
  constructor(private readonly sanitizer: DomSanitizer){
    this.video=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/vq-8aIZZZUQ');
  }
}
