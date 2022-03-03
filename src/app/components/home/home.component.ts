import { ITrack, MusicApiService } from './../../services/music-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tracks: ITrack[] = [];

  constructor(private musicService: MusicApiService) {}

  async ngOnInit() {
    this.musicService.getTracks().subscribe((tracks) => {
      this.tracks = tracks;
      console.log(tracks);
    });
  }
}
