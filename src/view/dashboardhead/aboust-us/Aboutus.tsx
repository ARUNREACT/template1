import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Aboutus() {
  return (
    <div className="">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto mainpagehead about-us">
        <h1 className="pt-4">𝗔𝗕𝗢𝗨𝗧 𝗨𝗦</h1>
        <hr />

        <p>
          Back in 2006, two brothers, while working for a telecom startup, 6D
          Technologies sat together at the end of a frustrating day with their
          bankers and wondered - why do bank work just 6 hours a day for the
          public when telecom companies work 24x7, without any downtime. They
          mused on how banking services could be brought to consumers 24x7, via
          a network of Business Correspondents.
        </p>
        <p>
          Thus began the journey of PayPe. Abhinav and Abhishek believed in the
          power of taking banking services to vast majority in real time, so
          much that they set in motion an exit from 6D and developed solutions
          for PayPe. What followed was a string of inventions, patented all over
          the world, partnerships with the largest banks in India, and setting
          up of a vast chain of merchant outlets to work as Business
          Correspondents to provide banking services to customers, specially
          form weaker economic sections of the society.
        </p>
        <p>
          PayPe leveraged every progressive technology available to build
          solutions. From telecom based USSD to web based process and finally
          app based platform.
        </p>
        <p>
          True to its mission of taking banking and financial services to all,
          PayPe has built over 100 services on its platform to cater to all
          needs a customer has from a bank, and even offered open APIs to truly
          democratise them.
        </p>
        <p>
          PayPe has served over 50 Million customers till date, is available
          over a merchant network of 1,50,000 customers and enables over 7
          Million banking transactions a month. This it does, via its own
          network and by providing APIs to over 300 partners who have built
          their own business on top of the PayPe platform.
        </p>
        <p>
          PayPe is committed to ever expanding its range of financial services
          with its mission to take digital economy solutions to the next 500
          Million Indians and across developing markets around the world.
        </p>
        <p>
          As a truly inclusive organisation, PayPe constantly seeks partnerships
          to leverage its APIs and its network. And keeping true to the vision
          of Prime Minister Modi - “say yes to digital payments, no to cash”,
          PayPe welcomes merchants, developers, brands and service providers to
          come join hands with us and help us take Digital India to Bharat.
        </p>
      </div>
      <Dashboardfooter />
    </div>
  );
}
