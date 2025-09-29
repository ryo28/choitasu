import { SheetDemo } from "./_components/Menu";

export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-gray-50 fixed top-2 left-0 right-0 bottom-0">
        <div className="mx-auto max-w-screen-sm py-4 border">
          {/* メインコンテンツ */}
          <div className="flex items-center justify-between px-4 h-10 ">
            <h1 className="text-xl font-bold">TODOリスト</h1>
            <nav>
              <SheetDemo />
            </nav>
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
