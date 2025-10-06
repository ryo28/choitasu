import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TextAlignStart } from "lucide-react";
import { Logo } from "./Logo";
import { InfoDialogs } from "./InfoDialogs";
import PrivacyPolicy from "./PrivacyPolicy";
import { AboutApp } from "./AboutApp";
import Link from "next/link";

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-gray-50 border-blue-200">
          <TextAlignStart />
          menu
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
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
            © 2025~{new Date().getFullYear()} Waki. All rights reserved.
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
