import { FiShoppingCart } from "react-icons/fi";

const isAuthenticated: boolean = true;

export interface headerMenuProps {
    id: number;
    title: string;
    link: string;
    icon?: React.ReactElement;
}

const createHeaderMenu = (): headerMenuProps[] => {
    return [
        {
            id: 1,
            title: "Home",
            link: "/",
        },
        {
            id: 2,
            title: "About",
            link: "/about"
        },
        {
            id: 3,
            title: "Contact",
            link: "/contact"
        },
        {
            id: 4,
            title: "Cart",
            link: "/cart",
            icon: <FiShoppingCart />
        },
        {
            id: 5,
            title: isAuthenticated ? 'Profile' : 'Login',
            link: isAuthenticated ? '/profile' : '/login'
        }
    ];
};

export const headerMenu = createHeaderMenu()