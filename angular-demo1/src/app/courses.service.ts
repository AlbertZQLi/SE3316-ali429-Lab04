import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses(): string[] {
    return ["SE3313", "SE3316", "ECE4436"]
  }

  constructor() { }
}
