import "./Dashboardfooter.styles.css";

export function Footeroption(props: any) {
  return (
    <li className={props.footerli}>
      <h5 className={props.footheadclassname}>{props.footerhead}</h5>
      <a className="" href={props.href} target={props.footertarget}>
        {props.footaname}
        <span>{props.footeroption}</span>
      </a>
    </li>
  );
}

export function Dashboardfooter() {
  return (
    <div data-aos="fade-up" className="main-footer">
      <div className="col-lg-10 mt-5 mx-auto py-sm-5 py-2 ">
        <div className="row foot justify-content-center ">
          <div className="footimg col-12 col-sm-9 col-lg-4 ">
            <img
              src="https://www.paype.co.in/static/media/Paype%20circle.d66c49586b04e5d30bff.png"
              alt="paype logo"
              className="img-fluid  mt-sm-4 "
            />
            <p className="mt-3">
              Eko has been catering to millions of low and moderate-income
              Indians by providing them with a cash-in point to convert their
              cash to digital and make payments for an array of services
            </p>
            <h6 className="mt-3">© 2022 PayPe Technologies Private Limited.</h6>
          </div>

          <div className="foot1 col-11 col-sm-6 col-md-4 col-lg-3 ">
            <Footeroption
              footheadclassname={"foothead my-4 pt-3 "}
              footerhead={"DEVELOPER PRODUCTS"}
            />
            <Footeroption href={"/"} footeroption={"DMT API"} />
            <Footeroption href={"/"} footeroption={"AePS Cashout SDK"} />
            <Footeroption href={"/"} footeroption={"Fund Settlement API"} />
            <Footeroption href={"/"} footeroption={"Cash Collection API"} />
            <Footeroption href={"/"} footeroption={"Account Verification"} />
            <Footeroption href={"/"} footeroption={"PAN Verification API"} />
          </div>

          <div className="foot1 col-11 col-sm-4 col-md-3 col-lg-2">
            <Footeroption
              footheadclassname={"foothead my-4 pt-3 "}
              footerhead={"COMPANY"}
            />
            <Footeroption href={"/"} footeroption={"About Us"} />
            <Footeroption href={"/"} footeroption={"Privacy Policy"} />
            <Footeroption href={"/"} footeroption={"Terms & Conditions"} />
            <Footeroption href={"/"} footeroption={"Grievance"} />
          </div>

          <div className="text-center col-12 col-sm-6 col-md-4 col-lg-3 foot1">
            <Footeroption
              footheadclassname={"foothead my-4 pt-3"}
              footerhead={"CONNECT US"}
            />

            <div className="row mt-4">
              <ul className="footer-icon">
                <li className="linkedin">
                  <a
                    href="https://www.linkedin.com/company/paypetechnologies/"
                    target="blank"
                  >
                    <i className="fa">&#xf08c;</i>
                  </a>
                </li>
                <li className="twitter">
                  <a
                    href="https://twitter.com/PayPeTech?t=OSwJGDWENIbXqwvpw8LbfQ&s=08"
                    target="blank"
                  >
                    <i className="fa">&#xf099;</i>
                  </a>
                </li>
                <li className="facebook">
                  <a
                    href="https://www.facebook.com/PaypeTechnology"
                    target="blank"
                  >
                    <i className="fa">&#xf082;</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-11 col-12 mt-3 px-lg-5 footerdetails">
        <h6>© 2022 PayPe Technologies Private Limited.</h6>
        <p>
          PayPe is not a bank but a technology platform for digital financial
          services and advisory in partnership with RBI licensed Banks, SEBI
          licensed AMCS and IRDAI licensed Insurers. All funds in the bank
          account are insured as per limits under the RBI's deposit Insurance
          scheme.
        </p>
      </div> */}
      </div>
    </div>
  );
}