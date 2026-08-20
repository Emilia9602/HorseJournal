import type { Journal } from "../../types/Journal.types"

type PageOneProps = {
    journal: Journal;
};

function PageOne({ journal }: PageOneProps) {
    return (
        <>
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

            <div className="pdfDiv">
                <h3>Anamnes</h3>
                <p>{journal.anamnes}</p>

                <h3>Ockulär besiktning</h3>
                <p>{journal.ocularInspection}</p>
            </div>
        </>
    )
}

export default PageOne;