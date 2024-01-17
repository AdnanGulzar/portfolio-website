import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
const Loader = () => {
  return (
    <section className="flex w-full h-[80vh] justify-center items-center z-60">
      <ScaleLoader color="#4D5BCE" loading={true} />
    </section>
  );
};

export default Loader;
