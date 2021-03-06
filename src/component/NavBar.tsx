import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setIsLogin } from "../app/route";
import { setProfileModalOpen } from "../app/user";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Modal from "./Modal/Modal";
import Profile from "./profile/Profile";
function NavBar() {
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.route.isLogin);
  const userData = useAppSelector((state) => state.user.user)
  const profileModalOpen = useAppSelector(
    (state) => state.user.porfileModelOpen
  );
  const dispatch = useAppDispatch();
  const navigation = [
    { name: "Home", href: "/react-smartbrain", current: true, show: true },
    { name: "About", href: "/About", current: false, show: true },
    { name: "Sigin", href: "/Sigin", current: false, show: isLogin === false },
    { name: "Login", href: "/Login", current: false, show: isLogin === false },
    { name: "Logout", href: "", current: false, show: isLogin === true },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  function logout() {
    dispatch(setIsLogin(false));
    navigate("/Login");
  }
  function openProfileModal() {
    dispatch(setProfileModalOpen(true));
  }
  function alertLogin(){
    if(isLogin)return
    alert('please Login First~!')
  }
  return (
    <nav>
      {/* &&條件判斷相當於 !isLogin ? <li>略</li> : null
                    白話文為 : 如果...就...
                */}
      {/* <ul className='flex justify-end'>
                
                {!isLogin && <li className='cursor-pointer hover:opacity-50 mr-2'><Link to="/Sigin">Sigin</Link></li>}
                {isLogin? <li className='cursor-pointer hover:opacity-50 mr-2' onClick={logout}>LogOut</li>
                : <li className='cursor-pointer hover:opacity-50 mr-2'><Link to="/Login">Login</Link></li>}
                <li className='mr-2'><Link to="/">Home</Link></li>
                <li className='mr-2'><Link to="/About">About</Link></li>
            </ul> */}
      {profileModalOpen && (
        <Modal>
          <Profile />
        </Modal>
      )}

      <Disclosure as="nav" className="bg-gray-800 rounded-lg">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <ul className="flex space-x-4">
                      {navigation.map(
                        (item) =>
                          item.show && (
                            <li
                              key={item.name}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.href === "" ? (
                                <div onClick={logout}>Logout</div>
                              ) : (
                                <Link to={item.href}>{item.name}</Link>
                              )}
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}

                  {/* Profile dropdown */}
                  {
                    isLogin && <p className="text-white">{userData.name}</p>
                  }
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                       onClick={alertLogin}
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      // as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                     
                        {isLogin && (
                          <div>
                             <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                  onClick={openProfileModal}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                  onClick={logout}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                            </Menu.Items>
                          </div>
                        )}
                      
                    </Transition>
                  </Menu>
                  
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  );
}
export default NavBar;
