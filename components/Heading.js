import React from "react";

const Heading = ({ heading }) => {
    let normalHeading = "";
    let coloredHeading = " ";

    // if it includes space
    if (heading.includes(" ")) {
        // take the first part
        normalHeading = heading.split(" ")[0];

        // take the rest of it, if it contains multiple spaces and join them to with space to remove the comma, + sign means concatenate the strings with space between them
        const [, ...yellow] = heading.split(" ");
        coloredHeading += yellow.join(" ");
    } else {
        // if there is no space the sentence
        normalHeading = heading.substring(0, heading.length / 2);
        coloredHeading = heading.substring(heading.length / 2);
    }
    return (
        <div className="text-[1.6rem] font-bold">
            {normalHeading}
            <span className="text-teal-300 ">{coloredHeading}</span>
        </div>
    );
};

export default Heading;
