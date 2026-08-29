import type { Journal, JournalSection, TextArea } from "../types/Journal.types";
import useLocalStorage from "./useLocalStorage";

const STORAGE_KEY = "journal-data";
const today = new Date().toISOString().split("T")[0];

const defaultJournal: Journal = {
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
};

const useJournal = () => {

    const [journal, setJournal] = useLocalStorage<Journal>(
        STORAGE_KEY, defaultJournal
    );

    const updateField = <T extends JournalSection>(
        section: T,
        field: keyof Journal[T],
        value: string
    ) => {
        setJournal({
            ...journal,
            [section]: {
                ...journal[section],
                [field]: value,
            },
        });
    };

    const updateDate = (
        field: "visitDate",
        value: string,
    ) => {
        setJournal({
            ...journal,
            [field]: value,
        })
    };

    const updateTextArea = (
        area: TextArea,
        value: string
    ) => {
        setJournal({
            ...journal,
            [area]: value,
        });
    };
    const newJournal = () => {

        localStorage.removeItem(STORAGE_KEY);
        setJournal(defaultJournal);
    }

    return {
        journal, updateField, updateDate, updateTextArea, newJournal,
    };
}

export default useJournal;