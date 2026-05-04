import humanize from "../assets/js/humanize";

const Footer = () => {
    return (
        <p className="date" id="date1">Last updated: <span id="date1">{humanize(new Date("05/04/2023"))}</span></p>
    );
};

export default Footer