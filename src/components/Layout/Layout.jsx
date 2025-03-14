export function Layout({children}) {
  return (
    <div className="layout">
      <header>Header</header>
      <div className="content">
        {children}
      </div>
      <footer>Footer</footer>
    </div>
  )
}