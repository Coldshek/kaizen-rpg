// pages/_error.js
export default function Error({ statusCode }) {
  return (
    <p style={{ padding: '2rem' }}>
      {statusCode
        ? `Error del servidor: ${statusCode}`
        : 'Ocurrió un error en el cliente'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
