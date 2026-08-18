
type FooterProps = {
    page: number;
    total: number;
}

function Footer({ page, total }: FooterProps) {
    return (
        <div className="pdfFooter">
            <span>Ellinor Andreasson</span>
            <span>Kontakt: goldieranch@gmail.com | 0738-549555</span>

            <span>
                Sida {page} / {total}
            </span>
        </div>
    );
}

export default Footer;