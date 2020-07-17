export function getDocumentIdFromWindowLocation(): string | undefined {
  return (window.location.toString().match(/(?:;)(.*?)$/) || [])[1];
}
