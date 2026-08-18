import type { Journal } from "../../types/Journal.types"

type PageThreeProps = {
    journal: Journal;
};

function PageThree({ journal }: PageThreeProps) {
    return (
        <>
            <h3>Behandling</h3>
            <p>{journal.treatment}</p>

            <h3>Hemgångsråd</h3>
            <p>{journal.homeAdvice}</p>
        </>
    )
}

export default PageThree;