import React from "react";
import useJsonFetch from "../../hooks/useJsonFetch";

export default function Data() {
  const { data } = useJsonFetch(
    'http://localhost:7070',
    'data'
  )

  return (
    data && <div className="component">
      <h1 className="component__title">Успешное получение данных</h1>
      <p className="component__content">
        {data && JSON.stringify(data)}
      </p>
    </div>
  )
}