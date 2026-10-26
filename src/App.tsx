import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";
import AlgorithmInterface from "./Sort_Algorithms/AlgorithmInterface";
import GreedyInterface from "./Greedy_Algorithms/GreedyInterface";

function Home() {
    return (
        <div className="page">
            <header className="header">
                <h1 className="header-title">Algorithmview</h1>
            </header>

            <div className="card-container">
                <Card
                    title="Algoritmos de ordenamiento"
                    backgroundColor="#1f2937"
                    tags={["Bubble Sort", "Quick Sort", "Merge Sort"]}
                    route="/algoritmos"
                />
                <Card
                    title="Algoritmos voraces"
                    backgroundColor="#374151"
                    tags={["Greedy"]}
                    route="/algoritmos_voracez"
                />
            </div>
        </div>
    );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Pagina_web_algoritmos_ordenamiento_tecnica_voraz/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/algoritmos" element={<AlgorithmInterface />} />
        <Route path="/algoritmos_voracez" element={<GreedyInterface />} />
      </Routes>
    </BrowserRouter>
  );
}