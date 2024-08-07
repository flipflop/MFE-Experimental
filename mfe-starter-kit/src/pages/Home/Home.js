import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PageContext from "../../components/PageContext/PageContext";
import {
  ZNavigation,
  ZStage,
  ZProgressTracker,
  ZProgressBar,
} from "@zurich/web-components";
import {
  ZrProgressTracker,
  ZrDate,
  ZrSmilingZ,
  Zrlogo,
  ZrArticleCard,
  ZrButton,
  ZrStage,
  ZrNavigation,
  ZrActionCard,
} from "@zurich/web-components/react";

function Home() {
  const usePageContext = useContext(PageContext);
  let appPrefix = usePageContext.app_prefix;

  let linkStyle = {
    color: "black",
  };

  return (
    <section className="home-page" data-app-prefix={usePageContext.app_prefix}>
      <ZrNavigation></ZrNavigation>
      <main>
        <z-stage header="Welcome to ZForm" config="slim">
          <p>
            Whether you have questions about your policy, need assistance with a
            claim, or require personalized insurance advice, our AI Advisors
            will promptly assist you.
          </p>
          <ZrButton icon="mail-closed:line">Contact us</ZrButton>
        </z-stage>

        <section
          id="progress"
          z-center
          style={{
            "--z-progress-track-steps": "3",
            "--z-bg": "var(--zg-white-zurich",
            "background-color": "var(--z-bg)",
            padding: "var(--zs-250) 100px",
          }}
        >
          <z-progress-tracker
            steps='[
                        {"text":"Step 1"},
                        {"text":"Step 2"},
                        {"text":"Step 3"},
                        {"text":"Step 4"}
                    ]'
            value="3"
            config="horizontal"
          ></z-progress-tracker>
        </section>

        <section z-layout="">
          <h3>Personal information</h3>
          <p>
            Complete your personal information to proceed with the enrolment
            process. We will require your full name, date of birth and current
            adress. Leave any comment if needed.
          </p>

          <form z-form="shaped">
            <fieldset z-radio-select="inline">
              <legend>Gender</legend>
              <label>
                <span>Female</span>
                <input type="radio" name="gender" value="female" />
              </label>
              <label>
                <span>Male</span>
                <input type="radio" name="gender" value="male" />
              </label>
              <label>
                <span>Other</span>
                <input type="radio" name="gender" value="other" />
              </label>
            </fieldset>

            <fieldset z-fieldset="">
              <legend>Name</legend>

              <fieldset z-fieldset="row">
                <label z-text-input="">
                  <span>Name</span>
                  <small></small>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required=""
                  />
                </label>

                <label z-text-input="">
                  <span>Surname</span>
                  <small></small>
                  <input type="text" name="surname" placeholder="Surname" />
                </label>
              </fieldset>

              <label z-date-input="">
                <span>Date of birth</span>
                <small></small>
                <input type="date" name="birthday" required="" />
              </label>

              <label z-text-input="">
                <span>Nationality</span>
                <small></small>
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  required=""
                />
              </label>
            </fieldset>

            <fieldset z-fieldset="">
              <legend>Current address</legend>

              <label z-text-input="">
                <span>Street address</span>
                <small></small>
                <input
                  type="text"
                  name="address"
                  placeholder="Street address"
                />
              </label>

              <fieldset z-fieldset="row">
                <label z-number-input="">
                  <span>Postal code</span>
                  <small></small>
                  <input
                    type="number"
                    name="postal-code"
                    placeholder="Postal code"
                  />
                </label>

                <label z-text-input="">
                  <span>Country</span>
                  <small></small>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    required=""
                  />
                </label>
              </fieldset>
            </fieldset>

            <fieldset z-fieldset="">
              <legend>Comments</legend>

              <label z-textarea="">
                <span>Comment</span>
                <small></small>
                <textarea name="comment" placeholder="Comment"></textarea>
              </label>
            </fieldset>

            <label z-checkbox="">
              <span>
                I accept the{" "}
                <a z-link="" href="#">
                  Terms and conditions
                </a>
              </span>
              <input type="checkbox" name="terms-and-conditions" required="" />
            </label>

            <label z-checkbox="">
              <span>
                I agree to the{" "}
                <a z-link="" href="#">
                  Privacy Policy
                </a>
              </span>
              <input type="checkbox" name="privacy-policy" required="" />
            </label>
          </form>

          <section z-flex="" z-align="between">
            <button z-button="">Previous</button>
            <button z-button="" icon-right="" disabled="">
              Next
            </button>
          </section>
        </section>
      </main>

      <div>
        <ul>
          <li>
            <Link to={appPrefix + "/"} style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to={appPrefix + "/settings"} style={linkStyle}>
              Settings
            </Link>
          </li>
          <li>
            <Link to={appPrefix + "/no-route"} style={linkStyle}>
              Not Found
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
