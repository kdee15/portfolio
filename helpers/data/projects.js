export const PROJECT_CONTENT = `
  query GetProject($slug: String!) {
    projectPageCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        componentListCollection {
          items {
            __typename
            ... on ComponentResponsiveImages {
              imageDesktop {
                title
                url
                width
                height
              }
              imageTablet {
                title
                url
                width
                height
              }
              imageMobile {
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
            }
            ... on ComponentImageCarousel {
              title
              carouselImagesCollection {
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
