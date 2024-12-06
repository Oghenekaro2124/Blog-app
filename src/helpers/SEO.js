export const SEO = (data = {}) => {
  data.title = data.title || "Default Title";

  data.metaDescription = data.metaDescription || "Default Description";

  document.title = data.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.metaDescription);
};
