"use client";

import { useState } from "react";
import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	Paper,
	ClickAwayListener,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

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

const TitleDropdown = ({ selectedTopic, selectedTitle, setSelectedTitle }) => {
	const [open, setOpen] = useState(false);

	const availableTitles = titlesByTopic[selectedTopic] || [];

	const handleToggle = () => {
		setOpen(!open);
	};

	const handleSelect = (title) => {
		setSelectedTitle(title);
		setOpen(false);
	};

	const handleClickAway = () => {
		setOpen(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<Box sx={{ position: "relative", maxWidth: 400 }}>
				<Box
					onClick={handleToggle}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						backgroundColor: "#2a2a2a",
						border: "1px solid #3a3a3a",
						borderRadius: "8px",
						padding: "12px 16px",
						cursor: "pointer",
						"&:hover": {
							borderColor: "#4a4a4a",
						},
					}}
				>
					<Typography
						variant="body1"
						sx={{
							color: selectedTitle ? "#ffffff" : "#a1a1aa",
							fontSize: "0.875rem",
						}}
					>
						{selectedTitle || "Search"}
					</Typography>
					<ExpandMore
						sx={{
							color: "#a1a1aa",
							transform: open ? "rotate(180deg)" : "rotate(0deg)",
							transition: "transform 0.2s ease",
						}}
					/>
				</Box>

				{open && (
					<Paper
						sx={{
							position: "absolute",
							top: "100%",
							left: 0,
							right: 0,
							mt: 1,
							backgroundColor: "#2a2a2a",
							border: "1px solid #3a3a3a",
							borderRadius: "8px",
							zIndex: 1000,
							maxHeight: "300px",
							overflow: "hidden",
						}}
					>
						<List
							sx={{
								py: 0,
								maxHeight: "300px",
								overflow: "auto",
							}}
						>
							{availableTitles.map((title, index) => (
								<ListItem
									key={index}
									onClick={() => handleSelect(title)}
									sx={{
										py: 1.5,
										px: 2,
										cursor: "pointer",
										"&:hover": {
											backgroundColor: "#3a3a3a",
										},
										borderBottom:
											index < availableTitles.length - 1
												? "1px solid #333333"
												: "none",
									}}
								>
									<ListItemText
										primary={title}
										primaryTypographyProps={{
											fontSize: "0.875rem",
											color: "#ffffff",
											fontWeight: 400,
										}}
									/>
								</ListItem>
							))}
						</List>
					</Paper>
				)}
			</Box>
		</ClickAwayListener>
	);
};

export default TitleDropdown;
