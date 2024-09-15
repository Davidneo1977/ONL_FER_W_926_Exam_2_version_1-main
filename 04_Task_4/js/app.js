import React from "react";
import { createRoot } from "react-dom/client";


function App() {
  return (
    <main>
      <h1>Ahoj světe!</h1>
      <span>Reagovat pravidla!</span>
    </main>
  );
}

export default App;





/**
 * Do not modify the code below!
 */
 const container = document.getElementById("app");
 const root = createRoot(container);
 root.render(<App />);