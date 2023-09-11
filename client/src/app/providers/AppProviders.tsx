import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "@app/store/store";
import AuthProvider from "@app/providers/AuthProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export type AppProvidersProps = {
	children: React.ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						{children}
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</BrowserRouter>
	);
};

export default AppProviders;