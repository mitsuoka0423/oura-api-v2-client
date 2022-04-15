export default class PersonalInfo {
  age: number | null;
  weight: number | null;
  height: number | null;
  biological_sex: string | null;
  email: string | null;

  constructor(
    age: number | null,
    weight: number | null,
    height: number | null,
    biological_sex: string | null,
    email: string | null
  ) {
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.biological_sex = biological_sex;
    this.email = email;
  }
}
