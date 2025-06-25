import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { ArrowBack, Edit } from "@mui/icons-material";

const Header = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "16px 24px",
				borderBottom: "1px solid #2a2a2a",
				backgroundColor: "#1a1a1a",
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<IconButton sx={{ color: "#a1a1aa", p: 0.5 }}>
					<ArrowBack fontSize="small" />
				</IconButton>
				<Box>
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<Typography
							variant="body1"
							sx={{
								color: "#ffffff",
								fontWeight: 500,
								fontSize: "0.875rem",
							}}
						>
							Media management
						</Typography>
						<Edit sx={{ fontSize: 14, color: "#a1a1aa" }} />
					</Box>
					<Typography
						variant="body2"
						sx={{
							color: "#a1a1aa",
							fontSize: "0.75rem",
							mt: 0.25,
						}}
					>
						Draft campaign
					</Typography>
				</Box>
			</Box>

			<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
				<Box
					sx={{
						textAlign: "right",
						display: {
							xs: "none",
							sm: "block",
						},
					}}
				>
					<Typography
						variant="body2"
						sx={{
							color: "#ffffff",
							fontSize: "0.75rem",
							fontWeight: 500,
						}}
					>
						Jane Cooper
					</Typography>
					<Typography
						variant="body2"
						sx={{
							color: "#8b5cf6",
							fontSize: "0.77rem",
							textDecoration: "underline",
							cursor: "pointer",
						}}
					>
						Change profile
					</Typography>
				</Box>
				<Avatar
					sx={{
						width: 32,
						height: 32,
						bgcolor: "#8b5cf6",
						fontSize: "0.75rem",
						fontWeight: 600,
					}}
				>
					JC
				</Avatar>
			</Box>
		</Box>
	);
};

export default Header;
