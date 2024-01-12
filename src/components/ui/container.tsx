import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
	return <div className="mx-auto max-w-2xl place-content-center flex min-h-screen flex-col py-8">{children}</div>;
}
