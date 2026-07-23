---
layout: default
title: Grove Line Finder V1.1
---

# Grove Line Finder V1.1

## Identifikation

| Merkmal | Angabe |
|---|---|
| Reichelt-Artikelnummer | `GRV LINE FINDER` |
| Hersteller | Seeed Studio |
| Hersteller-Teilenummer | `101020172` |
| Produktversion | Grove Line Finder V1.1 |
| Bestellmenge | 4 |
| Signale im Projekt | `S_L` und `S_R` |

## Technische Angaben

- Versorgung: 5 V DC
- digitaler TTL-Ausgang
- HIGH bei schwarzem Untergrund
- LOW bei weissem Untergrund
- IR-Sendediode und IR-empfindlicher Fototransistor
- Komparator auf dem Modul
- einstellbarer Erfassungsabstand
- Grove-Schnittstelle, 4-polig
- Abmessungen: ungefähr 20 × 20 mm

## Anschluss

| Grove-Leitung | Funktion |
|---|---|
| Gelb | digitales Signal |
| Weiss | nicht belegt |
| Rot | 5 V |
| Schwarz | GND |

## Für den Unterricht wichtig

Die Signale sind so definiert, dass Weiss der logischen 0 und Schwarz der
logischen 1 entspricht. Diese Zuordnung muss am realen Aufbau geprüft werden,
weil Abstand, Umgebungslicht, Untergrund und Potentiometereinstellung die
Schaltschwelle beeinflussen.

## Dokumentation

- [Offizielle Wiki-Seite von Seeed Studio](https://wiki.seeedstudio.com/Grove-Line_Finder/)
- [Produktseite bei Reichelt](https://www.reichelt.de/de/de/shop/produkt/arduino_-_linienfinder_lth-1550-01-191170)
- Quellenstand geprüft am 23.07.2026

## Offene Arbeiten

- [ ] Montageabstand und Potentiometereinstellung am Fahrzeug dokumentieren.
- [ ] Schaltpunkte für Weiss und Schwarz messtechnisch prüfen.
- [ ] Nach Veröffentlichung QR-Code auf diese Seite erzeugen.
