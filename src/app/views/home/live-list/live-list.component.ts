import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/service/live.service';
import { Live } from 'src/app/shared/model/live.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious: Live[];
  livesNext: Live[];
  constructor(
    public liveService: LiveService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getLives();
    // obtendo as lives no console.
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesPrevious);
      this.livesPrevious.forEach(live =>{
        live.urlSave = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
    });

    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
      console.log(this.livesNext);
      this.livesNext.forEach(live =>{
        live.urlSave = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
    });
  }

}
