export const PROJECT_CONTENT = `
  query GetProject($slug: String!) {
    pageProjectsCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        componentListCollection {
          items {
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
  pageProjectsCollection {
      items {
        slug
      }
    }
}
`;

export const PROJECT_LIST = `
query GetHome {
  pageProjectsCollection {
    items {
        title
        slug
        ... on PageProjects {
          title
          isFeatured
          previewImageDesktop {
            title
            url
            width
            height
          }
        }

    }
  }

  componentHeroBanner (id:"7tk892R0nobdbnD73KY5SU") {
    title
    subtitle
    homepageBanner
    logo {
      title
      url
      width
      height
    }
    backgroundImage {
      title
      url
      width
      height
    }
    backgroundImageMobile {
      title
      url
      width
      height
    }
  }
}
`;
