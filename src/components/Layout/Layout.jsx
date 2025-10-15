import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__background"></div>
      <main className="layout__content">{children}</main>
    </div>
  )
}