"use client";

import Snowfall from "react-snowfall";
import { useTheme } from "../providers/theme-provider";

export default function SnowfallWrapper() {
    const { theme } = useTheme();

    return (
        <Snowfall
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
            }}
            color={theme === "dark" ? "#ffffff" : "#1f6c8f"}
        />
    );
}
