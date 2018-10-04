import { Component, OnInit } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.angularbootcamp.com';

interface Video {
    title: string;
    author: string;
}

@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent {
  videoList: Video[] = [];

  constructor(http: HttpClient) {
    http
      .get<Video[]>(API_URL + '/videos')
      .subscribe(videoList => this.videoList = videoList);
  }
}
