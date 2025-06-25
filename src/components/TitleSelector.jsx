"use client";

import { useState, useMemo } from "react";
import {
	Box,
	Typography,
	TextField,
	Autocomplete,
	Chip,
	Paper,
	InputAdornment,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { Add } from "@mui/icons-material";

const titlesByTopic = {
	Fun: [
		"Board games revival",
		"Comedy trends",
		"Amusement parks",
		"Escape rooms",
		"Street performances",
		"Online challenges",
		"Festivals impact",
		"Crafting movement",
		"Social gaming",
		"Virtual reality",
	],
	Education: [
		"Gamified learning",
		"Education systems",
		"Bilingual benefits",
		"Standardized testing",
		"Arts in schools",
		"Tech bootcamps",
		"Homeschooling dynamics",
		"Mentorship importance",
		"Educational equity",
		"Mobile learning",
	],
	Sports: [
		"Sports medicine",
		"Team sociology",
		"Olympic economics",
		"Gender parity",
		"Fandom psychology",
		"Extreme sports",
		"Sports business",
		"Youth athletics",
		"Data analytics",
		"Doping ethics",
	],
	News: [
		"Citizen journalism",
		"Whistleblower influence",
		"Fake news",
		"Print media survival",
		"Social media news",
		"Cybersecurity news",
		"Democratic media",
		"News deserts",
		"News economics",
		"Broadcast evolution",
	],
	Investment: [
		"Robo-advising",
		"Geopolitical impacts",
		"Index funds",
		"Real estate trends",
		"Startup investing",
		"Social trading",
		"Tax strategies",
		"Emerging markets",
		"Financial literacy",
		"Pension futures",
	],
	Facts: [
		"Animal oddities",
		"Everyday science",
		"Historical obscurities",
		"Science myths",
		"Human body facts",
		"Oceanic discoveries",
		"Space exploration",
		"Ancient tech",
		"World laws",
		"Bizarre news",
	],
};

const TitleSelector = ({ selectedTopic, selectedTitle, onTitleSelect }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const availableTitles = titlesByTopic[selectedTopic] || [];

	const isCustomTitle = useMemo(() => {
		return selectedTitle && !availableTitles.includes(selectedTitle);
	}, [selectedTitle, availableTitles]);

	const handleTitleChange = (event, newValue) => {
		if (newValue) {
			onTitleSelect(newValue);
		}
	};

	return (
		<Box>
			<Box sx={{ maxWidth: 600, mx: "auto" }}>
				<Autocomplete
					value={selectedTitle}
					onChange={handleTitleChange}
					inputValue={inputValue}
					onInputChange={handleInputChange}
					options={availableTitles}
					freeSolo
					selectOnFocus
					clearOnBlur
					handleHomeEndKeys
					renderInput={(params) => (
						<TextField
							{...params}
							label="Enter a custom title"
							variant="outlined"
							fullWidth
							sx={{
								"& .MuiOutlinedInput-root": {
									borderRadius: 2,
									backgroundColor: "background.paper",
									"&:hover .MuiOutlinedInput-notchedOutline": {
										borderColor: "primary.main",
									},
								},
							}}
						/>
					)}
					renderOption={(props, option) => (
						<Box
							component="li"
							{...props}
							sx={{
								py: 1.5,
								px: 2,
								"&:hover": {
									backgroundColor: "primary.light",
									color: "primary.contrastText",
								},
							}}
						>
							<Typography variant="body1">{option}</Typography>
						</Box>
					)}
					PaperComponent={({ children, ...other }) => (
						<Paper
							{...other}
							sx={{
								mt: 1,
								borderRadius: 2,
								boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
								border: "1px solid",
								borderColor: "divider",
							}}
						>
							{children}
						</Paper>
					)}
					noOptionsText={
						<Box sx={{ py: 2, px: 2, textAlign: "center" }}>
							<Add sx={{ mb: 1, color: "text.secondary" }} />
							<Typography variant="body2" color="text.secondary">
								Press Enter to add "{inputValue}" as a custom title
							</Typography>
						</Box>
					}
				/>

				{selectedTitle && (
					<Box sx={{ mt: 3, textAlign: "center" }}>
						<Chip
							label={selectedTitle}
							color={isCustomTitle ? "secondary" : "primary"}
							variant="filled"
							sx={{
								fontSize: { xs: "0.8rem", sm: "0.9rem" },
								fontWeight: 500,
								px: 2,
								py: 1,
								maxWidth: "100%",
								height: "auto",
								"& .MuiChip-label": {
									whiteSpace: "normal",
									wordBreak: "break-word",
									lineHeight: 1.4,
									py: 0.5,
								},
							}}
							icon={isCustomTitle ? <Add /> : undefined}
						/>
						{isCustomTitle && (
							<Typography
								variant="caption"
								display="block"
								sx={{
									mt: 1,
									color: "secondary.main",
									fontSize: { xs: "0.7rem", sm: "0.75rem" },
								}}
							>
								Custom title
							</Typography>
						)}
					</Box>
				)}

				<Box sx={{ mt: 4 }}>
					<Typography
						variant="subtitle2"
						color="text.secondary"
						mb={2}
						sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
					>
						Popular {selectedTopic} discussion titles:
					</Typography>
					<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
						{availableTitles.slice(0, isMobile ? 6 : 10).map((title) => (
							<Chip
								key={title}
								label={title}
								variant="outlined"
								size="small"
								clickable
								onClick={() => onTitleSelect(title)}
								sx={{
									fontSize: { xs: "0.7rem", sm: "0.75rem" },
									"&:hover": {
										backgroundColor: "primary.light",
										color: "primary.contrastText",
										borderColor: "primary.main",
									},
								}}
							/>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default TitleSelector;
