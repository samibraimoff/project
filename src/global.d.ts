declare module "*.scss" {
  interface IClassName {
    [styles: string]: string;
  }
  const styles: IClassName;
  export = styles;
}
