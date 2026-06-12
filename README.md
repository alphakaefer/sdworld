# Spiral Dynamics Journey 🌀

**Die Spirale durchleben** – eine interaktive Web-Erfahrung zum Modell
*Spiral Dynamics* (nach Clare W. Graves, Don Beck & Christopher Cowan),
einbindbar in WordPress als Plugin.

Statt die acht Ebenen nur zu erklären, lässt die Anwendung sie **durchleben** –
mit Fokus auf den **Phasenübergängen**:

> Auf jeder Ebene gerätst du in einen Konflikt. Du triffst Entscheidungen mit
> den Mitteln dieser Ebene – und erlebst, warum jede davon in eine Sackgasse
> führt. Erst die **nächste** Ebene bringt die Antwort. Dann öffnet sich der
> Übergang, und die Reise geht weiter.

## Die Reise

| # | Ebene | Konflikt | Lösbar erst auf |
|---|-------|----------|-----------------|
| 1 | 🟤 **Beige** – Überleben | Allein durch den Winter | Purpur (Sippe) |
| 2 | 🟣 **Purpur** – Stamm & Geborgenheit | Dürre, die kein Ritual beendet | Rot (mutiges Ich) |
| 3 | 🔴 **Rot** – Macht | Das Reich, das nicht hält | Blau (Gesetz & Ordnung) |
| 4 | 🔵 **Blau** – Ordnung & Sinn | Die Krankheit, die im Buch nicht steht | Orange (Prüfen & Forschen) |
| 5 | 🟠 **Orange** – Leistung | Der Sieg, der sich nicht mehr lohnt | Grün (Gemeinschaft) |
| 6 | 🟢 **Grün** – Gemeinschaft | Der Konsens, der nicht kommt | Gelb (systemisch denken) |
| 7 | 🟡 **Gelb** – Integral | Die Einsicht, die niemand umsetzt | Türkis (kollektives Ganzes) |
| 8 | 🩵 **Türkis** – Holistisch | Reflexion: Die Spirale ist offen | … die nächste Ebene? |

Features:

- 📜 **Scrollytelling**: jede Ebene als Vollbild-Abschnitt in ihrer Farbe
- 🎮 **Klickbare Dilemmata** mit Sackgassen-Feedback und Übergangs-Enthüllung
- 🔓 **Freischalt-Mechanik**: nächste Ebene erst nach erlebtem Übergang (abschaltbar), Fortschritt im Browser gespeichert
- 📚 **OER-Links** auf jeder Ebene: frei lizenzierte Bildungsressourcen (Wikipedia/Wikimedia Commons, CC BY-SA) zum Vertiefen
- 🧰 **Methoden & zentrale Konzepte** je Ebene: passende Werkzeuge und Artikel von [karlhosang.de](https://karlhosang.de/spiral-dynamics/) (z. B. Polyvagal-Theorie, OKRs, GFK, Holokratie, systemische Fragetechniken …)
- 🪶 Vanilla JS/CSS, **keine Abhängigkeiten, kein Tracking, kein Build-Schritt**
- ♿ `prefers-reduced-motion` wird respektiert

## Demo lokal ansehen

Einfach `index.html` im Browser öffnen – oder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Das Repository eignet sich direkt für **GitHub Pages** (Settings → Pages →
Branch wählen): `index.html` im Wurzelverzeichnis ist die Demo.

## In WordPress einbinden

1. Plugin-ZIP bauen:
   ```bash
   zip -r spiral-dynamics-journey.zip spiral-dynamics-journey/
   ```
2. In WordPress: **Plugins → Installieren → Plugin hochladen** → ZIP auswählen → aktivieren.
   (Alternativ den Ordner `spiral-dynamics-journey/` nach `wp-content/plugins/` kopieren.)
3. Auf einer Seite (idealerweise volle Breite, ohne Seitenleiste) den Shortcode einfügen:

   ```
   [spiral_dynamics_journey]
   ```

### Shortcode-Attribute

| Attribut | Standard | Wirkung |
|----------|----------|---------|
| `locked` | `yes` | `no` = alle Ebenen sofort zugänglich, ohne Freischalt-Mechanik |
| `progress` | `yes` | `no` = Fortschritt nicht im localStorage speichern |

Beispiel: `[spiral_dynamics_journey locked="no"]`

## Inhalte anpassen

Alle Texte, Szenarien, Farben und OER-Links liegen in **einer** Datei:
[`spiral-dynamics-journey/assets/js/sdj-data.js`](spiral-dynamics-journey/assets/js/sdj-data.js).
Dort lassen sich Ebenen umformulieren, Szenarien austauschen oder weitere
Ressourcen ergänzen – ohne die App-Logik anzufassen.

## OER & Quellen

Die Anwendung verlinkt überwiegend frei lizenzierte Bildungsressourcen, u. a.:

- [Wikipedia (en): Spiral Dynamics](https://en.wikipedia.org/wiki/Spiral_Dynamics) (CC BY-SA)
- [Wikipedia (de): Spiral Dynamics](https://de.wikipedia.org/wiki/Spiral_Dynamics) (CC BY-SA)
- [Wikipedia (en): Clare W. Graves](https://en.wikipedia.org/wiki/Clare_W._Graves) (CC BY-SA)
- [P2P Foundation Wiki: Spiral Dynamics](https://wiki.p2pfoundation.net/Spiral_Dynamics)
- [Wikimedia Commons: Kategorie „Spiral Dynamics“](https://commons.wikimedia.org/wiki/Category:Spiral_Dynamics) (Grafiken, Lizenz je Datei)
- je Ebene passende Wikipedia-Artikel (Animismus, Konformität, Postmaterialismus, Systemdenken, Holismus …)
- vertiefende Artikel & Methoden von Karl Hosang – pro Ebene ein eigener Block „Methoden & zentrale Konzepte": [Übersicht](https://karlhosang.de/spiral-dynamics/), [Beige](https://karlhosang.de/spiral-dynamics-beige/), [Purpur](https://karlhosang.de/spiral-dynamics-purpur/), [Rot](https://karlhosang.de/spiral-dynamics-rot/), [Blau](https://karlhosang.de/spiral-dynamics-blau/), [Orange](https://karlhosang.de/spiral-dynamics-orange/), [Grün](https://karlhosang.de/spiral-dynamics-gruen/), [Gelb](https://karlhosang.de/spiral-dynamics-gelb/), [Türkis](https://karlhosang.de/spiral-dynamics-tuerkis/)

**Einordnung:** Spiral Dynamics ist ein heuristisches Modell ohne breite
wissenschaftliche Anerkennung. Die Anwendung weist im Intro darauf hin und
versteht sich als Reflexions- und Bildungswerkzeug – nicht als Diagnostik.
Menschen sind keine Farben.

## Lizenz

- **Code:** [GPL-2.0-or-later](LICENSE) (WordPress-kompatibel)
- **Texte der Reise** (`sdj-data.js`): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.de) –
  damit ist die Anwendung selbst eine Open Educational Resource und darf
  geteilt, bearbeitet und weitergegeben werden (mit Namensnennung, gleiche Lizenz).
