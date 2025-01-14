import Header from "../components/header/Header";

export default function customLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col">
      <Header />
      {children}
      <footer className=" flex justify-center mt-auto">
        <span className="text-xs">By @JhosuaSr Developer</span>
      </footer>
    </div>
  );
}
