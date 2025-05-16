import { useJsonFetch } from "../hooks/useJsonFetch";

export const Loading = () => {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");

  if (loading) {
    return <div>Загрузка</div>;
  }

  if (data) {
    return <div>Данные загружены</div>;
  }
};
