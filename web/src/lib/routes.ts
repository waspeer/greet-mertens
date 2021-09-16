import { ProjectData } from "./types";

function project({ slug }: ProjectData) {
  return `/portfolio/project/${slug}/`;
}

export { project };
