import React from "react";
import { Box, Typography } from "@mui/material";

const ProgressBar = ({ steps, currentStep }) => {
  const BLUE_COLOR = "#1a73e8";
  const GRAY_COLOR = "#e0e0e0";

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      sx={{ 
        width: "100%", 
        padding: "20px 0", 
      }}
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <Box 
            key={index} 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            flex={1}
            position="relative"
          >
            {/* Connecting Line (Behind the Circles) */}
            {index < steps.length - 1 && (
              <Box
                position="absolute"
                top="15px"
                left="50%"
                right="50%"
                height={2}
                sx={{
                  backgroundColor: isCompleted ? BLUE_COLOR : GRAY_COLOR,
                  width: "calc(100%)",
                  zIndex: 0
                }}
              ></Box>
            )}

            {/* Step Number/Checkmark */}
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: isCompleted ? BLUE_COLOR : "#f0f0f0",
                color: isCompleted ? "#fff" : "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: isCompleted || isActive ? "bold" : "normal",
                marginBottom: 1,
                zIndex: 1,
                position: "relative"
              }}
            >
              {isCompleted ? "✔" : index + 1}
            </Box>

            {/* Step Label Container */}
            <Box textAlign="center">
              <Typography
                variant="body2"
                fontWeight={isActive ? "bold" : "normal"}
                color={isCompleted || isActive ? "#000" : "gray"}
              >
                {step.label}
              </Typography>
              {step.time && (
                <Typography 
                  variant="caption" 
                  color="gray"
                  display="block"
                >
                  {step.time}
                </Typography>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default function App() {
  const steps = [
    { label: "Preliminary" },
    { label: "Your Details" },
    { label: "KYC" },
    { label: "Parties" },
    { label: "Claim"   },
    { label: "Review"  },
    { label: "Payment"}
  ];

  return (
    <Box p={5}>
      <ProgressBar steps={steps} currentStep={5} />
    </Box>
  );
}