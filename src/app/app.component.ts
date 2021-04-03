import { Component } from '@angular/core';
import { Config, ConfigType } from './models/config';

export enum TabSettings {
  user,
  workspace,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workspaceConfigs: Config [];
  userConfigs: Config [];
  tabMenu = TabSettings;
  currentTab;

  userMenuNodes = [
    {
      id:1,
      name:'Text Editor',
      children: [
        {id:2, name: 'Cursor'},
        {id:3, name: 'Find'},
        {id:4, name: 'Font'},
        {id:5, name: 'Formating'},
        {id:6, name: 'Diff Editor'},
        {id:7, name: 'Minimap'},
        {id:8, name: 'Suggestions'},
        {id:9, name: 'Files'},
      ],
    },
    {
      id:10,
      name:'Workbench',
      children: [
        {id:11, name: 'Appearance'},
        {id:12, name: 'Breadcrumbs'},
        {id:13, name: 'Editor Management'},
        {id:14, name: 'Setting Editor'},
        {id:15, name: 'Zen Mode'},
        {id:16, name: 'Screencast Mode'},
      ],
    },
    {
      id:17,
      name:'Window',
      children: [
        {id:18, name: 'New Window'},
      ],
    },
    {
      id:19,
      name:'Features',
      children: [
        {id:20, name: 'Explorer'},
        {id:21, name: 'Search'},
        {id:22, name: 'Debug'},
        {id:23, name: 'Testing'},
        {id:24, name: 'SCM'},
        {id:25, name: 'Extensions'},
        {id:26, name: 'Terminal'},
        {id:27, name: 'Task'},
        {id:28, name: 'Problems'},
        {id:29, name: 'Output'},
        {id:30, name: 'Comments'},
        {id:31, name: 'Remote'},
        {id:32, name: 'Timeline'},
        {id:33, name: 'Notebook'},
      ],
    },
    {
      id:34,
      name:'Application',
      children: [
        {id:35, name: 'Proxy'},
        {id:36, name: 'Update'},
        {id:37, name: 'Telemetry'},
        {id:38, name: 'Setting Sync'},
      ],
    },
    {
      id:39,
      name:'Extensions',
      children: [
        {id:40, name: 'CSS'},
        {id:41, name: 'Dart & Flutter'},
        {id:42, name: 'Emmet'},
        {id:43, name: 'Git'},
        {id:44, name: 'GitHub'},
        {id:45, name: 'Grunt'},
        {id:46, name: 'Gulp'},
        {id:47, name: 'HTML'},
        {id:48, name: 'Jake'},
        {id:49, name: 'JavaScript Debugger'},
        {id:50, name: 'JSON'},
        {id:51, name: 'LESS'},
        {id:52, name: 'Live Server Config'},
        {id:53, name: 'Markdown'},
        {id:54, name: 'Merge Conflict'},
        {id:55, name: 'Node Dubug'},
        {id:56, name: 'Npm'},
        {id:57, name: 'PHP'},
        {id:58, name: 'Powershell Configuration'},
        {id:59, name: 'Reference Search View'},      
        {id:60, name: 'SCSS (Sass)'},      
        {id:61, name: 'Simple Browser'},      
        {id:62, name: 'Testing'},      
        {id:63, name: 'TypeScript'},       
        
      ],
    },
  ];

  workspaceMenuNodes = [
    {
      id:1,
      name:'Text Editor',
      children: [
        {id:2, name: 'Cursor'},
        {id:3, name: 'Find'},
        {id:4, name: 'Font'},
        {id:5, name: 'Formating'},
        {id:6, name: 'Diff Editor'},
        {id:7, name: 'Minimap'},
        {id:8, name: 'Suggestions'},
        {id:9, name: 'Files'},
      ],
    },
    {
      id:10,
      name:'Workbench',
      children: [
        {id:11, name: 'Appearance'},
        {id:12, name: 'Breadcrumbs'},
        {id:13, name: 'Editor Management'},
        {id:14, name: 'Setting Editor'},
        {id:15, name: 'Zen Mode'},
        {id:16, name: 'Screencast Mode'},
      ],
    },
    {id:17,name:'Window'},
    {
      id:18,
      name:'Features',
      children: [
        {id:19, name: 'Explorer'},
        {id:20, name: 'Search'},
        {id:21, name: 'Debug'},
        {id:22, name: 'Testing'},
        {id:23, name: 'SCM'},
        {id:24, name: 'Extensions'},
        {id:25, name: 'Terminal'},
        {id:26, name: 'Task'},
        {id:27, name: 'Problems'},
        {id:28, name: 'Output'},
        {id:29, name: 'Comments'},
        {id:30, name: 'Remote'},
        {id:31, name: 'Timeline'},
        {id:32, name: 'Notebook'},
      ],
    },
    {
      id:33,
      name:'Application',
      children: [
        {id:34, name: 'Proxy'},
        {id:35, name: 'Telemetry'},
      ],
    },
    {
      id:36,
      name:'Extensions',
      children: [
        {id:37, name: 'CSS'},
        {id:38, name: 'Dart & Flutter'},
        {id:39, name: 'Emmet'},
        {id:40, name: 'Git'},
        {id:41, name: 'GitHub'},
        {id:42, name: 'Grunt'},
        {id:43, name: 'Gulp'},
        {id:44, name: 'HTML'},
        {id:45, name: 'Jake'},
        {id:46, name: 'JavaScript Debugger'},
        {id:47, name: 'JSON'},
        {id:48, name: 'LESS'},
        {id:49, name: 'Live Server Config'},
        {id:50, name: 'Markdown'},
        {id:51, name: 'Merge Conflict'},
        {id:52, name: 'Node Dubug'},
        {id:53, name: 'Npm'},
        {id:54, name: 'PHP'},
        {id:55, name: 'Powershell Configuration'},
        {id:56, name: 'Reference Search View'},      
        {id:57, name: 'SCSS (Sass)'},      
        {id:58, name: 'Simple Browser'},      
        {id:59, name: 'Testing'},      
        {id:60, name: 'TypeScript'},       
       
      ],
    },
  ];

