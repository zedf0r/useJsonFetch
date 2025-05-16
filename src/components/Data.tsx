import { useJsonFetch } from "../hooks/useJsonFetch";

export const Data = () => {
  const [data] = useJsonFetch("http://localhost:7070/data");

  if (data) {
    return <div>Данные загружены</div>;
  }
};
