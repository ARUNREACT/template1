import {
  Developer,
  Firstsildes,
  Images,
  Layout1,
  Point,
  Secondsildes,
} from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Platform() {
  return (
    <div className="utility">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2="https://d33wubrfki0l68.cloudfront.net/cd28ee174a211ea466bb4c06fe40ab0791dfe2b9/8ad6d/assets/img/developers/developer-landing-page.svg"
          imgh1={`𝗗𝗲𝘃𝗲𝗹𝗼𝗽 𝗳𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝘀 𝘄𝗶𝘁𝗵 𝗘𝗣𝗦`}
          imgp2={`Simple & modular APIs, libraries & SDKs. Go live instantly with our plug & play UI flows. Leverage our large technology & distribution network to grow your business`}
          btnclassname={"button"}
          btnvalue={`Ty for free`}
        />
        <div className="mb-3 mt-5 py-4">
          <Layout1
            layout1h5={`Your own financial platform`}
            layout1h2={`𝗘𝗣𝗦 (𝗘𝗸𝗼 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 𝗦𝗲𝗿𝘃𝗶𝗰𝗲𝘀) 𝗰𝗮𝗻 𝗯𝗲 𝘂𝘀𝗲𝗱 𝗯𝘆…`}
            line={" span mb-4"}
          />
        </div>
        <div className="ma">
          <Secondsildes
            img2="https://d33wubrfki0l68.cloudfront.net/f12be13cefbb25161b7a29a9259122dfffd7a727/7f0f3/assets/img/main/developers-opt.svg"
            imgh2={`A Developer`}
            imgp2={`• Create solutions for yourself and others with our easy to use Libraries & SDKs.`}
            imgp3={`• Contribute to our open-source initiatives.`}
          />
          <Firstsildes
            img1="https://d33wubrfki0l68.cloudfront.net/c75bf37d8dce81f6b4270547cec1740adb50becf/f314d/assets/img/developers/enterprise-opt.svg"
            imgh1={`An Enterprise`}
            imgp1={`• Automate with our services.`}
            imgp2={`• Scale your business with our suite of products`}
          />
        </div>
      </div>

      <div className="col-12 main-benefits mt-5 py-3 text-center">
        <div className="col-lg-10 mx-auto d-flex justify-content-center">
          <div className="d-flex col-md-5 col-sm-6 justify-content-evenly flex-wrap">
            <Point point1p={"Enterprise"} />
            <Point point1p={"Developer"} />
          </div>
        </div>
        <Layout1 layout1h2={`𝗡𝗼 𝗺𝗮𝘁𝘁𝗲𝗿 𝘄𝗵𝗼 𝘆𝗼𝘂 𝗮𝗿𝗲, 𝘄𝗲’𝘃𝗲 𝗴𝗼𝘁 𝘆𝗼𝘂 𝗰𝗼𝘃𝗲𝗿𝗲𝗱`} />
      </div>

      <div className="col-lg-10 mx-auto text-center mt-4">
        <Layout1
          layout1h5={`Available as APIs & SDKs`}
          layout1h2={`𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗣𝗿𝗼𝗱𝘂𝗰𝘁𝘀`}
          line={" span mb-4"}
        />

        <div className="developer-product text-center">
          <Developer
            devoph4={`Money Transfer`}
            devopimg={
              "https://d33wubrfki0l68.cloudfront.net/e6c1f8bcd707a56469a91a7b872f62a50635a727/33b79/assets/img/money-transfer/money-transfer.svg"
            }
            li={"li"}
            devopa1={`Domestic Money Transfer API`}
            devopa3={`View Documentation`}
          />
          <Developer
            devoph4={`Disbursals`}
            devopimg={
              "https://d33wubrfki0l68.cloudfront.net/1615a34701003f0d957ac7f16b07aa36519746fb/fd7b9/assets/img/developers/aeps-main.svg"
            }
            li={"li"}
            devopa1={`Disbursals`}
            li1={"li"}
            devopa2={`Fund Settlement API`}
            devopa3={`View Documentation`}
          />
          <Developer
            devoph4={`Collections`}
            devopimg={
              "https://d33wubrfki0l68.cloudfront.net/80a4afdfb9a15004f8977ad6b4f32ec74752ee8c/b8c91/assets/img/developers/assisted-cash-management-opt.svg"
            }
            li={"li"}
            devopa1={`Cash Collection API`}
            devopa3={`View Documentation`}
          />
          <Developer
            devoph4={`Verification`}
            devopimg={
              "https://d33wubrfki0l68.cloudfront.net/c446b48daba98d50c1b7a71ab1c6ba41520e8e66/d5255/assets/img/developers/bank-verification-opt.svg"
            }
            li={"li"}
            devopa1={`PAN Verification API`}
            li1={"li"}
            devopa2={`Account Verification API`}
            devopa3={`View Documentation`}
          />
        </div>
      </div>
      <Dashboardfooter />
    </div>
  );
}
