import { Component, HostListener, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';

@Component({
  selector: 'app-list-user-screen',
  templateUrl: './list-user-screen.component.html',
  styleUrls: ['./list-user-screen.component.less'],
})
export class ListUserScreenComponent implements OnInit {
  public userArray: User[];
  constructor(private userProviderService: UserProviderService) {
    this.userArray = [];
  }

  ngOnInit() {
    this.fetchUsers();
  }

  addItem(event: any) {
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      this.userArray = await this.userProviderService.getUsers().toPromise();
    } catch (error) {
      console.log('error');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
