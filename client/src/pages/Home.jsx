import Clients from "../components/Clients";
import AddClientModel from "../components/AddClientModel";
import Projects from "../components/Projects";
import AddProjectModel from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModel />
        <AddProjectModel />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
