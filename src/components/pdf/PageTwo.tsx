import type { Journal } from "../../types/Journal.types"

type PageTwoProps = {
    journal: Journal;
};

function PageTwo({ journal }: PageTwoProps) {
    return (
        <>
            <h3>Anamnes</h3>
            <p>{journal.anamnes}</p>

            <h3>Ockulär besiktning</h3>
            <p>{journal.ocularInspection}</p>

            <h3>FOSA</h3>
            <p>{journal.fosa}</p>

            <h3>Rörelseanalys</h3>
            <p>{journal.movementAnalysis}</p>
        </>
    )
}

export default PageTwo;