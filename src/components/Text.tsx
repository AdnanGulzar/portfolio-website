import React from "react";

const Text = ({ text }: { text: React.ReactNode }) => {
  return <code className="block" >{text}</code>;
};
export default Text;
