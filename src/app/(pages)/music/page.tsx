import * as React from "react";
import type { Metadata } from "next";
import { METADATA_MUSIC_PAGE_TITLE } from "~/util/constants";
import { TopTracks } from "~/components/music/top-tracks";
import { TopArtists } from "~/components/music/top-artists";

export const metadata: Metadata = {
	title: METADATA_MUSIC_PAGE_TITLE,
};

export default function MusicPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-4">
				<TopTracks />
				<TopArtists />
			</div>
		</main>
	);
}
