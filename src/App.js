import imagine from "./logoc4.jpg";
import imagine2 from "./tlf.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="drawer drawer-mobile main-container">
        {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> */}
        <div className="drawer-side h-100 w-15">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-6 w-80 bg-primary text-base-content h-100">
            <div className="avatar">
              <div className="w-30 rounded">
                <img src={imagine} />
              </div>
            </div>
            <p className="text-center text-3xl pt-10 ">Proiect C4 heheeh</p>
            <li className="pt-8">
              <a href=" https://www.apple.com/ro/">
                <p className=" text-xl">Apple.com</p>
              </a>
            </li>
            <li>
              <a href="https://www.emag.ro/apple/">
                <p className=" text-xl">Apple Shop</p>
              </a>
            </li>
            <li>
              <a href="https://www.apple.com/ro/iphone-14-pro/">
                <p className=" text-xl">New Iphone 14</p>
              </a>
            </li>
            <li>
              <a href=" https://youtu.be/FT3ODSg1GFE">
                <p className=" text-xl">iPhone 14 introduction</p>
              </a>
            </li>
            <li>
              <a href="https://youtu.be/v94jRN2FhGo">
                <p className=" text-xl ">iPhone 14 Review</p>
              </a>
            </li>
            <p className="text-xl pt-80 ">
              <a href="https://support.apple.com/contact ">
                {" "}
                Apple Support: Contact us
              </a>
            </p>
            <p className="text-xl pt-5">
              U.S. technical support: (800) APL–CARE (800–275–2273)
            </p>
            <p className="text-xl pt-5">
              Corporate Address Apple One Apple Park Way Cupertino, CA 95014
              (408) 996–1010
            </p>
          </ul>
        </div>
        <div className="drawer-content flex flex-col items-center justify-center w-85">
          <div></div>
          <div>
            <t className="text-6xl font-mono">The new iPhone 14</t>
          </div>
          <div className="phone-content flex flex-col items-center justify-center pt-20">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display bg-secondary">
                <div className="artboard artboard-demo phone-1 ">
                  <img src={imagine2} />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
