import * as React from "react";
import { MapSize } from "./map-size";
import { MapGet } from "./map-get";
import { MapHas } from "./map-has";
import { MapForEach } from "./map-foreach";

export function SecondSection() {
	return (
		<div className="flex flex-col space-y-5">
			<MapSize />
			<MapGet />
			<MapHas />
			<MapForEach />
		</div>
	);
}
