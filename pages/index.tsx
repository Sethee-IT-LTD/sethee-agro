import Head from "next/head";
import Image from "next/image";
import Collection from "../components/Collection";
import Feature from "../components/Feature";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <Feature />
    </>
  );
}
