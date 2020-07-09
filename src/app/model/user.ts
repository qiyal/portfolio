export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public birthday: Date;
  public city: string;
  public country: string;
  public location: string;
  public postCode: string;
  public email: string;
  public telephoneNumber: string;

  constructor(user: User) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.birthday = user.birthday;
    this.city = user.city;
    this.country = user.country;
    this.location = user.location;
    this.postCode = user.postCode;
    this.email = user.email;
    this.telephoneNumber = user.telephoneNumber;
  }
}
