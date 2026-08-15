import html2pdf from "html2pdf.js";

const usePDF = () => {
    const opt = {
        margin: 0.5,
        filename: "journal.pdf",
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" as const },
    };

    const getDivPdf = (): HTMLElement | null => {
        return document.getElementById("pdfJournal");
    };

    const generatePDFBase64 = async (): Promise<string | null> => {
        const divPdf = getDivPdf();

        if (!divPdf) return null;

        const pdf = await html2pdf().set(opt).from(divPdf).outputPdf("blob");

        return new Promise((resolve) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                resolve(reader.result as string);
            }

            reader.readAsDataURL(pdf);
            console.log(divPdf.innerHTML);
        });
    };

    const downloadPDF = (): void => {
        const divPdf = getDivPdf();

        if (!divPdf) return;

        html2pdf().set(opt).from(divPdf).save();
    };

    return {
        generatePDFBase64, downloadPDF,
    };
};

export default usePDF;