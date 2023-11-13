import { useLocation } from "react-router-dom";

export const usePathFind: () => boolean = () => {
    const { pathname } = useLocation();
    const isCategories = pathname.includes("categories");
    return isCategories;
}