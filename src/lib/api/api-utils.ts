export function getApiServerURL() {
	console.log(
		process.env.NEXT_PUBLIC_API_SERVER_HOST ?? 'http://127.0.0.1:1337'
	);
	return process.env.NEXT_PUBLIC_API_SERVER_HOST ?? 'http://127.0.0.1:1337';
}
