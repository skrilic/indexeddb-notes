import { Link } from "react-router-dom";
import { InfoIcon } from "./AppIcons";

function SettingPanel(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
          <div className="flex flex-col m-auto text-2xl" onSubmit={handleSubmit}>
            <div className="flex flex-row w-full m-4 justify-between">
              <InfoIcon />
              <label style={{ "marginTop": "2em" }}>
                <Link style={{ 
                  "textDecoration": "none", 
                  "color": "inherit",
                  }} 
                  to="/about">O aplikaciji
                </Link>
              </label>
            </div>
          </div>
    )
}

export default SettingPanel;