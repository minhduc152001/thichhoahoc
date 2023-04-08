import slugify from "slugify";

export const generateSlug = (name: string) => {
  const slug = slugify(name.toLowerCase(), {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: true,
  });
  return slug;
};
