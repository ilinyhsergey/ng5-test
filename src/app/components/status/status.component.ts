import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SystemUser} from '../model/system-user';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  user: SystemUser;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { user: SystemUser }) => {
      this.user = data.user;
    });
  }

}
