import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Aside } from "./components/Aside";
import { Cards } from "./components/Cards";

const entries = [
  {
    id: 1,
    date: "2023-05-4",
    title: "Mi primer post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque nihil placeat magnam voluptate dignissimos! Aspernatur nobis eum tempore accusamus?",
  },
  {
    id: 2,
    date: "2023-02-11",
    principal: true,
    title: "Mi segundo post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque nihil placeat magnam voluptate dignissimos! Aspernatur nobis eum tempore accusamus?",
  },
  {
    id: 3,
    date: "2023-01-04",
    title: "Mi tercer post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque nihil placeat magnam voluptate dignissimos! Aspernatur nobis eum tempore accusamus?",
  },
  {
    id: 4,
    date: "2023-03-31",
    title: "Mi cuarto post",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque nihil placeat magnam voluptate dignissimos! Aspernatur nobis eum tempore accusamus?",
  },
];
function App() {
  return (
    <>
      <div>
        <Header title="Mi Blog"></Header>
        <main>
          <Aside entries={entries}></Aside>
          <Cards entries={entries}></Cards>
        </main>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
