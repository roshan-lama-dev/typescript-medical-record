interface patientDetails {
  patientId: number;
  patientFirstName: string;
  patientLastName: string;
  patientDob: number;
  gender: string;
  primaryInsurance: string;
  address: string;
  patientContact: number;
  patientNextofkin: string;
}

let patientDetails_Records: Array<patientDetails> = new Array<patientDetails>();

function addToDatabase() {}
