import "./settingpanel.css";
import { Link } from "react-router-dom";

import { InfoIcon } from "./AppIcons";

function SettingPanel(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
          <div className="settings" onSubmit={handleSubmit}>
            <div className="settings-item">
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
        </>
    )
}

export default SettingPanel;