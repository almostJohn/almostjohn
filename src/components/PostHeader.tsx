import Link from "next/link";

type Props = {
	title: string;
};

export function PostHeader({ title }: Props) {
	return (
		<div className="flex flex-col pt-12">
			<h1 className="font-medium fade-in">{title}</h1>
			<Link href="/" className="font-medium text-gray-400 fade-in">
				Jhan Gale Garcia
			</Link>
		</div>
	);
}
