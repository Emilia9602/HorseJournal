import type { Journal } from "../../types/Journal.types"

type PageTwoProps = {
    journal: Journal;
};

function PageTwo({ journal }: PageTwoProps) {
    return (
        <>
            <h3>FOSA</h3>
            <p>{journal.fosa}</p>

            <h3>Rörelseanalys</h3>
            <p>{journal.movementAnalysis}</p>

            <h3>Behandling</h3>
            <p>{journal.treatment}</p>

            <h3>Hemgångsråd</h3>
            <p>{journal.homeAdvice}</p>
        </>
    )
}

export default PageTwo;