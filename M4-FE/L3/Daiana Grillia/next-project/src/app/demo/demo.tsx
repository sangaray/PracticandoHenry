import React from "react";

// components
import { Card } from "../../components/card";
import Button from "../../components/button";

const demo: React.FC = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Card title="Card 1" description="This is card 1" />
      <Card title="Card 2" description="This is card 2" />
      <Card title="Card 3" />
      <Button />
    </div>
  );
};

export default demo;
