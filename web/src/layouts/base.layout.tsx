import { h } from 'preact';

interface DefaultLayoutProps {
  content: string;
  lang?: string;
  layoutCss?: string;
  page: {
    fileSlug: string;
  };
}

function BaseLayout({ content, lang = 'nl', layoutCss, page }: DefaultLayoutProps) {
  const cssPaths = [`styles/${page.fileSlug}.css`, layoutCss, 'styles/main.css'];

  return (
    <html lang={lang}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        {cssPaths.map((path) => (
          <link rel="stylesheet" href={path} />
        ))}
      </head>
      <body>
        {content}
        <script src="/javascript/main.js"></script>
      </body>
    </html>
  );
}

export const render = BaseLayout;
