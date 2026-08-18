import type { Journal } from "../../types/Journal.types"

type JournalPDFProps = {
    journal: Journal;
};

//Sida 1/2? Fixa?

function JournalPDF({ journal }: JournalPDFProps) {
    return (
        <div id="pdfJournal">

            <h1>Journal</h1>

            <h3>Häst</h3>

            <div className="pdfField">
                <strong>Namn:</strong>
                <span>{journal.horse.name}</span>
            </div>

            <div className="pdfField">
                <strong>Född:</strong>
                <span>{journal.horse.birthDate}</span>
            </div>

            <div className="pdfField">
                <strong>Kön:</strong>
                <span>{journal.horse.gender}</span>
            </div>

            <div className="pdfField">
                <strong>Ras:</strong>
                <span>{journal.horse.breed}</span>
            </div>

            <h3>Ägare</h3>

            <div className="pdfField">
                <strong>Namn:</strong>
                <span>{journal.owner.name}</span>
            </div>

            <div className="pdfField">
                <strong>Adress:</strong>
                <span>{journal.owner.address}</span>
            </div>

            <div className="pdfField">
                <strong>Telefon:</strong>
                <span>{journal.owner.phone}</span>
            </div>

            <div className="pdfField">
                <strong>Mail:</strong>
                <span>{journal.owner.mail}</span>
            </div>

            <h3>Besök</h3>

            <div className="pdfField">
                <strong>Datum:</strong>
                <span>{journal.visitDate}</span>
            </div>

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