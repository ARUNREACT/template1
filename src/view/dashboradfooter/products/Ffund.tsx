import {
  Firstsildes,
  Images,
  Layout1,
  Secondsildes,
} from "../../../component/Layout";
import { Dashboardhead } from "../../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";

export function Ffund() {
  return (
    <div className="aadhaar">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2={require("../../../asset/sample1/retailer.png")}
          imgh1={`ððð¤ð ð¬ðð¥ðð«ð² & ð¯ðð§ðð¨ð« ð©ðð²ð¦ðð§ð­ð¬ ððð¬ð¢ð¥ð²`}
          imgp2={`A simple and highly secure cash withdrawing ability for your customers using Aadhaar Banking (AePS) and ensuring that you earn more with every transaction.`}
          btnclassname={"button"}
          btnvalue={`Try for free`}
        />
      </div>

      <div className="col-lg-10 mx-auto text-center my-5">
        <Layout1
          layout1h5={`Earn with Aadhaar Banking (AePS)`}
          layout1h2={`ðð»ððð®ð»ð ðð®ð¹ð®ð¿ð ð±ð¶ðð¯ðð¿ðð®ð¹ & ðð²ð»ð±ð¼ð¿ ð½ð®ððºð²ð»ð ððð¶ð»ð´ PayPeâð ð³ðð»ð± ðð²ððð¹ð²ðºð²ð»ð ðð£ð`}
          line={" span mb-4"}
          layout1p1={`Aadhar banking (AePS - Aadhaar Enabled Payment System) helps you turn your own shop into an ATM. It provides you the ability to deliver services such as cash deposit, cash withdrawals, and balance check to your customers.`}
        />

        <Firstsildes
          img1={require("../../../asset/sample1/transaction-assurance.png")}
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Secondsildes
          img2={require("../../../asset/sample1/mainsample.png")}
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Firstsildes
          img1={require("../../../asset/sample1/transaction-assurance.png")}
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Secondsildes
          img2={require("../../../asset/sample1/mainsample.png")}
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Firstsildes
          img1={require("../../../asset/sample1/transaction-assurance.png")}
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
      </div>
      <div className="col-12 main-benefits mt-5 py-5 text-center">
        <div className="col-lg-11 mx-auto mb-3 p-0">
          <Layout1 layout1h2={`ðð²ð»ð²ð³ð¶ðð`} line={" span mb-4"} />

          <div className="d-flex flex-wrap benefits1 justify-content-around text-center">
            <Images
              img={require("../../../asset/sample1/sample2.png")}
              imgh5={"ðð§ð¬ð­ðð§ð­ ð«ðð­ðð¢ð¥ðð« ð¨ð§ðð¨ðð«ðð¢ð§ð "}
              imgp1={`Our API is well-documented and easy to understand. Integrating is as easy as it can get. We provide 24x7 manual integration support just in case, leaving no stone unturned to make the integration process seamless.`}
            />
            <Images
              img={require("../../../asset/sample1/sample2.png")}
              imgh5={"ðð§ðð®ð¬ð­ð«ð²-ð¥ðððð¢ð§ð  ð¬ð®ðððð¬ð¬ ð«ðð­ðð¬"}
              imgp1={`The documentation for our APIs is comprehensive and comprehensible! We constantly update it to explain the minutest detail. Whether you use Python, Java, PHP, or C#, we have you covered!`}
            />
          </div>

          <Images
            imgclassname={"trustimg mt-5"}
            img={require("../../../asset/sample1/shield.png")}
          />
          <Layout1
            layout1h2={`PayPe ð§ð¿ððð`}
            line={"span mb-4"}
            layout1p1={`You can assure your customers that their money and data is safe. PayPeâs trust is unparalleled`}
          />
        </div>
      </div>
      <div className="getting-started py-5 text-center">
        <Layout1 layout1h2={`ðð²ððð¶ð»ð´ ð¦ðð®ð¿ðð²ð±`} line={" span mb-2"} />
        <div className="getting-child text-start mt-5">
          <Layout1 layout1h5={`ð¦ðð²ð½ ð­ :`} layout1p1={`Sign Up on Connect`} />
          <Layout1
            layout1h5={`ð¦ðð²ð½ ð® :`}
            layout1p1={`Start your transaction on Connect`}
          />
          <Layout1 layout1h5={`ð¦ðð²ð½ ð¯ :`} layout1p1={`Apply for loan`} />
          <Layout1 layout1h5={`ð¦ðð²ð½ ð° :`} layout1p1={`Know your eligibility`} />
        </div>
      </div>

      <div className="col-lg-10 mx-auto mt-5 mb-4 text-center">
        <Layout1 layout1h2={`ð¢ðð¿ ð§ð¿ðððð²ð± ð£ð®ð¿ðð»ð²ð¿ð`} line={" span mb-4"} />
        <div className="d-flex flex-wrap justify-content-around partners">
          <Images img={require("../../../asset/sample1/aeps.png")} />
          <Images img={require("../../../asset/sample1/aeps.png")} />
          <Images img={require("../../../asset/sample1/aeps.png")} />
          <Images img={require("../../../asset/sample1/aeps.png")} />
          <Images img={require("../../../asset/sample1/aeps.png")} />
        </div>
      </div>

      <div className=" main-benefits py-4">
        <div className="col-lg-10 mx-auto">
          <Secondsildes
            img2={require("../../../asset/sample1/partner.png")}
            imgh1={`ðð²ð°ð¼ðºð² PayPe ð£ð®ð¿ðð»ð²ð¿ & ðð®ð¿ð» ð ð¼ð¿ð²`}
            line={"span mb-3 mx-1"}
            imgp2={`A simple and highly secure cash withdrawing ability for your customers using Aadhaar Banking (AePS) and ensuring that you earn more with every transaction.`}
            btnclassname={"button"}
            btnvalue={`Try for free`}
            btnclassname1={"button mx-1 mx-sm-4"}
            btnvalue1={`Try for free`}
          />
        </div>
      </div>
      <Dashboardfooter />
    </div>
  );
}
