import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import QAPage from "../pages/QAPage";
import QnaWritePage from "../pages/QnaWritePage";

const getRoute = () => {
  const { hash } = window.location;
  if (hash === "#/qna/new") return "qna-new";
  if (hash === "#/qna") return "qna";
  return "home";
};

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "qna-new") return <QnaWritePage />;
  if (route === "qna") return <QAPage />;
  return <HomePage />;
}
