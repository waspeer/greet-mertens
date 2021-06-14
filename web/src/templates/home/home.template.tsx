import { h } from 'preact';

import { Image } from '~/components/image';
import type { Data } from '~/lib/data';

import './home.scss';

interface HomeProps extends Data.AllData {
  page: any;
}

function Home({ home }: HomeProps) {
  const { email, highlightedProjects, portrait, tagline } = home;

  return (
    <main className="home">
      <div className="home__portrait">
        <Image image={portrait} loading="eager" />
      </div>
      <section className="home__text">
        <h1>Greet Mertens</h1>
        <div>{tagline}</div>
        <a className="home__email" href={`mailto:${email}`}>
          {email}
        </a>
        {highlightedProjects && (
          <section className="home__projectHighlights">
            <h2 className="gentleHeading">Uitgelichte Projecten</h2>
            <div>HIGLIGHTS</div>
          </section>
        )}
      </section>
    </main>
  );
}

// ----------------------- //
module.exports = {
  render: Home,
  data: {
    layout: 'default.11ty.js',
    permalink: '/',
  },
};
