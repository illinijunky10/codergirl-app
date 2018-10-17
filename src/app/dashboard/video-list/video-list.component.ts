import { Component, OnInit } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { VideoDataService } from '../../video-data.service';

const API_URL = 'https://api.angularbootcamp.com';


@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent {
  videoList: Video[];

  constructor(svc: VideoDataService) {
    svc.loadVideos()
      .subscribe(videoList => this.videoList = videoList);
  }
}
