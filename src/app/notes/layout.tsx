import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className=" max-w-7xl p-4">{children} </main>
    </>
  );
}
