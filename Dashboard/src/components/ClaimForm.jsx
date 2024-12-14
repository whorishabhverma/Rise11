import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  IconButton,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TranslateIcon from "@mui/icons-material/Translate";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";

const UploadBox = ({ label, caption, onUpload, showAddIcon }) => {
  return (
    <Box
      sx={{
        border: "2px dashed #e0e0e0",
        borderRadius: 2,
        p: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        position: "relative",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          borderColor: "#1976d2",
        },
      }}
    >
      <input
        type="file"
        accept=".pdf"
        style={{ display: "none" }}
        id={`upload-${label.replace(/\s+/g, "-")}`}
      />
      <IconButton
        color="primary"
        component="label"
        htmlFor={`upload-${label.replace(/\s+/g, "-")}`}
        sx={{
          width: 80,
          height: 80,
          bgcolor: "#e6f2ff",
          "&:hover": {
            bgcolor: "#d0e7ff",
          },
        }}
      >
        {showAddIcon ? (
          <AddIcon sx={{ fontSize: 40 }} />
        ) : (
          <CloudUploadIcon sx={{ fontSize: 40 }} />
        )}
      </IconButton>
      <Typography variant="h6" sx={{ mt: 2, color: "#333" }}>
        {label}
      </Typography>
      {caption && (
        <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
          {caption}
        </Typography>
      )}
    </Box>
  );
};

const ClaimForm = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        File your Claim <Typography variant="body2" component="span" color="text.secondary">
          (Approx 5 Minutes)
        </Typography>
      </Typography>

      {/* Form Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: 2, md: 4 },
          mb: 4,
        }}
      >
        {/* Claim Value */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <CalculateIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Claim Value
            </Typography>
          </Box>
          <TextField
            label="Contract Value"
            fullWidth
            variant="outlined"
            InputProps={{ 
              endAdornment: <Typography color="text.secondary">USD</Typography> 
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Claim Value"
            fullWidth
            variant="outlined"
            InputProps={{ 
              endAdornment: <Typography color="text.secondary">USD</Typography> 
            }}
            disabled
            sx={{ mb: 2 }}
          />
          <Typography color="warning.main" variant="body2">
            150% of Contract Value
          </Typography>
        </Box>

        {/* Place */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Place
            </Typography>
          </Box>
          <TextField
            label="Select the Place for proceedings"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <FormLabel component="legend" sx={{ mb: 1 }}>
            Is the place mentioned in the agreement?
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>

        {/* Language */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <TranslateIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Language
            </Typography>
          </Box>
          <TextField
            label="Select the language for proceedings"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <FormLabel component="legend" sx={{ mb: 1 }}>
            Is the language mentioned in the agreement?
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
      </Box>

      {/* Upload Sections */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: 2, md: 4 },
        }}
      >
        {/* Statement */}
        <UploadBox 
          label="Write your Statement" 
          caption="Upload PDF (Max 2MB)" 
        />

        {/* Agreement Under Disputes */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
        >
          <UploadBox 
            label="Upload Contract" 
            caption="Max 2MB, PDF" 
          />
          <UploadBox 
            label="Arbitration Agreement" 
            caption="Max 2MB, PDF" 
          />
        </Box>

        {/* Additional Documentation */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
        > 
          <UploadBox 
            label="Arbitration Agreement" 
            caption="Max 2MB, PDF" 
          /> 
          <UploadBox 
            label="Upload Additional Docs" 
            caption="Max 2MB, PDF" 
            showAddIcon={true} // Adding the "+" icon
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ClaimForm;
