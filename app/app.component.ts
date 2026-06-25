import { Component, ViewChild, Directive} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'; // Column Definition Type Interface
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouteboxComponent} from './routebox/routebox.component';
import { CommonModule } from '@angular/common'


import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AgGridAngular, MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatButtonToggleModule, MatInputModule, MatFormFieldModule, RouteboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private gridApi!: GridApi <any>;

  title = 'author';

  themeClass =
    "ag-theme-quartz";

    rowSelection: 'single' | 'multiple' = 'multiple';

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Lmaborghini", model: "Aventador", price: 98000, electric: false },
    { make: "Maserati", model: "levante", price: 64500, electric: false },
    { make: "Maruti", model: "Alto", price: 12500, electric: false }
  ];

  colDefs: ColDef[] = [
    { field: "make", headerName: "Company",
  cellRenderer: (item: any) => {
    return item.value.toLocaleUpperCase()
  },
  filter:'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true},
    { field: "model", headerName: "Model" },
    { field: "price", headerName: "Price" },
    { field: "electric", headerName: "Electric/Fuel", editable: true }
  ];

  defaultColDef = {
    flex: 1,
    minWidth: 100
  }

  onExport() {
    this.gridApi.exportDataAsCsv();
  }

  onGridReady(event: GridReadyEvent <any>){
    this.gridApi = event.api;
  }

  
  jsonData = [{
    icon: "local_shipping",
    location: "King Supper #87",
    cases: 634,
    durationTime: "05:05",
    employeeId: 2330,
    employeeName: "330 - Noah Dickson"
  },{
    icon: "storefront",
    location: "Safeway #1656",
    cases: 501,
    durationTime: "05:05",
    employeeId: 2331,
    employeeName: "331 - Richard Fichtens"
  },{
    icon: "storefront",
    location: "King Supper #88",
    cases: 450,
    durationTime: "05:05",
    employeeId: 2332,
    employeeName: "332 - Kitt Minks"
  },{
    icon: "storefront",
    location: "King Soopers #125",
    cases: 415,
    durationTime: "05:05",
    employeeId: 2333,
    employeeName: "333 - Nick Taube"
  },{
    icon: "local_shipping",
    location: "",
    cases: 339,
    durationTime: "05:05",
    employeeId: 2334,
    employeeName: "334 - Tracy Smith"
  },{
    icon: "local_shipping",
    location: "",
    cases: 333,
    durationTime: "05:05",
    employeeId: 2337,
    employeeName: "337 - Brian Gonzales"
  },{
    icon: "storefront",
    location: "Super Target-T1805",
    cases: 415,
    durationTime: "05:05",
    employeeId: 2339,
    employeeName: "339 - Jonathan Brack"
  },{
    icon: "local_shipping",
    location: "",
    cases: 448,
    durationTime: "05:05",
    employeeId: 2341,
    employeeName: "341 - Max Lutz"
  },{
    icon: "local_shipping",
    location: "Super Target-T188",
    cases: 448,
    durationTime: "05:05",
    employeeId: 2342,
    employeeName: "342 - Tim McClain"
  },{
    icon: "local_shipping",
    location: "King Soopers #125",
    cases: 448,
    durationTime: "05:05",
    employeeId: 2343,
    employeeName: "343 - DC Bailey"
  },{
    icon: "local_shipping",
    location: "Super Target-T189",
    cases: 448,
    durationTime: "05:05",
    employeeId: 2344,
    employeeName: "344 - DC Tailey"
  },{
    icon: "local_shipping",
    location: "King Soopers #128",
    cases: 448,
    durationTime: "05:05",
    employeeId: 2346,
    employeeName: "346 - DC Mailey"
  }];
}
