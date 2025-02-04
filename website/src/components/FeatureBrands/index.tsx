import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";

type FeatureBrandItems = {
  title: string;
  scale: number;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureBrandItems[] = [

  {
    scale: 1.0,
    title: "",
    
    Svg: require("@site/static/img/logo/KitimiPlatforms-svg-logo.svg").default,
    description: (
      <>

      </>
    )

  },
  
   {
    scale: 1.0,
    title: "",    
    Svg: require("@site/static/img/logo/Microsoft_365.svg").default,
    description: (
      <>
      </>
    )
  },
  {
    scale: 1.0,
    title: "",
    Svg: require("@site/static/img/logo/MSAzure.svg").default,
    description: (
      <>
      
      </>
    )
  },
  // {
    
  //   Svg: require("@site/static/img/logo/meta_opensource.svg").default,

  // },
  {
    scale: 1.0,
    title: "",
    
    Svg: require("@site/static/img/logo/Cloudflare.svg").default,
    description: (
      <>
      </>
    )
  },
  {
    scale: 0.8,
    title: "",
    
    Svg: require("@site/static/img/logo/Algolia_logo.svg").default,
    description: (
      <>
      </>
    )
  },

];

function Feature({ scale, title, description, Svg }: FeatureBrandItems) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center")}>
      <Svg
          transform={"scale(" + scale + ")"}
          className={styles.featureSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function FeatureBrands(): JSX.Element {
  return (
    <section className={clsx(styles.features)}>
      <div className={clsx("container text--center")}>
      <div className={clsx("row", styles.featuresRowCenter)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
