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


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
 
    
  return (
    <div className="background-black">
      <Screen69></Screen69>
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
