import * as React from "react";

export interface Helloprops {  
  compiler: string; 
  framework: string; 
}

export const Hello = (props: HelloProps) => {
  <h1>Hello from {props.compiler} and {props.framework}! </h1>;
}

