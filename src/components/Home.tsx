import * as React from "react";

export interface HomeProps {  
  compiler: string; 
  framework: string; 
}

export const Home = (props: HomeProps) => {
  return (
    <div>
      <a><h2>MEESH</h2></a>
      <a><h2>MEESH</h2></a>
      <a><h2>MEESH</h2></a>
    </div>
  )
}

