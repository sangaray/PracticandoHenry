import React from "react";

// components
import Card from "../../components/card";
import { Button } from "../../components/button";

const Demo: React.FC = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Card title="Card 1" description="Desacription for Card 1" />
      <Card title="Card 2" description="Desacription for Card 2" />
      <Card title="Card 3" />
      <Button />
    </div>
  );
};

export default Demo;
