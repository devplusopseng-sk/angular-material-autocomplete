import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-autocomplete';
  state = ""
  states = [
    "Andaman and Nicobar",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  filterdStates: String[] = [];
  selectedStateName = false;

  searchStateByName() {
    console.log("Inside searchStateByName");
    this.filterdStates = [];
    if (!this.selectedStateName) {
      if (this.state.length > 3 && this.state !== '') {
        let stateI = this.state.toUpperCase();
        this.states.filter(f => {
          if (f.toUpperCase().indexOf(stateI) >= 0) {
            this.filterdStates.push(f);
          }
        });
        console.log(this.filterdStates);
      } else {
        this.filterdStates = [];
      }

    } else {
      this.filterdStates = [];
      this.selectedStateName = false;
      this.state = "";
    }
  }

  onOptionSelected() {
    console.log("Inside onOptionSelected");
    this.selectedStateName = true;
  }

  notSelectedFromList() {
    console.log("Inside notSelectedFromList");
    if (!this.filterdStates.find(f => f === this.state)) {
      this.state = "";
    }
  }
}


