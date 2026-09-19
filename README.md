# Linienfolger – Bauteile und Datenblätter

Dieses Verzeichnis zur Information zu den
Bauteilen des Linienfolgers, welches in einem Lernmodul gebaut wird.

## Vorgesehene Inhalte

- stabile Informationsseiten zu den verwendeten Bauteilen
- Links auf offizielle Hersteller- und Händlerdokumentationen
- veröffentlichbare Datenblätter oder Archivkopien
- später erzeugte QR-Codes für die Druckausgabe

## Struktur

- `docs/index.md`: Startseite für GitHub Pages
- `docs/bauteile/`: eine dauerhaft adressierbare Seite pro Bauteil
- `docs/bauteile/3d-druckteile.md`: drei Druckteile mit 3D-Vorschau und STL-Downloads
- `docs/bauteile/3dDruck/`: STL-Modelle der Halter und des Nucleo-64-Abstandshalters
- `docs/assets/stl-viewer.html` und `stl-viewer.js`: statischer STL-Viewer
- `docs/datenblaetter/`: lokale PDF-Dateien, sofern deren Veröffentlichung
  zulässig ist
- `docs/qr-codes/`: später erzeugte QR-Codes
- `RECHTE.md`: Regeln und offene Punkte zu Quellen und Veröffentlichungsrechten

## Ablauf

1. Veröffentlichungsrechte jedes Datenblatts prüfen.
2. Offizielle Quellen und gegebenenfalls zulässige PDF-Kopien ergänzen.
3. GitHub Pages mit dem Ordner `docs/` als Quelle aktivieren.
4. QR-Codes auf die Bauteilseiten richten, nicht direkt auf PDF-Dateien.

Dadurch bleiben gedruckte QR-Codes gültig, wenn sich ein PDF, dessen Version
oder die externe Herstelleradresse später ändert.

## 3D-Vorschau

Der Viewer läuft direkt auf GitHub Pages ohne zusätzliches Jekyll-Plugin oder
Backend. Er lädt Three.js 0.180.0 (MIT-Lizenz), OrbitControls und STLLoader
von jsDelivr; die STL-Dateien bleiben auf der eigenen Seite. JavaScript,
WebGL und Zugriff auf das CDN sind erforderlich. Bei Ladefehlern bleiben die
Downloadlinks auf der Dokumentationsseite verfügbar.

Die Einbettungen verwenden Jekylls `relative_url`, damit sie auch unter dem
Repository-Unterpfad einer GitHub-Pages-Projektseite funktionieren.
