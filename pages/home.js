import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import ComponentBodyCopy from "../components/organisms/componentBodyCopy/ComponentBodyCopy";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps() {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "page",
      include: 10,
    })

    .then((entries) => entries.items);

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ Page }) {
  const heroBanner = Page[0].fields.components[0].fields;
  const aboutCopy = Page[0].fields.components[1].fields;

  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner contentModule={heroBanner} />
      <ComponentBodyCopy contentModule={aboutCopy} />
    </div>
  );
}
