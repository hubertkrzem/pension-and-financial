import { client } from "@/sanity/client";
import { NAVBAR_QUERY } from "@/sanity/queries";
import NavbarClient from "./navbar-client";

export default async function Navbar() {
  const data = await client.fetch(NAVBAR_QUERY);
  return <NavbarClient button={data?.button} />;
}
