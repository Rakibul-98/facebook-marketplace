import Header from "./components/Header";
import Products from "./components/Products";
import SideMenu from "./components/SideMenu";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex mx-auto">
        <SideMenu />
        <Products />
      </main>
    </div>
  );
}
