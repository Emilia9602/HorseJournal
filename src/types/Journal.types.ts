import type { Horse } from "./Horse.types";
import type { Owner } from "./Owner.types";

export type Journal = {
    horse: Horse;
    owner: Owner;

    visitDate: string;

    anamnes: string;
    ocularInspection: string;
    fosa: string;
    movementAnalysis: string;

    treatment: string;
    homeAdvice: string;
};

export type TextArea = keyof Omit<Journal, "horse" | "owner" | "visitDate">;

export type JournalSection = "horse" | "owner";