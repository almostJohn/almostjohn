"use client";

import { useLanyardWS } from "use-lanyard";
import Image from "next/image";

export function Status({ initialData }: { readonly initialData?: any }) {
	const data = useLanyardWS("996354867708841984", { initialData });
	const isOnline = data?.discord_status !== "offline";

	return (
		<>
			{isOnline ? (
				<div className="avatar online">
					<div className="rounded-full">
						<Image src="/favicon.png" alt="avatar" width={24} height={24} priority={true} />
					</div>
				</div>
			) : (
				<div className="avatar offline">
					<div className="rounded-full">
						<Image src="/favicon.png" alt="avatar" width={24} height={24} priority={true} />
					</div>
				</div>
			)}
		</>
	);
}
