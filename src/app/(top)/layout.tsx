import { Menu } from "./_components/Menu";
import { Logo } from "./_components/Logo";

export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-gray-50 fixed top-2 left-0 right-0 bottom-0">
        <div className="mx-auto max-w-screen-sm py-4 border rounded-md border-blue-300">
          {/* メインコンテンツ */}
          <div className="flex items-center justify-between px-4 h-10 ">
            <h1 className="select-none">
              <Logo />
            </h1>
            <nav>
              <Menu />
            </nav>
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
