import { createClient } from "contentful";
import Nav from "../../components/molecules/nav/Nav";
const {
  C_SPACE_ID,
  C_DELIVERY_KEY,
} = require("../../helpers/contentful-config");

/**
 * Initial page load to access users browser information
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function Project({ project }) {
  console.log("project", project);
  return (
    <div className="anchor" id="top">
      <Nav />
      <pre>{JSON.stringify(project, null, 2)}</pre>
      {project.title}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { project } = params;

  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${C_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${C_DELIVERY_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query GetProject($slug: String!) {
          projectPageCollection(where:{
            slug: $slug
          }, limit: 1) {
              items {
                title
                  slug
              }
          }
        }
        `,
        variables: {
          slug: project,
        },
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const [projectData] = data.projectPageCollection.items;

  return {
    props: { project: projectData },
  };
}

export async function getStaticPaths() {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${C_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${C_DELIVERY_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query {
                projectPageCollection {
                    items {
                        slug
                    }
                }
            }
        `,
      }),
    }
  );

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const projectSlug = data.projectPageCollection.items;
  const paths = projectSlug.map(({ slug }) => {
    return {
      params: { project: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
