import { useEffect, useState } from "react";
import type { Journal, JournalSection, TextArea } from "../types/Journal.types";

const STORAGE_KEY = "journal-data";

const useJournal = () => {
    const today = new Date().toISOString().split("T")[0];

    const getSavedJournal = () => {
        if (typeof window === "undefined") return null;
        return localStorage.getItem(STORAGE_KEY);
    };

    const parseSavedJournal = (data: string | null) => {
        try {
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    };

    const [journal, setJournal] = useState<Journal>(() => {

        const savedJournal = parseSavedJournal(getSavedJournal());

        return (
            savedJournal || {
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
            }
        );
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(journal));
    }, [journal]);

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