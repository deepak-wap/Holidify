import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Dropdown, Space, Menu, Drawer, Button, Modal, Input, Image } from "antd";
import {
  DownOutlined,
  SmileOutlined,
  CloseOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  MailFilled,
  EyeOutlined,
} from "@ant-design/icons";

const Structure = ({ children, title = "Holidify" })=>{
  const [scrollHeight, setScrollHeight] = useState(0);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14px] text-[#212529] font-[manrope] font-bold flex items-center gap-2 mb-1"
        >
          <Image src={'/images/map-icon.png'} width={23} height={24}/>
          Countries
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14.8px] text-[#333333] font-[manrope] flex items-center gap-2 mb-1 ml-8"
        >
          Singapore
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14.8px] text-[#333333] font-[manrope] flex items-center gap-2 mb-1 ml-8"
        >
          UAE
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14.8px] text-[#333333] font-[manrope] flex items-center gap-2 mb-1 ml-8"
        >
          Oman
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14.8px] text-[#333333] font-[manrope] flex items-center gap-2 mb-1 ml-8"
        >
          Thailand
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14.8px] text-[#333333] font-[manrope] flex items-center gap-2 mb-1 ml-8"
        >
          Nepal
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14.8px] text-[#333333] font-[manrope] flex items-center gap-2 mb-1 ml-8"
        >
          Vietnam
        </a>
      ),
    },
    {
      key: "8",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14.8px] text-[#333333] font-[manrope] flex items-center gap-2 mb-1 ml-8"
        >
          Seychelles
        </a>
      ),
    },
    {
      key: "9",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14.8px] text-[#333333] font-[manrope] flex items-center gap-2 mb-1 ml-8"
        >
          Mauritius
        </a>
      ),
    },
    {
      key: "10",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-[14.8px] text-[#333333] font-[manrope] flex items-center gap-2 ml-8"
        >
          India
        </a>
      ),
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
                <li className="hover:underline underline-offset-[33px] decoration-sky-500 mr-[-4px]">
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <span className="hover:border-b-[5px] border-[#3D81BB] py-6">
                        <span className="header-menu mr-1">Explore</span>
                        <DownOutlined className="text-[14px] mr-2"/>
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
                    onClick={showModal}
                    className="login text-rose-500 hover:border-b-[5px] border-[#3D81BB] py-6 hover:text-black"
                  >
                    Log in/Sign up
                  </a>
                  <Modal 
                    title={<h1 className="border-b-[1px] border-black pb-[7px] text-[#333333] text-[21.3px] text-center font-[manrope] tracking-[-0.1px] font-bold mt-[-5px]">Log in to your account</h1>} 
                    open={isModalOpen} 
                    onOk={handleOk} 
                    onCancel={handleCancel}
                    closeIcon ={<CloseOutlined className="text-[20px] mt-[4px]"/>}
                  >
                    <div className="mt-10 px-[26px]">
                      <h1 className="text-[#333333] text-[19px] font-[manrope] font-bold tracking-[-0.1] mt-[-4px] mb-4">
                        Welcome to Holidify
                      </h1>
                      <Input 
                        placeholder="Enter Email ID"
                        prefix={<i class='bx bxs-envelope text-[22px] text-[#808080]'></i>}
                        className="mb-3 pl-[20px] w-[100%] h-[49px] rounded-[5px] border-slate-500 font-[manrope]"
                      />
                      <Input.Password
                        placeholder="Enter Password"
                        prefix={<i class='bx bxs-lock-alt text-[22px] text-[#808080]'></i>}
                        className="mb-[7px] pl-[20px] w-[100%] h-[49px] rounded-[5px] border-slate-500 font-[manrope]" 
                      />
                      
                      <div className="w-full flex justify-center">
                        <Button className="border border-0 mb-8">
                          <div className="w-[210px] bg-[#ff433a] py-[13px]">
                            <a href="/" className="text-[16.5px] text-white tracking-[0.3px] font-[manrope] font-semibold">Continue</a>
                          </div>
                        </Button>
                      </div>
                      <div className="flex justify-center mb-[22.88px]">
                        <a href="/" className="text-[16.5px] text-[#0056b3] font-[manrope] font-semibold tracking-[0.3px]">
                          Forget Password?
                        </a>
                      </div>
                      <div className="flex items-center mb-5">
                        <span className="flex-grow border-b border-[#858585] font-[manrope]"></span>
                        <span className="text-[#212529] text-[16.4px] font-[manrope] font-bold mx-[10px] m-[0.10px]"> OR </span>
                        <span className="flex-grow border-b border-[#858585] font-[manrope]"></span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <Button className="mb-[10px] rounded-[4px]  border border-1 border-[#3e82f7] h-[55px]">
                            <div className="flex justify-center items-center ml-[10px]">
                              <Image src={'/images/google.png'} width={20} height={20} />
                              <span className="text-[16.5px] ml-[-4px] font-[manrope] font-bold tracking-[0.1px]">
                                Sign in with Google
                              </span>
                            </div>
                        </Button>

                        <Button className="rounded-[4px]  border border-1 border-[#3e82f7] h-[55px]">
                            <div className="flex justify-center items-center ml-[10px]">
                              {/* <Image src={'/images/google.png'} width={20} height={20} /> */}
                              <span className="text-[16.5px] ml-[-4px] font-[manrope] font-bold tracking-[0.1px]">
                                Sign up with Email
                              </span>
                            </div>
                        </Button>
                      </div>
                    </div>
                </Modal>
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
