import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shered/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  currentCourse = null;

  courses = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.currentCourse = emptyCourse;
  }

  selectCourse(course) {
    this.currentCourse = course;
  }

  loadCourses() {
    this.coursesService.all().subscribe((courses) => (this.courses = courses));
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService
        .update(course)
        .subscribe((result) => this.refreshCourses());
    } else {
      this.coursesService
        .create(course)
        .subscribe((result) => this.refreshCourses());
    }
  }
  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  deleteCourse(courseId) {
    this.coursesService
      .delete(courseId)
      .subscribe((item) => this.refreshCourses());
  }

  cancelFocus() {
    this.resetSelectedCourse();
  }
}
