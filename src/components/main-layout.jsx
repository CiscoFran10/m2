"use client";

import Header from "./header";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <>
      <Header animateScroll={pathname === "/"} />
      {children}
    </>
  );
};

export default MainLayout;
