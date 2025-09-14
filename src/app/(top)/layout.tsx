export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-screen-md px-4 border py-8">
        {/* メインコンテンツ */}
        <h1 className="text-xl font-bold">TODOリスト</h1>
        {children}
      </div>
    </main>
  );
}
