import { Component } from '@angular/core';
import Sidebar from '../../components/sidebar/sidebar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export default class Layout {}
