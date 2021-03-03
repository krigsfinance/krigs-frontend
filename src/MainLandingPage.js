import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature3 from "components/features/TwoColSingleFeatureWithStats3.js";
import MainFeature4 from "components/features/TwoColSingleFeatureWithStats4.js";
import MainFeature5 from "components/features/TwoColSingleFeatureWithStats5.js";
import MainFeature6 from "components/features/TwoColSingleFeatureWithStats6.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";



export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Building the Future of Digital Asset <HighlightedText> Insurance</HighlightedText></>}
        description="A decentralized P2P insurance marketplace with easy claims and instant payouts. Powered by Polkadot."
        imageSrc="https://insured.finance/wp-content/uploads/2020/12/insured-hero-image.svg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="join"
      />
	  <MainFeature2
        heading={
          <>
            A Blockchain-Based P2P <HighlightedText>Insurance Marketplace.</HighlightedText>
          </>
        }
        showDecoratorBlob={false}
      />
	  
	  <MainFeature3
        heading={
          <>
            Smart Contract <HighlightedText>Coverage</HighlightedText>
          </>
        }
        showDecoratorBlob={false}
      />
	  
	  <MainFeature4
        heading={
          <>
            Cryptocurrency Holdings and 
 <HighlightedText>Exchange Cover</HighlightedText>
          </>
        }
        showDecoratorBlob={false}
      />
	  
	  <MainFeature5
        heading={
          <>
            Protect Against <HighlightedText>Stablecoin Failure</HighlightedText>
          </>
        }
        showDecoratorBlob={false}
      />
	  <MainFeature6
        heading={
          <>
            Rug Pull <HighlightedText>Cover</HighlightedText>
          </>
        }
        showDecoratorBlob={false}
      />
	  
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
     
    </AnimationRevealPage>
  );
}
