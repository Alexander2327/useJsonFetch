import useJsonFetch from "../../hooks/useJsonFetch"

export default function Error() {
  const { error } = useJsonFetch(
    'http://localhost:7070',
    'error'
  )

  return (
    <div className="component">
      <h1 className="component__title">Получение 500 ошибки</h1>
      <p className="component__content">
        {error && `{"status":"${error}"}`}
      </p>
    </div>
  )
}