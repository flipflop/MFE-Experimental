<script lang="ts" setup>
import {
  ZvNavigation,
  ZvFooter,
  ZvButton,
  ZvStage,
  ZvActionCard,
  ZvIcon,
  ZvQuote,
  ZvImage,
} from '@zurich/web-components/vue';
</script>

<template>
  <zv-navigation :menu="[]"></zv-navigation>

  <main>
    <zv-stage
      image-src="https://zurich.widen.net/content/l0qky8xpn3"
      custom-str="bg:#C5D7EF"
    >
      <span slot="header"><em>Welcome</em> to Zurich Insurance</span>

      Empowering you with comprehensive insurance solutions: discover a world of
      tailored insurance coverage and personalized services.

      <zv-button slot="actions" icon="arrow-right:line" icon-right>
        Find out more
      </zv-button>
    </zv-stage>

    <section id="discover-our-services" z-layout>
      <h3 z-heading>Discover <em>our</em> services</h3>

      <div z-flex="200" z-align="center">
        <zv-action-card pictogram="duo:dark" header="Personal Insurance">
          Zurich offers a range of personal insurance services to protect
          individuals and their families.

          <zv-button slot="button" config="secondary">Read more</zv-button>
        </zv-action-card>

        <zv-action-card
          pictogram="work-sustainability-2:dark"
          header="Business Insurance"
        >
          Zurich offers tailored insurance solutions to protect their assets,
          employees, and operations.

          <zv-button slot="button" config="secondary">Read more</zv-button>
        </zv-action-card>

        <zv-action-card
          pictogram="storm-surge:dark"
          header="Risk Management Services"
        >
          Zurich offers risk management services to help businesses identify,
          assess, and mitigate potential risks.
          <zv-button slot="button" config="secondary">Read more</zv-button>
        </zv-action-card>
      </div>
    </section>

    <section z-layout style="background-color: var(--zg-white-zurich)">
      <h3 z-heading>All your policies in <em>one</em> place</h3>

      <div z-flex="100">
        <ul>
          <li>
            <h4><zv-icon icon="key:line" /> Policy access</h4>
            <p>
              The Zurich insurance app allows users to easily access their
              policy information on-the-go.
            </p>
          </li>
          <li>
            <h4><zv-icon icon="document-upload:line" />Claims submission</h4>
            <p>
              With the Zurich insurance app, filing an insurance claim is a
              seamless process.
            </p>
          </li>
          <li>
            <h4><zv-icon icon="flashing-light:line" /> Emergency assistance</h4>
            <p>
              The Zurich insurance app provides users with immediate access to
              emergency assistance services.
            </p>
          </li>
        </ul>

        <zv-image
          image-src="https://zds.zurich.com/templates/assets/mock_up.png"
          alt="Mock up"
        />
      </div>
    </section>

    <section id="how-can-we-help-you" z-layout>
      <h3 z-heading>How we can <em>help</em> you</h3>

      <ul
        z-gallery="150"
        style="--z-gallery--min: 16rem; --z-action-card--shadow: none"
      >
        <li>
          <zv-action-card
            pictogram="growth-mindset:dark"
            header="Comprehensive Coverage"
          >
            We offer robust coverage options to protect you against a wide range
            of risks.
          </zv-action-card>
        </li>
        <li>
          <zv-action-card
            pictogram="gesture-person-duo:dark"
            header="Responsive Customer Service"
          >
            We provide prompt and reliable support to address any inquiries.
          </zv-action-card>
        </li>
        <li>
          <zv-action-card
            pictogram="creation:dark"
            header="Fast and Efficient Claims Processing"
          >
            We aim to settle claims quickly and efficiently to minimize
            disruptions.
          </zv-action-card>
        </li>
        <li>
          <zv-action-card pictogram="team:dark" header="Customized Solutions">
            We offer tailored solutions for every different custom needs.
          </zv-action-card>
        </li>
        <li>
          <zv-action-card pictogram="earth-care:dark" header="Global Presence">
            We provide coverage and support to customers wherever they may be.
          </zv-action-card>
        </li>
        <li>
          <zv-action-card
            pictogram="storm-surge:dark"
            header="Risk Management Expertise"
          >
            Zurich goes beyond insurance by offering risk management services
            and resources.
          </zv-action-card>
        </li>
      </ul>
    </section>

    <section>
      <zv-quote
        author-name="Daniela Miller"
        image-src="https://zurich.widen.net/content/oovxonsawl"
        custom-str="bg: #8cd8ed"
        description="CEO of CompanyName"
      >
        Zurich has truly been a valuable partner in managing our insurance
        needs, allowing us to focus on our core business with confidence. We
        have been incredibly satisfied with the exceptional service provided by
        Zurich.
      </zv-quote>
    </section>

    <section z-layout style="background-color: var(--zg-white-zurich)">
      <h3 z-heading>Industry <em>Knowledge</em></h3>

      <div z-flex="200" z-align="center:top">
        <zv-article-card
          button-text="Read more"
          button-icon="arrow-long-right:line"
          button-icon-right
          image-src="https://zurich.widen.net/content/8vkzxfax9h"
          header="Navigating Cybersecurity Risks in the Digital Age"
        >
          Learn how Zurich's comprehensive cyber insurance solutions can
          safeguard individuals and businesses against cyber threats.
        </zv-article-card>

        <zv-article-card
          button-text="Read more"
          button-icon="arrow-long-right:line"
          button-icon-right
          image-src="https://zurich.widen.net/content/q8wfrs0cab"
          header="Preparing for Natural Disasters: Ensuring Resilience and Recovery"
        >
          This article explores the impact of natural disasters on individuals
          and businesses and provides guidance on how to prepare for such
          events.
        </zv-article-card>

        <zv-article-card
          button-text="Read more"
          button-icon="arrow-long-right:line"
          button-icon-right
          image-src="https://zurich.widen.net/content/fyuccdxlqg"
          header="Understanding Liability Insurance"
        >
          Gain a clear understanding of the importance of liability insurance
          for businesses. Learn how Zurich's tailored coverage options protect
          assets and ensure financial stability.
        </zv-article-card>
      </div>
    </section>

    <zv-stage
      config="slim"
      header="Need help?"
      custom-str="bg: #DAD2BD"
      image-src="https://zurich.widen.net/content/nxgsfk2igc"
    >
      <p>
        Whether you have questions about your policy, need assistance with a
        claim, or require personalized insurance advice, our experts team will
        promptly assist you.
      </p>
      <zv-button icon="mail-closed:line">Contact us</zv-button>
    </zv-stage>
  </main>

  <zv-footer :columns="[]" :social="{}"></zv-footer>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}

section[z-layout] {
  padding: var(--zs-600) 0;
}
</style>
