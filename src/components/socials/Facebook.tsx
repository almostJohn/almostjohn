import Link from "next/link";
import Image from "next/image";
import { SiFacebook as Facebook } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import { website } from "~/config/website";

export function FacebookSocial() {
	return (
		<Link
			href={website.social.facebook}
			className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
		>
			<div className="flex items-center space-x-3">
				<div className="relative h-16">
					<Image
						src="/social-profile.jpg"
						alt="@alsojohn01"
						width={64}
						height={64}
						fetchPriority="high"
						className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
					/>
					<div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-[#ffffff] inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
						<Facebook className="text-blue-700" />
					</div>
				</div>
				<div className="flex flex-col">
					<p className="font-medium text-neutral-900 dark:text-neutral-100">John Gale Garcia</p>
					<p className="text-neutral-600 dark:text-neutral-400">36 followers</p>
				</div>
			</div>
			<div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
				<ArrowUpRight />
			</div>
		</Link>
	);
}
