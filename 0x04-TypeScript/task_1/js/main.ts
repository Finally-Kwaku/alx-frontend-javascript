class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
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

// Example usage:
const teacher = new Teacher("John", "Doe", true, "Boston");
teacher.setYearsOfExperience(5);
teacher.addAttribute("contract", true);

console.log(teacher);

