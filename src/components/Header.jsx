import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import {
    MdAdd,
    MdLogout,
    MdPerson,
    MdSettings,
    MdShoppingBag,
} from "react-icons/md";
import { FaBars, FaXmark } from "react-icons/fa6";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, userAction } from "../store/actions/userAction";
import { createUser } from "../utils/firebaseFunctions";
import { toast } from "react-toastify";
import { CartContainer } from ".";

const Header = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [isDropDown, setIsDropdown] = useState(false);
    const [isNavMob, setIsNavMob] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false)

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);
    const { cartData } = useSelector((state) => state.getCartDatareducer);

    const login = async () => {
        try {
            const {
                user: { providerData },
            } = await signInWithPopup(firebaseAuth, provider);
            dispatch(userAction(providerData[0]));
            localStorage.setItem("user", JSON.stringify(providerData[0]));
            createUser(providerData[0].email, providerData[0].displayName);
        } catch (error) {
            console.error(error);
        }
    };

    const logoutHandler = () => {
        localStorage.clear();
        dispatch(userAction(null));
        setIsMenu(false);
        toast.success("logout success");
    };

    const dropdownHandler = () => {
        setIsDropdown(true);
    };

    useEffect(() => {
        if (user) {
            dispatch(getCartData(user.email));
        }
    }, []);

    return (
        <div className="fixed z-50 w-full   reltive bg-primary shadow-md">
            {/* desktop && tablet */}
            <div className="hidden md:flex  w-full md:px-16 md:p-2 px-4  p-3 h-full items-center justify-between ">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="logo" className="w-10 object-cover" />
                    <Link to={"/"} className="text-xl font-bold text-headingColor">
                        VBzaar
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <ul className="flex items-center gap-6 ">
                        <NavLink
                            to={"/"}
                            className="text-base text-textColor nav_text hover:text-headingColor"
                        >
                            Home
                        </NavLink>
                        <div
                            className="text-base text-textColor nav_text hover:text-headingColor relative"
                            onMouseOver={dropdownHandler}
                            onMouseOut={() => setIsDropdown(false)}
                        >
                            Categories
                            {isDropDown && (
                                <div className="absolute top-[100%] flex flex-col ps-2 w-[10rem] text-textColor text-sm  border bg-white rounded-lg p-2 left-0">
                                    <Link
                                        to={"/categories/fruits"}
                                        onClick={() => setIsDropdown(false)}
                                        className="hover:bg-primary px-2 py-1 rounded-md"
                                    >
                                        Fruits
                                    </Link>
                                    <Link
                                        to={"categories/ice-creams"}
                                        onClick={() => setIsDropdown(false)}
                                        className="hover:bg-primary px-2 py-1 rounded-md"
                                    >
                                        Ice Creams
                                    </Link>
                                    <Link
                                        to={"/categories/vegetables"}
                                        onClick={() => setIsDropdown(false)}
                                        className="hover:bg-primary px-2 py-1 rounded-md"
                                    >
                                        Vegetables
                                    </Link>
                                    <Link
                                        to={"/categories/drinks"}
                                        onClick={() => setIsDropdown(false)}
                                        className="hover:bg-primary px-2 py-1 rounded-md"
                                    >
                                        Drinks
                                    </Link>
                                    <Link
                                        to={"/categories/chocolates"}
                                        onClick={() => setIsDropdown(false)}
                                        className="hover:bg-primary px-2 py-1 rounded-md"
                                    >
                                        Chocolates
                                    </Link>
                                </div>
                            )}
                        </div>
                        <NavLink
                            to={"/products"}
                            className="text-base text-textColor nav_text hover:text-headingColor"
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to={"/offers"}
                            className="text-base text-textColor nav_text hover:text-headingColor"
                        >
                            Offers
                        </NavLink>
                        <NavLink className="text-base text-textColor nav_text hover:text-headingColor">
                            About Us
                        </NavLink>
                        <NavLink className="text-base text-textColor nav_text hover:text-headingColor">
                            Contact Us
                        </NavLink>
                    </ul>
                    <div className="flex items-center ml-8 relative cursor-pointer" onClick={() => setIsCartOpen(isCartOpen ? false : true)} >
                        <MdShoppingBag className="text-2xl text-textColor cursor-pointer" />
                        <div className="absolute -top-1 -right-2 flex items-center justify-center bg-cartNumBg w-5 h-5 rounded-full">
                            <p className="text-xs text-white font-semibold">
                                {cartData.cart ? cartData.cart.length : "0"}
                            </p>
                        </div>
                    </div>
                    <div className="text-textColor flex items-center ">
                        {user ? (
                            <div className="flex items-center cursor-pointer relative">
                                <div
                                    className="flex items-center gap-2"
                                    onClick={() => (isMenu ? setIsMenu(false) : setIsMenu(true))}
                                >
                                    <p className="hover:text-headingColor font-semibold">
                                        {user.displayName}
                                    </p>
                                    <div>
                                        <img
                                            src={user.photoURL}
                                            alt="avatar"
                                            referrerPolicy="no-referrer"
                                            className="w-7 rounded-full"
                                        />
                                    </div>
                                </div>
                                {isMenu && (
                                    <div
                                        className="absolute bg-white w-[12rem] px-3 p-2 rounded-lg shadow-2xl top-9 right-0"
                                    >
                                        <div
                                            className="hover:bg-gray-100 rounded-lg px-2"
                                        >
                                            <MdSettings className="inline text-2xl text-textColor mr-2 my-2" />{" "}
                                            Settings
                                        </div>
                                        {user && user.email === "sairajesh991@gmail.com" && (
                                            <div
                                                className=" hover:bg-gray-100 rounded-lg px-2"
                                            >
                                                <NavLink
                                                    to={"/createitem"}
                                                    onClick={() => setIsMenu(false)}
                                                >
                                                    <MdAdd className="inline text-2xl text-textColor mr-2 my-2" />
                                                    Create Item
                                                </NavLink>
                                            </div>
                                        )}
                                        <div
                                            className="hover:bg-gray-100 rounded-lg px-2"
                                        >
                                            <MdPerson className="inline  text-2xl text-textColor mr-2 my-2" />
                                            Profile
                                        </div>
                                        <div
                                            onClick={logoutHandler}
                                            className="hover:bg-gray-100 rounded-lg px-2"
                                        >
                                            <MdLogout className="inline  text-2xl text-textColor mr-2 my-2" />
                                            Logout
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center cursor-pointer" onClick={login}>
                                <p className="hover:text-headingColor">Login</p>
                                <div >
                                    <MdPerson className="text-3xl" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden relative px-4  p-3">
                <div className="flex items-center gap-2">
                    {!isNavMob ? (
                        <FaBars
                            className="text-xl me-3 cursor-pointer"
                            onClick={() => setIsNavMob(isNavMob ? false : true)}
                        />
                    ) : (
                        <FaXmark
                            className="text-xl me-3 cursor-pointer"
                            onClick={() => setIsNavMob(isNavMob ? false : true)}
                        />
                    )}
                    <img src={Logo} alt="logo" className="w-8 object-cover" />
                    <Link to={"/"} className="text-md font-bold text-headingColor">
                        VBzaar
                    </Link>
                </div>
                {
                    <div
                        className={`absolute bg-[rgba(65,65,65,0.2)] top-[100%] left-0 sm:w-[50%] w-full min-h-screen origin-left transition-all ease-in-out duration-200  ${isNavMob ? "scale-x-[1]" : "scale-x-0"
                            }`}
                    >
                        <div className="h-full ">
                            <ul className="flex flex-col min-h-screen p-3 gap-2 bg-primary w-[50%]">
                                <NavLink
                                    onClick={() => setIsNavMob(false)}
                                    to={"/"}
                                    className="text-base text-textColor nav_text hover:text-headingColor"
                                >
                                    Home
                                </NavLink>
                                <div
                                    className="text-base text-textColor nav_text hover:text-headingColor relative"
                                    onMouseOver={dropdownHandler}
                                    onMouseOut={() => setIsDropdown(false)}
                                >
                                    Categories
                                    {isDropDown && (
                                        <div className="absolute top-[100%] left-[50%] flex flex-col ps-2 w-[10rem] text-textColor text-sm  border bg-white rounded-lg p-2">
                                            <Link
                                                to={"/categories/fruits"}
                                                onClick={() => {
                                                    setIsDropdown(false);
                                                    setIsNavMob(false);
                                                }}
                                                className="hover:bg-primary px-2 py-1 rounded-md"
                                            >
                                                Fruits
                                            </Link>
                                            <Link
                                                to={"categories/ice-creams"}
                                                onClick={() => {
                                                    setIsDropdown(false);
                                                    setIsNavMob(false);
                                                }}
                                                className="hover:bg-primary px-2 py-1 rounded-md"
                                            >
                                                Ice Creams
                                            </Link>
                                            <Link
                                                to={"/categories/vegetables"}
                                                onClick={() => {
                                                    setIsDropdown(false);
                                                    setIsNavMob(false);
                                                }}
                                                className="hover:bg-primary px-2 py-1 rounded-md"
                                            >
                                                Vegetables
                                            </Link>
                                            <Link
                                                to={"/categories/drinks"}
                                                onClick={() => {
                                                    setIsDropdown(false);
                                                    setIsNavMob(false);
                                                }}
                                                className="hover:bg-primary px-2 py-1 rounded-md"
                                            >
                                                Drinks
                                            </Link>
                                            <Link
                                                to={"/categories/chocolates"}
                                                onClick={() => {
                                                    setIsDropdown(false);
                                                    setIsNavMob(false);
                                                }}
                                                className="hover:bg-primary px-2 py-1 rounded-md"
                                            >
                                                Chocolates
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <NavLink
                                    onClick={() => setIsNavMob(false)}
                                    to={"/products"}
                                    className="text-base text-textColor nav_text hover:text-headingColor"
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    onClick={() => setIsNavMob(false)}
                                    to={"/offers"}
                                    className="text-base text-textColor nav_text hover:text-headingColor"
                                >
                                    Offers
                                </NavLink>
                                <NavLink
                                    onClick={() => setIsNavMob(false)}
                                    className="text-base text-textColor nav_text hover:text-headingColor"
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    onClick={() => setIsNavMob(false)}
                                    className="text-base text-textColor nav_text hover:text-headingColor"
                                >
                                    Contact Us
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                }
                <div className="flex gap-3 ml-auto">
                    <div className="flex items-center ml-8 relative cursor-pointer" onClick={() => setIsCartOpen(isCartOpen ? false : true)}>
                        <MdShoppingBag className="text-2xl text-textColor cursor-pointer" />
                        <div className="absolute -top-1 -right-2 flex items-center justify-center bg-cartNumBg w-5 h-5 rounded-full">
                            <p className="text-xs text-white font-semibold"> {cartData.cart ? cartData.cart.length : "0"}</p>
                        </div>
                    </div>
                    <div className="text-textColor flex items-center ">
                        {user ? (
                            <div className="flex items-center cursor-pointer relative">
                                <div
                                    className="flex items-center gap-1"
                                    onClick={() => (isMenu ? setIsMenu(false) : setIsMenu(true))}
                                >
                                    <div>
                                        {/* <MdPerson className='text-3xl' /> */}
                                        <img
                                            src={user.photoURL}
                                            alt="avatar"
                                            referrerPolicy="no-referrer"
                                            className="w-7 rounded-full"
                                        />
                                    </div>
                                    <p className="hover:text-headingColor font-semibold md:text-md text-sm">
                                        {user.displayName}
                                    </p>
                                </div>
                                {isMenu && (
                                    <div
                                        className="absolute bg-white w-[12rem] px-3 p-2 rounded-lg shadow-2xl top-9 right-0"
                                    >
                                        <div
                                            className="hover:bg-gray-100 rounded-lg px-2"
                                        >
                                            <MdSettings className="inline text-2xl text-textColor mr-2 my-2" />{" "}
                                            Settings
                                        </div>
                                        {user && user.email === "sairajesh991@gmail.com" && (
                                            <div
                                                className="hover:bg-gray-100 rounded-lg px-2"
                                            >
                                                <NavLink
                                                    to={"/createitem"}
                                                    onClick={() => setIsMenu(false)}
                                                >
                                                    <MdAdd className="inline text-2xl text-textColor mr-2 my-2" />
                                                    Create Item
                                                </NavLink>
                                            </div>
                                        )}
                                        <div
                                            className="hover:bg-gray-100 rounded-lg px-2"
                                        >
                                            <MdPerson className="inline  text-2xl text-textColor mr-2 my-2" />{" "}
                                            Profile
                                        </div>
                                        <div
                                            onClick={logoutHandler}
                                            className="hover:bg-gray-100 rounded-lg px-2"
                                        >
                                            <MdLogout className="inline  text-2xl text-textColor mr-2 my-2" />
                                            Logout
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center cursor-pointer" onClick={login}>
                                <div >
                                    <MdPerson className="text-3xl" />
                                </div>
                                <p className="hover:text-headingColor">Login</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Cart Container */}
            <div className={`w-full  absolute min-h-screen z-10 top-0 bg-[#14141451] origin-right transition-all ease-in-out duration-200 ${isCartOpen ? "scale-x-[1]" : "scale-x-0"}`} >
                <div className="flex justify-end h-full">
                    <FaXmark className="absolute bg-white m-4 text-2xl cursor-pointer text-gray-600" onClick={() => setIsCartOpen(false)} />
                    <CartContainer />
                </div>
            </div>
        </div>
    );
};

export default Header;
