export class Project {
  public id: number;
  public title: string;
  public type: string;
  public date: Date;
  public urlImage: string;


  constructor(project: Project) {
    this.id = project.id;
    this.title = project.title;
    this.type = project.type;
    this.date = project.date;
    this.urlImage = project.urlImage;
  }
}
