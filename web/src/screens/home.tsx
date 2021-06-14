import * as React from 'react';

import { Image } from '../components/image';
import type { Data } from '../lib/data';
import Layout from './layout';

export default function Home({ home }: Data.AllData) {
  const { email, highlightedProjects, portrait, tagline } = home;

  return (
    <Layout>
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
    </Layout>
  );
}
