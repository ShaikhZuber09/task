import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
interface appointment {
  name: string;
  count: number;
  pecent: string;
  children?: appointment[];
}

const appoData: appointment[] = [
  {
    name: "Total Appointments (ALE Locations)",
    count: 8638,
    pecent: '100%',
    children: [
      {
        name: "Pre-Scheduled",
        count: 8638,
        pecent: '100%',
        children:[
          {
            name:'Call Center',
            count:4633,
            pecent:'53.6%',
            children:[
              
          {
            name:'Internal',
            count:538,
            pecent:'6.2',
            children:[
              {
                name:'Input',
                count:238,
                pecent:'2.8%'
              },{
                name:'Output',
                count:300,
                pecent:'3.5%'
              }
            ]
          },
          {
            name:'Contractors',
            count:1441,
            pecent:'16.7%',
            children:[
              {
                name:'Input',
                count:54,
                pecent:'0.6%'
              },{
                name:'Output',
                count:1387,
                pecent:'16.1%'
              }
            ]
          },
          {
            name:'IVR Reference',
            count:2653,
            pecent:'30.3%'
          }
            ]
          },
          {
            name:'Online',
            count:1779,
            pecent:'20.6%',
            children:[
              {
                name:'AEG',
                count:1709,
                pecent:'19.8%',
                

              },
              {
                name:'zocdoc_New_Existing',
                count:70,
                pecent:'0.8%',
                children:[
                  {
                    name:'NEW',
                count:58,
                pecent:'0.7%'
                  },  {
                    name:'Existing',
                count:12,
                pecent:'0.1%'
                  }
                ]
              }
            ]
          },
          {
            name:'Practice Staf',
            count:1844,
            pecent:'21.3%',
            children:[
              {
                name:'Outgoing',
                count:239,
                pecent:'2.8%',
              },
              {
                name:'Incoming or in-office',
                count:1605,
                pecent:'18.6%',
              }
            ]
          },
          {
            name:'Pre-Appoints',
            count:92,
            pecent:'1.1%'
          },
          {
            name:'Others',
            count:290,
            pecent:'3.4%'
          }
        ]

      },
      {
        name: "Walk Ins",
        count: 0,
        pecent: '0%'
      }
    ]
  }
]


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  count:number;
  pecent:string
  level: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  private _transformer = (node: appointment, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      count:node.count,
      pecent: node.pecent,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = appoData;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
