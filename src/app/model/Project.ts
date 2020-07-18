export class Project {
  public id: number;
  public title: string;
  public text: string;
  public view: number;
  public type: string;
  public date: Date;
  public urlImage: string;
  public urlImageSlider: string;
  public urlGithub: string;


  constructor(project: Project) {
    this.id = project.id;
    this.title = project.title;
    this.text = project.text;
    this.view = project.view;
    this.type = project.type;
    this.date = project.date;
    this.urlImage = project.urlImage;
    this.urlImageSlider = project.urlImageSlider;
    this.urlGithub = project.urlGithub;
  }
}
