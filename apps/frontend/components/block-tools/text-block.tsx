import { useReka } from "@rekajs/react";

export const TextBlock = () => {
  const { reka } = useReka();
  console.log(reka.state)
  return <button>Click me</button>;
};
