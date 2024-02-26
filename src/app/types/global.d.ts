declare module '*.scss' {
  type IClassName = Record<string, string>
  const styles: IClassName
  export = styles
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const IS_DEV: boolean
