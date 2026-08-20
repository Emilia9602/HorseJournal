import type { Journal } from "../../types/Journal.types"
import Footer from "./Footer";
import Header from "./Header";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

type JournalPDFProps = {
    journal: Journal;
};

function JournalPDF({ journal }: JournalPDFProps) {
    return (
        <div id="pdfJournal">

            <div className="pdfPage">
                <Header />

                <div className="pdfBody">
                    <PageOne journal={journal} />
                </div>

                <Footer page={1} total={2} />
            </div>

            <div className="pdfPage">
                <Header />

                <div className="pdfBody">
                    <PageTwo journal={journal} />
                </div>

                <Footer page={2} total={2} />
            </div>

        </div>
    );
}

export default JournalPDF;