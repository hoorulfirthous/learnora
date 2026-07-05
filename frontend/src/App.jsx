import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import Upload from "./pages/Upload";
import Notes from "./pages/Notes";
import Quiz from "./pages/Quiz";
import Chat from "./pages/Chat";
import Flashcards from "./pages/Flashcards";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>

              <Upload />

            </ProtectedRoute>
          }
        />

        <Route
          path="/notes"
          element={
            <ProtectedRoute>

              <Notes />

            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>

              <Quiz />

            </ProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>

              <Chat />

            </ProtectedRoute>
          }
        />

      

      <Route
          path="/flashcards"
          element={
            <ProtectedRoute>

              <Flashcards />

            </ProtectedRoute>
          }
        />

      </Routes>

      
      


    </BrowserRouter>

  );

}

export default App;