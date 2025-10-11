import { TextAlignStart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { AboutApp } from "./AboutApp";
import { InfoDialogs } from "./InfoDialogs";
import { Logo } from "./Logo";
import PrivacyPolicy from "./PrivacyPolicy";

export function Menu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="border-blue-200 bg-gray-50">
					<TextAlignStart />
					menu
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<Logo />
					<SheetTitle className="sr-only">メニュー</SheetTitle>
					<SheetDescription className="sr-only">
						アプリの情報やお問い合わせはこちらから
					</SheetDescription>
				</SheetHeader>
				<footer className="grid flex-1 auto-rows-min gap-6 px-4">
					<div className="grid gap-3">
						<InfoDialogs title="このアプリについて">
							<AboutApp />
						</InfoDialogs>
					</div>
					<div className="grid gap-3">
						<InfoDialogs title="プライバシーポリシー">
							<PrivacyPolicy />
						</InfoDialogs>
					</div>
					<div className="grid gap-3">
						<InfoDialogs title="利用規約">
							<PrivacyPolicy />
						</InfoDialogs>
					</div>
					<div className="grid gap-3">
						<Link
							href="https://x.com/w_a59"
							target="_blank"
							className="text-blue-500 hover:underline"
						>
							Contact
						</Link>
					</div>
					<div className="grid gap-3">
						© 2025~{new Date().getFullYear()} ちょいタス. All rights reserved.
					</div>
				</footer>
				<SheetFooter>
					<SheetClose asChild>
						<Button variant="outline">Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
