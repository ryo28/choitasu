import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

type DialogDemoProps = {
	title: string;
	children: React.ReactNode;
};

export function InfoDialogs({ title, children }: DialogDemoProps) {
	return (
		<Dialog>
			<form>
				<DialogTrigger asChild>
					<Button variant="outline">{title}</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<div>{children}</div>
					</DialogHeader>
					<DialogFooter></DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
