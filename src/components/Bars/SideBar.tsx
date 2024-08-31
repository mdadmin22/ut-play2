import styles from "./Sidebar.module.css"

interface Playlist{
  title: string;
  description: string;
}

interface SideBarProps {
  userName: string;
  userImage: string;
  onButtonClick: () => void;
  playlists: Playlist[];
}

const SideBar: React.FC<SideBarProps> = ({ playlists: Playlist, onButtonClick }) => {
  return (
    <div className={styles.sidebar}>
      {/* Información del usuario, otros botones, etc. */}
      <button onClick={onButtonClick}>+ Nueva Playlist</button>
      <ul>
        {Playlist.map((playlist, index) => (
          <li key={index}>
            {playlist.title}
            <strong>{playlist.title}</strong>
            <p>{playlist.description}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
