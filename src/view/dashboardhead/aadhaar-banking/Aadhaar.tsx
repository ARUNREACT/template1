import {
  Firstsildes,
  Images,
  Layout1,
  Secondsildes,
} from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Aadhaar() {
  return (
    <div className="aadhaar">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2="https://d33wubrfki0l68.cloudfront.net/c34496eb3511fa6e5d7e83b32ce30b23fd104104/84610/assets/img/aadhaar-banking/aeps_hero.svg"
          imgh1={`𝗔𝗲𝗣𝗦 - 𝗔𝗮𝗱𝗵𝗮𝗮𝗿 𝗘𝗻𝗮𝗯𝗹𝗲𝗱 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗦𝘆𝘀𝘁𝗲𝗺`}
          imgp2={`A simple and highly secure cash withdrawing ability for your customers using Aadhaar Banking (AePS) and ensuring that you earn more with every transaction.`}
          btnclassname={"button"}
          btnvalue={`Try for free`}
        />
      </div>

      <div className="col-lg-10 mx-auto text-center my-5">
        <Layout1
          layout1h5={`Earn with Aadhaar Banking (AePS)`}
          layout1h2={`𝗔𝗮𝗱𝗵𝗮𝗿 𝗯𝗮𝗻𝗸𝗶𝗻𝗴 (𝗔𝗲𝗣𝗦) 𝗧𝘂𝗿𝗻𝘀 𝘆𝗼𝘂𝗿 𝘀𝗵𝗼𝗽 𝗶𝗻𝘁𝗼 𝗮𝗻 𝗔𝗧𝗠`}
          line={" span mb-4"}
          layout1p1={`Aadhar banking (AePS - Aadhaar Enabled Payment System) helps you turn your own shop into an ATM. It provides you the ability to deliver services such as cash deposit, cash withdrawals, and balance check to your customers.`}
        />

        <Firstsildes
          img1="https://d33wubrfki0l68.cloudfront.net/15a06b29942279de7362339608e9f76ab0347614/713b2/assets/img/money-transfer/transaction-assurance.svg"
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Secondsildes
          img2="https://d33wubrfki0l68.cloudfront.net/15a06b29942279de7362339608e9f76ab0347614/713b2/assets/img/money-transfer/transaction-assurance.svg"
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Firstsildes
          img1="https://d33wubrfki0l68.cloudfront.net/15a06b29942279de7362339608e9f76ab0347614/713b2/assets/img/money-transfer/transaction-assurance.svg"
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Secondsildes
          img2="https://d33wubrfki0l68.cloudfront.net/15a06b29942279de7362339608e9f76ab0347614/713b2/assets/img/money-transfer/transaction-assurance.svg"
          imgh2={`Easy Cash transfer`}
          imgp2={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
        <Firstsildes
          img1="https://d33wubrfki0l68.cloudfront.net/15a06b29942279de7362339608e9f76ab0347614/713b2/assets/img/money-transfer/transaction-assurance.svg"
          imgh1={`Easy Cash transfer`}
          imgp1={`Customers can transfer cash to anyone by specifying their bank details right at your doorstep`}
        />
      </div>
      <div className="col-12 main-benefits mt-5 py-5 text-center">
        <div className="col-lg-10 mx-auto mb-3 p-0">
          <Layout1 layout1h2={`𝗕𝗲𝗻𝗲𝗳𝗶𝘁𝘀`} line={" span mb-4"} />

          <div className="d-flex flex-wrap benefits1 justify-content-around text-center">
            <Images
              img={require("../../../asset/sample1/sample2.png")}
              imgh5={"𝐈𝐧𝐬𝐭𝐚𝐧𝐭 𝐫𝐞𝐭𝐚𝐢𝐥𝐞𝐫 𝐨𝐧𝐛𝐨𝐚𝐫𝐝𝐢𝐧𝐠"}
              imgp1={`Our API is well-documented and easy to understand. Integrating is as easy as it can get. We provide 24x7 manual integration support just in case, leaving no stone unturned to make the integration process seamless.`}
            />
            <Images
              img={require("../../../asset/sample1/sample2.png")}
              imgh5={"𝐈𝐧𝐝𝐮𝐬𝐭𝐫𝐲-𝐥𝐞𝐚𝐝𝐢𝐧𝐠 𝐬𝐮𝐜𝐜𝐞𝐬𝐬 𝐫𝐚𝐭𝐞𝐬"}
              imgp1={`The documentation for our APIs is comprehensive and comprehensible! We constantly update it to explain the minutest detail. Whether you use Python, Java, PHP, or C#, we have you covered!`}
            />
          </div>

          <Images
            imgclassname={"trustimg mt-5"}
            img="https://d33wubrfki0l68.cloudfront.net/5aeae0cb91470535fc278118d89e6115b8250d56/a24d2/assets/img/PayPe-trust-opt.svg"
          />
          <Layout1
            layout1h2={`𝗘𝗸𝗼'𝘀 𝗧𝗿𝘂𝘀𝘁`}
            line={"span mb-4"}
            layout1p1={`You can assure your customers that their money and data is safe. PayPe’s trust is unparalleled`}
          />
        </div>
      </div>
      <div className="getting-started py-5 text-center">
        <Layout1 layout1h2={`𝗚𝗲𝘁𝘁𝗶𝗻𝗴 𝗦𝘁𝗮𝗿𝘁𝗲𝗱`} line={" span mb-2"} />
        <div className="getting-child text-start mt-5">
          <Layout1 layout1h5={`𝗦𝘁𝗲𝗽 𝟭 :`} layout1p1={`Sign Up on Connect`} />
          <Layout1
            layout1h5={`𝗦𝘁𝗲𝗽 𝟮 :`}
            layout1p1={`Start your transaction on Connect`}
          />
          <Layout1 layout1h5={`𝗦𝘁𝗲𝗽 𝟯 :`} layout1p1={`Apply for loan`} />
          <Layout1 layout1h5={`𝗦𝘁𝗲𝗽 𝟰 :`} layout1p1={`Know your eligibility`} />
        </div>
      </div>

      <div className="col-lg-10 mx-auto mt-5 mb-4 text-center">
        <Layout1 layout1h2={`𝗢𝘂𝗿 𝗧𝗿𝘂𝘀𝘁𝗲𝗱 𝗣𝗮𝗿𝘁𝗻𝗲𝗿𝘀`} line={" span mb-4"} />
        <div className="d-flex flex-wrap justify-content-around partners">
          <Images img="https://d33wubrfki0l68.cloudfront.net/6452df1ccd02d96d2be8d82b6840d2a03ac1ae6b/66021/assets/img/aadhaar-banking/aeps.png" />
          <Images img="https://d33wubrfki0l68.cloudfront.net/6452df1ccd02d96d2be8d82b6840d2a03ac1ae6b/66021/assets/img/aadhaar-banking/aeps.png" />
          <Images img="https://d33wubrfki0l68.cloudfront.net/6452df1ccd02d96d2be8d82b6840d2a03ac1ae6b/66021/assets/img/aadhaar-banking/aeps.png" />
          <Images img="https://d33wubrfki0l68.cloudfront.net/6452df1ccd02d96d2be8d82b6840d2a03ac1ae6b/66021/assets/img/aadhaar-banking/aeps.png" />
          <Images img="https://d33wubrfki0l68.cloudfront.net/6452df1ccd02d96d2be8d82b6840d2a03ac1ae6b/66021/assets/img/aadhaar-banking/aeps.png" />
        </div>
      </div>

      <div className=" main-benefits py-4">
        <div className="col-lg-10 mx-auto">
          <Secondsildes
            img2="https://d33wubrfki0l68.cloudfront.net/72608054363cc13272fcea23385cb29c85a252ff/3103b/assets/img/become-PayPe-partner-opt.svg"
            imgh1={`𝗕𝗲𝗰𝗼𝗺𝗲 𝗘𝗸𝗼 𝗣𝗮𝗿𝘁𝗻𝗲𝗿 & 𝗘𝗮𝗿𝗻 𝗠𝗼𝗿𝗲`}
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