  options = {};

  selectTab(tab: TabSettings) {
    this.currentTab = tab;
  }

  constructor() {
    this.currentTab = TabSettings.user;
    this.currentTab = TabSettings.workspace;
    this.workspaceConfigs = [
      {
        key: 'autoSave',
        groupName:'Files',
        name:'Auto Seve',
        remark: '',
        details:
          'Controls auto save of dirty editors. Read more about autosave here.',
        type: ConfigType.dropdow,
        arrValue: ['off','afterDelay','onFocusChange','onWindowChange'],
      },
      {
        key: 'editFontSize',
        groupName:'Editor',
        name:'Font Size',
        remark: '',
        details:
          'Controls the font size in pixels.',
        type: ConfigType.text,
        
      },
      {
        key: 'editFontFamily',
        groupName:'Editor',
        name:'Font Family',
        remark: '',
        details:
          'Controls the font family.',
        type: ConfigType.text,
        
      },
      {
        key: 'editTabSize',
        groupName:'Editor',
        name:'Tab Size',
        remark: '',
        details:
          'The number of spaces a tab is equal to. This setting is overridden based on the file contents when Editor: Detect Indentation is on.',
        type: ConfigType.text,
        
      },
      {
        key: 'renderWhitespace',
        groupName:'Editor',
        name:'Render Whitespace',
        remark: '',
        details:
          'Controls how the editor should render whitespace characters.',
        type: ConfigType.dropdow,
        arrValue: ['none','boundary','selection','trailing'],
      },
      {
        key: 'cursorStyle',
        groupName:'Editor',
        name:'Cursor Style',
        remark: '',
        details:
          'Controls the cursor style.',
        type: ConfigType.dropdow,
        arrValue: ['line','block','underline','line-thin','block-outline','underline-thin'],
      },
      {
        key: 'multiCursorModifier',
        groupName:'Editor',
        name:'Multi Cursor Modifier',
        remark: '',
        details:
          'The modifier to be used to add multiple cursors with the mouse. The Go To Definition and Open Link mouse gestures will adapt such that they do not conflict with the multicursor modifier. Read more.',
        type: ConfigType.dropdow,
        arrValue: ['ctrlCmd','alt'],
      },
    ];
    this.userConfigs = [
      {
        key: 'autoSave',
        groupName:'Files',
        name:'Auto Seve',
        remark: '',
        details:
          'Controls auto save of dirty editors. Read more about autosave here.',
        type: ConfigType.dropdow,
        arrValue: ['off','afterDelay','onFocusChange','onWindowChange'],
      },
      {
        key: 'editFontSize',
        groupName:'Editor',
        name:'Font Size',
        remark: '',
        details:
          'Controls the font size in pixels.',
        type: ConfigType.text,
        
      },
      {
        key: 'editFontFamily',
        groupName:'Editor',
        name:'Font Family',
        remark: '',
        details:
          'Controls the font family.',
        type: ConfigType.text,
        
      },
      {
        key: 'editTabSize',
        groupName:'Editor',
        name:'Tab Size',
        remark: '',
        details:
          'The number of spaces a tab is equal to. This setting is overridden based on the file contents when Editor: Detect Indentation is on.',
        type: ConfigType.text,
        
      },
      {
        key: 'renderWhitespace',
        groupName:'Editor',
        name:'Render Whitespace',
        remark: '',
        details:
          'Controls how the editor should render whitespace characters.',
        type: ConfigType.dropdow,
        arrValue: ['none','boundary','selection','trailing'],
      },
      {
        key: 'cursorStyle',
        groupName:'Editor',
        name:'Cursor Style',
        remark: '',
        details:
          'Controls the cursor style.',
        type: ConfigType.dropdow,
        arrValue: ['line','block','underline','line-thin','block-outline','underline-thin'],
      },
      {
        key: 'multiCursorModifier',
        groupName:'Editor',
        name:'Multi Cursor Modifier',
        remark: '',
        details:
          'The modifier to be used to add multiple cursors with the mouse. The Go To Definition and Open Link mouse gestures will adapt such that they do not conflict with the multicursor modifier. Read more.',
        type: ConfigType.dropdow,
        arrValue: ['ctrlCmd','alt'],
      },
    ];
  }
}
