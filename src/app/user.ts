export class User {
  constructor(
    public id: number,
    public name: string,
    public photo: string,
    public repos: string,
    public followers: number,
    public following: number,
    public dateCreated: Date
  ) {}
}
