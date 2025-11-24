import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold underline">お問い合わせフォーム</h1>
		</div>
	);
}
