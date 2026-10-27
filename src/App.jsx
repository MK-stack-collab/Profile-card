import {profiles} from "./data/profiles";
import ProfileSection from "./components/profile-section";

export default function App() {
  return (
    <main>
      <ProfileSection profiles={profiles} />
    </main>
  );
}