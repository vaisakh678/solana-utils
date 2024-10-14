import React from "react";
import AppRouter from "./AppRouter";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./contexts/ThemeProvider";

const App: React.FC = () => {
	return (
		<ConnectionProvider endpoint="https://api.devnet.solana.com">
			<WalletProvider wallets={[]}>
				<WalletModalProvider>
					<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
						<Toaster richColors toastOptions={{}} />
						<AppRouter />
					</ThemeProvider>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
};

export default App;
