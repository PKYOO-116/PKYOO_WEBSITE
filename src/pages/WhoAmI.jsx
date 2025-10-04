import { useRef } from "react";
import Pkyoo from "./sections/pkyoo";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Community from "./sections/community";
import Skills from "./sections/skills";
import Footer from "../components/Footer"; 

export default function WhoAmI(){
  const pageRef = useRef(null);
  
  return (
    <main className="whoPage" ref={pageRef} tabIndex={0}>
      <section className="whoSec pkyoo"><Pkyoo /></section>
      <section className="whoSec education"><Education /></section>
      <section className="whoSec experience"><Experience /></section>
      <section className="whoSec projects"><Projects /></section>
      <section className="whoSec community"><Community /></section>
      <section className="whoSec skills"><Skills /></section>
      <section> <Footer /> </section>
    </main>
  );
}