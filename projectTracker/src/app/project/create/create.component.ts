import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  projectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    division: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    startdate: new FormControl('', Validators.required),
    enddate: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });
  
  constructor(public projectService: ProjectService) {}

  ngOnInit(): void {}
}
