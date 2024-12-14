import React from "react";
import { Box, Typography } from "@mui/material";

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "100%", backgroundColor: "#f5f7fb", padding: "-100px", borderRadius: "0px" }}
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <Box key={index} display="flex" alignItems="center" flex={1}>
            {/* Step Number */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: isCompleted ? "#1a73e8" : "#f0f0f0",
                color: isCompleted ? "#fff" : "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: isCompleted || isActive ? "bold" : "normal",
              }}
            >
              {isCompleted ? "✔" : index + 1}
            </Box>

            {/* Step Label */}
            <Box ml={1} textAlign="center">
              <Typography
                variant="body2"
                fontWeight={isActive ? "bold" : "normal"}
                color={isCompleted || isActive ? "#000" : "gray"}
              >
                {step.label}
              </Typography>
              {step.time && (
                <Typography variant="caption" color="gray">
                  {step.time}
                </Typography>
              )}
            </Box>

            {/* Line */}
            {index < steps.length - 1 && (
              <Box
                flex={1}
                height={1}
                mx={1}
                sx={{
                  backgroundColor: isCompleted ? "#1a73e8" : "#e0e0e0",
                  borderStyle: isActive ? "dotted" : "solid",
                }}
              ></Box>
            )}
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
    { label: "Parties", time: "Approx 5 Min" },
    { label: "Claim", time: "Approx 5 Min" },
    { label: "Review", time: "Approx 5 Min" },
    { label: "Payment", time: "Approx 5 Min" },
  ];

  return (
    <Box p={5}>
      <ProgressBar steps={steps} currentStep={5} />
    </Box>
  );
}
