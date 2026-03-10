import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignmentsPage from "./pages/AssignmentPage";
import AttemptPage from "./pages/AttemptPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssignmentsPage />} />
        <Route path="/attempt/:id" element={<AttemptPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;