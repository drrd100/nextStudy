import { TestProvider } from "@/store/context";

export default function TodosLayout({ children }: { children: React.ReactNode}) {
	return (
		<>
			<TestProvider>
				<section className="flex justify-center">
					{children}
				</section>
			</TestProvider>
		</>
	);
}
