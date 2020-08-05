import { Component, OnInit, Input } from '@angular/core';

import { Link } from '../shared/link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

title: string = "Moody Moody";
isCollapsed: boolean = false;
// menuItemClicked: boolean = false;

links: Link[] = [
  {dest: "home", label: "Home"},
  {dest: "cheer-me-up", label: "Cheer Me Up"},
  {dest: "i-am-super-angry", label: "Super Angry"},
  {dest: "feeling-lucky", label: "Feeling Lucky"},
  {dest: "random", label: "Random"},
  {dest: "contribute", label: "Contribute"},
  {dest: "about", label: "About"},
  {dest: "contact", label: "Contact"}
];

  constructor() { }

  // toggleNavbar() {
  //   this.isCollapsed  = !this.isCollapsed
  // }
  // onMenuItemCLicked() {
  //   this.menuItemClicked = !this.menuItemClicked;
  // }

  ngOnInit() {
  }

}
