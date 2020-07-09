export class Education {
  public id: number;
  public yearStart: string;
  public yearFinish: string;
  public title: string;
  public text: string;


  constructor(education: Education) {
    this.id = education.id;
    this.yearStart = education.yearStart;
    this.yearFinish = education.yearFinish;
    this.title = education.title;
    this.text = education.text;
  }
}
