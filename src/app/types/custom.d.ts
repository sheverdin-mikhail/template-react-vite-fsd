declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

declare module '*.scss' {
  interface IClassNames {
      [className: string]: string
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
