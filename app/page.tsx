"use client";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import React from "react";

const page = () => {
  let anim: any;
  useGSAP(() => {
    anim = gsap.from(".div", { x: "-1000px", y: "1000px", duration: 5 });
  });
  const pause = () => {
    anim.pause();
  };
  const resume = () => {
    anim.resume();
  };
  const reverse = () => {
    anim.reverse();
  };
  const restart = () => {
    anim.restart();
  };
  const timeScale = () => {
    anim.timeScale(0.5);
  };
  const kill = () => {
    anim.kill();
  };
  const isActive = () => {
    console.log(anim.isActive());
  };
  const invalidate = () => {
    anim.invalidate();
  };
  return (
    <>
      <div className=" flex justify-center w-screen">
        <div className=" h-20 w-20 bg-green-400 div"></div>
      </div>
      <button onClick={pause}> click pause</button>
      <br />
      <button onClick={resume}> click resume</button>
      <br />
      <button onClick={reverse}>click reverse</button>
      <br />
      <button onClick={restart}>restart</button>
      <br />
      <button onClick={timeScale}>timeScale</button>
      <br />
      <button onClick={kill}>kill</button>
      <br />
      <button onClick={isActive}>is active</button>
      <br />
      <button onClick={invalidate}>inValidate</button>
    </>
  );
};

export default page;
