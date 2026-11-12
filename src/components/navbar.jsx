import "./navbar.css";

function Navbar({ activeTab, setActiveTab }) {
  const tabs = ["Tous", "1ère année", "2ème année", "3ème année"];

  return (
    <nav className="navbar">
      <ul className="nav-tabs">
        {tabs.map((tab) => (
          <li key={tab}>
            <button 
              className={`nav-tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;