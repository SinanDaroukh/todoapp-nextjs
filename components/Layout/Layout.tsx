import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>To Do App - NestJs/NextJs </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center">
        <Header />
        <main className="w-1/3">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
