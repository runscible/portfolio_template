import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from '../services/projects-service.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects : any;
  showPrjct: boolean;
  projectSelected: any;
  constructor(public projectsService : ProjectsServiceService) { }

  ngOnInit() {
    this.get();    
  }

  get():void{
    this.projectsService.getProjects().subscribe((data: string)=>{
      this.projects = data;
    })
  }
  showProject(project: string){
    this.showPrjct = true;
    this.projectSelected = project;
    console.log('project', project);
  }
}
