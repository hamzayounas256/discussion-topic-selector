"use client";

import { Box, Slider, Typography } from "@mui/material";

const WordSlider = ({ value, onChange }) => {
	const handleChange = (event, newValue) => {
		onChange(newValue);
	};

	return (
		<Box sx={{ maxWidth: 400 }}>
			<Box
				sx={{
					position: "relative",
					mb: 3,
				}}
			>
				<Slider
					value={value}
					onChange={handleChange}
					min={100}
					max={1000}
					step={50}
					sx={{
						color: "#6366f1",
						height: 4,
					}}
				/>

				<Box
					sx={{
						position: "absolute",
						top: -35,
						left: `${((value - 100) / 900) * 100}%`,
						transform: "translateX(-50%)",
						backgroundColor: "#6366f1",
						color: "#ffffff",
						padding: "4px 8px",
						borderRadius: "4px",
						fontSize: "0.75rem",
						fontWeight: 600,
						minWidth: "40px",
						textAlign: "center",
					}}
				>
					{value}
				</Box>
			</Box>

			<Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
				<Typography
					variant="body2"
					sx={{
						color: "#a1a1aa",
						fontSize: "0.75rem",
					}}
				>
					100
				</Typography>
				<Typography
					variant="body2"
					sx={{
						color: "#a1a1aa",
						fontSize: "0.75rem",
					}}
				>
					1000
				</Typography>
			</Box>
		</Box>
	);
};

export default WordSlider;
