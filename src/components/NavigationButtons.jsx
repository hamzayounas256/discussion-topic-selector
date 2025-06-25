"use client";

import { Box, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const NavigationButtons = ({ selectedTopic, selectedTitle }) => {
	const isNextEnabled = selectedTopic && selectedTitle;

	const handleNext = () => {
		if (isNextEnabled) {
			alert();
		}
	};

	return (
		<Box
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				right: 0,
				backgroundColor: "#1a1a1a",
				borderTop: "1px solid #2a2a2a",
				padding: "16px 24px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexDirection: { xs: "column", sm: "row" },
				gap: { xs: 1, sm: 0 },
			}}
		>
			<Button
				variant="text"
				sx={{
					color: "#a1a1aa",
					fontSize: "0.875rem",
					fontWeight: 500,
					textTransform: "none",
					"&:hover": {
						backgroundColor: "transparent",
						color: "#ffffff",
					},
				}}
			>
				Back
			</Button>

			<Button
				variant="contained"
				endIcon={<ArrowForward />}
				onClick={handleNext}
				disabled={!isNextEnabled}
				sx={{
					backgroundColor: isNextEnabled ? "#ffffff" : "#3a3a3a",
					color: isNextEnabled ? "#1a1a1a" : "#6a6a6a",
					fontSize: "0.875rem",
					fontWeight: 600,
					textTransform: "none",
					borderRadius: "24px",
					px: 3,
					py: 1.5,
					"&:hover": {
						backgroundColor: isNextEnabled ? "#f0f0f0" : "#3a3a3a",
					},
					"&:disabled": {
						backgroundColor: "#3a3a3a",
						color: "#6a6a6a",
					},
				}}
			>
				Next
			</Button>
		</Box>
	);
};

export default NavigationButtons;
