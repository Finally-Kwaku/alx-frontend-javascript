class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;

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

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0); // Get the first letter of firstName
  return `${firstLetter}. ${lastName}`;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Example usage of the printTeacher function
const fullName = printTeacher("John", "Doe");
console.log(fullName); // This will print "J. Doe" to the console

// Additional Example:
const anotherFullName: printTeacherFunction = (first, last) => printTeacher(first, last);
console.log(anotherFullName("Alice", "Smith")); // This will print "A. Smith" to the console

