# Linienfolger – Bauteile und Datenblätter

Dieses Verzeichnis ist als eigenständiges, später möglicherweise öffentliches
GitHub-Repository vorbereitet. Es enthält ausschließlich Informationen zu den
Bauteilen des Linienfolgers und bleibt vom Unterrichtsskript, von Lösungen und
von internen Planungsunterlagen getrennt.

## Vorgesehene Inhalte

- stabile Informationsseiten zu den verwendeten Bauteilen
- Links auf offizielle Hersteller- und Händlerdokumentationen
- veröffentlichbare Datenblätter oder Archivkopien
- später erzeugte QR-Codes für die Druckausgabe

## Struktur

- `docs/index.md`: Startseite für GitHub Pages
- `docs/bauteile/`: eine dauerhaft adressierbare Seite pro Bauteil
- `docs/datenblaetter/`: lokale PDF-Dateien, sofern deren Veröffentlichung
  zulässig ist
- `docs/qr-codes/`: später erzeugte QR-Codes
- `RECHTE.md`: Regeln und offene Punkte zu Quellen und Veröffentlichungsrechten

## Empfohlener Ablauf

1. Neuen GitHub-Repository-Namen und die Sichtbarkeit festlegen.
2. Veröffentlichungsrechte jedes Datenblatts prüfen.
3. Offizielle Quellen und gegebenenfalls zulässige PDF-Kopien ergänzen.
4. GitHub Pages mit dem Ordner `docs/` als Quelle aktivieren.
5. QR-Codes auf die Bauteilseiten richten, nicht direkt auf PDF-Dateien.

Dadurch bleiben gedruckte QR-Codes gültig, wenn sich ein PDF, dessen Version
oder die externe Herstelleradresse später ändert.

## Datenschutz

Private Bestellunterlagen wie `order-reichelt-424695.pdf` enthalten Personen-,
Adress- und Kontaktdaten. Dateien nach dem Muster `order-*.pdf` sind deshalb in
`.gitignore` ausgeschlossen und dürfen nicht mit `git add -f` veröffentlicht
werden. Die öffentliche Bestellübersicht unter `docs/` enthält nur Artikel und
Mengen.
