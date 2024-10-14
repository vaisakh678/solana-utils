import React from "react";
import AppRouter from "./AppRouter";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./contexts/ThemeProvider";

const App: React.FC = () => {
	return (
		<ThemeProvider defaultTheme="light">
			<Toaster richColors toastOptions={{}} />
			<ConnectionProvider endpoint="https://api.devnet.solana.com">
				<WalletProvider wallets={[]}>
					<WalletModalProvider>
						<AppRouter />
					</WalletModalProvider>
				</WalletProvider>
			</ConnectionProvider>
		</ThemeProvider>
	);
};

export default App;
