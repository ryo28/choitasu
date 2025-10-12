import { Menu } from "./_components/_menu/Menu";
import { Logo } from "./_components/Logo";
export default function TopLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="fixed top-2 right-0 bottom-0 left-0 bg-gray-50">
			<div className="mx-auto max-w-screen-sm rounded-md border border-blue-300 py-4">
				{/* メインコンテンツ */}
				<div className="flex h-10 items-center justify-between px-4">
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
	);
}
