import { Status } from "./Status";

export async function Lanyard() {
	const lanyardPromise = await fetch("https://api.lanyard.rest/v1/users/996354867708841984");
	const lanyardData = await lanyardPromise.json();

	return <Status initialData={lanyardData.data} />;
}
