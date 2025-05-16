import { useJsonFetch } from "../hooks/useJsonFetch";

export const Error = () => {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");

  if (error) {
    return <div>Ошибка загрузки данных</div>;
  }
};
