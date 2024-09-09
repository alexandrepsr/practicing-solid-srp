export class User {
  constructor(private name: string) {}

  create(): void {
    console.log("created user");
  }

  update(): void {
    console.log("updated user");
  }

  remove(): void {
    console.log("removed user");
  }

  getName(): string {
    return this.name;
  }
}
