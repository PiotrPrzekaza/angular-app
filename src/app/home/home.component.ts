import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shered/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Select Lesson';
  currentLesson = null;
  courseLessons = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }
  selectLesson(lesson) {
    this.currentLesson = lesson;
  }
}
