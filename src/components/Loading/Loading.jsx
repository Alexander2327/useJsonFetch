import React from "react";
import useJsonFetch from "../../hooks/useJsonFetch";

export default function Loading() {
  const { data, loading } = useJsonFetch(
    'http://localhost:7070',
    'loading'
  )

  return (
    <div className="component">
      <h1 className="component__title">Индикатор загрузки</h1>
      <p className="component__content">
        {loading ? 'Loading...' : JSON.stringify(data)}
      </p>
    </div>
  )
}