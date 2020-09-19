import {Component, OnInit} from '@angular/core';
import {Comic} from '../comic';
import {MarvelComicsService} from '../marvel-comics.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-comics-box',
  templateUrl: './comics-box.component.html',
  styleUrls: ['./comics-box.component.scss']
})
export class ComicsBoxComponent implements OnInit {
  comics: Comic[];
  comicsToShow: Comic[];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 100];
  pageEvent: PageEvent;

  constructor(
    private marvelComicService: MarvelComicsService
  ) {
  }

  ngOnInit(): void {
    this.comics = this.marvelComicService.simpleGetComics();
    this.comicsToShow = this.comics.slice(0, 10);
    this.length = this.comics.length;
    // this.marvelComicService.getComics()
    //   .subscribe(data => {
    //     console.log("HERE!");
    //     console.log(data);
    //   });
  }

  onPageChange($event): void {
    this.comicsToShow = this.comics.slice($event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize);
  }

}
