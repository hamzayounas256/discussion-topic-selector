"use client"

import { Box, Button } from "@mui/material"

const topics = ["Fun", "Education", "Sports", "News", "Investment", "Facts"]

const TopicButtons = ({ selectedTopic, setSelectedTopic }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
      {topics.map((topic) => (
        <Button
          key={topic}
          variant={selectedTopic === topic ? "contained" : "outlined"}
          onClick={() => setSelectedTopic(topic)}
          sx={{
            borderRadius: "20px",
            px: 3,
            py: 1,
            fontSize: "0.875rem",
            fontWeight: 500,
            textTransform: "none",
            minWidth: "auto",
            border: selectedTopic === topic ? "none" : "1px solid #3a3a3a",
            backgroundColor: selectedTopic === topic ? "#6366f1" : "transparent",
            color: selectedTopic === topic ? "#ffffff" : "#a1a1aa",
            "&:hover": {
              backgroundColor: selectedTopic === topic ? "#5856eb" : "#2a2a2a",
              borderColor: selectedTopic === topic ? "none" : "#4a4a4a",
            },
          }}
        >
          {topic}
        </Button>
      ))}
    </Box>
  )
}

export default TopicButtons
