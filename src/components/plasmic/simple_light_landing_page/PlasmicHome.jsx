// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4MakZHdQd3q95LRebgUZR3
// Component: JoioO9NxLFc
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: gbTCQpu_SUx/component
import TopSection from "../../TopSection"; // plasmic-import: S-miPNfQ95y/component
import Section from "../../Section"; // plasmic-import: 0IttGat2HlU/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: Jj_4dlK2F0r/component
import Testimonial from "../../Testimonial"; // plasmic-import: OV71c8Rk6knB/component
import HomeCta from "../../HomeCta"; // plasmic-import: YAVEsIb01Kc/component
import Footer from "../../Footer"; // plasmic-import: N8vfYrtWIAZ/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qTQ4juqycoIA/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 4MakZHdQd3q95LRebgUZR3/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: JoioO9NxLFc/css
import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: 4SfhmKN5Z3IH/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: 87l4PrHNy1iY/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: e-6C4qapzoHr/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: xVq6X3JVhwJc/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: x1HzqbIxOqhl/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: JP9uZ7PFpCwB/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: HbVsNGPxS--w/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: wsnt_x5prjiS/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: 68ZIT6ytFyLK/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: moRxsigTATnb/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: bG4U0kQsNb9Z/icon
import simpleProjectKdEhFMzWyn from "./images/simpleProject.png"; // plasmic-import: kdEhF_-MzWyn/picture
import taskYsPzRtDqyxq from "./images/task.png"; // plasmic-import: YSPzRTDqyxq-/picture

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

function PlasmicHome__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.freeBox__nkoY1)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__xpqCw)}
            >
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />

              <TopSection
                data-plasmic-name={"topSection"}
                data-plasmic-override={overrides.topSection}
                className={classNames("__wab_instance", sty.topSection)}
              />

              <Section
                className={classNames("__wab_instance", sty.section__ed5K8)}
                subtitle={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
                title={"Explore the solutions"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__bIoFq)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__tjkbe)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__lZFqT
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__pfZif
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__ykRh3
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(defaultcss.all, sty.svg___5Niv9)}
                        role={"img"}
                      />
                    }
                    long={"long"}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__pKfim
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(defaultcss.all, sty.svg__q5Xfb)}
                        role={"img"}
                      />
                    }
                    long={"long"}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__w9EYz
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(defaultcss.all, sty.svg__rKba)}
                        role={"img"}
                      />
                    }
                    long={"long"}
                    title={"Building the Simple Ecosystem"}
                  />
                </p.Stack>

                <div className={classNames(defaultcss.all, sty.freeBox__zLlj)}>
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__mEat)}
                    role={"img"}
                    src={simpleProjectKdEhFMzWyn}
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___9SQql)}
                    role={"img"}
                    src={taskYsPzRtDqyxq}
                  />
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__qd3QY)}>
            <div className={classNames(defaultcss.all, sty.freeBox__oiThS)} />

            <div className={classNames(defaultcss.all, sty.freeBox__b0Siq)}>
              <div className={classNames(defaultcss.all, sty.freeBox__mqe6L)}>
                <Section
                  className={classNames("__wab_instance", sty.section__poKeM)}
                  subtitle={
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                  }
                  title={"How Simple works"}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox___2XqSm)}
                >
                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__wm3D3
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SwapIcon
                        className={classNames(defaultcss.all, sty.svg___1ImRi)}
                        role={"img"}
                      />
                    }
                    title={"Initial Contact"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__li6Bx
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SlotIcon
                        className={classNames(defaultcss.all, sty.svg___9LdjX)}
                        role={"img"}
                      />
                    }
                    title={"Discovery Session"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__yDwQa
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <CycleIcon
                        className={classNames(defaultcss.all, sty.svg__xXtLr)}
                        role={"img"}
                      />
                    }
                    title={"Contracting"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__pGwDh
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <HammerIcon
                        className={classNames(defaultcss.all, sty.svg__ct4BT)}
                        role={"img"}
                      />
                    }
                    title={"Fast Prototyping"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__uO0T3
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <PencilIcon
                        className={classNames(defaultcss.all, sty.svg___7Jwn9)}
                        role={"img"}
                      />
                    }
                    title={"Design Phase"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__niXfw
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <LightningIcon
                        className={classNames(defaultcss.all, sty.svg__nsYw)}
                        role={"img"}
                      />
                    }
                    title={"Develop & Launch"}
                  />
                </p.Stack>
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox___2OsmR)} />
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__c46Wy)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox___0Rz6)}
            >
              <Section
                className={classNames("__wab_instance", sty.section___24Ilq)}
                subtitle={
                  "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__yiFRs)}
              >
                <FacebookLogoIcon
                  className={classNames(defaultcss.all, sty.svg__btlTn)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(defaultcss.all, sty.svg___9O4A)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(defaultcss.all, sty.svg__sk6F8)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(defaultcss.all, sty.svg__f6GO)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(defaultcss.all, sty.svg__aSh6A)}
                  role={"img"}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />

              <HomeCta
                data-plasmic-name={"homeCta"}
                data-plasmic-override={overrides.homeCta}
                className={classNames("__wab_instance", sty.homeCta)}
              />

              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </p.Stack>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial", "homeCta", "footer"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */