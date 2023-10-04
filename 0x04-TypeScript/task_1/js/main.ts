// Define the Teacher class
class Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
  }

  // Getter for yearsOfExperience
  getYearsOfExperience(): number | undefined {
    return this.yearsOfExperience;
  }

  // Setter for yearsOfExperience
  setYearsOfExperience(years: number): void {
    this.yearsOfExperience = years;
  }

  // Method to add any attribute dynamically
  addAttribute(attributeName: string, attributeValue: any): void {
    this[attributeName] = attributeValue;
  }
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create an object that implements the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
