import Link from "next/link";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import classes from "./projects/Projects.module.scss";
import PageFooter from "../components/blocks/componentFooter/ComponentPageFooter";
import Nav from "../components/molecules/nav/Nav";
const { PROJECT_LIST } = require("../helpers/data/projects");
const {
  C_GRAPHQL_URL,
  C_DELIVERY_KEY,
} = require("../helpers/contentful-config");

export async function getStaticProps() {
  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: PROJECT_LIST,
    }),
  });

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const projects = data.pageProjectsCollection.items;
  const heroBanner = data.componentHeroBanner;
  const pageFooter = data.componentFooter;

  return {
    props: {
      projects,
      heroBanner,
      pageFooter,
    },
    revalidate: 1,
  };
}

export default function Home({ projects, heroBanner, pageFooter }) {
  return (
    <div className="anchor" id="top">
      <Nav />
      <ComponentHeroBanner contentModule={heroBanner} />
      <div className={`${classes.oProjectArea} container-fluid`}>
        <div className="row">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={index}
              className={`${classes.oCard} col-12 col-md-6`}
            >
              <article className={`${classes.oProjectCard}`}>
                <figure
                  className={`${classes.mImage}`}
                  style={{
                    backgroundImage: `url(${project.previewImageDesktop.url})`,
                  }}
                ></figure>
                <div className={`${classes.mBody}`}>
                  <h3 className={`${classes.mCardTitle} fontH3`}>
                    {project.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <PageFooter contentModule={pageFooter} />
    </div>
  );
}
