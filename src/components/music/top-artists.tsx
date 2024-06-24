import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ARTISTS_LIST } from "~/util/constants";

export function TopArtists() {
	return (
		<>
			<div className="pt-6 flex flex-col space-y-4">
				{ARTISTS_LIST.map((item, i) => (
					<>
						<h1 className="text-2xl font-bold leading-none tracking-tighter">{item.title}</h1>
						<div key={i} className="flex flex-col gap-4 ">
							{item.options.map((opts, i) => (
								<div key={i} className="flex items-center space-x-3">
									<Image src={opts.avatar} alt="" width={500} height={500} className="h-16 w-16 rounded" />
									<div className="flex flex-col items-start space-y-2">
										<Link
											href={opts.href}
											className="font-medium text-sm underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100"
										>
											{opts.name}
										</Link>
										<span>{opts.listeners}</span>
									</div>
								</div>
							))}
						</div>
					</>
				))}
			</div>
		</>
	);
}
