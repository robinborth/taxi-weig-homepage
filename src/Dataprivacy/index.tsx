import React from 'react';
import {
    Container,
    Header,
    SubHeader,
    SubSubHeader,
    Text,
    Link,
    List,
    ListItem,
    Section
} from './styles';

const DataPrivacy = () => {
    return (
        <Container>
            <Section>
                <Header>Datenschutzerklärung</Header>
                <Text>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</Text>
                <Text>Wolfram Weig</Text>
            </Section>
            <Section>
                <SubHeader>Ihre Betroffenenrechte</SubHeader>
                <Text>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</Text>
                <List>
                <ListItem>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</ListItem>
                <ListItem>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</ListItem>
                <ListItem>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</ListItem>
                <ListItem>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</ListItem>
                <ListItem>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</ListItem>
                <ListItem>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</ListItem>
                </List>
                <Text>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</Text>
                <Text>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</Text>
                <Text>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <Link href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener nofollow">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</Link>.</Text>
                <Text></Text>
            </Section>
            <Section>
                <SubHeader>Verwendung von Google Maps</SubHeader>
                <Text>Auf dieser Website nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google“) betrieben. Dadurch können wir Ihnen interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.</Text>
                <Text>Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen: <Link href="https://policies.google.com/privacy" rel="noopener nofollow" target="_blank">https://policies.google.com/privacy</Link>. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.</Text>
                <Text>Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie hier: <Link href="https://www.dataliberation.org/" rel="noopener nofollow" target="_blank">https://www.dataliberation.org</Link></Text>
                <Text>Durch den Besuch der Website erhält Google Informationen, dass Sie die entsprechende Unterseite unserer Webseite aufgerufen haben. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob keine Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet. </Text>
                <Text>Wenn Sie die Zuordnung in Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons bei Google ausloggen. Google speichert Ihre Daten als Nutzungsprofile und nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechter Gestaltung seiner Websites. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte Nutzer) zur Erbringung bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Website zu informieren. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google richten müssen. </Text>
            </Section>
            <Section>
                <SubSubHeader>Widerruf der Einwilligung:</SubSubHeader>
                <Text>Vom Anbieter wird derzeit keine Möglichkeit für einen einfachen Opt-out oder ein Blockieren der Datenübertragung angeboten. Wenn Sie eine Nachverfolgung Ihrer Aktivitäten auf unserer Website verhindern wollen, widerrufen Sie bitte im Cookie-Consent-Tool Ihre Einwilligung für die entsprechende Cookie-Kategorie oder alle technisch nicht notwendigen Cookies und Datenübertragungen. In diesem Fall können Sie unsere Website jedoch ggfs. nicht oder nur eingeschränkt nutzen.</Text>
                <Text></Text>
            </Section>
            <Section>
                <SubHeader>SSL-Verschlüsselung</SubHeader>
                <Text>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</Text>
                <Text></Text>
            </Section>
            <Section>
                <SubHeader>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</SubHeader>
                <SubSubHeader>Einzelfallbezogenes Widerspruchsrecht</SubSubHeader>
                <Text>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.</Text>
                <Text>Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</Text>
                <SubSubHeader>Empfänger eines Widerspruchs</SubSubHeader>
                <Text>Taxi Weig, Taxi-Weig@gmx.de</Text>
            </Section>
                <Section>
                <SubHeader>Änderung unserer Datenschutzbestimmungen</SubHeader>
                <Text>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</Text>
            </Section>
            <Section>
                <SubHeader>Fragen an den Datenschutzbeauftragten</SubHeader>
                <Text>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</Text>
                <Text>Wolfram Weig</Text>
            </Section>
            <Section>
                <Text>Icons made by <Link href="https://www.freepik.com" title="Freepik">Freepik</Link> from <Link href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</Link></Text>
            </Section>
        </Container>
    );
}

export default DataPrivacy;