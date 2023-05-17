import Initial from "pages/Initial";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
