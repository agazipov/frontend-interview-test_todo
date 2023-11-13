/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import edit from "../../icons/edit.svg";
import remove from "../../icons/remove.svg";
import { selectAllCategories } from "../../redux/features/categoriesSlice";
import { useModalActiv } from "../../context/modalView";
import { IListItem } from "../../types/types";

export const ListItem: React.FC<IListItem> = ({ item }) => {
  const categories = useSelector(selectAllCategories);
  const modalActiv = useModalActiv();

  return (
    <>
      <li className="list-item">
        <div className="list-item-col1">
          <div className="list-item-col1-row1">
            <h3 className="list-item-col1-row1__title">{item.name}</h3>
            {item.category && (
              <span className="list-item-col1-row1__category">
                {
                  categories.find((category) => category.id === item.category)
                    ?.name
                }
              </span>
            )}
          </div>
          <div className="list-item-col1-row2">{item.description}</div>
        </div>
        <div className="list-item-col2">
          <button
            className="list-item-col2__btn"
            onClick={() => modalActiv({ item, type: "edit" })}
          >
            <img src={edit} alt="edit" />
          </button>
          <button
            className="list-item-col2__btn"
            onClick={() => modalActiv({ item, type: "remove" })}
          >
            <img src={remove} alt="remove" />
          </button>
        </div>
      </li>
    </>
  );
};
