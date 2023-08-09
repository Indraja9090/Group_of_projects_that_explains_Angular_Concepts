/*create the service class that holds the array of objects.*/
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  data: Array<object> = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];
}

/*--------data.model.ts*-------*/
//create the model class that uses the service class's array of objects and creates a promise. 
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class DataModel {
  constructor(private dataService: DataService) {}

  fetchData(): Promise<Array<object>> {
    return new Promise<Array<object>>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataService.data);
      }, 2000);
    });
  }
}

/*---- class `DataResolveGuard` implements `Resolve`--------*/
/*create the resolve guard class that implements the Resolve interface with the model class's generic type. */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataModel } from './data.model';

@Injectable()
export class DataResolveGuard implements Resolve<Array<object>> {
  constructor(private dataModel: DataModel) {}

  resolve(): Promise<Array<object>> {
    return this.dataModel.fetchData();
  }
}

/*--------------DataComponent--------*/
/*create the component class that injects the ActivatedRoute object and
             assigns the resolved data to a property, which can be bound to the template.*/
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-data',
template: `
    <h2>Data Component</h2>
    <ul>
    <li *ngFor="let item of resolvedData">{{ item.name }}</li>
    </ul>
`
})
export class DataComponent {
resolvedData: Array<object>;

constructor(private route: ActivatedRoute) {
    this.resolvedData = this.route.snapshot.data['data'];
}
}

/*--------------AppRoutingModule--------*/
/*Don't forget to configure the routes in your app-routing.module.ts file to use the resolve guard.*/             
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolveGuard } from './data.resolve.guard';
import { DataComponent } from './data.component';

const routes: Routes = [
  {
    path: 'data',
    component: DataComponent,
    resolve: {
      data: DataResolveGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
