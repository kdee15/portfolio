import { createClient } from "contentful";
import Component2ColumnImageText from "../components/blocks/component2ColumnImageText/Component2ColumnImageText";
import Footer from "../components/blocks/componentFooter/ComponentFooter";
import ComponentHeroCarousel from "../components/blocks/componentHeroCarousel/ComponentHeroCarousel";
import ComponentReasons from "../components/blocks/componentReasons/ComponentReasons";
import Nav from "../components/molecules/nav/Nav";
import Component3Column from "../components/organisms/component3Column/Component3Column";
import FounderProfile from "../components/organisms/founderProfile/FounderProfile";
import ServiceComponent from "../components/organisms/serviceComponent/ServiceComponent";
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
  const componentAbout = Page[0].fields.components[1].fields;
  const componentTania = Page[0].fields.components[2].fields;
  const componentAdele = Page[0].fields.components[3].fields;
  const componentTMS = Page[0].fields.components[4].fields;
  const componentLC = Page[0].fields.components[5].fields;
  const componentTraining = Page[0].fields.components[6].fields;
  const componentReasons = Page[0].fields.components[7].fields;
  const componentOfferings = Page[0].fields.components[8].fields;
  const componentFooter = Page[0].fields.components[9].fields;

  return (
    <div className="anchor" id="top">
      <Nav />
      <ComponentHeroCarousel contentModule={heroBanner} />
      <div className="anchor" id="about"></div>
      <Component2ColumnImageText contentModule={componentAbout} />
      <div className="anchor" id="tania"></div>
      <FounderProfile contentModule={componentTania} />
      <div className="anchor" id="adele"></div>
      <FounderProfile contentModule={componentAdele} />
      <div className="anchor" id="reasons"></div>
      <ComponentReasons contentModule={componentReasons} />
      <div className="anchor" id="offerings"></div>
      <Component3Column contentModule={componentOfferings} />
      <div className="anchor" id="management"></div>
      <ServiceComponent contentModule={componentTMS} />
      <div className="anchor" id="consulting"></div>
      <ServiceComponent contentModule={componentLC} />
      <div className="anchor" id="training"></div>
      <ServiceComponent contentModule={componentTraining} />
      <Footer contentModule={componentFooter} />
    </div>
  );
}
