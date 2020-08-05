export class Object {
  public title: string;
  public desc: string;
  public pic: string;

  constructor(title: string, desc: string, pic: string) {
    this.title = title ? title : 'Not Found';
    this.desc = desc ? desc : 'Not Found';
    this.pic = pic ? pic : 'Not Found';
  }

}
