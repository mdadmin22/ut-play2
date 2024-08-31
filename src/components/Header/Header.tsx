import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <button>
          <img src="src/assets/menu.svg" alt="menu" />
        </button>
        <img src="public\on_platform_logo_dark 1.svg" alt="logo" />
      </div>
      <div className={styles.profile_container}>
        <input type="text" className="search" placeholder="Buscar..." />
        <img src="public\perfil react (1).png" alt="Perfil" />
      </div>
    </header>
  );
};

export default Header;