/* VENDOR */
import { Link } from "react-router-dom";

/* APPLICATION */
import "./Header.css";
import { useModalActiv } from "../../context/modalView";
import { usePathFind } from "../../hooks/usePathFind";
import { INITIAL_STATE } from "../../constant";

export const Header = () => {
  const isCategories = usePathFind();
  const modalActiv = useModalActiv();

  return (
    <header className="header">
      <h1 className="header-title">ToDo List</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li
            className={
              !isCategories
                ? "header-list-item header-list-item-active"
                : "header-list-item"
            }
          >
            <Link to="tasks">Задачи</Link>
          </li>
          <li
            className={
              isCategories
                ? "header-list-item header-list-item-active"
                : "header-list-item"
            }
          >
            <Link to="categories">Категории</Link>
          </li>
        </ul>
        <button
          className="header-button"
          onClick={() => {
            modalActiv({type: 'create', item: INITIAL_STATE});
          }}
        >
          {isCategories ? "Добавить категорию" : "Добавить задачу"}
        </button>
      </nav>
    </header>
  );
};
