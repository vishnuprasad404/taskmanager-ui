import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { sidebarMenuItemModel } from '../../models/sidebar-menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: false
})
export class SidebarComponent implements OnInit {
  selectedSidebarMenuItem: string = "";
  sidebarMenuItems: sidebarMenuItemModel[] = []
  constructor(
    private readonly _router: Router,
  ) { }


  ngOnInit(): void {
    this.selectedSidebarMenuItem = this._router.url;
    this.sidebarMenuItems = [
      {
        section: 'User Dashboard',
        links: [
          {
            title: 'Dashboard',
            route: '/dashboard',
            iconClass: 'icon-rocket'
          },
          {
            title: 'Projects',
            route: '/dashboard/projects',
            queryParams: {type: 'personal'},
            iconClass: 'icon-price-tags',
            subLinks: [
              {
                title: 'My Projects',
                route: "/dashboard/projects",
                count: "25",
                queryParams: {type: 'personal'}
              },
              {
                title: 'Public Projects',
                route: "/dashboard/projects",
                queryParams: {type: 'public'},
                count: '200k+'
              }
            ]
          },
          {
            title: "Messages",
            route: '/dashboard/messages',
            iconClass: 'icon-lab',
          }
        ]
      },
      {
        section: 'Report and Hirearchy',
        links: [
          {
            title: 'Time Managment',
            route: '/dashboard/timereport',
            iconClass: "icon-google-drive"
          },
          {
            title: 'Timeline',
            route: '/dashboard/timeline',
            iconClass: 'icon-price-tags'
          },
          {
            title: 'Project Hirearchy',
            route: '/dashboard/hirearchy',
            iconClass: 'icon-file-zip'
          }
        ]
      },
      {
        section: 'Others',
        links: [{
          title: 'Settings',
          route: '/dashboard/settings',
          iconClass: "icon-rocket"
        }]
      }
    ]


    this._router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: RouterEvent) => {
        this.selectedSidebarMenuItem = event.url
      })

    

  }

  navigateToRouteWithQuery(route: string, queryParam: string): void {
    this._router.navigate([route], { queryParams: { type: queryParam } });
  }

}
