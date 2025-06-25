"use client";

import { Box, Typography, Container } from "@mui/material";
import TopicButtons from "./TopicButtons";
import TitleDropdown from "./TitleDropdown";
import WordSlider from "./WordSlider";
import NavigationButtons from "./NavigationButtons";

const ContentTypeSelector = ({
	selectedTopic,
	setSelectedTopic,
	selectedTitle,
	setSelectedTitle,
	textLength,
	setTextLength,
}) => {
	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Box sx={{ mb: 6 }}>
				<Typography
					variant="h4"
					sx={{
						color: "#ffffff",
						fontWeight: 600,
						fontSize: "1.5rem",
						mb: 1,
					}}
				>
					Content type
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: "#a1a1aa",
						fontSize: "0.875rem",
						lineHeight: 1.5,
					}}
				>
					Choose a content type that best fits your needs.
				</Typography>
			</Box>

			<Box sx={{ mb: 6 }}>
				<Typography
					variant="h6"
					sx={{
						color: "#ffffff",
						fontWeight: 500,
						fontSize: "1rem",
						mb: 3,
					}}
				>
					What type of content are you creating?
				</Typography>
				<TopicButtons
					selectedTopic={selectedTopic}
					setSelectedTopic={setSelectedTopic}
				/>
			</Box>

			{selectedTopic && (
				<Box sx={{ mb: 6 }}>
					<Typography
						variant="h6"
						sx={{
							color: "#ffffff",
							fontWeight: 500,
							fontSize: "1rem",
							mb: 3,
						}}
					>
						Which type of "{selectedTopic}" content do you want to create?
					</Typography>
					<TitleDropdown
						selectedTopic={selectedTopic}
						selectedTitle={selectedTitle}
						setSelectedTitle={setSelectedTitle}
					/>
				</Box>
			)}

			<Box sx={{ mb: selectedTopic ? 25 : 8 }}>
				<Typography
					variant="h6"
					sx={{
						color: "#ffffff",
						fontWeight: 500,
						fontSize: "1rem",
						mb: 4,
					}}
				>
					Set the number of words for output text.
				</Typography>
				<WordSlider value={textLength} onChange={setTextLength} />
			</Box>

			<NavigationButtons
				selectedTopic={selectedTopic}
				selectedTitle={selectedTitle}
			/>
		</Container>
	);
};

export default ContentTypeSelector;
