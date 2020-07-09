export class Experience {
  public id: number;
  public yearStart: string;
  public yearFinish: string;
  public title: string;
  public text: string;

  constructor(experience: Experience) {
    this.id = experience.id;
    this.yearStart = experience.yearStart;
    this.yearFinish = experience.yearFinish;
    this.title = experience.title;
    this.text = experience.text;
  }
}
