---
layout: default
title: Motortreiber-Modul L298N / ME089
---

# Motortreiber-Modul L298N / ME089

## Identifikation

| Merkmal | Angabe |
|---|---|
| Reichelt-Artikelnummer | `DEBO DRV1 L298N` |
| Modulbezeichnung | `ME089` |
| Treiberbaustein | STMicroelectronics L298N |
| EAN | `0791352940525` |
| Bestellmenge | 2 |

## Technische Angaben des Moduls

- zwei vollständige H-Brücken
- Logikpegel: 5 V
- Motorspannung laut Lieferant: 5 bis 35 V DC
- maximaler Treiberstrom laut Lieferant: 2 A je Brücke
- maximale Verlustleistung laut Lieferant: 25 W
- Abmessungen: ungefähr 43 × 43 × 27 mm

Die Grenzwerte des L298N-Chips und die praktisch sicheren Werte des Moduls sind
nicht identisch. Kühlung, Spannungsabfall im Treiber, Motorstrom und
Leiterbahnen des konkreten Moduls begrenzen den Betrieb zusätzlich.

## Für den Unterricht wichtig

Die Eingänge `IN1` bis `IN4` steuern die beiden H-Brücken. `ENA` und `ENB`
geben die jeweiligen Kanäle frei. Vor dem Anschliessen müssen die Funktion des
5-V-Regler-Jumpers, die gemeinsame Masse und die tatsächliche Motorversorgung
geprüft werden.

## Sicherheit

- Motoren nicht aus einem Logikausgang versorgen.
- Logik und Motorversorgung benötigen einen gemeinsamen GND-Bezug.
- Polarität und Jumperstellung vor dem Einschalten kontrollieren.
- Motorstrom und Erwärmung unter Last messen.

## Dokumentation

- [Produktseite bei Reichelt](https://www.reichelt.de/de/de/shop/produkt/entwicklerboards_-_motorsteuerung_2-fach_l298n-282644)
- [Modul-Datenblatt bei Reichelt](https://cdn-reichelt.de/documents/datenblatt/A300/ME089-N.pdf)
- [Offizielle L298-Produktseite von STMicroelectronics](https://www.st.com/en/motor-drivers/l298.html)
- [Offizielles L298-Datenblatt von STMicroelectronics](https://www.st.com/resource/en/datasheet/l298.pdf)
- Quellenstand geprüft am 23.07.2026

## Offene Arbeiten

- [ ] Jumper und Anschlussklemmen des gelieferten Moduls fotografisch erfassen.
- [ ] Spannungsabfall und Erwärmung mit den gelieferten Motoren messen.
- [ ] Nach Veröffentlichung QR-Code auf diese Seite erzeugen.
