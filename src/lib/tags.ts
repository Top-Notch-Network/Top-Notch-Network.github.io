// The ONLY place blog tags are defined. To add a tag, add one line to this list.
// Posts may use 1 to 3 of these; anything else fails the build with a clear message.
// The order here is the order of the filter chips on /blog.
export const BLOG_TAGS = [
  'Leadership',
  'Governance',
  'Security',
  'Cloud',
  'AI',
  'ITSM',
  'Network Update',
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

export const tagSlug = (tag: string) =>
  tag.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
