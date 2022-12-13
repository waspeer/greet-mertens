declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '@emoji-mart/react' {
  import { FunctionComponent } from 'react';
  const Picker: FunctionComponent<any>;
  export default Picker;
}
