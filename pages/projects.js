import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import Nav from "../components/molecules/nav/Nav";
import Link from "next/Link";
import ComponentBodyCopy from "../components/organisms/componentBodyCopy/ComponentBodyCopy";
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
      <Nav />
      <h1>Hello</h1>
      {projects.map((project) => (
        <div key={project.slug}>
          {project.title}
          <Link href={`projects/${project.slug}`}>
            <a>{project.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
