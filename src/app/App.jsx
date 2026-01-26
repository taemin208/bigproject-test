import { useEffect, useState } from "react";
import HomePage from "@/pages/HomePage";
import QAPage from "@/pages/QAPage";
import QnaWritePage from "@/pages/QnaWritePage";
import QnaDetailPage from "@/pages/QnaDetailPage";

const getRoute = () => {
  const { hash } = window.location;
  if (hash === "#/qna/new") return { name: "qna-new" };
  if (hash === "#/qna") return { name: "qna" };
  const match = hash.match(/^#\/qna\/(\d+)$/);
  if (match) {
    return { name: "qna-detail", id: Number(match[1]) };
  }
  return { name: "home" };
};

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route.name === "qna-new") return <QnaWritePage />;
  if (route.name === "qna") return <QAPage />;
  if (route.name === "qna-detail") {
    return <QnaDetailPage questionId={route.id} />;
  }
  return <HomePage />;
}

