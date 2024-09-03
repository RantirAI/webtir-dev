import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-5 bg-[#F5F6F7]">{children}</body>
    </html>
  );
}
