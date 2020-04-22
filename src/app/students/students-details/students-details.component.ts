import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentsService} from '../students.service';
import {IStudent} from '../IStudent';
import {IPersonalData} from '../../shared/IPersonalData';
import {ICorrespondenceAddress} from '../../shared/ICorrespondenceAddress';

@Component({
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  student: IStudent;
  personalData: IPersonalData;
  correspondenceAddress: ICorrespondenceAddress;

  constructor(private route: ActivatedRoute,
              private studentsService: StudentsService,
              private router: Router) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.studentsService.getById(id).subscribe((result) => {
        this.student = result;
        this.personalData = result.personalData;
        this.correspondenceAddress = result.correspondenceAddress;
      },
      error => console.log(error)
    );
  }

  onBack(): void {
    this.router.navigate(['/students']);
  }

}
