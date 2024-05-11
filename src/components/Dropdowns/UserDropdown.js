'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Cookies from 'js-cookie'
import useTokenValidation from "@/store/utils/userTokenValidation";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "@/store/reducers/authReducer";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const UserDropdown = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("user"))
    setUser(info);
  }, [])

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await dispatch(logoutSuccess());
      // Remove user token from cookies
      Cookies.remove("userToken");
      // Clear local storage
      localStorage.clear();
      // Redirect to the login page
      router.push("/admin/login");
    } catch (error) {
      console.error("Error occurred during sign out:", error);
      // Handle error, maybe show a message to the user
    }
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 text-sm font-semibold text-gray-900  hover:bg-gray-50">
            <div class="self-center overflow-hidden hidden md:block">
              <p class="text-sm font-medium text-slate-900 mx-2">Hi, {user?.userName}</p>
              <p class="text-sm text-slate-500 truncate text-center">{user?.role} contributor</p>
            </div>
            <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
              <img
                alt="..."
                className="w-full rounded-full align-middle border-none shadow-lg"
                src={(user?.avatar) ? user?.avatar : "/img/team-1-800x800.jpg"}
              />
            </span>
            {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    License
                  </a>
                )}
              </Menu.Item>
              <form method="POST"  >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

    </>
  );
};

export default UserDropdown;
