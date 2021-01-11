import { Component, OnInit, ElementRef, Directive, HostListener, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  demoForm: FormGroup;
  source: string;
  cityName: string;
  destination: string;
  term: any;
  term2: any;
  dropDownCityValue: any;
  addNewCity: boolean = false;
  addNewCity2: boolean = false;
  arrayItems: {
    cityCode: string;
    cityName: string;
  }[];

  config: any;
  dropdownOptions: any;
  dropdownDestination: any = [];
  cityNameDestination: string;
  private isOpen: boolean = false;
  destinationModel: any = '';
  sourceModel : any = '';
  constructor(
    private formBuilder: FormBuilder, private _el: ElementRef,private snotifyService: SnotifyService) {
    this.demoForm = this.formBuilder.group({
      demoArray: this.formBuilder.array([])
    });
  }


  ngOnInit() {
    this.dropdownOptions = []
    this.arrayItems = [];
  }



  selectionChanged(event) {
    console.log(event)
  }


  get demoArray() {
    return this.demoForm.get('demoArray') as FormArray;
  }

  addItem(item) {
    this.arrayItems.push(item);
    this.demoArray.push(this.formBuilder.control(false));
    console.log(this.arrayItems)
    this.source ='';
    this.destination ='';
    this.sourceModel ='';
    this.destinationModel ='';

  }
  
  removeItem() {
    this.arrayItems.pop();
    this.demoArray.removeAt(this.demoArray.length - 1);
  }

  addValue() {
    // console.log(this.source);
    // console.log(this.destination);
    // console.log(value)
    let data = { source: this.source, destination: this.destination };

    console.log(data);
    if(!this.source){
      this.snotifyService.error('Please select from point');
    }else if(!this.destination){
      this.snotifyService.error('Please select to point');
    }else{
      this.addItem(data);
    }

  }
  addCity(event) {
    // event.stopPropagation();
    this.addNewCity = true;
    this.cityName = this.term;
  }

  addCityInArray(cityName) {
    this.addNewCity = false;
    console.log(cityName)
    let selectedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1)
    let splitted = cityName.substring(0, 3);
    splitted = splitted.toUpperCase();
    console.log(splitted)

    let data = { cityCode: splitted, cityName: selectedCity };
    this.dropdownOptions.push(data);
    this.cityName = '';
    this.term = '';

  }

  addCityDestination(event) {
    this.addNewCity2 = true;
    this.cityNameDestination = this.term2;
  }

  addCityDestonationInArray(cityName) {
    this.addNewCity2 = false;
    console.log(cityName)
    let selectedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1)
    let splitted = cityName.substring(0, 3);
    splitted = splitted.toUpperCase();
    console.log(splitted)

    let data = { cityCode: splitted, cityName: selectedCity };
    this.dropdownDestination.push(data);
    this.cityName = '';
    this.term2 = '';

  }

  changeSource(value) {
    console.log(value);
    this.source = value;
    this.sourceModel = value.cityName;
  }
  changeDestination(value) {
    console.log(value);
    this.destination  = value;
    this.destinationModel  = value.cityName;
  }

  cancelAddItem(){
    this.addNewCity = false;
    this.addNewCity2 = false;
  }
}
