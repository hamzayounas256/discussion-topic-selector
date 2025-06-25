"use client"
import { Box, Typography, Grid, Card, CardContent, CardActionArea, Chip, useTheme, useMediaQuery } from "@mui/material"
import { SportsEsports, School, SportsSoccer, Newspaper, TrendingUp, Science } from "@mui/icons-material"

const topics = [
  {
    id: "Fun",
    label: "Fun",
    color: "#7c4dff",
    icon: SportsEsports,
    description: "Entertainment and leisure activities",
  },
  {
    id: "Education",
    label: "Education",
    color: "#2196f3",
    icon: School,
    description: "Learning and academic topics",
  },
  {
    id: "Sports",
    label: "Sports",
    color: "#4caf50",
    icon: SportsSoccer,
    description: "Athletic and competitive activities",
  },
  {
    id: "News",
    label: "News",
    color: "#ff9800",
    icon: Newspaper,
    description: "Current events and journalism",
  },
  {
    id: "Investment",
    label: "Investment",
    color: "#f44336",
    icon: TrendingUp,
    description: "Financial markets and strategies",
  },
  {
    id: "Facts",
    label: "Facts",
    color: "#9c27b0",
    icon: Science,
    description: "Interesting facts and trivia",
  },
]

const TopicSelector = ({ selectedTopic, onTopicSelect }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        textAlign="center"
        mb={3}
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
          color: "text.primary",
          fontWeight: 500,
        }}
      >
        Which topic are you going to discuss?
      </Typography>

      <Grid container spacing={2}>
        {topics.map((topic) => {
          const IconComponent = topic.icon
          const isSelected = selectedTopic === topic.id

          return (
            <Grid item xs={12} sm={6} md={4} key={topic.id}>
              <Card
                sx={{
                  height: "100%",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isSelected ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isSelected ? `0 8px 25px ${topic.color}40` : "0 2px 8px rgba(0,0,0,0.1)",
                  border: isSelected ? `2px solid ${topic.color}` : "2px solid transparent",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 6px 20px ${topic.color}30`,
                  },
                }}
              >
                <CardActionArea
                  onClick={() => onTopicSelect(topic.id)}
                  sx={{
                    height: "100%",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: { xs: "120px", sm: "140px" },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 0 }}>
                    <Box
                      sx={{
                        width: { xs: 48, sm: 56 },
                        height: { xs: 48, sm: 56 },
                        borderRadius: "50%",
                        backgroundColor: `${topic.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                        mx: "auto",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: { xs: 24, sm: 28 },
                          color: topic.color,
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                        fontWeight: 600,
                        color: isSelected ? topic.color : "text.primary",
                        mb: 1,
                      }}
                    >
                      {topic.label}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        lineHeight: 1.4,
                      }}
                    >
                      {topic.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      {selectedTopic && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Chip
            label={`Selected: ${selectedTopic}`}
            color="primary"
            variant="filled"
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              fontWeight: 500,
              px: 2,
              py: 1,
            }}
          />
        </Box>
      )}
    </Box>
  )
}

export default TopicSelector
