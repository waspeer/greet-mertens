declare module '*.module.css' {
  declare const styles: Record<string, string>;

  export default styles;
}

declare module '@sanity/block-content-to-react';
