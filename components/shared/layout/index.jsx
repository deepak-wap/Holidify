import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Dropdown, Space, Menu, Drawer, Button } from "antd";
import {
  DownOutlined,
  SmileOutlined
} from "@ant-design/icons";

const Structure = ({ children, title = "Holidify" })=>{
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(()=>{
    const handleScroll = ()=>{
      const currentScrollHeight =
        typeof window !== "undefined"
          ? window.pageYOffset || document.documentElement.scrollTop
          : 0;
      setScrollHeight(currentScrollHeight);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("1");
  const [showMegaMenu, setShowMegaMenu] = useState("hidden");
  const handleMegaMenu = ()=>{
    showMegaMenu === "hidden" ? setShowMegaMenu("") : setShowMegaMenu("hidden");
  };

  const openMegaMenu = ()=>{
    setShowMegaMenu("");
  };

  const closeMegaMenu = ()=>{
    setShowMegaMenu("hidden");
  };

  const MegaMenu = ()=>{
    return (
      <>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <div
              id="mega-menu-icons"
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                  <Button
                    type="button"
                    onClick={handleMegaMenu}
                    onMouseOver={openMegaMenu}
                    onMouseOut={closeMegaMenu}
                  >
                    <div
                      id="mega-menu-icons-dropdown-button"
                      data-dropdown-toggle="mega-menu-icons-dropdown"
                      class="text-[19px] flex items-center justify-between w-full py-2 px-3 font-semibold text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Explore
                      <svg
                        class="w-4 h-2 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </div>
                  </Button>
                  <div
                    id="mega-menu-icons-dropdown"
                    class={`absolute z-10 grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700 ${showMegaMenu}`}
                  >
                    <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                      <ul
                        class="space-y-4"
                        aria-labelledby="mega-menu-icons-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">About us</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">Library</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />
                              <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />
                              <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />
                            </svg>
                            Library
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">Resources</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 18"
                            >
                              <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
                              <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                            </svg>
                            Resources
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">Pro Version</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                            </svg>
                            Pro Version
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                      <ul class="space-y-4">
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">Blog</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
                              <path d="M6 5H5v1h1V5Z" />
                            </svg>
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">Newsletter</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                            </svg>
                            Newsletter
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">Playground</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 18"
                            >
                              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
                            </svg>
                            Playground
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">License</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 14 20"
                            >
                              <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                            </svg>
                            License
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="p-4 text-gray-900 dark:text-white">
                      <ul class="space-y-4">
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">Contact Us</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 14 20"
                            >
                              <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
                            </svg>
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">Support Center</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 21 21"
                            >
                              <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
                            </svg>
                            Support Center
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span class="sr-only">Terms</span>
                            <svg
                              class="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 20"
                            >
                              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                            </svg>
                            Terms
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  const bottomNav = [
    {
      key: 1,
      label: (
        <span className="pb-3 text-[17.4px] text-[#3d81bb] font-semibold font-mono border-b-[5px] border-[#3D81BB] py-5">
          Singapore
        </span>
      ),
    },
    {
      key: 2,
      label: (
        <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">
          Things To Do
        </span>
      ),
    },
    {
      key: 3,
      label: (
        <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">
          Packages
        </span>
      ),
    },
    {
      key: 4,
      label: (
        <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">
          Hotels
        </span>
      ),
    },
    {
      key: 5,
      label: (
        <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">
          How To Reach
        </span>
      ),
    },
    {
      key: 6,
      label: (
        <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">
          Best Time To Visit
        </span>
      ),
    },
    {
      key: 7,
      label: (
        <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">
          Photos
        </span>
      ),
    },
    {
      key: 8,
      label: (
        <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">
          Visa
        </span>
      ),
    },
    {
      key: 9,
      label: (
        <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">
          More <DownOutlined />
        </span>
      ),
      children: [
        {
          key: 9.1,
          label: (
            <span className="text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono">
              Collections
            </span>
          ),
        },
        {
          key: 9.2,
          label: (
            <span className="text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono">
              Maps
            </span>
          ),
        },
        {
          key: 9.3,
          label: (
            <span className="text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono">
              Reviews & QnA
            </span>
          ),
        },
        {
          key: 9.4,
          label: (
            <span className="text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono">
              Travel Agents
            </span>
          ),
        },
      ],
    },
  ];

  const showDrawer = ()=>{
    setOpen(true);
  };
  const onClose = ()=>{
    setOpen(false);
  };

  const drawerItems = [
    {
      key: 1,
      label: (
        <div className="flex items-center gap-1">
          <div>
            <img src="images/map-icon.png" alt="" />
          </div>
          <p className="text-[16px] font-mono tracking-[0.7px]">Countries</p>
          <DownOutlined />
        </div>
      ),
      children: [
        {
          key: 2,
          label: 3665,
        },
        {
          key: 3,
          label: "dfdfd",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        {/* Top Nav */}
        <nav className={`bg-white dark:bg-gray-900 w-full z-[100] top-0 border-b border-gray-200 dark:border-gray-600 pl-[8%] pr-[8.8%] ${scrollHeight > 150 ? 'fixed' : ''}`}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-3 py-3">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="images/logo.svg"
                alt="Holidyty Logo"
                className="w-[114px] h-[55px]"
              />
            </Link>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="hidden lg:inline-flex flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="hover:underline underline-offset-[33px] decoration-sky-500">
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <span className="hover:border-b-[5px] border-[#3D81BB] py-6">
                      <Space>
                        <span className="header-menu">Explore</span>
                        <DownOutlined />
                      </Space>
                    </span>
                  </Dropdown>
                </li>
                <li>
                  <a
                    href="#"
                    className="join hover:border-b-[5px] border-[#3D81BB] py-6"
                  >
                    Join as travel agent
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="login text-rose-500 hover:border-b-[5px] border-[#3D81BB] py-6 hover:text-black"
                  >
                    Log in/Sign up
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  lg:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={showDrawer}
            >
              <span className="sr-only">Open main menu</span>
              <i className="bx bx-menu text-[35px] text-rose-500"></i>
            </button>
          </div>
          <Drawer
            title={
              <a href="#" className="text-rose-500">
                Log in/Sign up
              </a>
            }
            placement="right"
            onClose={onClose}
            open={open}
          >
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}></a>
            </Dropdown>
            <Menu
              theme={"light"}
              style={{
                width: 256,
              }}
              defaultOpenKeys={["sub1"]}
              selectedKeys={[current]}
              mode="inline"
              items={drawerItems}
              className="custom-dropdown-menu"
            />
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </nav>
      </header>
      <section>{children}</section>
      <footer>
        <div className="flex flex-col lg:flex-row lg:gap-[71px] pl-[9%] pr-[9.80%] border border-t-[1px]">
          <div className="py-7 lg:py-16">
            <img
              src="images/logo.svg"
              width={104}
              height={50}
              alt="Holidity-logo"
            />
          </div>
          <div className="lg:py-10">
            <p className="mb-5 font-semibold tracking-[1px]">
              Explore Holidify
            </p>
            <p className="mb-3">
              <a
                href="/"
                className="text-[15px] text-gray-700 font-semibold hover:underline"
              >
                Packages
              </a>
            </p>
            <p className="mb-3">
              <a
                href="/"
                className="text-[15px] text-gray-700 font-semibold hover:underline"
              >
                Hotels
              </a>
            </p>
            <p className="mb-3">
              <a
                href="/"
                className="text-[15px] text-gray-700 font-semibold hover:underline"
              >
                Destinations
              </a>
            </p>
            <p className="mb-3">
              <a
                href="/"
                className="text-[15px] text-gray-700 font-semibold hover:underline"
              >
                Collections
              </a>
            </p>
            <p className="mb-3">
              <a
                href="/"
                className="text-[15px] text-gray-700 font-semibold hover:underline"
              >
                About Us
              </a>
            </p>
          </div>
          <div className="lg:py-[68px] md:pb-6 border-b sm:border-b pb-6 xs:border-b pb-6">
            <p className="mb-2 text-[17px] font-mono tracking-[1px]">
              Currency
            </p>
            <div className="relative">
              <select className="currency-select rounded-[4px] w-[160px] border border-1 border-slate-400 outline-none placeholder:text-slate-600 py-[7px] px-2">
                <option value="currency">Currency</option>
                <option value="inr">₹ INR</option>
                <option value="usd">$ USD</option>
                <option value="gbp">£ GBP</option>
                <option value="aed">د.إ AED</option>
                <option value="eur">€ EUR</option>
                <option value="sgd-sgd">SGD SGD</option>
                <option value="rm-myr">RM MYR</option>
                <option value="thb">฿ THB</option>
                <option value="a$-aud">A$ AUD</option>
              </select>
              <div className="flex flex-col absolute top-[14px] left-[138px]">
                <i className="bx bxs-up-arrow text-[8px]"></i>
                <i className="bx bxs-down-arrow text-[8px]"></i>
              </div>
            </div>
          </div>
          <div className="lg:py-10 md:py-6 border-b sm:border-b py-6">
            <p className="mb-5 font-semibold tracking-[1px]">Travel Agent?</p>
            <a href="/" className="text-[17px] text-[#0056B3] hover:underline">
              Buy Travel Leads
            </a>
            <p className="text-[13px] text-slate-600 mt-1 lg:w-[150px]">
              (100% phone and email verified leads for holiday package)
            </p>
          </div>
          <div className="py-5">
            <p className="mb-5 font-semibold tracking-[1px]">
              Need help with tour packages?
            </p>
            <a
              href="/"
              className="text-[#0056B3] hover:underline font-semibold tracking-[0.7px]"
            >
              Fill this form to get a callback
            </a>
            <div className="flex items-center gap-3 mt-5 mb-3 text-slate-800">
              <i className="bx bx-phone text-[20px]"></i>
              <span className="text-[15px]">022-48934191</span>
            </div>
            <div className="flex items-center gap-3 mb-3 text-slate-800">
              <i className="bx bx-envelope text-[23px]"></i>
              <span className="text-[15px]">hello@holidify.com</span>
            </div>
            <p className="text-[15px] text-slate-600 mt-1">
              Mon-Fri: 10AM - 7PM (IST)
            </p>
            <p className="text-[15px] text-slate-600 mt-1 mb-3">
              Saturday: 10AM - 2PM (IST)
            </p>
            <p className="text-[14px] text-black font-semibold tracking-[0.7px] mb-1">
              Follow us
            </p>
            <div className="flex items-center">
              <Button className="border-0 ml-[-14px]">
                <a href="/">
                  <img
                    src="images/facebook-logo.png"
                    width={33}
                    height={33}
                    alt="instagram-logo"
                  />
                </a>
              </Button>
              <Button className="border-0 ml-[-14px]">
                <a href="/">
                  <img
                    src="images/Instagram-Logo.png"
                    width={33}
                    height={33}
                    alt="instagram-logo"
                  />
                </a>
              </Button>
              <Button className="border-0 ml-[-14px]">
                <a href="/">
                  <img
                    src="images/twitter-logo.png"
                    width={33}
                    height={33}
                    alt="instagram-logo"
                  />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="border border-t-[1px] w-full flex items-center justify-center gap-2 py-4">
          <div>
            <span className="text-[14px] text-slate-800 mt-1">
              © Holidify Travels Pvt Ltd.- All Right Reserved
            </span>
          </div>
          <div>
            <a href="/" className="text-[14px] text-[#0056B3] hover:underline">
              Terms
            </a>
          </div>
          <div>
            <a href="/" className="text-[14px] text-[#0056B3] hover:underline">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Structure;
