import Image from "next/image";
import NavBar from "./components/marginals/Navbar";

export default function Home() {
  return (
    <section>
      <NavBar />
      <h1>Vampire delivery app | Home page</h1>
      <div>About</div>
    </section>
  );
}
