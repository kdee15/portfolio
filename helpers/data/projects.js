/**
 * GRAPHQL Query to retrieve About Us content from Strapi
 *
 * @type {DocumentNode}
 * @param {_locale}
 */
export const PROJECT_CONTENT = `
  query GetProject($slug: String!) {
    projectPageCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        componentListCollection {
          items {
            __typename
            ... on ComponentHeroBanner {
                title
                subtitle
                homepageBanner
                backgroundImage {
                    title
                    url
                    width
                    height
                }
            }
            ... on SubcomponentPreviewCard {
                title
                dateStart
                dateEnd
                primaryColor
                secondaryColor
                coverImageDesk  {
                  title
                  url
                  width
                  height
              }
                coverImageTablet {
                  title
                  url
                  width
                  height
              }
                coverImageMobile {
                  title
                  url
                  width
                  height
              }
                screenshotsDesktopCollection {
                  items {
                    title
                    url
                    width
                    height
                  }
                }
              }
          }
        }
      }
    }
  }
`;

export const PROJECT_SLUG = `
query {
    projectPageCollection {
        items {
            slug
        }
    }
}
`;
