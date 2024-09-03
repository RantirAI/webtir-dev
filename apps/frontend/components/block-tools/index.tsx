import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import { TbTextSize } from "react-icons/tb";
import { TextBlock } from "./text-block";
export const AccordionTrigger = (props: Accordion.AccordionTriggerProps) => {
  const { children, className, ...rest } = props;
  return (
    <Accordion.Trigger
      {...rest}
      className={`group flex justify-between w-full items-center ${className}`}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      ></ChevronDownIcon>
    </Accordion.Trigger>
  );
};

const AccordionContent = (props: Accordion.AccordionContentProps) => {
  const { children, className, ...rest } = props;
  return (
    <Accordion.Content
      className={`
        ${className}`}
      {...rest}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  );
};

export const BlockTools = () => (
  <Accordion.Root
    type="multiple"
    className="max-w-[239px] w-full bg-white rounded-md"
  >
    <Accordion.Item value="text-block">
      <AccordionTrigger className="text-sm font-medium py-3 px-4">
        Block
      </AccordionTrigger>
      <AccordionContent>
        <TextBlock />
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);
