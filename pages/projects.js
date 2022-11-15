const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps() {
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
                        title
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
  const projects = data.projectPageCollection.items;

  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
}

export default function Home({ projects }) {
  return (
    <div className="anchor" id="top">
      {projects.map((project, index) => (
        <div key={index}>
          {project.title}
          {/* <a href={`/projects/${project.slug}`}>{project.title}</a> */}
        </div>
      ))}
    </div>
  );
}
