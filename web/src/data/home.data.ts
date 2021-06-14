import { sanityClient } from '../lib/sanity-client';

const IMAGE_FRAGMENT = /* groq */ `
  asset,
  crop,
  hotspot,
  ...asset-> {
    "aspectRatio": metadata.dimensions.aspectRatio,
    "dominantColor": metadata.palette.dominant.background,
  },
`;

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

// async function getHomeData(): Promise<Data.Home> {
//   const rawData = await sanityClient.fetch(HOME_DATA_QUERY);

//   return {
//     ...rawData,
//     highlightedProjects: rawData.highlightedProjects.map((project: any) => ({
//       ...project,
//       mainImage: createImageObject(project.image),
//     })),
//     portrait: createImageObject(rawData.portrait),
//   };
// }

module.exports = getHomeData;
