import { Component, OnInit, Input } from '@angular/core';
import { Config, ConfigType } from '../models/config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  @Input() configItem: Config;
  configType = ConfigType;
  
  constructor() { }

  ngOnInit(): void {
  }

}
