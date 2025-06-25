"use client";

import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import ContentTypeSelector from "./components/ContentTypeSelector";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#6366f1",
			light: "#818cf8",
			dark: "#4f46e5",
		},
		secondary: {
			main: "#8b5cf6",
		},
		background: {
			default: "#1a1a1a",
			paper: "#2a2a2a",
		},
		text: {
			primary: "#ffffff",
			secondary: "#a1a1aa",
		},
	},
	typography: {
		fontFamily: "sans-serif",
		h4: {
			fontWeight: 600,
			fontSize: "1.5rem",
			lineHeight: 1.3,
		},
		h6: {
			fontWeight: 500,
			fontSize: "1rem",
			lineHeight: 1.4,
		},
		body1: {
			fontSize: "0.875rem",
			lineHeight: 1.5,
		},
		body2: {
			fontSize: "0.75rem",
			lineHeight: 1.4,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: "#1a1a1a",
					color: "#ffffff",
				},
			},
		},
	},
});

function App() {
	const [selectedTopic, setSelectedTopic] = useState("");
	const [selectedTitle, setSelectedTitle] = useState("");
	const [textLength, setTextLength] = useState(700);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<div style={{ minHeight: "100vh", backgroundColor: "#1a1a1a" }}>
				<Header />
				<ContentTypeSelector
					selectedTopic={selectedTopic}
					setSelectedTopic={setSelectedTopic}
					selectedTitle={selectedTitle}
					setSelectedTitle={setSelectedTitle}
					textLength={textLength}
					setTextLength={setTextLength}
				/>
			</div>
		</ThemeProvider>
	);
}

export default App;
