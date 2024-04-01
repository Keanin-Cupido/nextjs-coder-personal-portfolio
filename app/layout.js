import "./globals.css";

export const metadata = {
  title: "Coder Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full">
      <body className="container w-full mx-auto">{children}</body>
    </html>
  );
}
