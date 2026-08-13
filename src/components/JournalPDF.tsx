import type { Journal } from "../types/Journal.types"

type JournalPDFProps = {
    journal: Journal;
};

function JournalPDF({ journal }: JournalPDFProps) {
    return (
        <div>
            <h1>Journal</h1>

            <h3>Häst</h3>
            <p><strong>Namn:</strong> {journal.horse.name}</p>
            <p><strong>Född:</strong> {journal.horse.birthDate}</p>
            <p><strong>Kön:</strong> {journal.horse.gender}</p>
            <p><strong>Ras:</strong> {journal.horse.breed}</p>

            <h3>Ägare</h3>
            <p><strong>Namn:</strong> {journal.owner.name}</p>
            <p><strong>Adress:</strong> {journal.owner.address}</p>
            <p><strong>Telefon:</strong> {journal.owner.phone}</p>
            <p><strong>Mail:</strong> {journal.owner.mail}</p>

            <h3>Besök</h3>
            <p><strong>Datum:</strong> {journal.visitDate}</p>

            <h3>Anamnes</h3>
            <p>{journal.anamnes}</p>

            <h3>Ockulär besiktning</h3>
            <p>{journal.ocularInspection}</p>

            <h3>FOSA</h3>
            <p>{journal.fosa}</p>

            <h3>Rörelseanalys</h3>
            <p>{journal.movementAnalysis}</p>

            <h3>Behandling</h3>
            <p>{journal.treatment}</p>

            <h3>Hemgångsråd</h3>
            <p>{journal.homeAdvice}</p>
        </div>
    );
}

export default JournalPDF;