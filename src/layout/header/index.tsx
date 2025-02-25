import { Header } from "./desktop/index";
import { MobileHeader } from "./mobile/index";

export function MainHeader() {
	return (
		<>
			<Header />
			<MobileHeader />
		</>
	);
}
