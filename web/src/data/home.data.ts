import { sanityClient } from '../lib/sanity-client';
import { IMAGE_FRAGMENT } from './shared-fragments';

const HOME_DATA_QUERY = /* groq */ `
{
  ...*[_id == "highlights"][0] {
   "highlightedProjects": projects[]->{
      mainImage { ${IMAGE_FRAGMENT} },
			"slug": slug.current,
      title,
		}
  },
  ...*[_id == "me"][0] { 
    email,
    portrait { ${IMAGE_FRAGMENT} },
		tagline,
  }
}
`;

async function getHomeData() {
  return await sanityClient.fetch(HOME_DATA_QUERY);
}

module.exports = getHomeData;
