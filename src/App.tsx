import React from "react";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "./hooks/useTheme";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Toaster } from "sonner";

const App: React.FC = () => {
	return (
		<>
			<Toaster richColors toastOptions={{}} />

			<ThemeProvider defaultTheme="light">
				<ConnectionProvider endpoint="https://api.devnet.solana.com">
					<WalletProvider wallets={[]}>
						<WalletModalProvider>
							<AppRouter />
						</WalletModalProvider>
					</WalletProvider>
				</ConnectionProvider>
			</ThemeProvider>
		</>
	);
};

export default App;
