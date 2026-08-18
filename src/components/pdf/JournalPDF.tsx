import type { Journal } from "../../types/Journal.types"
import Footer from "./Footer";
import Header from "./Header";
import PageOne from "./PageOne";
import PageThree from "./PageThree";
import PageTwo from "./PageTwo";

type JournalPDFProps = {
    journal: Journal;
};

//Sida 1/2? Fixa?

function JournalPDF({ journal }: JournalPDFProps) {
    return (
        <div id="pdfJournal">

            <div className="pdfPage">
                <Header />

                <div className="pdfBody">
                    <PageOne journal={journal} />
                </div>

                <Footer page={1} total={3} />
            </div>

            <div className="pdfPage">
                <Header />

                <div className="pdfBody">
                    <PageTwo journal={journal} />
                </div>

                <Footer page={2} total={3} />
            </div>

            <div className="pdfPage">
                <Header />

                <div className="pdfBody">
                    <PageThree journal={journal} />
                </div>

                <Footer page={3} total={3} />
            </div>

        </div>

    );
}

export default JournalPDF;