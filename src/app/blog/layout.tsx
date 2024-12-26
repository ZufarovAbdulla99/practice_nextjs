import Image from "next/image";
import NextJs from "../../../public/nextjs.jpg";
import Link from "next/link";

const layout = async ({ children }: { children: React.ReactNode }) => {
  

  return (
    <div className="border-2 border-blue-600 p-4">
      {children}
    </div>
  );
};

export default layout;
