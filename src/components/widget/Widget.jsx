import "./widget.css";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


const Widget = ({ type, amount }) => {
    let data;

    //temporary

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        default:
                break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
        </div>
    );
};

export default Widget;
