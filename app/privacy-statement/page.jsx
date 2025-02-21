'use client'

import PoliticsTitle from "../components/politics/politicsTitle/politicsTitle"
import PoliticsSubTitle from "../components/politics/politicsSubTitle/politicsSubTitle"
import PoliticsText from "../components/politics/politicsText/politicsText"
import BackBtn from "../components/backBtn/backBtn"

export default function PrivacyStatement() {

    return (
        <div style={{padding: '20px', position: 'relative'}}>
            <BackBtn step={'policy'}/>
            <PoliticsTitle>Datenschutz-Bestimmungen</PoliticsTitle>
            <PoliticsText>Diese Datenschutzrichtlinie regelt die Art und Weise, in der LLC „KIVI SMART PURCHASING“ von Benutzern der Website https://kivismart.com/de/ („Website“) gesammelte Informationen sammelt, verwendet, pflegt und offenlegt. Diese Datenschutzrichtlinie gilt für die Website und alle Produkte und Dienstleistungen, die von LLC „KIVI SMART PURCHASING“ angeboten werden.</PoliticsText>
            <PoliticsSubTitle>Informationen, die wir sammeln</PoliticsSubTitle>
            <PoliticsText>LLC „KIVI SMART PURCHASING“ kann personenbezogene Daten von Benutzern auf verschiedene Weise sammeln, einschließlich, aber nicht beschränkt auf, wenn Benutzer unsere Website besuchen, eine Bestellung aufgeben, ein Formular ausfüllen und in Verbindung mit anderen Aktivitäten, Diensten, Funktionen oder Ressourcen, die wir auf unserer Website zur Verfügung stellen. Benutzer können gegebenenfalls nach Name, E-Mail-Adresse, Postanschrift und Telefonnummer gefragt werden. Wir erfassen persönliche Identifikationsdaten von Benutzern nur dann, wenn sie uns solche Daten freiwillig übermitteln. Benutzer können sich jederzeit weigern, persönliche Identifikationsinformationen anzugeben, es sei denn, dies kann sie daran hindern, sich an bestimmten Aktivitäten im Zusammenhang mit der Website zu beteiligen.</PoliticsText>
            <PoliticsSubTitle>Nicht personenbezogene Identifikationsinformationen</PoliticsSubTitle>
            <PoliticsText>Wir können nicht personenbezogene Identifikationsinformationen über Benutzer sammeln, wenn sie mit unserer Website interagieren. Nicht-persönliche Identifikationsdaten können den Browsernamen, den Computertyp und technische Informationen über die Verbindungsmittel der Benutzer zu unserer Website, wie das Betriebssystem und den verwendeten Internetdienstanbieter, und andere ähnliche Informationen enthalten.</PoliticsText>
            <PoliticsSubTitle>Webbrowser-Cookies</PoliticsSubTitle>
            <PoliticsText>Unsere Website kann „Cookies“ verwenden, um die Benutzererfahrung zu verbessern. Die Webbrowser der Benutzer platzieren Cookies auf ihrer Festplatte zu Aufzeichnungszwecken und manchmal, um Informationen über sie zu verfolgen. Benutzer können ihren Webbrowser so einstellen, dass er Cookies ablehnt oder sie benachrichtigt, wenn Cookies gesendet werden. Beachten Sie in diesem Fall, dass einige Teile der Website möglicherweise nicht ordnungsgemäß funktionieren.</PoliticsText>
            <PoliticsSubTitle>Wie wir gesammelte Informationen verwenden</PoliticsSubTitle>
            <PoliticsText>LLC "KIVI SMART PURCHASING" sammelt und verwendet personenbezogene Daten der Benutzer für die folgenden Zwecke:</PoliticsText>
            <PoliticsText>Zur Verbesserung des Kundendienstes: Die bereitgestellten Informationen helfen uns, effizienter auf Kundendienstanfragen und Supportanforderungen zu reagieren.</PoliticsText>
            <PoliticsText>Um die Benutzererfahrung zu personalisieren: Wir können Informationen in ihrer Gesamtheit verwenden, um zu verstehen, wie unsere Benutzer als Gruppe die auf unserer Website bereitgestellten Dienste und Ressourcen nutzen.</PoliticsText>
            <PoliticsText>Um Zahlungen zu verarbeiten: Wir können die Informationen, die Benutzer bei der Bestellung über sich selbst angeben, nur zur Erbringung von Dienstleistungen für diese Bestellung verwenden. Wir geben diese Informationen nicht an Dritte weiter, es sei denn, dies ist für die Bereitstellung des Dienstes erforderlich.</PoliticsText>
            <PoliticsText>Um regelmäßig E-Mails zu senden: Wir können die E-Mail-Adresse verwenden, um Benutzerinformationen und Aktualisierungen in Bezug auf ihre Bestellung zu senden. Es kann auch verwendet werden, um auf ihre Anfragen, Fragen und/oder andere Anfragen zu antworten. Wenn sich ein Benutzer entscheidet, sich für unsere Mailingliste anzumelden, erhält er E-Mails, die Unternehmensnachrichten, Updates, zugehörige Produkt- oder Serviceinformationen usw. enthalten können. Wenn der Benutzer zu irgendeinem Zeitpunkt den Erhalt zukünftiger E-Mails abbestellen möchte, schließen wir dies ein detaillierte Anweisungen zum Abbestellen am Ende jeder E-Mail.</PoliticsText>
            <PoliticsSubTitle>Wie wir Ihre Informationen schützen</PoliticsSubTitle>
            <PoliticsText>Wir wenden geeignete Datenerhebungs-, -speicherungs- und -verarbeitungspraktiken und Sicherheitsmaßnahmen an, um Ihre personenbezogenen Daten, Benutzernamen, Passwörter, Transaktionsinformationen und auf unserer Website gespeicherten Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen.</PoliticsText>
            <PoliticsSubTitle>Weitergabe Ihrer personenbezogenen Daten</PoliticsSubTitle>
            <PoliticsText>Wir verkaufen, tauschen oder vermieten die persönlichen Identifikationsdaten der Benutzer nicht an andere. Wir können generische aggregierte demografische Informationen, die nicht mit persönlichen Identifikationsinformationen über Besucher und Benutzer verknüpft sind, mit unseren Geschäftspartnern, vertrauenswürdigen verbundenen Unternehmen und Werbetreibenden für die oben beschriebenen Zwecke teilen.</PoliticsText>
            <PoliticsSubTitle>Änderungen an dieser Datenschutzrichtlinie</PoliticsSubTitle>
            <PoliticsText>LLC „KIVI SMART PURCHASING“ kann diese Datenschutzrichtlinie jederzeit aktualisieren.</PoliticsText>
        </div> 
    )
}