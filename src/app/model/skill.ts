export class Skill {
  public id: number;
  public name: string;
  public percentage: number;


  constructor(skill: Skill) {
    this.id = skill.id;
    this.name = skill.name;
    this.percentage = skill.percentage;
  }
}
