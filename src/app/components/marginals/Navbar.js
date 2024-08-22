import { NavData } from "@/app/config/NavData";

export default function NavBar() {
  return (
    <nav>
      {NavData.map((datum) => {
        return (
          <li>
            <a href={datum.url}> {datum.name} </a>
          </li>
        );
      })}
    </nav>
  );
}
