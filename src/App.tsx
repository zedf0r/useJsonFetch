import { useJsonFetch } from "./hooks/useJsonFetch";

function App() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");

  console.log(data);

  if (data) {
    return <span>Данные получены</span>;
  }

  if (loading) {
    return <span>Загрука...</span>;
  }

  if (error) {
    return <span>Ошибка загрузки</span>;
  }
}

export default App;
