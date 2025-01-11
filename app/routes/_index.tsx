import type { MetaFunction } from "@remix-run/node";

import Task1 from "./task1"
import Screen19 from "./screen21";
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import Formcomponent from "./form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { Link } from "@remix-run/react";
import Screen31 from "./screen31";
import Screen3 from "./screen3";
import Basicinformation2 from "./basicinformation";
import Screen69 from "./screen69";
import Pdffiles from "./pdffiles";
import Pdfreaderfile  from "./Pdfreaderfile";
import Screen5 from "./screen5";
import Screen14 from "./screen14";
import Screen12 from "./screen12";
import Screen19two from "./screen18.screen19two"
import Screen18 from "./screen18";
import Screen84 from "./screen84"
import Screen85 from "./screen85";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
 
    
  return (
    <div className="background-black">
      <Screen85></Screen85>
      {/* <Pdffiles></Pdffiles><br /> */}
      {/* <Screen5></Screen5> */}
      {/* <Task1></Task1> */}
     {/* <Link to="/form">go to form</Link> */}
     {/* <Formcomponent></Formcomponent> */}
        {/* <h1>hello bro you are mine dsdsd</h1>
        <Button onClick={()=>{alert("hello addu")}}>click me</Button>
        <Checkbox/><label htmlFor="">yes</label>
        <Checkbox/><label htmlFor="">no</label>
        <div>
        <Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover> */}

        {/* </div> */}

    
    </div>
  );
}
