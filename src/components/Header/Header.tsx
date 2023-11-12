/* VENDOR */
import { Link, useLocation } from "react-router-dom";

/* APPLICATION */
import "./Header.css";
import { useModalActiv } from "../../context/modal";
import { ITask } from "../../types/types";

export const Header = () => {
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");
  const modalActiv = useModalActiv();
  const item: ITask = {
    id:'',
    name: '',
    description: ''
  }

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
            modalActiv({type: 'create', item});
          }}
        >
          {isCategories ? "Добавить категорию" : "Добавить задачу"}
        </button>
      </nav>
    </header>
  );
};
