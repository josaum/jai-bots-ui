import React from 'react';
import Head from 'next/head';
import '../styles/Layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>AI Workers Catalog</title>
        <meta name="description" content="AI Workers Catalog Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-5">
        <h1 className="text-3xl font-semibold">AI Workers Catalog</h1>
      </header>

      <main className="my-5">{children}</main>

      <footer className="py-5">
        <p className="text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} AI Workers Catalog. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;