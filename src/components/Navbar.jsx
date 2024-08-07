/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

import Modal from "@cloudscape-design/components/modal";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import { useFetchNavigationApi } from '../api/NavigationApi';
import { useEffect } from 'react';
//import { Auth } from 'aws-amplify';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useRolReposStore } from './../store/RolRepo';
import { fetchAuthSession } from 'aws-amplify/auth';


/* const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/services', current: false },
  { name: 'Gallery', href: '/gallery', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Instagram', href: '/instagram', current: false },
  { name: 'Privacypolicy', href: '/privacypolicy', current: false },
  { name: 'Contact', href: '/contact', current: false },
  
] */

/* function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} */

const classNameFunc = ({ isActive }) => (isActive ? ' no-underline bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'no-underline text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium');

const classNameFuncSmall = ({ isActive }) => (isActive ? 'no-underline bg-gray-900 text-white rounded-md px-5 py-1 text-sm font-medium' : 'no-underline text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium:bg-gray-700');


export default function Navbar(props) {
  const [navigation, setNavigation] = useState([])
  const {data, isLoading, isSuccess } = useFetchNavigationApi()
  const { rol, setRol } = useRolReposStore();
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("route:",route)
    
    
      const checkUser = async() => {
        fetchAuthSession().then((session)=>{
          
          setRol(session.tokens.accessToken.payload["cognito:groups"]);
          if (rol.includes("admin")) {
            
            console.log("rol include admin: ",rol)
          }
        })
        
        const user2 = await fetchUserAttributes();
        console.log("user2:",user2)
      }
    
      if(route === 'authenticated'){
        checkUser()
      }
  
  }, [route]);


  function logOut() {
    signOut();
    setRol([]);
    console.log("setRol([]) called, rol=;",rol);
    navigate("/login");

  }
  useEffect(()=>{
        setNavigation(data);
  },[data])
  return (
    <Disclosure as="nav" className="bg-gray-800/60 backdrop-blur-md shadow-md"
    /* className="text-5xl fixed top-0 inset-x-0 text-center bg-gray-800/50" */ 
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-14">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation?.map((item) => (
                      
                      <NavLink to={item.href} key={item.name}
                        className={classNameFunc}
                        /* aria-current={item.current ? 'page' : undefined} */
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* {route !== 'authenticated' ? ( */}
              {rol.length === 0 ? (
          <button className='no-underline text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' onClick={() => navigate('/login')}>Login</button>
        ) : (
          <button className='no-underline text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' onClick={() => logOut()}>Logout</button>
        )}
                
               
                {/* Profile dropdown */}
               {/*  <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation?.map((item) => (
               
                <NavLink to={item.href} key={item.name}
                className={classNameFuncSmall}
               
              >
                {item.name}
              </NavLink>
              ))}
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
