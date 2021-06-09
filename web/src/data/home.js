const IMAGE_FRAGMENT = /* groq */ `
  asset,
  crop,
  hotspot,
  ...asset-> {
    "aspectRatio": metadata.dimensions.aspectRatio,
    "dominantColor": metadata.palette.dominant.background,
  },
`

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
`