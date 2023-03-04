import {
  Layout1,
  Button,
  Images,
  Secondsildes,
  Firstsildes,
} from "../../../component/Layout";
import { Dashboardfooter } from "../../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Lending() {
  return (
    <div className="container-fluid p-0 lending">
      <Dashboardhead />
      <div className="col-lg-10 mx-auto p-0 text-center mainpagehead">
        <Secondsildes
          img2={require("../../../asset/sample1/sample2.png")}
          imgh1={`Become PayPe's Partner to Get Business Loan`}
          imgp2={`PayPe provides financing options for their merchants to grow with Connect`}
          btnclassname={"button"}
          btnvalue={`Contact Sale`}
        />
      </div>

      <div className="col-12 main-benefits mt-5 py-4 text-center">
        <div className="mt-4 text-center py-3">
          <Layout1 layout1h2={`𝗪𝗲 𝗽𝗿𝗼𝘂𝗱𝗹𝘆 𝗺𝗮𝗸𝗲 𝗶𝗻 𝗜𝗻𝗱𝗶𝗮`} line={" span mb-2"} />
          <div className="d-flex flex-wrap justify-content-around india-img">
            <Images
              img="https://static.vecteezy.com/system/resources/previews/009/638/183/original/business-icon-report-file-3d-illustration-png.png"
              imgh5={`FLEXIBLE TENURE`}
            />
            <Images
              img="https://static.vecteezy.com/system/resources/previews/009/638/183/original/business-icon-report-file-3d-illustration-png.png"
              imgh5={`FLEXIBLE TENURE`}
            />
            <Images
              img="https://static.vecteezy.com/system/resources/previews/009/638/183/original/business-icon-report-file-3d-illustration-png.png"
              imgh5={`FLEXIBLE TENURE`}
            />
          </div>
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

      <div className="business-card mt-5 py-5 p-2 text-center">
        <Layout1
          layout1h2={`𝗛𝗼𝘄 𝗰𝗮𝗻 𝗹𝗼𝗮𝗻𝘀 𝗳𝗿𝗼𝗺 𝗘𝗸𝗼 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂 𝗴𝗿𝗼𝘄 𝘆𝗼𝘂𝗿 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀 ?`}
        />

        <div className="india-img mt-5 mb-3">
          <Images
            img="https://cdn3d.iconscout.com/3d/premium/thumb/wallet-4727264-3928181.png"
            imgh5={`Get freedom to do more transactions`}
            imgp1={`Double your income with loans starting as low as 0.05% per day that enables you to do more transactions.`}
          />
          <Images
            img="https://cdn3d.iconscout.com/3d/premium/thumb/wallet-4727264-3928181.png"
            imgh5={`Get opportunity to upgrade your business`}
            imgp1={`Use funds to mass purchase stock, upgrade technology or repair machinery and equipment because the latest technology helps businesses to grow rapidly.`}
          />
          <Images
            img="https://cdn3d.iconscout.com/3d/premium/thumb/wallet-4727264-3928181.png"
            imgh5={`Expand your reach to more customers`}
            imgp1={`With more funds, you can reach more customers and explore more retail solutions to build your business and start selling more products from your shop to reach more customer.`}
          />
        </div>
      </div>

      <div className="col-lg-10 mx-auto mt-5 text-center">
        <Layout1 layout1h2={`𝗢𝘂𝗿 𝗧𝗿𝘂𝘀𝘁𝗲𝗱 𝗣𝗮𝗿𝘁𝗻𝗲𝗿𝘀`} line={" span mb-2"} />
        <div className="d-flex flex-wrap justify-content-around partners my-4">
          <Images img="https://d33wubrfki0l68.cloudfront.net/ea38fe023d65a70cb82ea9a09925737d87cfbf57/0444a/assets/img/lending-page/insta-money.webp" />
          <Images img="https://d33wubrfki0l68.cloudfront.net/ea38fe023d65a70cb82ea9a09925737d87cfbf57/0444a/assets/img/lending-page/insta-money.webp" />
          <Images img="https://d33wubrfki0l68.cloudfront.net/ea38fe023d65a70cb82ea9a09925737d87cfbf57/0444a/assets/img/lending-page/insta-money.webp" />
          <Images img="https://d33wubrfki0l68.cloudfront.net/ea38fe023d65a70cb82ea9a09925737d87cfbf57/0444a/assets/img/lending-page/insta-money.webp" />
        </div>
        <Button
          btnclassname={"button mx-3 mt-3"}
          btnvalue={`Fair Practices Code`}
        />
      </div>

      <div className="mobile py-4 mt-5 ">
        <Firstsildes
          img1="https://d33wubrfki0l68.cloudfront.net/24887f33d32971009266f843711369efd4e05b05/5d1b5/assets/img/lending-page/contact-us.png"
          imgh01={`Start your business now`}
          line={"span mb-3 mt-3 mx-1"}
          imgp1={`Write to us for more information`}
          btnclassname={"button"}
          btnvalue={`Contact Sale`}
        />
      </div>

      <Dashboardfooter />
    </div>
  );
}
