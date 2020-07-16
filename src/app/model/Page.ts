import {Project} from './Project';

export class Page {
  currentPage: number;
  projects: Project[];
  totalItems: number;
  totalPages: number;

  constructor(page: Page) {
    this.currentPage = page.currentPage;
    this.projects = page.projects;
    this.totalItems = page.totalItems;
    this.totalPages = page.totalPages;
  }
}
