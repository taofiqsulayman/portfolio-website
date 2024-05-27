import React from "react";
import Image from "next/image";

const importAll = (requireContext) => requireContext.keys().map(requireContext);

const svgFiles = importAll(
    require.context("../../public/assets/techs", false, /\.svg$/)
);

const Techs = () => {
  return (
      <>
          {svgFiles.map((file, index) => (
              <div key={index} className="p-1 m-1 rounded-lg">
                  <Image
                      src={file.default}
                      width={40}
                      height={40}
                      className="rounded-lg object-cover"
                      alt={`${
                          file.default.src.split("/").pop().split(".")[0]
                      } logo`}
                  />
              </div>
          ))}
      </>
  );
};

export default Techs;
