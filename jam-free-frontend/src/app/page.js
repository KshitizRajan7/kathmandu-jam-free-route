import Homepage from "@/components/Homepage";
import Menu from "@/components/Menu";
import UserLogin from "@/components/users/UserLogin";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <h1>Kathmandu Valley Jam-free Route Finder.</h1>
      <Homepage />
      <Menu />
    </>

  )
}
