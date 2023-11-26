import Head from "next/head";
import Link from "next/link";
import { Dropdown, Space, Menu } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const Structure = ({ children, title = "Holidify" })=>{
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
      label: <span className="pb-3 text-[17.4px] text-[#3d81bb] font-semibold font-mono border-b-[5px] border-[#3D81BB] py-5">Singapore</span>
    },
    {
      key: 2,
      label: <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">Things To Do</span>
    },
    {
      key: 3,
      label: <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">Packages</span>
    },
    {
      key: 4,
      label: <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">Hotels</span>
    },
    {
      key: 5,
      label: <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">How To Reach</span>
    },
    {
      key: 6,
      label: <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">Best Time To Visit</span>
    },
    {
      key: 7,
      label: <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">Photos</span>
    },
    {
      key: 8,
      label: <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">Visa</span>
    },
    {
      key: 9,
      label: <span className="pb-3 text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono hover:border-b-[5px] border-[#3D81BB] py-5">More <DownOutlined /></span>,
      children: [
        {
          key: 9.1,
          label: <span className="text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono">Collections</span>
        },
        {
          key:9.2,
          label: <span className="text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono">Maps</span>
        },
        {
          key:9.3,
          label: <span className="text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono">Reviews & QnA</span>
        },
        {
          key:9.4,
          label: <span className="text-[17.4px] text-[#333] hover:text-[#3d81bb] font-medium font-mono">Travel Agents</span>
        }
      ]
    },
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        {/* Top Nav */}
        <nav class="bg-white dark:bg-gray-900 w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600 px-[7.6%]">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
            <Link
              href="/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="images/logo.svg"
                width={114}
                height={55}
                alt="Holidyty Logo"
              />
            </Link>
            <div class="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <i class='bx bx-search text-[23px] text-gray-500'></i>
                  </div>
                  <input type="search" id="default-search" class="outline-none shadow-inner shadow-md border border-1 rounded-[5px] w-[398px] h-[43px] px-2 py-[25px] ps-[45px] text-[16px] placeholder:text-slate-600" placeholder="Search for places to visit" />
              </div>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul class="hidden lg:inline-flex flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="hover:underline underline-offset-[33px] decoration-sky-500">
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    
                      <span className="hover:border-b-[5px] border-[#3D81BB] py-6">
                        <Space>
                          <span className="text-[18px]">Explore</span>
                          <DownOutlined />
                        </Space>
                      </span>
                  </Dropdown>
                </li>
                <li>
                  <a href="#" className="text-[18px] hover:border-b-[5px] border-[#3D81BB] py-6">
                    Join as travel agent
                  </a>
                </li>
                <li>
                <a href="#" className="text-[18px] text-rose-500 font-semibold hover:border-b-[5px] border-[#3D81BB] py-6">
                    Log in/Sign up
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  lg:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <i class='bx bx-menu text-[35px] text-rose-500'></i>
            </button>
          </div>
        </nav>

        {/* Bottom Nav */}
        <nav class="bg-gray-900 w-full z-20 top-0 border-gray-200 dark:border-gray-600 shadow-lg">
          <div className="grid grid-cols-1">
            <Menu
              theme="light"
              mode="horizontal"
              items={bottomNav}
              className="pt-2 pb-3 px-[7.6%] border border-[3px]"
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Structure;
