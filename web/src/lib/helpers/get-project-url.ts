import { ProjectData } from "../types";

type Arguments = Pick<ProjectData, "slug">;

export function getProjectUrl({ slug }: Arguments) {
  return `/portfolio/project/${slug}/`;
}
