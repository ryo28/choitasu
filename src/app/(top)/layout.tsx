export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-50 fixed top-0 left-0 right-0 bottom-0 p-4">
      <div className="mx-auto max-w-screen-sm px-2">
        {/* メインコンテンツ */}
        <h1 className="text-xl font-bold">TODOリスト</h1>
        <nav></nav>
        {children}
      </div>
    </main>
  );
}
