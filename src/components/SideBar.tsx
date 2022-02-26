import { MouseEventHandler } from "react";
import { Button } from "./Button";

interface GenreProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

type SideBarProps = {
  genres: GenreProps[];
  onSelectGenre: (genre: GenreProps) => void;
  selectedGenreId: number;
};

export function SideBar({ genres, onSelectGenre, selectedGenreId }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button key={String(genre.id)} title={genre.title} iconName={genre.name} onClick={() => onSelectGenre(genre)} selected={selectedGenreId === genre.id} />
        ))}
      </div>
    </nav>
  );
}
