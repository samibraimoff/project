declare module "*.scss" {
  interface IClassName {
    [styles: string]: string;
  }
  const styles: IClassName;
  export = styles;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
