export class Repos {
  constructor(
    public description: string,
    public id: number,
    public language: string,
    public name: string,
    public url: string,
    public updated_at: Date
  ) {}
}
