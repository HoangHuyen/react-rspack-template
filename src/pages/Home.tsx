import React from "react";
import { Button } from "@nextui-org/react";

export const Home: React.FC = () => {
  return (
    <div className="min-h-full h-full">
      <Button
        color="primary"
        variant="light"
        onClick={() => console.log("====>")}
      >
        View Menu
      </Button>
    </div>
  );
};
