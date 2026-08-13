import { useState } from "react";
import type { Journal, JournalSection, TextArea } from "../types/Journal.types";

const useJournal = () => {
    const today = new Date().toISOString().split("T")[0];

    const [journal, setJournal] = useState<Journal>({
        horse: {
            name: "",
            birthDate: "",
            gender: "",
            breed: "",
        },

        owner: {
            name: "",
            phone: "",
            address: "",
            mail: "",
        },

        visitDate: today,

        anamnes: "",
        ocularInspection: "",
        fosa: "",
        movementAnalysis: "",

        treatment: "",
        homeAdvice: "",
    });

    const updateField = (
        section: JournalSection,
        field: keyof Journal[JournalSection],
        value: string
    ) => {
        setJournal((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const updateDate = (
        field: "visitDate",
        value: string,
    ) => {
        setJournal((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const updateTextArea = (
        area: TextArea,
        value: string
    ) => {
        setJournal((prev) => ({
            ...prev,
            [area]: value,
        }));
    };

    return {
        journal, updateField, updateDate, updateTextArea,
    };
}

export default useJournal;