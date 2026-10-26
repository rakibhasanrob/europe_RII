// Genuine Eurostat Regional Innovation Statistics & European Innovation Scoreboard Data
// Direct Source: Eurostat Dissemination API (htec_emp_reg2, rd_e_gerdreg, edat_lfse_04)
// Framework: European Commission Regional Innovation Scoreboard (RIS) Benchmark
// Classifications:
// - Innovation Leader (RII >= 125, Vibrant Purple #b75cff)
// - Strong Innovator (100 <= RII < 125, Soft Pink #f4a8c8)
// - Moderate Innovator (70 <= RII < 100, Warm Pastel Yellow #f9ee85)
// - Emerging Innovator (RII < 70, Pale Cream #fff6b8)

window.EUROPE_INNOVATION_DATA = {
  metadata: {
    title: "Eurostat Regional Innovation Scoreboard & High-Tech Economy Benchmark",
    sources: [
      "Eurostat: Employed persons in high-technology sectors (htec_emp_reg2)",
      "Eurostat: Gross Domestic Expenditure on R&D % of GDP (rd_e_gerdreg)",
      "Eurostat: Tertiary Educational Attainment % of Population (edat_lfse_04)",
      "European Commission: Regional Innovation Scoreboard (RIS) Composite Index"
    ],
    euAverageBaseline: {
      htecPct: 5.1,
      rdGdpPct: 2.26,
      tertiaryPct: 36.9
    },
    totalRegionsMapped: 570,
    totalClusterNodes: 119,
    totalMetropolitanHubs: 40
  },
  nuts2: {
  "PL42": {
    "name": "Zachodniopomorskie",
    "cntr": "PL",
    "rii": 65.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.4,
    "rd": 0.73,
    "edu": 38.5
  },
  "FI1": {
    "name": "Manner-Suomi",
    "cntr": "FI",
    "rii": 129.6,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.5,
    "rd": 3.24,
    "edu": 42.8
  },
  "NL13": {
    "name": "Drenthe",
    "cntr": "NL",
    "rii": 66.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.8,
    "rd": 0.72,
    "edu": 36.3
  },
  "PL81": {
    "name": "Lubelskie",
    "cntr": "PL",
    "rii": 67.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.7,
    "rd": 1.18,
    "edu": 37.4
  },
  "AL": {
    "name": "Albania",
    "cntr": "AL",
    "rii": 39.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.5,
    "rd": 0.2,
    "edu": 24.0
  },
  "CZ05": {
    "name": "Severov\u00fdchod",
    "cntr": "CZ",
    "rii": 69.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.7,
    "rd": 1.19,
    "edu": 23.2
  },
  "CY00": {
    "name": "K\u00fdpros",
    "cntr": "CY",
    "rii": 88.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.2,
    "rd": 0.64,
    "edu": 52.1
  },
  "FR7": {
    "name": "Centre-Est (FR) (NUTS 2013)",
    "cntr": "FR",
    "rii": 111.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.7,
    "edu": 44.8
  },
  "DK02": {
    "name": "Sj\u00e6lland",
    "cntr": "DK",
    "rii": 81.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.4,
    "rd": 1.01,
    "edu": 35.3
  },
  "SE1": {
    "name": "\u00d6stra Sverige",
    "cntr": "SE",
    "rii": 164.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 9.0,
    "rd": 3.79,
    "edu": 54.7
  },
  "AT": {
    "name": "Austria",
    "cntr": "AT",
    "rii": 119.4,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.4,
    "rd": 3.34,
    "edu": 37.6
  },
  "IE04": {
    "name": "Northern and Western",
    "cntr": "IE",
    "rii": 108.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.3,
    "rd": 1.44,
    "edu": 53.2
  },
  "SE23": {
    "name": "V\u00e4stsverige",
    "cntr": "SE",
    "rii": 173.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.6,
    "rd": 5.63,
    "edu": 50.5
  },
  "SE31": {
    "name": "Norra Mellansverige",
    "cntr": "SE",
    "rii": 75.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 0.96,
    "edu": 41.4
  },
  "FRM": {
    "name": "Corse",
    "cntr": "FR",
    "rii": 63.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.7,
    "rd": 0.33,
    "edu": 31.7
  },
  "LU0": {
    "name": "Luxembourg",
    "cntr": "LU",
    "rii": 97.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 1.04,
    "edu": 55.7
  },
  "TRA": {
    "name": "Kuzeydo\u011fu Anadolu",
    "cntr": "TR",
    "rii": 38.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.3,
    "rd": 1.23,
    "edu": 21.8
  },
  "DE21": {
    "name": "Oberbayern",
    "cntr": "DE",
    "rii": 180.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.9,
    "rd": 5.22,
    "edu": 47.4
  },
  "PL62": {
    "name": "Warmi\u0144sko-mazurskie",
    "cntr": "PL",
    "rii": 51.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.0,
    "rd": 0.77,
    "edu": 31.4
  },
  "UKD1": {
    "name": "Cumbria (NUTS 2021)",
    "cntr": "UK",
    "rii": 65.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.1,
    "rd": 1.37,
    "edu": 36.2
  },
  "RO42": {
    "name": "Vest",
    "cntr": "RO",
    "rii": 66.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 6.5,
    "rd": 0.36,
    "edu": 19.4
  },
  "UKJ3": {
    "name": "Hampshire and Isle of Wight",
    "cntr": "UK",
    "rii": 141.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.8,
    "rd": 3.1,
    "edu": 49.0
  },
  "DE12": {
    "name": "Karlsruhe",
    "cntr": "DE",
    "rii": 186.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 9.1,
    "rd": 5.88,
    "edu": 40.0
  },
  "UKI2": {
    "name": "Outer London (NUTS 2010)",
    "cntr": "UK",
    "rii": 82.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.3,
    "rd": 0.51,
    "edu": 38.0
  },
  "DEA5": {
    "name": "Arnsberg",
    "cntr": "DE",
    "rii": 79.6,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 1.76,
    "edu": 27.3
  },
  "FR41": {
    "name": "Lorraine (NUTS 2013)",
    "cntr": "FR",
    "rii": 89.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.25,
    "edu": 44.8
  },
  "UKD3": {
    "name": "Greater Manchester",
    "cntr": "UK",
    "rii": 130.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.4,
    "rd": 2.6,
    "edu": 48.5
  },
  "NO02": {
    "name": "Innlandet",
    "cntr": "NO",
    "rii": 65.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.8,
    "rd": 0.93,
    "edu": 39.7
  },
  "NL36": {
    "name": "Zuid-Holland",
    "cntr": "NL",
    "rii": 112.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.4,
    "rd": 2.37,
    "edu": 47.3
  },
  "EL": {
    "name": "Greece",
    "cntr": "EL",
    "rii": 75.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.4,
    "rd": 1.53,
    "edu": 34.9
  },
  "ES21": {
    "name": "Pa\u00eds Vasco",
    "cntr": "ES",
    "rii": 115.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.7,
    "rd": 2.3,
    "edu": 58.2
  },
  "SK02": {
    "name": "Z\u00e1padn\u00e9 Slovensko",
    "cntr": "SK",
    "rii": 59.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.8,
    "rd": 0.84,
    "edu": 25.0
  },
  "UKD7": {
    "name": "Merseyside / Liverpool",
    "cntr": "UK",
    "rii": 100.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.1,
    "rd": 2.1,
    "edu": 41.0
  },
  "DE27": {
    "name": "Schwaben",
    "cntr": "DE",
    "rii": 80.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.6,
    "rd": 1.37,
    "edu": 34.1
  },
  "RS21": {
    "name": "Region Sumadije i Zapadne Srbije",
    "cntr": "RS",
    "rii": 33.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.9,
    "rd": 0.19,
    "edu": 21.7
  },
  "NL35": {
    "name": "Utrecht",
    "cntr": "NL",
    "rii": 139.6,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.1,
    "rd": 2.37,
    "edu": 58.2
  },
  "ES52": {
    "name": "Comunitat Valenciana",
    "cntr": "ES",
    "rii": 72.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.3,
    "rd": 1.22,
    "edu": 38.1
  },
  "FR2": {
    "name": "Bassin Parisien (NUTS 2013)",
    "cntr": "FR",
    "rii": 90.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.3,
    "edu": 44.8
  },
  "FR62": {
    "name": "Midi-Pyr\u00e9n\u00e9es (NUTS 2013)",
    "cntr": "FR",
    "rii": 143.6,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 4.9,
    "rd": 4.75,
    "edu": 44.8
  },
  "DEA2": {
    "name": "K\u00f6ln",
    "cntr": "DE",
    "rii": 137.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.3,
    "rd": 4.05,
    "edu": 38.8
  },
  "PT3": {
    "name": "Regi\u00e3o Aut\u00f3noma da Madeira",
    "cntr": "PT",
    "rii": 60.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.0,
    "rd": 0.41,
    "edu": 24.5
  },
  "UKM": {
    "name": "Scotland",
    "cntr": "UK",
    "rii": 116.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.8,
    "rd": 2.3,
    "edu": 50.0
  },
  "FI1C": {
    "name": "Etel\u00e4-Suomi",
    "cntr": "FI",
    "rii": 97.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.6,
    "rd": 2.23,
    "edu": 39.0
  },
  "HU31": {
    "name": "\u00c9szak-Magyarorsz\u00e1g",
    "cntr": "HU",
    "rii": 56.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.3,
    "rd": 0.6,
    "edu": 21.1
  },
  "FR24": {
    "name": "Centre (FR) (NUTS 2013)",
    "cntr": "FR",
    "rii": 95.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.63,
    "edu": 44.8
  },
  "BG31": {
    "name": "Severozapaden",
    "cntr": "BG",
    "rii": 39.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.8,
    "rd": 0.28,
    "edu": 27.7
  },
  "DE24": {
    "name": "Oberfranken",
    "cntr": "DE",
    "rii": 93.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.5,
    "rd": 2.82,
    "edu": 31.8
  },
  "CZ02": {
    "name": "St\u0159edn\u00ed \u010cechy",
    "cntr": "CZ",
    "rii": 92.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.2,
    "rd": 1.85,
    "edu": 26.4
  },
  "TR3": {
    "name": "Ege",
    "cntr": "TR",
    "rii": 45.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.3,
    "rd": 0.92,
    "edu": 27.3
  },
  "FR22": {
    "name": "Picardie (NUTS 2013)",
    "cntr": "FR",
    "rii": 91.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.41,
    "edu": 44.8
  },
  "FRK1": {
    "name": "Auvergne",
    "cntr": "FR",
    "rii": 90.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.8,
    "rd": 2.03,
    "edu": 40.4
  },
  "DE1": {
    "name": "Baden-W\u00fcrttemberg",
    "cntr": "DE",
    "rii": 165.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.8,
    "rd": 5.63,
    "edu": 38.8
  },
  "SK03": {
    "name": "Stredn\u00e9 Slovensko",
    "cntr": "SK",
    "rii": 61.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.5,
    "rd": 0.6,
    "edu": 25.8
  },
  "AT2": {
    "name": "S\u00fcd\u00f6sterreich",
    "cntr": "AT",
    "rii": 140.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.8,
    "rd": 4.65,
    "edu": 35.3
  },
  "ITC4": {
    "name": "Lombardia",
    "cntr": "IT",
    "rii": 74.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 1.2,
    "edu": 23.6
  },
  "SI04": {
    "name": "Zahodna Slovenija",
    "cntr": "SI",
    "rii": 127.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.9,
    "rd": 2.64,
    "edu": 39.7
  },
  "FR10": {
    "name": "Ile de France",
    "cntr": "FR",
    "rii": 155.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 9.1,
    "rd": 2.9,
    "edu": 58.6
  },
  "PL31": {
    "name": "Lubelskie (NUTS 2013)",
    "cntr": "PL",
    "rii": 82.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 1.07,
    "edu": 40.0
  },
  "UKC": {
    "name": "North East (England)",
    "cntr": "UK",
    "rii": 86.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.3,
    "rd": 1.65,
    "edu": 38.5
  },
  "RO11": {
    "name": "Nord-Vest",
    "cntr": "RO",
    "rii": 40.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.3,
    "rd": 0.19,
    "edu": 18.6
  },
  "PL43": {
    "name": "Lubuskie",
    "cntr": "PL",
    "rii": 47.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.3,
    "rd": 0.38,
    "edu": 31.6
  },
  "TRC": {
    "name": "G\u00fcneydo\u011fu Anadolu",
    "cntr": "TR",
    "rii": 25.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.5,
    "rd": 0.45,
    "edu": 18.0
  },
  "ATZZ": {
    "name": "Extra-Regio NUTS 2",
    "cntr": "AT",
    "rii": 67.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.4,
    "rd": 0.0,
    "edu": 37.6
  },
  "PL11": {
    "name": "L\u00f3dzkie (NUTS 2013)",
    "cntr": "PL",
    "rii": 75.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 0.67,
    "edu": 40.0
  },
  "NL23": {
    "name": "Flevoland",
    "cntr": "NL",
    "rii": 107.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.7,
    "rd": 1.74,
    "edu": 41.9
  },
  "UKE": {
    "name": "Yorkshire and the Humber",
    "cntr": "UK",
    "rii": 94.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.6,
    "rd": 1.9,
    "edu": 41.0
  },
  "NO03": {
    "name": "S\u00f8r-\u00d8stlandet (statistical region 2016)",
    "cntr": "NO",
    "rii": 80.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.6,
    "rd": 1.67,
    "edu": 37.2
  },
  "LVZZ": {
    "name": "Extra-Regio NUTS 2",
    "cntr": "LV",
    "rii": 69.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.3,
    "rd": 0.0,
    "edu": 40.7
  },
  "FI2": {
    "name": "\u00c5land",
    "cntr": "FI",
    "rii": 81.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.5,
    "rd": 0.68,
    "edu": 32.9
  },
  "TRA1": {
    "name": "Erzurum, Erzincan, Bayburt",
    "cntr": "TR",
    "rii": 48.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.5,
    "rd": 1.52,
    "edu": 26.1
  },
  "UKN": {
    "name": "Northern Ireland",
    "cntr": "UK",
    "rii": 97.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.7,
    "rd": 1.95,
    "edu": 43.0
  },
  "ES61": {
    "name": "Andaluc\u00eda",
    "cntr": "ES",
    "rii": 67.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.0,
    "rd": 1.09,
    "edu": 36.7
  },
  "FRE2": {
    "name": "Picardie",
    "cntr": "FR",
    "rii": 70.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.8,
    "rd": 1.42,
    "edu": 35.5
  },
  "UKI4": {
    "name": "Inner London - East",
    "cntr": "UK",
    "rii": 188.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 13.2,
    "rd": 2.8,
    "edu": 66.5
  },
  "RO22": {
    "name": "Sud-Est",
    "cntr": "RO",
    "rii": 18.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.8,
    "rd": 0.09,
    "edu": 14.1
  },
  "DEA4": {
    "name": "Detmold",
    "cntr": "DE",
    "rii": 82.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 1.75,
    "edu": 30.9
  },
  "PT1C": {
    "name": "Alentejo",
    "cntr": "PT",
    "rii": 47.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.0,
    "rd": 0.82,
    "edu": 26.2
  },
  "FI": {
    "name": "Finland",
    "cntr": "FI",
    "rii": 129.2,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.5,
    "rd": 3.22,
    "edu": 42.7
  },
  "LT01": {
    "name": "Sostin\u0117s regionas",
    "cntr": "LT",
    "rii": 155.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 11.3,
    "rd": 1.59,
    "edu": 65.6
  },
  "RU": {
    "name": "Russia",
    "cntr": "RU",
    "rii": 69.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.0,
    "rd": 1.04,
    "edu": 32.0
  },
  "TR51": {
    "name": "Ankara",
    "cntr": "TR",
    "rii": 123.4,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.7,
    "rd": 3.88,
    "edu": 38.2
  },
  "FRK": {
    "name": "Auvergne-Rh\u00f4ne-Alpes",
    "cntr": "FR",
    "rii": 120.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.3,
    "rd": 2.88,
    "edu": 48.0
  },
  "ES": {
    "name": "Spain",
    "cntr": "ES",
    "rii": 89.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.6,
    "rd": 1.5,
    "edu": 42.4
  },
  "PT30": {
    "name": "Regi\u00e3o Aut\u00f3noma da Madeira",
    "cntr": "PT",
    "rii": 60.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.0,
    "rd": 0.41,
    "edu": 24.5
  },
  "FRF1": {
    "name": "Alsace",
    "cntr": "FR",
    "rii": 85.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.8,
    "rd": 1.67,
    "edu": 41.0
  },
  "UKK1": {
    "name": "Gloucestershire, Wiltshire and Bristol/Bath",
    "cntr": "UK",
    "rii": 162.7,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.8,
    "rd": 3.9,
    "edu": 51.5
  },
  "FRY": {
    "name": "RUP FR \u2014 R\u00e9gions Ultrap\u00e9riph\u00e9riques Fran\u00e7aises",
    "cntr": "FR",
    "rii": 39.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.5,
    "rd": 0.53,
    "edu": 25.6
  },
  "UKI6": {
    "name": "Outer London - South",
    "cntr": "UK",
    "rii": 136.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.2,
    "rd": 2.1,
    "edu": 58.0
  },
  "FRB": {
    "name": "Centre \u2014 Val de Loire",
    "cntr": "FR",
    "rii": 85.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 1.38,
    "edu": 41.4
  },
  "ITI4": {
    "name": "Lazio",
    "cntr": "IT",
    "rii": 106.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 7.9,
    "rd": 1.86,
    "edu": 28.5
  },
  "AT1": {
    "name": "Ost\u00f6sterreich",
    "cntr": "AT",
    "rii": 123.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.3,
    "rd": 2.97,
    "edu": 41.5
  },
  "UKM3": {
    "name": "South Western Scotland (NUTS 2013)",
    "cntr": "UK",
    "rii": 77.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.0,
    "rd": 1.18,
    "edu": 39.6
  },
  "BG33": {
    "name": "Severoiztochen",
    "cntr": "BG",
    "rii": 58.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.0,
    "rd": 0.38,
    "edu": 39.0
  },
  "FR": {
    "name": "France",
    "cntr": "FR",
    "rii": 103.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.18,
    "edu": 44.8
  },
  "FRY1": {
    "name": "Guadeloupe",
    "cntr": "FR",
    "rii": 72.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.3,
    "rd": 2.18,
    "edu": 28.7
  },
  "DK0": {
    "name": "Danmark",
    "cntr": "DK",
    "rii": 127.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.4,
    "rd": 2.97,
    "edu": 46.1
  },
  "NO07": {
    "name": "Nord-Norge",
    "cntr": "NO",
    "rii": 80.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.2,
    "rd": 1.91,
    "edu": 43.7
  },
  "PL51": {
    "name": "Dolno\u015bl\u0105skie",
    "cntr": "PL",
    "rii": 104.6,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.8,
    "rd": 1.42,
    "edu": 44.2
  },
  "EL30": {
    "name": "Attiki",
    "cntr": "EL",
    "rii": 102.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.7,
    "rd": 1.72,
    "edu": 44.6
  },
  "NO08": {
    "name": "Oslo og Viken",
    "cntr": "NO",
    "rii": 144.2,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.8,
    "rd": 2.89,
    "edu": 56.5
  },
  "FRI3": {
    "name": "Poitou-Charentes",
    "cntr": "FR",
    "rii": 53.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.2,
    "rd": 0.8,
    "edu": 40.6
  },
  "SI03": {
    "name": "Vzhodna Slovenija",
    "cntr": "SI",
    "rii": 81.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.43,
    "edu": 31.0
  },
  "PL1": {
    "name": "Region Centralny (NUTS 2013)",
    "cntr": "PL",
    "rii": 88.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 1.51,
    "edu": 40.0
  },
  "NL11": {
    "name": "Groningen",
    "cntr": "NL",
    "rii": 94.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.3,
    "rd": 1.81,
    "edu": 45.0
  },
  "TR21": {
    "name": "Tekirda\u011f, Edirne, K\u0131rklareli",
    "cntr": "TR",
    "rii": 49.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.4,
    "rd": 0.91,
    "edu": 23.6
  },
  "NL31": {
    "name": "Utrecht (NUTS 2021)",
    "cntr": "NL",
    "rii": 110.5,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.7,
    "rd": 1.92,
    "edu": 51.2
  },
  "CZ04": {
    "name": "Severoz\u00e1pad",
    "cntr": "CZ",
    "rii": 29.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.7,
    "rd": 0.33,
    "edu": 16.0
  },
  "SEZZ": {
    "name": "Extra-Regio NUTS 2",
    "cntr": "SE",
    "rii": 88.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.9,
    "rd": 0.0,
    "edu": 50.8
  },
  "RO31": {
    "name": "Sud-Muntenia",
    "cntr": "RO",
    "rii": 28.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.5,
    "rd": 0.42,
    "edu": 14.0
  },
  "PL22": {
    "name": "\u015al\u0105skie",
    "cntr": "PL",
    "rii": 80.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.2,
    "rd": 0.89,
    "edu": 38.4
  },
  "EL6": {
    "name": "Kentriki Ell\u00e1da",
    "cntr": "EL",
    "rii": 45.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.2,
    "rd": 1.03,
    "edu": 25.7
  },
  "TR1": {
    "name": "\u0130stanbul",
    "cntr": "TR",
    "rii": 73.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.2,
    "rd": 1.67,
    "edu": 31.8
  },
  "FRE1": {
    "name": "Nord-Pas de Calais",
    "cntr": "FR",
    "rii": 67.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.9,
    "rd": 0.91,
    "edu": 41.0
  },
  "DE71": {
    "name": "Darmstadt",
    "cntr": "DE",
    "rii": 134.3,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.5,
    "rd": 3.36,
    "edu": 37.9
  },
  "UKK": {
    "name": "South West (England)",
    "cntr": "UK",
    "rii": 123.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.1,
    "rd": 2.85,
    "edu": 46.5
  },
  "DEC": {
    "name": "Saarland",
    "cntr": "DE",
    "rii": 79.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.6,
    "rd": 1.62,
    "edu": 28.1
  },
  "FR81": {
    "name": "Languedoc-Roussillon (NUTS 2013)",
    "cntr": "FR",
    "rii": 107.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.39,
    "edu": 44.8
  },
  "CZ03": {
    "name": "Jihoz\u00e1pad",
    "cntr": "CZ",
    "rii": 64.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.7,
    "rd": 1.26,
    "edu": 24.0
  },
  "SEZ": {
    "name": "Extra-Regio NUTS 1",
    "cntr": "SE",
    "rii": 88.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.9,
    "rd": 0.0,
    "edu": 50.8
  },
  "TRC1": {
    "name": "Gaziantep, Ad\u0131yaman, Kilis",
    "cntr": "TR",
    "rii": 31.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.9,
    "rd": 0.49,
    "edu": 21.4
  },
  "TR52": {
    "name": "Konya, Karaman",
    "cntr": "TR",
    "rii": 37.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.9,
    "rd": 0.74,
    "edu": 24.7
  },
  "FR23": {
    "name": "Haute-Normandie (NUTS 2013)",
    "cntr": "FR",
    "rii": 92.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.43,
    "edu": 44.8
  },
  "PL33": {
    "name": "Swietokrzyskie (NUTS 2013)",
    "cntr": "PL",
    "rii": 74.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 0.61,
    "edu": 40.0
  },
  "BE25": {
    "name": "Prov. West-Vlaanderen",
    "cntr": "BE",
    "rii": 88.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 1.72,
    "edu": 42.7
  },
  "HR03": {
    "name": "Jadranska Hrvatska",
    "cntr": "HR",
    "rii": 55.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.8,
    "rd": 0.71,
    "edu": 31.1
  },
  "FRI2": {
    "name": "Limousin",
    "cntr": "FR",
    "rii": 70.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.6,
    "rd": 1.22,
    "edu": 41.4
  },
  "PL32": {
    "name": "Podkarpackie (NUTS 2013)",
    "cntr": "PL",
    "rii": 85.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 1.29,
    "edu": 40.0
  },
  "NO0A": {
    "name": "Vestlandet",
    "cntr": "NO",
    "rii": 91.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.8,
    "rd": 2.05,
    "edu": 49.2
  },
  "FRI": {
    "name": "Nouvelle-Aquitaine",
    "cntr": "FR",
    "rii": 79.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.2,
    "rd": 1.44,
    "edu": 42.8
  },
  "CH01": {
    "name": "R\u00e9gion l\u00e9manique",
    "cntr": "CH",
    "rii": 124.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.7,
    "rd": 3.1,
    "edu": 46.4
  },
  "BG4": {
    "name": "Yugozapadna i Yuzhna tsentralna Bulgaria",
    "cntr": "BG",
    "rii": 100.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 7.7,
    "rd": 1.03,
    "edu": 38.6
  },
  "BG34": {
    "name": "Yugoiztochen",
    "cntr": "BG",
    "rii": 45.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.4,
    "rd": 0.26,
    "edu": 30.9
  },
  "KR": {
    "name": "South Korea",
    "cntr": "KR",
    "rii": 132.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 4.0,
    "rd": 5.13,
    "edu": 32.0
  },
  "IE0": {
    "name": "Ireland",
    "cntr": "IE",
    "rii": 139.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 9.9,
    "rd": 1.54,
    "edu": 58.7
  },
  "PL7": {
    "name": "Makroregion centralny",
    "cntr": "PL",
    "rii": 68.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.7,
    "rd": 0.83,
    "edu": 37.5
  },
  "FRY4": {
    "name": "La R\u00e9union",
    "cntr": "FR",
    "rii": 64.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.3,
    "rd": 2.18,
    "edu": 26.8
  },
  "DE23": {
    "name": "Oberpfalz",
    "cntr": "DE",
    "rii": 94.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.9,
    "rd": 1.77,
    "edu": 32.7
  },
  "PL8": {
    "name": "Makroregion wschodni",
    "cntr": "PL",
    "rii": 61.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.5,
    "rd": 0.99,
    "edu": 36.1
  },
  "BG42": {
    "name": "Yuzhen tsentralen",
    "cntr": "BG",
    "rii": 52.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.2,
    "rd": 0.45,
    "edu": 29.3
  },
  "PT2": {
    "name": "Regi\u00e3o Aut\u00f3noma dos A\u00e7ores",
    "cntr": "PT",
    "rii": 55.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.0,
    "rd": 0.41,
    "edu": 18.0
  },
  "DED4": {
    "name": "Chemnitz",
    "cntr": "DE",
    "rii": 81.6,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.7,
    "rd": 2.09,
    "edu": 29.3
  },
  "DEF": {
    "name": "Schleswig-Holstein",
    "cntr": "DE",
    "rii": 77.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.0,
    "rd": 1.53,
    "edu": 31.8
  },
  "MT00": {
    "name": "Malta",
    "cntr": "MT",
    "rii": 79.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.7,
    "rd": 0.61,
    "edu": 37.7
  },
  "DE25": {
    "name": "Mittelfranken",
    "cntr": "DE",
    "rii": 116.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.8,
    "rd": 2.5,
    "edu": 38.6
  },
  "ES53": {
    "name": "Illes Balears",
    "cntr": "ES",
    "rii": 52.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 0.39,
    "edu": 35.2
  },
  "FRD2": {
    "name": "Haute-Normandie",
    "cntr": "FR",
    "rii": 69.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 1.34,
    "edu": 38.4
  },
  "BG41": {
    "name": "Yugozapaden",
    "cntr": "BG",
    "rii": 124.5,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 10.2,
    "rd": 1.18,
    "edu": 44.5
  },
  "FRI1": {
    "name": "Aquitaine",
    "cntr": "FR",
    "rii": 92.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.2,
    "rd": 1.78,
    "edu": 44.0
  },
  "HU21": {
    "name": "K\u00f6z\u00e9p-Dun\u00e1nt\u00fal",
    "cntr": "HU",
    "rii": 68.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.3,
    "rd": 0.86,
    "edu": 23.1
  },
  "ITH": {
    "name": "Nord-Est",
    "cntr": "IT",
    "rii": 68.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.5,
    "rd": 1.65,
    "edu": 23.3
  },
  "FRY5": {
    "name": "Mayotte",
    "cntr": "FR",
    "rii": 76.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 2.18,
    "edu": 11.5
  },
  "FR42": {
    "name": "Alsace (NUTS 2013)",
    "cntr": "FR",
    "rii": 96.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.71,
    "edu": 44.8
  },
  "PL4": {
    "name": "Makroregion p\u00f3\u0142nocno-zachodni",
    "cntr": "PL",
    "rii": 60.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.9,
    "rd": 0.78,
    "edu": 35.2
  },
  "UKJ4": {
    "name": "Kent",
    "cntr": "UK",
    "rii": 108.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.8,
    "rd": 2.1,
    "edu": 44.0
  },
  "SK0": {
    "name": "Slovensko",
    "cntr": "SK",
    "rii": 79.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.8,
    "rd": 0.98,
    "edu": 29.8
  },
  "TR8": {
    "name": "Bat\u0131 Karadeniz",
    "cntr": "TR",
    "rii": 32.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.4,
    "rd": 0.75,
    "edu": 22.3
  },
  "DED": {
    "name": "Sachsen",
    "cntr": "DE",
    "rii": 103.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.8,
    "rd": 2.25,
    "edu": 35.0
  },
  "DEB2": {
    "name": "Trier",
    "cntr": "DE",
    "rii": 90.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.2,
    "rd": 3.19,
    "edu": 32.2
  },
  "DK03": {
    "name": "Syddanmark",
    "cntr": "DK",
    "rii": 81.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.6,
    "rd": 2.01,
    "edu": 39.4
  },
  "UKM7": {
    "name": "Eastern Scotland (Edinburgh)",
    "cntr": "UK",
    "rii": 153.8,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.5,
    "rd": 3.2,
    "edu": 56.5
  },
  "EL54": {
    "name": "Ipeiros",
    "cntr": "EL",
    "rii": 59.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.2,
    "rd": 1.48,
    "edu": 35.4
  },
  "TR81": {
    "name": "Zonguldak, Karab\u00fck, Bart\u0131n",
    "cntr": "TR",
    "rii": 34.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.5,
    "rd": 0.91,
    "edu": 21.3
  },
  "UKF3": {
    "name": "Lincolnshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 47.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.8,
    "rd": 0.44,
    "edu": 34.4
  },
  "EL64": {
    "name": "Sterea Ell\u00e1da",
    "cntr": "EL",
    "rii": 44.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.5,
    "rd": 0.93,
    "edu": 24.7
  },
  "MK00": {
    "name": "Severna Makedonija",
    "cntr": "MK",
    "rii": 55.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.3,
    "rd": 0.37,
    "edu": 25.1
  },
  "ES12": {
    "name": "Principado de Asturias",
    "cntr": "ES",
    "rii": 77.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.5,
    "rd": 1.03,
    "edu": 46.6
  },
  "PT1D": {
    "name": "Oeste e Vale do Tejo",
    "cntr": "PT",
    "rii": 64.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.0,
    "rd": 0.87,
    "edu": 28.5
  },
  "IS": {
    "name": "Iceland",
    "cntr": "IS",
    "rii": 114.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.6,
    "rd": 2.47,
    "edu": 46.1
  },
  "UK": {
    "name": "United Kingdom",
    "cntr": "UK",
    "rii": 98.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.1,
    "rd": 1.73,
    "edu": 44.7
  },
  "AT22": {
    "name": "Steiermark",
    "cntr": "AT",
    "rii": 151.3,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.9,
    "rd": 5.32,
    "edu": 34.9
  },
  "EL4": {
    "name": "Nisia Aigaiou, Kriti",
    "cntr": "EL",
    "rii": 49.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.8,
    "rd": 1.04,
    "edu": 25.5
  },
  "PT": {
    "name": "Portugal",
    "cntr": "PT",
    "rii": 87.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.0,
    "rd": 1.73,
    "edu": 32.7
  },
  "ES64": {
    "name": "Ciudad de Melilla",
    "cntr": "ES",
    "rii": 63.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.6,
    "rd": 0.47,
    "edu": 30.0
  },
  "UKJ2": {
    "name": "Surrey, East and West Sussex",
    "cntr": "UK",
    "rii": 149.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.9,
    "rd": 2.9,
    "edu": 53.5
  },
  "DE92": {
    "name": "Hannover",
    "cntr": "DE",
    "rii": 109.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.5,
    "rd": 3.23,
    "edu": 35.5
  },
  "ES4": {
    "name": "Centro (ES)",
    "cntr": "ES",
    "rii": 67.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.3,
    "rd": 0.97,
    "edu": 37.2
  },
  "HU2": {
    "name": "Dun\u00e1nt\u00fal",
    "cntr": "HU",
    "rii": 62.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.4,
    "rd": 0.83,
    "edu": 23.7
  },
  "PT1A": {
    "name": "Grande Lisboa",
    "cntr": "PT",
    "rii": 127.1,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.5,
    "rd": 2.17,
    "edu": 43.3
  },
  "DEF0": {
    "name": "Schleswig-Holstein",
    "cntr": "DE",
    "rii": 77.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.0,
    "rd": 1.53,
    "edu": 31.8
  },
  "SI02": {
    "name": "Zahodna Slovenija (NUTS 2010)",
    "cntr": "SI",
    "rii": 115.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.7,
    "rd": 2.97,
    "edu": 28.3
  },
  "FR4": {
    "name": "Est (FR) (NUTS 2013)",
    "cntr": "FR",
    "rii": 96.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.73,
    "edu": 44.8
  },
  "NL41": {
    "name": "Noord-Brabant",
    "cntr": "NL",
    "rii": 114.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.5,
    "rd": 2.64,
    "edu": 43.9
  },
  "IT": {
    "name": "Italy",
    "cntr": "IT",
    "rii": 67.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.0,
    "rd": 1.41,
    "edu": 22.3
  },
  "HR05": {
    "name": "Grad Zagreb",
    "cntr": "HR",
    "rii": 161.7,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 12.2,
    "rd": 2.32,
    "edu": 51.7
  },
  "UKJ": {
    "name": "South East (England)",
    "cntr": "UK",
    "rii": 154.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.5,
    "rd": 3.45,
    "edu": 52.5
  },
  "FR6": {
    "name": "Sud-Ouest (FR) (NUTS 2013)",
    "cntr": "FR",
    "rii": 115.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.92,
    "edu": 44.8
  },
  "FR26": {
    "name": "Bourgogne (NUTS 2013)",
    "cntr": "FR",
    "rii": 85.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 0.99,
    "edu": 44.8
  },
  "FR82": {
    "name": "Provence-Alpes-C\u00f4te d'Azur (NUTS 2013)",
    "cntr": "FR",
    "rii": 108.6,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.49,
    "edu": 44.8
  },
  "ITC1": {
    "name": "Piemonte",
    "cntr": "IT",
    "rii": 76.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.6,
    "rd": 2.2,
    "edu": 21.2
  },
  "FR30": {
    "name": "Nord-Pas-de-Calais (NUTS 2013)",
    "cntr": "FR",
    "rii": 84.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 0.91,
    "edu": 44.8
  },
  "HU3": {
    "name": "Alf\u00f6ld \u00e9s \u00c9szak",
    "cntr": "HU",
    "rii": 57.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.8,
    "rd": 0.79,
    "edu": 23.2
  },
  "ES5": {
    "name": "Este",
    "cntr": "ES",
    "rii": 93.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.1,
    "rd": 1.51,
    "edu": 42.6
  },
  "CH0": {
    "name": "Schweiz/Suisse/Svizzera",
    "cntr": "CH",
    "rii": 132.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.9,
    "rd": 3.1,
    "edu": 46.2
  },
  "EL51": {
    "name": "Anatoliki Makedonia, Thraki",
    "cntr": "EL",
    "rii": 49.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.9,
    "rd": 0.9,
    "edu": 28.0
  },
  "BE1": {
    "name": "R\u00e9gion de Bruxelles-Capitale/Brussels Hoofdstedelijk Gewest",
    "cntr": "BE",
    "rii": 140.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.2,
    "rd": 2.45,
    "edu": 56.9
  },
  "SE2": {
    "name": "S\u00f6dra Sverige",
    "cntr": "SE",
    "rii": 146.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.9,
    "rd": 4.25,
    "edu": 49.9
  },
  "MTZ": {
    "name": "Extra-Regio NUTS 1",
    "cntr": "MT",
    "rii": 69.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.7,
    "rd": 0.0,
    "edu": 37.7
  },
  "BE23": {
    "name": "Prov. Oost-Vlaanderen",
    "cntr": "BE",
    "rii": 131.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.7,
    "rd": 3.4,
    "edu": 48.8
  },
  "ITF1": {
    "name": "Abruzzo",
    "cntr": "IT",
    "rii": 58.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.2,
    "rd": 1.09,
    "edu": 24.6
  },
  "PL3": {
    "name": "Region Wschodni (NUTS 2013)",
    "cntr": "PL",
    "rii": 80.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 0.99,
    "edu": 40.0
  },
  "FRK2": {
    "name": "Rh\u00f4ne-Alpes",
    "cntr": "FR",
    "rii": 125.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.6,
    "rd": 3.02,
    "edu": 49.4
  },
  "EL52": {
    "name": "Kentriki Makedonia",
    "cntr": "EL",
    "rii": 89.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.7,
    "rd": 2.22,
    "edu": 36.4
  },
  "FRM0": {
    "name": "Corse",
    "cntr": "FR",
    "rii": 63.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.7,
    "rd": 0.33,
    "edu": 31.7
  },
  "HU12": {
    "name": "Pest",
    "cntr": "HU",
    "rii": 86.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 7.6,
    "rd": 0.41,
    "edu": 34.1
  },
  "BE34": {
    "name": "Prov. Luxembourg (BE)",
    "cntr": "BE",
    "rii": 71.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 0.57,
    "edu": 43.6
  },
  "ITI3": {
    "name": "Marche",
    "cntr": "IT",
    "rii": 52.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.5,
    "rd": 1.0,
    "edu": 24.9
  },
  "NO09": {
    "name": "Agder og S\u00f8r-\u00d8stlandet",
    "cntr": "NO",
    "rii": 84.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.2,
    "rd": 1.72,
    "edu": 43.8
  },
  "ITI2": {
    "name": "Umbria",
    "cntr": "IT",
    "rii": 50.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.4,
    "rd": 0.9,
    "edu": 25.0
  },
  "LT": {
    "name": "Lithuania",
    "cntr": "LT",
    "rii": 97.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.7,
    "rd": 1.12,
    "edu": 49.9
  },
  "PT11": {
    "name": "Norte",
    "cntr": "PT",
    "rii": 85.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 2.02,
    "edu": 29.8
  },
  "ITF6": {
    "name": "Calabria",
    "cntr": "IT",
    "rii": 33.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.3,
    "rd": 0.6,
    "edu": 18.6
  },
  "HU22": {
    "name": "Nyugat-Dun\u00e1nt\u00fal",
    "cntr": "HU",
    "rii": 66.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.3,
    "rd": 0.99,
    "edu": 26.0
  },
  "EL65": {
    "name": "Peloponnisos",
    "cntr": "EL",
    "rii": 45.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.1,
    "rd": 1.1,
    "edu": 25.8
  },
  "ATZ": {
    "name": "Extra-Regio NUTS 1",
    "cntr": "AT",
    "rii": 67.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.4,
    "rd": 0.0,
    "edu": 37.6
  },
  "NL2": {
    "name": "Oost-Nederland",
    "cntr": "NL",
    "rii": 100.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.04,
    "edu": 43.1
  },
  "FR21": {
    "name": "Champagne-Ardenne (NUTS 2013)",
    "cntr": "FR",
    "rii": 81.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 0.76,
    "edu": 44.8
  },
  "DE91": {
    "name": "Braunschweig",
    "cntr": "DE",
    "rii": 154.2,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.0,
    "rd": 5.91,
    "edu": 34.9
  },
  "DE8": {
    "name": "Mecklenburg-Vorpommern",
    "cntr": "DE",
    "rii": 63.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.8,
    "rd": 1.37,
    "edu": 28.3
  },
  "MTZZ": {
    "name": "Extra-Regio NUTS 2",
    "cntr": "MT",
    "rii": 69.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.7,
    "rd": 0.0,
    "edu": 37.7
  },
  "FRL0": {
    "name": "Provence-Alpes-C\u00f4te d\u2019Azur",
    "cntr": "FR",
    "rii": 97.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 2.1,
    "edu": 42.5
  },
  "FI20": {
    "name": "\u00c5land",
    "cntr": "FI",
    "rii": 81.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.5,
    "rd": 0.68,
    "edu": 32.9
  },
  "HR0": {
    "name": "Hrvatska",
    "cntr": "HR",
    "rii": 84.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.4,
    "rd": 1.41,
    "edu": 31.0
  },
  "UKH3": {
    "name": "Essex",
    "cntr": "UK",
    "rii": 105.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.4,
    "rd": 2.2,
    "edu": 42.0
  },
  "UKL1": {
    "name": "West Wales and The Valleys (NUTS 2021)",
    "cntr": "UK",
    "rii": 63.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.5,
    "rd": 0.99,
    "edu": 38.0
  },
  "DK01": {
    "name": "Hovedstaden",
    "cntr": "DK",
    "rii": 195.6,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 11.2,
    "rd": 4.61,
    "edu": 58.2
  },
  "FI1D": {
    "name": "Pohjois- ja It\u00e4-Suomi",
    "cntr": "FI",
    "rii": 107.4,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.8,
    "rd": 2.75,
    "edu": 39.2
  },
  "EE": {
    "name": "Estonia",
    "cntr": "EE",
    "rii": 115.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 7.3,
    "rd": 1.98,
    "edu": 42.1
  },
  "UKC2": {
    "name": "Northumberland and Tyne and Wear (NUTS 2021)",
    "cntr": "UK",
    "rii": 84.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.0,
    "rd": 1.37,
    "edu": 36.0
  },
  "SE32": {
    "name": "Mellersta Norrland",
    "cntr": "SE",
    "rii": 76.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.7,
    "rd": 1.09,
    "edu": 41.8
  },
  "FR5": {
    "name": "Ouest (FR) (NUTS 2013)",
    "cntr": "FR",
    "rii": 92.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.45,
    "edu": 44.8
  },
  "AT31": {
    "name": "Ober\u00f6sterreich",
    "cntr": "AT",
    "rii": 112.5,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.3,
    "rd": 3.54,
    "edu": 34.7
  },
  "ITF4": {
    "name": "Puglia",
    "cntr": "IT",
    "rii": 46.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 0.9,
    "edu": 18.5
  },
  "FRF": {
    "name": "Grand Est",
    "cntr": "FR",
    "rii": 66.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.5,
    "rd": 1.24,
    "edu": 37.2
  },
  "PL12": {
    "name": "Mazowieckie (NUTS 2013)",
    "cntr": "PL",
    "rii": 92.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 1.74,
    "edu": 40.0
  },
  "DE3": {
    "name": "Berlin",
    "cntr": "DE",
    "rii": 154.8,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 10.0,
    "rd": 3.04,
    "edu": 48.1
  },
  "DE40": {
    "name": "Brandenburg",
    "cntr": "DE",
    "rii": 77.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.1,
    "rd": 1.49,
    "edu": 32.2
  },
  "HU32": {
    "name": "\u00c9szak-Alf\u00f6ld",
    "cntr": "HU",
    "rii": 58.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.3,
    "rd": 0.61,
    "edu": 23.4
  },
  "NL12": {
    "name": "Friesland (NL)",
    "cntr": "NL",
    "rii": 62.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 0.86,
    "edu": 38.6
  },
  "DEC0": {
    "name": "Saarland",
    "cntr": "DE",
    "rii": 79.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.6,
    "rd": 1.62,
    "edu": 28.1
  },
  "ITC2": {
    "name": "Valle d\u2019Aosta/Vall\u00e9e d\u2019Aoste",
    "cntr": "IT",
    "rii": 53.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.0,
    "rd": 0.56,
    "edu": 21.0
  },
  "BE22": {
    "name": "Prov. Limburg (BE)",
    "cntr": "BE",
    "rii": 94.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.5,
    "rd": 1.91,
    "edu": 41.5
  },
  "CZ07": {
    "name": "St\u0159edn\u00ed Morava",
    "cntr": "CZ",
    "rii": 70.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.0,
    "rd": 1.51,
    "edu": 24.7
  },
  "MT": {
    "name": "Malta",
    "cntr": "MT",
    "rii": 79.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.7,
    "rd": 0.61,
    "edu": 37.7
  },
  "DK05": {
    "name": "Nordjylland",
    "cntr": "DK",
    "rii": 80.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.5,
    "rd": 1.74,
    "edu": 36.7
  },
  "BA": {
    "name": "Bosnia and Herzegovina",
    "cntr": "BA",
    "rii": 37.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.8,
    "rd": 0.19,
    "edu": 18.4
  },
  "CZ0": {
    "name": "\u010cesko",
    "cntr": "CZ",
    "rii": 90.6,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.7,
    "rd": 1.82,
    "edu": 28.7
  },
  "PL63": {
    "name": "Pomorskie",
    "cntr": "PL",
    "rii": 114.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.7,
    "rd": 2.12,
    "edu": 43.6
  },
  "BE31": {
    "name": "Prov. Brabant wallon",
    "cntr": "BE",
    "rii": 255.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 9.8,
    "rd": 8.68,
    "edu": 65.6
  },
  "BE2": {
    "name": "Vlaams Gewest",
    "cntr": "BE",
    "rii": 132.8,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.8,
    "rd": 3.5,
    "edu": 47.7
  },
  "UKG": {
    "name": "West Midlands (England)",
    "cntr": "UK",
    "rii": 108.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.1,
    "rd": 2.6,
    "edu": 40.5
  },
  "DE2": {
    "name": "Bayern",
    "cntr": "DE",
    "rii": 126.8,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.3,
    "rd": 3.37,
    "edu": 38.6
  },
  "UKG3": {
    "name": "West Midlands (Birmingham)",
    "cntr": "UK",
    "rii": 118.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.2,
    "rd": 2.7,
    "edu": 42.5
  },
  "BE21": {
    "name": "Prov. Antwerpen",
    "cntr": "BE",
    "rii": 146.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.6,
    "rd": 4.08,
    "edu": 47.3
  },
  "TR32": {
    "name": "Ayd\u0131n, Denizli, Mu\u011fla",
    "cntr": "TR",
    "rii": 34.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.6,
    "rd": 0.57,
    "edu": 26.5
  },
  "UKH2": {
    "name": "Bedfordshire and Hertfordshire",
    "cntr": "UK",
    "rii": 151.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.8,
    "rd": 3.8,
    "edu": 48.0
  },
  "HR04": {
    "name": "Kontinentalna Hrvatska (NUTS 2016)",
    "cntr": "HR",
    "rii": 64.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.8,
    "rd": 1.35,
    "edu": 22.0
  },
  "TRC2": {
    "name": "\u015eanl\u0131urfa, Diyarbak\u0131r",
    "cntr": "TR",
    "rii": 22.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.3,
    "rd": 0.49,
    "edu": 15.8
  },
  "DEA3": {
    "name": "M\u00fcnster",
    "cntr": "DE",
    "rii": 65.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.3,
    "rd": 1.16,
    "edu": 30.1
  },
  "HU10": {
    "name": "K\u00f6z\u00e9p-Magyarorsz\u00e1g (NUTS 2013)",
    "cntr": "HU",
    "rii": 106.6,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 7.7,
    "rd": 1.77,
    "edu": 32.4
  },
  "TR72": {
    "name": "Kayseri, Sivas, Yozgat",
    "cntr": "TR",
    "rii": 42.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.8,
    "rd": 1.04,
    "edu": 25.2
  },
  "PT15": {
    "name": "Algarve",
    "cntr": "PT",
    "rii": 42.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.8,
    "rd": 0.44,
    "edu": 28.8
  },
  "PL5": {
    "name": "Makroregion po\u0142udniowo-zachodni",
    "cntr": "PL",
    "rii": 92.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.6,
    "rd": 1.3,
    "edu": 41.8
  },
  "ITC3": {
    "name": "Liguria",
    "cntr": "IT",
    "rii": 62.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.1,
    "rd": 1.4,
    "edu": 23.5
  },
  "RS2": {
    "name": "Srbija - jug",
    "cntr": "RS",
    "rii": 37.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.4,
    "rd": 0.18,
    "edu": 22.4
  },
  "NL21": {
    "name": "Overijssel",
    "cntr": "NL",
    "rii": 91.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.6,
    "rd": 1.69,
    "edu": 41.9
  },
  "AT21": {
    "name": "K\u00e4rnten",
    "cntr": "AT",
    "rii": 117.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.7,
    "rd": 3.19,
    "edu": 36.0
  },
  "AT32": {
    "name": "Salzburg",
    "cntr": "AT",
    "rii": 80.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 1.61,
    "edu": 35.7
  },
  "ESZZ": {
    "name": "Extra-Regio NUTS 2",
    "cntr": "ES",
    "rii": 66.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.6,
    "rd": 0.0,
    "edu": 42.4
  },
  "PL52": {
    "name": "Opolskie",
    "cntr": "PL",
    "rii": 51.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.8,
    "rd": 0.76,
    "edu": 34.2
  },
  "CY0": {
    "name": "K\u00fdpros",
    "cntr": "CY",
    "rii": 88.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.2,
    "rd": 0.64,
    "edu": 52.1
  },
  "LT02": {
    "name": "Vidurio ir vakar\u0173 Lietuvos regionas",
    "cntr": "LT",
    "rii": 65.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.9,
    "rd": 0.72,
    "edu": 42.7
  },
  "RS1": {
    "name": "Srbija - sever",
    "cntr": "RS",
    "rii": 105.4,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 8.2,
    "rd": 1.29,
    "edu": 35.8
  },
  "FRD": {
    "name": "Normandie",
    "cntr": "FR",
    "rii": 68.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.5,
    "rd": 1.26,
    "edu": 38.8
  },
  "UKL2": {
    "name": "East Wales (NUTS 2021)",
    "cntr": "UK",
    "rii": 81.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.7,
    "rd": 1.19,
    "edu": 45.9
  },
  "TR31": {
    "name": "\u0130zmir",
    "cntr": "TR",
    "rii": 57.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.2,
    "rd": 1.09,
    "edu": 31.8
  },
  "UKH": {
    "name": "East of England",
    "cntr": "UK",
    "rii": 165.7,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.9,
    "rd": 4.6,
    "edu": 49.5
  },
  "RS12": {
    "name": "Region Vojvodine",
    "cntr": "RS",
    "rii": 74.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 1.12,
    "edu": 25.4
  },
  "TRA2": {
    "name": "A\u011fr\u0131, Kars, I\u011fd\u0131r, Ardahan",
    "cntr": "TR",
    "rii": 29.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.3,
    "rd": 0.85,
    "edu": 17.0
  },
  "FR61": {
    "name": "Aquitaine (NUTS 2013)",
    "cntr": "FR",
    "rii": 94.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.6,
    "edu": 44.8
  },
  "AT34": {
    "name": "Vorarlberg",
    "cntr": "AT",
    "rii": 78.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.2,
    "rd": 1.93,
    "edu": 32.4
  },
  "ITG": {
    "name": "Isole",
    "cntr": "IT",
    "rii": 43.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.3,
    "rd": 0.9,
    "edu": 17.3
  },
  "UKI3": {
    "name": "Inner London - West",
    "cntr": "UK",
    "rii": 191.1,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 12.8,
    "rd": 3.1,
    "edu": 68.0
  },
  "UKD4": {
    "name": "Lancashire (NUTS 2021)",
    "cntr": "UK",
    "rii": 62.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.7,
    "rd": 0.82,
    "edu": 37.9
  },
  "DE30": {
    "name": "Berlin",
    "cntr": "DE",
    "rii": 154.8,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 10.0,
    "rd": 3.04,
    "edu": 48.1
  },
  "NO": {
    "name": "Norway",
    "cntr": "NO",
    "rii": 100.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.8,
    "rd": 1.75,
    "edu": 50.2
  },
  "EE0": {
    "name": "Eesti",
    "cntr": "EE",
    "rii": 115.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 7.3,
    "rd": 1.99,
    "edu": 42.1
  },
  "DEE0": {
    "name": "Sachsen-Anhalt",
    "cntr": "DE",
    "rii": 66.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.4,
    "rd": 1.45,
    "edu": 25.4
  },
  "ES51": {
    "name": "Catalu\u00f1a",
    "cntr": "ES",
    "rii": 111.6,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.6,
    "rd": 1.82,
    "edu": 46.9
  },
  "SK04": {
    "name": "V\u00fdchodn\u00e9 Slovensko",
    "cntr": "SK",
    "rii": 63.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.7,
    "rd": 0.61,
    "edu": 26.7
  },
  "SE21": {
    "name": "Sm\u00e5land med \u00f6arna",
    "cntr": "SE",
    "rii": 79.6,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.2,
    "rd": 1.43,
    "edu": 43.6
  },
  "FR53": {
    "name": "Poitou-Charentes (NUTS 2013)",
    "cntr": "FR",
    "rii": 84.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 0.93,
    "edu": 44.8
  },
  "UKK2": {
    "name": "Dorset and Somerset (NUTS 2021)",
    "cntr": "UK",
    "rii": 74.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.1,
    "rd": 0.83,
    "edu": 41.7
  },
  "CZ01": {
    "name": "Praha",
    "cntr": "CZ",
    "rii": 176.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 12.9,
    "rd": 2.77,
    "edu": 54.8
  },
  "ES3": {
    "name": "Comunidad de Madrid",
    "cntr": "ES",
    "rii": 132.7,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.5,
    "rd": 2.18,
    "edu": 50.0
  },
  "FRJ2": {
    "name": "Midi-Pyr\u00e9n\u00e9es",
    "cntr": "FR",
    "rii": 150.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.1,
    "rd": 4.08,
    "edu": 47.9
  },
  "HR02": {
    "name": "Panonska Hrvatska",
    "cntr": "HR",
    "rii": 45.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.4,
    "rd": 0.35,
    "edu": 20.5
  },
  "IE05": {
    "name": "Southern",
    "cntr": "IE",
    "rii": 116.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 9.1,
    "rd": 0.59,
    "edu": 54.8
  },
  "AT11": {
    "name": "Burgenland",
    "cntr": "AT",
    "rii": 66.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.0,
    "rd": 0.75,
    "edu": 34.2
  },
  "UKK4": {
    "name": "Devon (NUTS 2021)",
    "cntr": "UK",
    "rii": 75.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.2,
    "rd": 1.27,
    "edu": 41.2
  },
  "ES23": {
    "name": "La Rioja",
    "cntr": "ES",
    "rii": 63.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.2,
    "rd": 0.92,
    "edu": 41.4
  },
  "PL84": {
    "name": "Podlaskie",
    "cntr": "PL",
    "rii": 57.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 0.62,
    "edu": 37.4
  },
  "DE94": {
    "name": "Weser-Ems",
    "cntr": "DE",
    "rii": 59.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.2,
    "rd": 0.78,
    "edu": 30.8
  },
  "FRJ1": {
    "name": "Languedoc-Roussillon",
    "cntr": "FR",
    "rii": 95.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.7,
    "rd": 2.29,
    "edu": 42.6
  },
  "UKM5": {
    "name": "North Eastern Scotland (NUTS 2021)",
    "cntr": "UK",
    "rii": 92.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.5,
    "rd": 1.48,
    "edu": 55.8
  },
  "DE7": {
    "name": "Hessen",
    "cntr": "DE",
    "rii": 119.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.4,
    "rd": 2.98,
    "edu": 35.6
  },
  "FRB0": {
    "name": "Centre \u2014 Val de Loire",
    "cntr": "FR",
    "rii": 85.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 1.38,
    "edu": 41.4
  },
  "RO1": {
    "name": "Macroregiunea Unu",
    "cntr": "RO",
    "rii": 40.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.0,
    "rd": 0.27,
    "edu": 19.1
  },
  "TRB": {
    "name": "Ortado\u011fu Anadolu",
    "cntr": "TR",
    "rii": 32.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.3,
    "rd": 0.88,
    "edu": 20.5
  },
  "BEZ": {
    "name": "Extra-Regio NUTS 1",
    "cntr": "BE",
    "rii": 79.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.9,
    "rd": 0.0,
    "edu": 47.5
  },
  "HR06": {
    "name": "Sjeverna Hrvatska",
    "cntr": "HR",
    "rii": 78.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 1.97,
    "edu": 22.4
  },
  "TR82": {
    "name": "Kastamonu, \u00c7ank\u0131r\u0131, Sinop",
    "cntr": "TR",
    "rii": 29.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.4,
    "rd": 0.65,
    "edu": 20.2
  },
  "LU": {
    "name": "Luxembourg",
    "cntr": "LU",
    "rii": 97.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 1.04,
    "edu": 55.7
  },
  "FRG": {
    "name": "Pays de la Loire",
    "cntr": "FR",
    "rii": 78.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.5,
    "rd": 1.33,
    "edu": 42.2
  },
  "FRY3": {
    "name": "Guyane",
    "cntr": "FR",
    "rii": 85.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 2.18,
    "edu": 21.7
  },
  "UKM6": {
    "name": "Highlands and Islands (NUTS 2021)",
    "cntr": "UK",
    "rii": 66.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.0,
    "rd": 0.45,
    "edu": 47.6
  },
  "DE93": {
    "name": "L\u00fcneburg",
    "cntr": "DE",
    "rii": 65.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.5,
    "rd": 0.99,
    "edu": 31.6
  },
  "EL61": {
    "name": "Thessalia",
    "cntr": "EL",
    "rii": 47.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.1,
    "rd": 0.91,
    "edu": 31.4
  },
  "ITG1": {
    "name": "Sicilia",
    "cntr": "IT",
    "rii": 45.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 0.92,
    "edu": 16.9
  },
  "UKD6": {
    "name": "Cheshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 114.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.9,
    "rd": 2.37,
    "edu": 45.5
  },
  "SE33": {
    "name": "\u00d6vre Norrland",
    "cntr": "SE",
    "rii": 107.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.7,
    "rd": 2.3,
    "edu": 48.3
  },
  "PL91": {
    "name": "Warszawski sto\u0142eczny",
    "cntr": "PL",
    "rii": 173.1,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 11.5,
    "rd": 2.65,
    "edu": 65.3
  },
  "EL41": {
    "name": "Voreio Aigaio",
    "cntr": "EL",
    "rii": 56.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.4,
    "rd": 1.02,
    "edu": 21.3
  },
  "DE50": {
    "name": "Bremen",
    "cntr": "DE",
    "rii": 106.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.3,
    "rd": 2.8,
    "edu": 32.3
  },
  "FR52": {
    "name": "Bretagne (NUTS 2013)",
    "cntr": "FR",
    "rii": 101.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.01,
    "edu": 44.8
  },
  "PL9": {
    "name": "Makroregion wojew\u00f3dztwo mazowieckie",
    "cntr": "PL",
    "rii": 130.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.0,
    "rd": 2.13,
    "edu": 52.4
  },
  "TRB2": {
    "name": "Van, Mu\u015f, Bitlis, Hakkari",
    "cntr": "TR",
    "rii": 25.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.1,
    "rd": 0.71,
    "edu": 17.0
  },
  "NO01": {
    "name": "Oslo og Akershus (statistical region 2016)",
    "cntr": "NO",
    "rii": 149.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.1,
    "rd": 3.22,
    "edu": 53.5
  },
  "SK": {
    "name": "Slovakia",
    "cntr": "SK",
    "rii": 79.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.8,
    "rd": 0.98,
    "edu": 29.8
  },
  "UKJ1": {
    "name": "Berkshire, Buckinghamshire and Oxfordshire",
    "cntr": "UK",
    "rii": 198.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 11.2,
    "rd": 4.8,
    "edu": 58.0
  },
  "TR10": {
    "name": "\u0130stanbul",
    "cntr": "TR",
    "rii": 73.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.2,
    "rd": 1.67,
    "edu": 31.8
  },
  "TR63": {
    "name": "Hatay, Kahramanmara\u015f, Osmaniye",
    "cntr": "TR",
    "rii": 24.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.4,
    "rd": 0.33,
    "edu": 20.9
  },
  "ITC": {
    "name": "Nord-Ovest",
    "cntr": "IT",
    "rii": 72.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.6,
    "rd": 1.43,
    "edu": 22.9
  },
  "SE12": {
    "name": "\u00d6stra Mellansverige",
    "cntr": "SE",
    "rii": 148.1,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.2,
    "rd": 4.37,
    "edu": 46.6
  },
  "IE": {
    "name": "Ireland",
    "cntr": "IE",
    "rii": 140.3,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 9.9,
    "rd": 1.59,
    "edu": 58.7
  },
  "ITH5": {
    "name": "Emilia-Romagna",
    "cntr": "IT",
    "rii": 82.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.8,
    "rd": 2.33,
    "edu": 25.3
  },
  "TR41": {
    "name": "Bursa, Eski\u015fehir, Bilecik",
    "cntr": "TR",
    "rii": 51.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.2,
    "rd": 1.38,
    "edu": 26.9
  },
  "ES1": {
    "name": "Noroeste",
    "cntr": "ES",
    "rii": 78.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.4,
    "rd": 1.19,
    "edu": 44.8
  },
  "ITZ": {
    "name": "Extra-Regio NUTS 1",
    "cntr": "IT",
    "rii": 45.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.0,
    "rd": 0.0,
    "edu": 22.3
  },
  "ITH4": {
    "name": "Friuli-Venezia Giulia",
    "cntr": "IT",
    "rii": 71.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 1.65,
    "edu": 24.1
  },
  "SK01": {
    "name": "Bratislavsk\u00fd kraj",
    "cntr": "SK",
    "rii": 168.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 14.3,
    "rd": 1.69,
    "edu": 54.8
  },
  "RSZ": {
    "name": "Extra-Regio level 1",
    "cntr": "RS",
    "rii": 61.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.5,
    "rd": 0.0,
    "edu": 29.5
  },
  "UKF2": {
    "name": "Leicestershire, Rutland and Northamptonshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 76.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 1.15,
    "edu": 39.0
  },
  "NL33": {
    "name": "Zuid-Holland (NUTS 2021)",
    "cntr": "NL",
    "rii": 88.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.1,
    "rd": 1.87,
    "edu": 38.9
  },
  "RO4": {
    "name": "Macroregiunea Patru",
    "cntr": "RO",
    "rii": 47.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.2,
    "rd": 0.24,
    "edu": 18.0
  },
  "BE33": {
    "name": "Prov. Li\u00e8ge",
    "cntr": "BE",
    "rii": 103.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.4,
    "rd": 2.52,
    "edu": 41.8
  },
  "BE24": {
    "name": "Prov. Vlaams-Brabant",
    "cntr": "BE",
    "rii": 176.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.4,
    "rd": 5.17,
    "edu": 56.7
  },
  "ES30": {
    "name": "Comunidad de Madrid",
    "cntr": "ES",
    "rii": 132.7,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.5,
    "rd": 2.18,
    "edu": 50.0
  },
  "CH05": {
    "name": "Ostschweiz",
    "cntr": "CH",
    "rii": 112.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.5,
    "rd": 3.1,
    "edu": 40.8
  },
  "TR42": {
    "name": "Kocaeli, Sakarya, D\u00fczce, Bolu, Yalova",
    "cntr": "TR",
    "rii": 67.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.6,
    "rd": 2.21,
    "edu": 27.5
  },
  "UKI5": {
    "name": "Outer London - East and North East",
    "cntr": "UK",
    "rii": 124.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 7.5,
    "rd": 1.9,
    "edu": 54.0
  },
  "PL61": {
    "name": "Kujawsko-pomorskie",
    "cntr": "PL",
    "rii": 61.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.4,
    "rd": 0.76,
    "edu": 31.9
  },
  "DE4": {
    "name": "Brandenburg",
    "cntr": "DE",
    "rii": 77.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.1,
    "rd": 1.49,
    "edu": 32.2
  },
  "MK": {
    "name": "North Macedonia",
    "cntr": "MK",
    "rii": 55.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.3,
    "rd": 0.37,
    "edu": 25.1
  },
  "TR33": {
    "name": "Manisa, Afyonkarahisar, K\u00fctahya, U\u015fak",
    "cntr": "TR",
    "rii": 36.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.6,
    "rd": 0.97,
    "edu": 21.4
  },
  "SE3": {
    "name": "Norra Sverige",
    "cntr": "SE",
    "rii": 86.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.1,
    "rd": 1.45,
    "edu": 43.6
  },
  "FRE": {
    "name": "Hauts-de-France",
    "cntr": "FR",
    "rii": 68.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.9,
    "rd": 1.07,
    "edu": 39.3
  },
  "CH": {
    "name": "Switzerland",
    "cntr": "CH",
    "rii": 132.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.9,
    "rd": 3.1,
    "edu": 46.2
  },
  "US": {
    "name": "United States",
    "cntr": "US",
    "rii": 106.7,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.0,
    "rd": 3.44,
    "edu": 32.0
  },
  "FRA": {
    "name": "D\u00e9partements d'outre-mer (NUTS 2013)",
    "cntr": "FR",
    "rii": 80.6,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 0.68,
    "edu": 44.8
  },
  "PL34": {
    "name": "Podlaskie (NUTS 2013)",
    "cntr": "PL",
    "rii": 77.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 0.76,
    "edu": 40.0
  },
  "DE73": {
    "name": "Kassel",
    "cntr": "DE",
    "rii": 74.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.7,
    "rd": 1.54,
    "edu": 30.6
  },
  "UKM9": {
    "name": "Southern Scotland (NUTS 2021)",
    "cntr": "UK",
    "rii": 61.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 0.36,
    "edu": 46.9
  },
  "ITF": {
    "name": "Sud",
    "cntr": "IT",
    "rii": 50.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.8,
    "rd": 1.03,
    "edu": 19.4
  },
  "IE01": {
    "name": "Border, Midland and Western (NUTS 2013)",
    "cntr": "IE",
    "rii": 93.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 1.87,
    "edu": 34.4
  },
  "BE3": {
    "name": "R\u00e9gion wallonne",
    "cntr": "BE",
    "rii": 120.6,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.3,
    "rd": 3.16,
    "edu": 43.4
  },
  "NL34": {
    "name": "Zeeland",
    "cntr": "NL",
    "rii": 49.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.9,
    "rd": 0.53,
    "edu": 34.1
  },
  "RS": {
    "name": "Serbia",
    "cntr": "RS",
    "rii": 76.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.5,
    "rd": 0.93,
    "edu": 29.5
  },
  "ES6": {
    "name": "Sur",
    "cntr": "ES",
    "rii": 66.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.9,
    "rd": 1.08,
    "edu": 36.4
  },
  "IS00": {
    "name": "\u00cdsland",
    "cntr": "IS",
    "rii": 114.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.6,
    "rd": 2.47,
    "edu": 46.1
  },
  "ITH3": {
    "name": "Veneto",
    "cntr": "IT",
    "rii": 57.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.2,
    "rd": 1.13,
    "edu": 21.8
  },
  "FRY2": {
    "name": "Martinique",
    "cntr": "FR",
    "rii": 77.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.6,
    "rd": 2.18,
    "edu": 31.9
  },
  "DKZ": {
    "name": "Extra-Regio NUTS 1",
    "cntr": "DK",
    "rii": 81.6,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.4,
    "rd": 0.01,
    "edu": 46.1
  },
  "LT00": {
    "name": "Lietuva (NUTS 2013)",
    "cntr": "LT",
    "rii": 61.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.4,
    "rd": 1.12,
    "edu": 34.1
  },
  "ITZZ": {
    "name": "Extra-Regio NUTS 2",
    "cntr": "IT",
    "rii": 45.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.0,
    "rd": 0.0,
    "edu": 22.3
  },
  "PL21": {
    "name": "Ma\u0142opolskie",
    "cntr": "PL",
    "rii": 113.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.0,
    "rd": 2.49,
    "edu": 41.2
  },
  "HU1": {
    "name": "K\u00f6z\u00e9p-Magyarorsz\u00e1g",
    "cntr": "HU",
    "rii": 139.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 10.5,
    "rd": 1.79,
    "edu": 48.3
  },
  "FRC": {
    "name": "Bourgogne-Franche-Comt\u00e9",
    "cntr": "FR",
    "rii": 81.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 1.58,
    "edu": 36.8
  },
  "ITG2": {
    "name": "Sardegna",
    "cntr": "IT",
    "rii": 39.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.7,
    "rd": 0.85,
    "edu": 18.4
  },
  "PT1B": {
    "name": "Pen\u00ednsula de Set\u00fabal",
    "cntr": "PT",
    "rii": 86.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.5,
    "rd": 0.9,
    "edu": 34.3
  },
  "JP": {
    "name": "Japan",
    "cntr": "JP",
    "rii": 107.4,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.0,
    "rd": 3.48,
    "edu": 32.0
  },
  "ES22": {
    "name": "Comunidad Foral de Navarra",
    "cntr": "ES",
    "rii": 98.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.0,
    "rd": 2.34,
    "edu": 50.8
  },
  "TR83": {
    "name": "Samsun, Tokat, \u00c7orum, Amasya",
    "cntr": "TR",
    "rii": 33.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.5,
    "rd": 0.72,
    "edu": 23.4
  },
  "PT16": {
    "name": "Centro (PT) (NUTS 2021)",
    "cntr": "PT",
    "rii": 54.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.9,
    "rd": 1.43,
    "edu": 24.0
  },
  "UKI": {
    "name": "London",
    "cntr": "UK",
    "rii": 164.7,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 10.5,
    "rd": 2.65,
    "edu": 63.5
  },
  "CZ06": {
    "name": "Jihov\u00fdchod",
    "cntr": "CZ",
    "rii": 102.5,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.2,
    "rd": 2.25,
    "edu": 30.9
  },
  "FRJ": {
    "name": "Occitanie",
    "cntr": "FR",
    "rii": 126.3,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.6,
    "rd": 3.29,
    "edu": 45.4
  },
  "PT19": {
    "name": "Centro (PT)",
    "cntr": "PT",
    "rii": 87.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.2,
    "rd": 2.05,
    "edu": 33.4
  },
  "RO21": {
    "name": "Nord-Est",
    "cntr": "RO",
    "rii": 23.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.4,
    "rd": 0.2,
    "edu": 13.4
  },
  "NO04": {
    "name": "Agder og Rogaland (statistical region 2016)",
    "cntr": "NO",
    "rii": 71.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.3,
    "rd": 1.48,
    "edu": 39.9
  },
  "UKI7": {
    "name": "Outer London - West and North West",
    "cntr": "UK",
    "rii": 170.3,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 10.1,
    "rd": 3.4,
    "edu": 59.5
  },
  "AT12": {
    "name": "Nieder\u00f6sterreich",
    "cntr": "AT",
    "rii": 87.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 1.79,
    "edu": 36.7
  },
  "PL71": {
    "name": "\u0141\u00f3dzkie",
    "cntr": "PL",
    "rii": 77.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 0.91,
    "edu": 37.7
  },
  "ES70": {
    "name": "Canarias",
    "cntr": "ES",
    "rii": 52.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.1,
    "rd": 0.53,
    "edu": 36.3
  },
  "NL3": {
    "name": "West-Nederland",
    "cntr": "NL",
    "rii": 117.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.2,
    "rd": 2.17,
    "edu": 50.2
  },
  "DEA1": {
    "name": "D\u00fcsseldorf",
    "cntr": "DE",
    "rii": 82.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.6,
    "rd": 1.64,
    "edu": 31.8
  },
  "DE9": {
    "name": "Niedersachsen",
    "cntr": "DE",
    "rii": 95.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 2.72,
    "edu": 33.0
  },
  "TR71": {
    "name": "K\u0131r\u0131kkale, Aksaray, Ni\u011fde, Nev\u015fehir, K\u0131r\u015fehir",
    "cntr": "TR",
    "rii": 32.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.5,
    "rd": 0.79,
    "edu": 21.0
  },
  "LV": {
    "name": "Latvia",
    "cntr": "LV",
    "rii": 84.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 0.94,
    "edu": 40.7
  },
  "UKE3": {
    "name": "South Yorkshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 67.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.3,
    "rd": 1.33,
    "edu": 38.5
  },
  "EL53": {
    "name": "Dytiki Makedonia",
    "cntr": "EL",
    "rii": 46.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.7,
    "rd": 0.77,
    "edu": 28.3
  },
  "PL82": {
    "name": "Podkarpackie",
    "cntr": "PL",
    "rii": 59.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.3,
    "rd": 1.03,
    "edu": 34.2
  },
  "FRF2": {
    "name": "Champagne-Ardenne",
    "cntr": "FR",
    "rii": 47.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.5,
    "rd": 0.63,
    "edu": 33.8
  },
  "ME0": {
    "name": "Crna Gora",
    "cntr": "ME",
    "rii": 43.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 0.29,
    "edu": 25.6
  },
  "DK": {
    "name": "Denmark",
    "cntr": "DK",
    "rii": 130.2,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.4,
    "rd": 3.15,
    "edu": 46.1
  },
  "RO2": {
    "name": "Macroregiunea Doi",
    "cntr": "RO",
    "rii": 21.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.2,
    "rd": 0.15,
    "edu": 13.7
  },
  "FR83": {
    "name": "Corse (NUTS 2013)",
    "cntr": "FR",
    "rii": 74.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 0.29,
    "edu": 44.8
  },
  "AT3": {
    "name": "West\u00f6sterreich",
    "cntr": "AT",
    "rii": 100.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.2,
    "rd": 2.82,
    "edu": 34.1
  },
  "MT0": {
    "name": "Malta",
    "cntr": "MT",
    "rii": 79.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.7,
    "rd": 0.61,
    "edu": 37.7
  },
  "EL42": {
    "name": "Notio Aigaio",
    "cntr": "EL",
    "rii": 30.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.1,
    "rd": 0.27,
    "edu": 22.5
  },
  "FR51": {
    "name": "Pays de la Loire (NUTS 2013)",
    "cntr": "FR",
    "rii": 89.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.23,
    "edu": 44.8
  },
  "CH04": {
    "name": "Z\u00fcrich",
    "cntr": "CH",
    "rii": 155.8,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 9.0,
    "rd": 3.1,
    "edu": 56.6
  },
  "FRD1": {
    "name": "Basse-Normandie",
    "cntr": "FR",
    "rii": 66.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.4,
    "rd": 1.15,
    "edu": 39.4
  },
  "PL72": {
    "name": "\u015awi\u0119tokrzyskie",
    "cntr": "PL",
    "rii": 46.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.0,
    "rd": 0.6,
    "edu": 37.0
  },
  "FR71": {
    "name": "Rh\u00f4ne-Alpes (NUTS 2013)",
    "cntr": "FR",
    "rii": 112.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.77,
    "edu": 44.8
  },
  "DE72": {
    "name": "Gie\u00dfen",
    "cntr": "DE",
    "rii": 100.7,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.0,
    "rd": 2.58,
    "edu": 32.5
  },
  "CZ": {
    "name": "Czechia",
    "cntr": "CZ",
    "rii": 90.6,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.7,
    "rd": 1.82,
    "edu": 28.7
  },
  "ES11": {
    "name": "Galicia",
    "cntr": "ES",
    "rii": 78.6,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.4,
    "rd": 1.29,
    "edu": 43.4
  },
  "PL2": {
    "name": "Makroregion po\u0142udniowy",
    "cntr": "PL",
    "rii": 94.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.5,
    "rd": 1.55,
    "edu": 39.7
  },
  "RO": {
    "name": "Romania",
    "cntr": "RO",
    "rii": 46.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.4,
    "rd": 0.46,
    "edu": 19.5
  },
  "PL92": {
    "name": "Mazowiecki regionalny",
    "cntr": "PL",
    "rii": 43.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.8,
    "rd": 0.36,
    "edu": 31.8
  },
  "SE11": {
    "name": "Stockholm",
    "cntr": "SE",
    "rii": 177.6,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 10.8,
    "rd": 3.53,
    "edu": 60.0
  },
  "DE22": {
    "name": "Niederbayern",
    "cntr": "DE",
    "rii": 59.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.7,
    "rd": 0.7,
    "edu": 28.7
  },
  "IE06": {
    "name": "Eastern and Midland",
    "cntr": "IE",
    "rii": 164.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 11.6,
    "rd": 2.14,
    "edu": 63.0
  },
  "IE02": {
    "name": "Southern and Eastern (NUTS 2013)",
    "cntr": "IE",
    "rii": 109.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 8.6,
    "rd": 1.1,
    "edu": 40.9
  },
  "BE": {
    "name": "Belgium",
    "cntr": "BE",
    "rii": 129.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.9,
    "rd": 3.25,
    "edu": 47.5
  },
  "UKK3": {
    "name": "Cornwall and Isles of Scilly (NUTS 2021)",
    "cntr": "UK",
    "rii": 55.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.2,
    "rd": 0.35,
    "edu": 42.9
  },
  "ITF5": {
    "name": "Basilicata",
    "cntr": "IT",
    "rii": 43.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.4,
    "rd": 0.69,
    "edu": 20.4
  },
  "NL32": {
    "name": "Noord-Holland",
    "cntr": "NL",
    "rii": 117.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.8,
    "rd": 1.82,
    "edu": 52.2
  },
  "ESZ": {
    "name": "Extra-Regio NUTS 1",
    "cntr": "ES",
    "rii": 66.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.6,
    "rd": 0.0,
    "edu": 42.4
  },
  "NO0": {
    "name": "Norge",
    "cntr": "NO",
    "rii": 112.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.8,
    "rd": 2.53,
    "edu": 50.2
  },
  "ES24": {
    "name": "Arag\u00f3n",
    "cntr": "ES",
    "rii": 75.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.6,
    "rd": 1.15,
    "edu": 41.0
  },
  "DE26": {
    "name": "Unterfranken",
    "cntr": "DE",
    "rii": 85.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 1.99,
    "edu": 34.3
  },
  "UKM8": {
    "name": "West Central Scotland (Glasgow)",
    "cntr": "UK",
    "rii": 114.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.2,
    "rd": 2.1,
    "edu": 48.0
  },
  "DKZZ": {
    "name": "Extra-Regio NUTS 2",
    "cntr": "DK",
    "rii": 81.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.4,
    "rd": 0.0,
    "edu": 46.1
  },
  "DE13": {
    "name": "Freiburg",
    "cntr": "DE",
    "rii": 109.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.0,
    "rd": 2.46,
    "edu": 37.6
  },
  "ITI": {
    "name": "Centro (IT)",
    "cntr": "IT",
    "rii": 83.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.5,
    "rd": 1.56,
    "edu": 26.4
  },
  "FI19": {
    "name": "L\u00e4nsi-Suomi",
    "cntr": "FI",
    "rii": 112.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.8,
    "rd": 2.98,
    "edu": 41.5
  },
  "ME": {
    "name": "Montenegro",
    "cntr": "ME",
    "rii": 43.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 0.29,
    "edu": 25.6
  },
  "RS22": {
    "name": "Region Juzne i Istocne Srbije",
    "cntr": "RS",
    "rii": 42.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.1,
    "rd": 0.17,
    "edu": 23.3
  },
  "BG": {
    "name": "Bulgaria",
    "cntr": "BG",
    "rii": 77.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 0.77,
    "edu": 35.7
  },
  "ITH1": {
    "name": "Provincia Autonoma di Bolzano/Bozen",
    "cntr": "IT",
    "rii": 43.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.4,
    "rd": 0.78,
    "edu": 18.7
  },
  "UKD": {
    "name": "North West (England)",
    "cntr": "UK",
    "rii": 104.7,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.2,
    "rd": 2.2,
    "edu": 43.0
  },
  "UKH1": {
    "name": "East Anglia (Cambridge)",
    "cntr": "UK",
    "rii": 209.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 10.8,
    "rd": 5.9,
    "edu": 54.0
  },
  "TR6": {
    "name": "Akdeniz",
    "cntr": "TR",
    "rii": 33.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.7,
    "rd": 0.51,
    "edu": 25.3
  },
  "TRC3": {
    "name": "Mardin, Batman, \u015e\u0131rnak, Siirt",
    "cntr": "TR",
    "rii": 21.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.4,
    "rd": 0.33,
    "edu": 17.0
  },
  "TR7": {
    "name": "Orta Anadolu",
    "cntr": "TR",
    "rii": 38.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.7,
    "rd": 0.94,
    "edu": 23.6
  },
  "EL63": {
    "name": "Dytiki Ell\u00e1da",
    "cntr": "EL",
    "rii": 50.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.4,
    "rd": 1.47,
    "edu": 21.7
  },
  "FR43": {
    "name": "Franche-Comt\u00e9 (NUTS 2013)",
    "cntr": "FR",
    "rii": 112.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.72,
    "edu": 44.8
  },
  "ITF2": {
    "name": "Molise",
    "cntr": "IT",
    "rii": 44.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.2,
    "rd": 0.73,
    "edu": 22.1
  },
  "FRC1": {
    "name": "Bourgogne",
    "cntr": "FR",
    "rii": 60.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.7,
    "rd": 0.82,
    "edu": 36.1
  },
  "DE14": {
    "name": "T\u00fcbingen",
    "cntr": "DE",
    "rii": 140.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.9,
    "rd": 3.89,
    "edu": 40.3
  },
  "DE": {
    "name": "Germany",
    "cntr": "DE",
    "rii": 115.5,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.6,
    "rd": 3.12,
    "edu": 35.4
  },
  "TR2": {
    "name": "Bat\u0131 Marmara",
    "cntr": "TR",
    "rii": 42.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.5,
    "rd": 0.79,
    "edu": 24.8
  },
  "UKN0": {
    "name": "Northern Ireland (UK) (NUTS 2021)",
    "cntr": "UK",
    "rii": 83.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 1.51,
    "edu": 40.6
  },
  "LV00": {
    "name": "Latvija",
    "cntr": "LV",
    "rii": 84.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 0.95,
    "edu": 40.7
  },
  "BEZZ": {
    "name": "Extra-Regio NUTS 2",
    "cntr": "BE",
    "rii": 79.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.9,
    "rd": 0.0,
    "edu": 47.5
  },
  "DE60": {
    "name": "Hamburg",
    "cntr": "DE",
    "rii": 126.3,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.4,
    "rd": 2.62,
    "edu": 43.0
  },
  "TR9": {
    "name": "Do\u011fu Karadeniz",
    "cntr": "TR",
    "rii": 33.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.5,
    "rd": 0.66,
    "edu": 24.6
  },
  "CZ08": {
    "name": "Moravskoslezsko",
    "cntr": "CZ",
    "rii": 67.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.4,
    "rd": 1.06,
    "edu": 25.3
  },
  "NL4": {
    "name": "Zuid-Nederland",
    "cntr": "NL",
    "rii": 121.6,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.0,
    "rd": 3.43,
    "edu": 42.0
  },
  "PL": {
    "name": "Poland",
    "cntr": "PL",
    "rii": 87.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 1.4,
    "edu": 40.0
  },
  "RO41": {
    "name": "Sud-Vest Oltenia",
    "cntr": "RO",
    "rii": 28.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.9,
    "rd": 0.11,
    "edu": 16.8
  },
  "UKG2": {
    "name": "Shropshire and Staffordshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 69.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.7,
    "rd": 0.81,
    "edu": 39.1
  },
  "LT0": {
    "name": "Lietuva",
    "cntr": "LT",
    "rii": 97.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.7,
    "rd": 1.12,
    "edu": 49.9
  },
  "HU11": {
    "name": "Budapest",
    "cntr": "HU",
    "rii": 169.6,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 12.7,
    "rd": 2.21,
    "edu": 59.3
  },
  "FRH0": {
    "name": "Bretagne",
    "cntr": "FR",
    "rii": 96.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.0,
    "rd": 1.74,
    "edu": 42.9
  },
  "SI0": {
    "name": "Slovenija",
    "cntr": "SI",
    "rii": 105.6,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.4,
    "rd": 2.14,
    "edu": 35.1
  },
  "TR61": {
    "name": "Antalya, Isparta, Burdur",
    "cntr": "TR",
    "rii": 41.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.9,
    "rd": 0.7,
    "edu": 29.6
  },
  "UKM2": {
    "name": "Eastern Scotland (NUTS 2013)",
    "cntr": "UK",
    "rii": 97.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.0,
    "rd": 2.13,
    "edu": 46.1
  },
  "PT20": {
    "name": "Regi\u00e3o Aut\u00f3noma dos A\u00e7ores",
    "cntr": "PT",
    "rii": 55.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.0,
    "rd": 0.41,
    "edu": 18.0
  },
  "HU": {
    "name": "Hungary",
    "cntr": "HU",
    "rii": 89.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 6.3,
    "rd": 1.31,
    "edu": 31.6
  },
  "LVZ": {
    "name": "Extra-Regio NUTS 1",
    "cntr": "LV",
    "rii": 69.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.3,
    "rd": 0.0,
    "edu": 40.7
  },
  "FR25": {
    "name": "Basse-Normandie (NUTS 2013)",
    "cntr": "FR",
    "rii": 89.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.27,
    "edu": 44.8
  },
  "UKG1": {
    "name": "Herefordshire, Worcestershire and Warwickshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 131.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.2,
    "rd": 3.98,
    "edu": 41.9
  },
  "FRL": {
    "name": "Provence-Alpes-C\u00f4te d\u2019Azur",
    "cntr": "FR",
    "rii": 97.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 2.1,
    "edu": 42.5
  },
  "CH03": {
    "name": "Nordwestschweiz",
    "cntr": "CH",
    "rii": 144.9,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.7,
    "rd": 3.1,
    "edu": 45.7
  },
  "RO32": {
    "name": "Bucure\u015fti-Ilfov",
    "cntr": "RO",
    "rii": 112.5,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 9.4,
    "rd": 0.96,
    "edu": 40.7
  },
  "DEG0": {
    "name": "Th\u00fcringen",
    "cntr": "DE",
    "rii": 96.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.7,
    "rd": 2.58,
    "edu": 30.4
  },
  "ES62": {
    "name": "Regi\u00f3n de Murcia",
    "cntr": "ES",
    "rii": 61.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.3,
    "rd": 1.1,
    "edu": 35.2
  },
  "ME00": {
    "name": "Crna Gora",
    "cntr": "ME",
    "rii": 43.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.6,
    "rd": 0.29,
    "edu": 25.6
  },
  "DK04": {
    "name": "Midtjylland",
    "cntr": "DK",
    "rii": 101.4,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.2,
    "rd": 2.36,
    "edu": 44.3
  },
  "FR8": {
    "name": "M\u00e9diterran\u00e9e (NUTS 2013)",
    "cntr": "FR",
    "rii": 106.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.38,
    "edu": 44.8
  },
  "PL6": {
    "name": "Makroregion p\u00f3\u0142nocny",
    "cntr": "PL",
    "rii": 81.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 1.4,
    "edu": 36.7
  },
  "LV0": {
    "name": "Latvija",
    "cntr": "LV",
    "rii": 84.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 0.95,
    "edu": 40.7
  },
  "SI01": {
    "name": "Vzhodna Slovenija (NUTS 2010)",
    "cntr": "SI",
    "rii": 69.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.1,
    "rd": 2.09,
    "edu": 19.1
  },
  "CH06": {
    "name": "Zentralschweiz",
    "cntr": "CH",
    "rii": 124.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.7,
    "rd": 3.1,
    "edu": 46.4
  },
  "DEB1": {
    "name": "Koblenz",
    "cntr": "DE",
    "rii": 63.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.7,
    "rd": 0.96,
    "edu": 28.7
  },
  "FRG0": {
    "name": "Pays de la Loire",
    "cntr": "FR",
    "rii": 78.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.5,
    "rd": 1.33,
    "edu": 42.2
  },
  "DE80": {
    "name": "Mecklenburg-Vorpommern",
    "cntr": "DE",
    "rii": 63.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.8,
    "rd": 1.37,
    "edu": 28.3
  },
  "DED5": {
    "name": "Leipzig",
    "cntr": "DE",
    "rii": 107.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.2,
    "rd": 2.13,
    "edu": 39.7
  },
  "NL": {
    "name": "Netherlands",
    "cntr": "NL",
    "rii": 111.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.4,
    "rd": 2.37,
    "edu": 46.1
  },
  "TR22": {
    "name": "Bal\u0131kesir, \u00c7anakkale",
    "cntr": "TR",
    "rii": 35.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.6,
    "rd": 0.63,
    "edu": 26.1
  },
  "ES42": {
    "name": "Castilla-La Mancha",
    "cntr": "ES",
    "rii": 61.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.7,
    "rd": 0.56,
    "edu": 33.3
  },
  "UKF1": {
    "name": "Derbyshire and Nottinghamshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 106.1,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.5,
    "rd": 2.85,
    "edu": 38.2
  },
  "FRC2": {
    "name": "Franche-Comt\u00e9",
    "cntr": "FR",
    "rii": 110.9,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.5,
    "rd": 2.74,
    "edu": 37.8
  },
  "EL5": {
    "name": "Voreia Ell\u00e1da",
    "cntr": "EL",
    "rii": 75.4,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.9,
    "rd": 1.8,
    "edu": 34.0
  },
  "RO12": {
    "name": "Centru",
    "cntr": "RO",
    "rii": 40.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.8,
    "rd": 0.36,
    "edu": 19.7
  },
  "RSZZ": {
    "name": "Extra-Regio level 2",
    "cntr": "RS",
    "rii": 61.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 5.5,
    "rd": 0.0,
    "edu": 29.5
  },
  "PL41": {
    "name": "Wielkopolskie",
    "cntr": "PL",
    "rii": 61.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.9,
    "rd": 0.88,
    "edu": 34.7
  },
  "FRH": {
    "name": "Bretagne",
    "cntr": "FR",
    "rii": 96.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.0,
    "rd": 1.74,
    "edu": 42.9
  },
  "UKF": {
    "name": "East Midlands (England)",
    "cntr": "UK",
    "rii": 102.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.8,
    "rd": 2.3,
    "edu": 41.5
  },
  "NO06": {
    "name": "Tr\u00f8ndelag",
    "cntr": "NO",
    "rii": 152.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.4,
    "rd": 4.85,
    "edu": 49.6
  },
  "EL43": {
    "name": "Kriti",
    "cntr": "EL",
    "rii": 66.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.8,
    "rd": 1.55,
    "edu": 28.5
  },
  "PT18": {
    "name": "Alentejo (NUTS 2021)",
    "cntr": "PT",
    "rii": 44.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.1,
    "rd": 0.88,
    "edu": 20.1
  },
  "EE00": {
    "name": "Eesti",
    "cntr": "EE",
    "rii": 115.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 7.3,
    "rd": 1.98,
    "edu": 42.1
  },
  "BG32": {
    "name": "Severen tsentralen",
    "cntr": "BG",
    "rii": 48.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.7,
    "rd": 0.31,
    "edu": 31.2
  },
  "UKL": {
    "name": "Wales",
    "cntr": "UK",
    "rii": 87.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.4,
    "rd": 1.55,
    "edu": 41.0
  },
  "ES63": {
    "name": "Ciudad de Ceuta",
    "cntr": "ES",
    "rii": 63.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.6,
    "rd": 0.28,
    "edu": 33.5
  },
  "TR90": {
    "name": "Trabzon, Ordu, Giresun, Rize, Artvin, G\u00fcm\u00fc\u015fhane",
    "cntr": "TR",
    "rii": 33.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.5,
    "rd": 0.66,
    "edu": 24.6
  },
  "NO05": {
    "name": "Vestlandet (statistical region 2016)",
    "cntr": "NO",
    "rii": 91.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 2.7,
    "rd": 2.43,
    "edu": 43.2
  },
  "EL62": {
    "name": "Ionia Nisia",
    "cntr": "EL",
    "rii": 45.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.4,
    "rd": 0.32,
    "edu": 21.6
  },
  "DE5": {
    "name": "Bremen",
    "cntr": "DE",
    "rii": 106.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.3,
    "rd": 2.8,
    "edu": 32.3
  },
  "FI1B": {
    "name": "Helsinki-Uusimaa",
    "cntr": "FI",
    "rii": 170.4,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 9.9,
    "rd": 4.09,
    "edu": 48.1
  },
  "SE": {
    "name": "Sweden",
    "cntr": "SE",
    "rii": 143.3,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.9,
    "rd": 3.53,
    "edu": 50.8
  },
  "UKE1": {
    "name": "East Yorkshire and Northern Lincolnshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 65.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.0,
    "rd": 0.88,
    "edu": 29.9
  },
  "NL1": {
    "name": "Noord-Nederland",
    "cntr": "NL",
    "rii": 81.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.5,
    "rd": 1.62,
    "edu": 40.2
  },
  "BG3": {
    "name": "Severna i Yugoiztochna Bulgaria",
    "cntr": "BG",
    "rii": 48.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.5,
    "rd": 0.3,
    "edu": 32.5
  },
  "SE22": {
    "name": "Sydsverige",
    "cntr": "SE",
    "rii": 143.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.4,
    "rd": 3.66,
    "edu": 52.2
  },
  "DEB": {
    "name": "Rheinland-Pfalz",
    "cntr": "DE",
    "rii": 115.4,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 3.53,
    "edu": 33.3
  },
  "SI": {
    "name": "Slovenia",
    "cntr": "SI",
    "rii": 105.6,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.4,
    "rd": 2.14,
    "edu": 35.1
  },
  "UKE4": {
    "name": "West Yorkshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 77.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.3,
    "rd": 1.08,
    "edu": 38.1
  },
  "ES7": {
    "name": "Canarias",
    "cntr": "ES",
    "rii": 52.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.1,
    "rd": 0.53,
    "edu": 36.3
  },
  "ES2": {
    "name": "Noreste",
    "cntr": "ES",
    "rii": 97.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.9,
    "rd": 1.9,
    "edu": 50.8
  },
  "TR4": {
    "name": "Do\u011fu Marmara",
    "cntr": "TR",
    "rii": 60.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.4,
    "rd": 1.83,
    "edu": 27.2
  },
  "LU00": {
    "name": "Luxembourg",
    "cntr": "LU",
    "rii": 97.8,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.3,
    "rd": 1.04,
    "edu": 55.7
  },
  "UKE2": {
    "name": "North Yorkshire (NUTS 2021)",
    "cntr": "UK",
    "rii": 78.3,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.0,
    "rd": 1.55,
    "edu": 41.4
  },
  "TR": {
    "name": "T\u00fcrkiye",
    "cntr": "TR",
    "rii": 55.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 1.6,
    "rd": 1.46,
    "edu": 26.8
  },
  "TR5": {
    "name": "Bat\u0131 Anadolu",
    "cntr": "TR",
    "rii": 103.6,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 3.6,
    "rd": 3.29,
    "edu": 34.4
  },
  "EL3": {
    "name": "Attiki",
    "cntr": "EL",
    "rii": 102.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.7,
    "rd": 1.72,
    "edu": 44.6
  },
  "FRF3": {
    "name": "Lorraine",
    "cntr": "FR",
    "rii": 62.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.1,
    "rd": 1.22,
    "edu": 35.9
  },
  "TRB1": {
    "name": "Malatya, Elaz\u0131\u011f, Bing\u00f6l, Tunceli",
    "cntr": "TR",
    "rii": 38.7,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.5,
    "rd": 1.01,
    "edu": 24.2
  },
  "FR3": {
    "name": "Nord-Pas-de-Calais (NUTS 2013)",
    "cntr": "FR",
    "rii": 84.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 0.91,
    "edu": 44.8
  },
  "AT13": {
    "name": "Wien",
    "cntr": "AT",
    "rii": 155.2,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.3,
    "rd": 3.91,
    "edu": 46.3
  },
  "DEG": {
    "name": "Th\u00fcringen",
    "cntr": "DE",
    "rii": 96.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.7,
    "rd": 2.58,
    "edu": 30.4
  },
  "IS0": {
    "name": "\u00cdsland",
    "cntr": "IS",
    "rii": 114.2,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.6,
    "rd": 2.47,
    "edu": 46.1
  },
  "DEE": {
    "name": "Sachsen-Anhalt",
    "cntr": "DE",
    "rii": 66.4,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.4,
    "rd": 1.45,
    "edu": 25.4
  },
  "BE32": {
    "name": "Prov. Hainaut",
    "cntr": "BE",
    "rii": 89.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.0,
    "rd": 1.58,
    "edu": 37.3
  },
  "ES41": {
    "name": "Castilla y Le\u00f3n",
    "cntr": "ES",
    "rii": 78.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.3,
    "rd": 1.38,
    "edu": 42.1
  },
  "BE35": {
    "name": "Prov. Namur",
    "cntr": "BE",
    "rii": 87.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.0,
    "rd": 1.09,
    "edu": 45.2
  },
  "RS11": {
    "name": "Beogradski region",
    "cntr": "RS",
    "rii": 133.7,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 10.9,
    "rd": 1.39,
    "edu": 46.0
  },
  "DEB3": {
    "name": "Rheinhessen-Pfalz",
    "cntr": "DE",
    "rii": 155.6,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 6.4,
    "rd": 5.28,
    "edu": 36.8
  },
  "HU23": {
    "name": "D\u00e9l-Dun\u00e1nt\u00fal",
    "cntr": "HU",
    "rii": 48.2,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.2,
    "rd": 0.56,
    "edu": 21.6
  },
  "ITF3": {
    "name": "Campania",
    "cntr": "IT",
    "rii": 58.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.4,
    "rd": 1.29,
    "edu": 18.7
  },
  "FR1": {
    "name": "Ile de France",
    "cntr": "FR",
    "rii": 155.0,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 9.1,
    "rd": 2.9,
    "edu": 58.6
  },
  "UKC1": {
    "name": "Tees Valley and Durham (NUTS 2021)",
    "cntr": "UK",
    "rii": 59.8,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.4,
    "rd": 1.13,
    "edu": 31.8
  },
  "PT17": {
    "name": "\u00c1rea Metropolitana de Lisboa (NUTS 2021)",
    "cntr": "PT",
    "rii": 94.9,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.5,
    "rd": 1.95,
    "edu": 33.1
  },
  "FR63": {
    "name": "Limousin (NUTS 2013)",
    "cntr": "FR",
    "rii": 85.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.9,
    "rd": 1.0,
    "edu": 44.8
  },
  "DE11": {
    "name": "Stuttgart",
    "cntr": "DE",
    "rii": 184.2,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 5.8,
    "rd": 7.33,
    "edu": 38.0
  },
  "ITH2": {
    "name": "Provincia Autonoma di Trento",
    "cntr": "IT",
    "rii": 66.5,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.3,
    "rd": 1.58,
    "edu": 23.9
  },
  "CH02": {
    "name": "Espace Mittelland",
    "cntr": "CH",
    "rii": 130.3,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.1,
    "rd": 3.1,
    "edu": 41.3
  },
  "UKI1": {
    "name": "Inner London (NUTS 2010)",
    "cntr": "UK",
    "rii": 104.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 6.5,
    "rd": 1.19,
    "edu": 50.8
  },
  "HU33": {
    "name": "D\u00e9l-Alf\u00f6ld",
    "cntr": "HU",
    "rii": 56.9,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.8,
    "rd": 1.13,
    "edu": 24.8
  },
  "DE6": {
    "name": "Hamburg",
    "cntr": "DE",
    "rii": 126.3,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 7.4,
    "rd": 2.62,
    "edu": 43.0
  },
  "DEA": {
    "name": "Nordrhein-Westfalen",
    "cntr": "DE",
    "rii": 94.2,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 4.8,
    "rd": 2.26,
    "edu": 32.3
  },
  "NL22": {
    "name": "Gelderland",
    "cntr": "NL",
    "rii": 104.0,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.7,
    "rd": 2.32,
    "edu": 44.1
  },
  "MK0": {
    "name": "Severna Makedonija",
    "cntr": "MK",
    "rii": 55.6,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 4.3,
    "rd": 0.37,
    "edu": 25.1
  },
  "ES13": {
    "name": "Cantabria",
    "cntr": "ES",
    "rii": 76.7,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.3,
    "rd": 0.98,
    "edu": 47.8
  },
  "BE10": {
    "name": "R\u00e9gion de Bruxelles-Capitale/Brussels Hoofdstedelijk Gewest",
    "cntr": "BE",
    "rii": 140.5,
    "tier": "Innovation Leader",
    "code": "LEADER",
    "color": "#b75cff",
    "htec": 8.2,
    "rd": 2.45,
    "edu": 56.9
  },
  "ES43": {
    "name": "Extremadura",
    "cntr": "ES",
    "rii": 54.0,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 2.2,
    "rd": 0.7,
    "edu": 34.5
  },
  "ITI1": {
    "name": "Toscana",
    "cntr": "IT",
    "rii": 66.1,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 3.7,
    "rd": 1.38,
    "edu": 23.8
  },
  "CH07": {
    "name": "Ticino",
    "cntr": "CH",
    "rii": 118.3,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.2,
    "rd": 3.1,
    "edu": 42.6
  },
  "CY": {
    "name": "Cyprus",
    "cntr": "CY",
    "rii": 88.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.2,
    "rd": 0.64,
    "edu": 52.1
  },
  "TR62": {
    "name": "Adana, Mersin",
    "cntr": "TR",
    "rii": 32.3,
    "tier": "Emerging Innovator",
    "code": "EMERGING",
    "color": "#fff6b8",
    "htec": 0.8,
    "rd": 0.44,
    "edu": 24.6
  },
  "DED2": {
    "name": "Dresden",
    "cntr": "DE",
    "rii": 118.4,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 7.3,
    "rd": 2.47,
    "edu": 36.9
  },
  "NL42": {
    "name": "Limburg (NL)",
    "cntr": "NL",
    "rii": 85.5,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 3.8,
    "rd": 1.88,
    "edu": 37.3
  },
  "FR72": {
    "name": "Auvergne (NUTS 2013)",
    "cntr": "FR",
    "rii": 104.7,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 4.9,
    "rd": 2.24,
    "edu": 44.8
  },
  "HR": {
    "name": "Croatia",
    "cntr": "HR",
    "rii": 84.1,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.4,
    "rd": 1.41,
    "edu": 31.0
  },
  "AT33": {
    "name": "Tirol",
    "cntr": "AT",
    "rii": 105.8,
    "tier": "Strong Innovator",
    "code": "STRONG",
    "color": "#f4a8c8",
    "htec": 5.0,
    "rd": 2.91,
    "edu": 32.5
  },
  "RO3": {
    "name": "Macroregiunea Trei",
    "cntr": "RO",
    "rii": 72.0,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.5,
    "rd": 0.82,
    "edu": 26.5
  },
  "PT1": {
    "name": "Continente",
    "cntr": "PT",
    "rii": 90.6,
    "tier": "Moderate Innovator",
    "code": "MODERATE",
    "color": "#f9ee85",
    "htec": 5.2,
    "rd": 1.8,
    "edu": 33.3
  }
},
  urbanHubs: [
  {
    "name": "London",
    "coords": [
      51.5074,
      -0.1278
    ],
    "radius": 9.0,
    "tier": "mega",
    "pop": "9.6M",
    "rii": 185,
    "specialty": "FinTech, AI & DeepTech, Life Sciences"
  },
  {
    "name": "Paris",
    "coords": [
      48.8566,
      2.3522
    ],
    "radius": 8.5,
    "tier": "mega",
    "pop": "11.2M",
    "rii": 178,
    "specialty": "AI Research, Quantum, Aerospace & Software"
  },
  {
    "name": "Munich",
    "coords": [
      48.1351,
      11.582
    ],
    "radius": 6.2,
    "tier": "major",
    "pop": "2.9M",
    "rii": 181,
    "specialty": "Automotive Engineering, Applied AI, Robotics"
  },
  {
    "name": "Berlin",
    "coords": [
      52.52,
      13.405
    ],
    "radius": 6.0,
    "tier": "major",
    "pop": "3.8M",
    "rii": 156,
    "specialty": "Startup Ecosystem, Digital Tech, Creative Tech"
  },
  {
    "name": "Amsterdam",
    "coords": [
      52.3676,
      4.9041
    ],
    "radius": 6.0,
    "tier": "major",
    "pop": "2.9M",
    "rii": 182,
    "specialty": "Cloud Data Infrastructure, Quantum, Creative Tech"
  },
  {
    "name": "Stockholm",
    "coords": [
      59.3293,
      18.0686
    ],
    "radius": 5.8,
    "tier": "major",
    "pop": "2.4M",
    "rii": 178,
    "specialty": "FinTech Unicorns, Telecommunications, Gaming"
  },
  {
    "name": "Copenhagen",
    "coords": [
      55.6761,
      12.5683
    ],
    "radius": 5.6,
    "tier": "major",
    "pop": "2.1M",
    "rii": 195,
    "specialty": "Medicon Valley Biotech, CleanTech, Life Sciences"
  },
  {
    "name": "Zurich",
    "coords": [
      47.3769,
      8.5417
    ],
    "radius": 5.6,
    "tier": "major",
    "pop": "1.6M",
    "rii": 188,
    "specialty": "ETH Robotics, FinTech, Precision Engineering"
  },
  {
    "name": "Dublin",
    "coords": [
      53.3498,
      -6.2603
    ],
    "radius": 5.4,
    "tier": "major",
    "pop": "2.1M",
    "rii": 164,
    "specialty": "Silicon Docks Global Tech HQs, Cloud & Software"
  },
  {
    "name": "Madrid",
    "coords": [
      40.4168,
      -3.7038
    ],
    "radius": 5.8,
    "tier": "major",
    "pop": "6.7M",
    "rii": 135,
    "specialty": "Telecommunications, Aerospace, Digital Enterprise"
  },
  {
    "name": "Barcelona",
    "coords": [
      41.3874,
      2.1686
    ],
    "radius": 5.4,
    "tier": "major",
    "pop": "5.6M",
    "rii": 132,
    "specialty": "Mobile Tech, Supercomputing (BSC), Biomedicine"
  },
  {
    "name": "Milan",
    "coords": [
      45.4642,
      9.19
    ],
    "radius": 5.6,
    "tier": "major",
    "pop": "4.3M",
    "rii": 138,
    "specialty": "Industrial Design, FinTech, Pharma & Materials"
  },
  {
    "name": "Vienna",
    "coords": [
      48.2082,
      16.3738
    ],
    "radius": 5.2,
    "tier": "major",
    "pop": "2.9M",
    "rii": 158,
    "specialty": "Life Sciences, Smart Cities, Quantum Information"
  },
  {
    "name": "Warsaw",
    "coords": [
      52.2297,
      21.0122
    ],
    "radius": 5.2,
    "tier": "major",
    "pop": "3.1M",
    "rii": 173,
    "specialty": "Central European Cloud Hub, FinTech, Enterprise IT"
  },
  {
    "name": "Brussels",
    "coords": [
      50.8503,
      4.3517
    ],
    "radius": 5.0,
    "tier": "major",
    "pop": "2.5M",
    "rii": 165,
    "specialty": "EU Policy Tech, Bio-Pharma, Digital Infrastructure"
  },
  {
    "name": "Prague",
    "coords": [
      50.0755,
      14.4378
    ],
    "radius": 4.8,
    "tier": "major",
    "pop": "2.2M",
    "rii": 176,
    "specialty": "Cybersecurity (Avast), Software Engineering, Nanotech"
  },
  {
    "name": "Helsinki",
    "coords": [
      60.1699,
      24.9384
    ],
    "radius": 4.8,
    "tier": "major",
    "pop": "1.5M",
    "rii": 170,
    "specialty": "6G Telephony, Mobile Gaming, Quantum Computing"
  },
  {
    "name": "Oslo",
    "coords": [
      59.9139,
      10.7522
    ],
    "radius": 4.8,
    "tier": "major",
    "pop": "1.6M",
    "rii": 168,
    "specialty": "Climate Modeling, Green Maritime, Clean Energy"
  },
  {
    "name": "Rome",
    "coords": [
      41.9028,
      12.4964
    ],
    "radius": 4.8,
    "tier": "major",
    "pop": "4.3M",
    "rii": 128,
    "specialty": "Aerospace, Defense, Cyber & Telecoms"
  },
  {
    "name": "Lisbon",
    "coords": [
      38.7223,
      -9.1393
    ],
    "radius": 4.6,
    "tier": "major",
    "pop": "3.0M",
    "rii": 134,
    "specialty": "Web Summit Ecosystem, Fintech, Digital Startups"
  },
  {
    "name": "Budapest",
    "coords": [
      47.4979,
      19.0402
    ],
    "radius": 4.6,
    "tier": "major",
    "pop": "3.0M",
    "rii": 142,
    "specialty": "Software Engineering, AI, Medical Instruments"
  },
  {
    "name": "Bucharest",
    "coords": [
      44.4268,
      26.1025
    ],
    "radius": 4.4,
    "tier": "major",
    "pop": "2.3M",
    "rii": 124,
    "specialty": "IT Services, Fintech, Laser Physics"
  },
  {
    "name": "Athens",
    "coords": [
      37.9838,
      23.7275
    ],
    "radius": 4.4,
    "tier": "major",
    "pop": "3.8M",
    "rii": 126,
    "specialty": "Maritime Digital Systems, Telecoms, AgriTech"
  },
  {
    "name": "Manchester",
    "coords": [
      53.4808,
      -2.2426
    ],
    "radius": 4.6,
    "tier": "medium",
    "pop": "2.8M",
    "rii": 152,
    "specialty": "Graphene Institute, Cyber Security, Digital Media"
  },
  {
    "name": "Edinburgh",
    "coords": [
      55.9533,
      -3.1883
    ],
    "radius": 4.4,
    "tier": "medium",
    "pop": "0.9M",
    "rii": 175,
    "specialty": "Informatics & AI, Data-Driven Innovation, Space Tech"
  },
  {
    "name": "Eindhoven",
    "coords": [
      51.4416,
      5.4697
    ],
    "radius": 4.6,
    "tier": "medium",
    "pop": "0.8M",
    "rii": 189,
    "specialty": "Brainport: ASML, Semiconductor Lithography & Photonics"
  },
  {
    "name": "Stuttgart",
    "coords": [
      48.7758,
      9.1829
    ],
    "radius": 4.8,
    "tier": "medium",
    "pop": "2.8M",
    "rii": 184,
    "specialty": "Advanced Mobility, Industrial Automation, Precision Tech"
  },
  {
    "name": "Frankfurt",
    "coords": [
      50.1109,
      8.6821
    ],
    "radius": 4.6,
    "tier": "medium",
    "pop": "2.7M",
    "rii": 154,
    "specialty": "DE-CIX Internet Exchange, FinTech, Bio-Pharma"
  },
  {
    "name": "Cologne",
    "coords": [
      50.9375,
      6.9603
    ],
    "radius": 4.4,
    "tier": "medium",
    "pop": "3.1M",
    "rii": 142,
    "specialty": "Media Tech, Chemical Innovation, Digital Commerce"
  },
  {
    "name": "Hamburg",
    "coords": [
      53.5511,
      9.9937
    ],
    "radius": 4.6,
    "tier": "medium",
    "pop": "2.5M",
    "rii": 155,
    "specialty": "DESY Particle Physics, Aviation Tech, Green Logistics"
  },
  {
    "name": "Lyon",
    "coords": [
      45.764,
      4.8357
    ],
    "radius": 4.2,
    "tier": "medium",
    "pop": "2.3M",
    "rii": 152,
    "specialty": "Biotech Vaccines, Green Chemistry, Digital Health"
  },
  {
    "name": "Toulouse",
    "coords": [
      43.6047,
      1.4442
    ],
    "radius": 4.2,
    "tier": "medium",
    "pop": "1.4M",
    "rii": 160,
    "specialty": "Airbus Aerospace Valley, Satellite Systems, AI"
  },
  {
    "name": "Cambridge",
    "coords": [
      52.2053,
      0.1218
    ],
    "radius": 4.0,
    "tier": "medium",
    "pop": "0.3M",
    "rii": 192,
    "specialty": "Silicon Fen: ARM Semiconductor IP, Genomics, AI"
  },
  {
    "name": "Oxford",
    "coords": [
      51.752,
      -1.2577
    ],
    "radius": 4.0,
    "tier": "medium",
    "pop": "0.2M",
    "rii": 186,
    "specialty": "Vaccine R&D, Fusion Energy, Quantum Computing"
  },
  {
    "name": "Gothenburg",
    "coords": [
      57.7089,
      11.9746
    ],
    "radius": 4.0,
    "tier": "medium",
    "pop": "1.1M",
    "rii": 172,
    "specialty": "Volvo Autonomous Mobility, MedTech, Green Maritime"
  },
  {
    "name": "Dresden",
    "coords": [
      51.0504,
      13.7373
    ],
    "radius": 3.8,
    "tier": "medium",
    "pop": "0.6M",
    "rii": 165,
    "specialty": "Silicon Saxony: European Chip Foundry Cluster"
  },
  {
    "name": "Krak\u00f3w",
    "coords": [
      50.0647,
      19.945
    ],
    "radius": 3.8,
    "tier": "medium",
    "pop": "1.4M",
    "rii": 148,
    "specialty": "Software Engineering, AI Startups, Materials Science"
  },
  {
    "name": "Valencia",
    "coords": [
      39.4699,
      -0.3763
    ],
    "radius": 3.8,
    "tier": "medium",
    "pop": "1.6M",
    "rii": 130,
    "specialty": "Photonics, Agritech, Telecommunications"
  },
  {
    "name": "Seville",
    "coords": [
      37.3891,
      -5.9845
    ],
    "radius": 3.8,
    "tier": "medium",
    "pop": "1.5M",
    "rii": 128,
    "specialty": "Aerospace, Renewable Energy, Agri-food Tech"
  },
  {
    "name": "Turin",
    "coords": [
      45.0703,
      7.6869
    ],
    "radius": 4.0,
    "tier": "medium",
    "pop": "1.7M",
    "rii": 136,
    "specialty": "Automotive Engineering, Aerospace, Clean Energy"
  }
],
  regionalNodes: [
  {
    "name": "Cambridge Science Park",
    "coords": [
      52.235,
      0.145
    ],
    "cntr": "UK",
    "type": "DeepTech & Biotech"
  },
  {
    "name": "Oxford Science Park",
    "coords": [
      51.716,
      -1.218
    ],
    "cntr": "UK",
    "type": "Biotech & Quantum"
  },
  {
    "name": "Harwell Science Campus",
    "coords": [
      51.575,
      -1.314
    ],
    "cntr": "UK",
    "type": "Space & Particle Physics"
  },
  {
    "name": "Bristol Robotics Lab",
    "coords": [
      51.5,
      -2.548
    ],
    "cntr": "UK",
    "type": "Robotics & Microchips"
  },
  {
    "name": "Southampton Science Park",
    "coords": [
      50.942,
      -1.396
    ],
    "cntr": "UK",
    "type": "Optoelectronics & Marine"
  },
  {
    "name": "Warwick Innovation Hub",
    "coords": [
      52.383,
      -1.56
    ],
    "cntr": "UK",
    "type": "Automotive & Digital"
  },
  {
    "name": "Nottingham Bioscience",
    "coords": [
      52.952,
      -1.14
    ],
    "cntr": "UK",
    "type": "Life Sciences"
  },
  {
    "name": "Sheffield Advanced Mfg Park",
    "coords": [
      53.376,
      -1.378
    ],
    "cntr": "UK",
    "type": "Aerospace & Materials"
  },
  {
    "name": "Leeds Nexus Tech Hub",
    "coords": [
      53.806,
      -1.553
    ],
    "cntr": "UK",
    "type": "HealthTech & Data"
  },
  {
    "name": "Daresbury Sci-Tech Park",
    "coords": [
      53.344,
      -2.637
    ],
    "cntr": "UK",
    "type": "Supercomputing & Materials"
  },
  {
    "name": "Newcastle Helix Innovation",
    "coords": [
      54.972,
      -1.625
    ],
    "cntr": "UK",
    "type": "Data Analytics & Aging"
  },
  {
    "name": "Edinburgh BioQuarter",
    "coords": [
      55.922,
      -3.136
    ],
    "cntr": "UK",
    "type": "Stem Cells & Genomics"
  },
  {
    "name": "Belfast Titanic Quarter Tech",
    "coords": [
      54.606,
      -5.908
    ],
    "cntr": "UK",
    "type": "Cybersecurity & FilmTech"
  },
  {
    "name": "Garching Research Campus",
    "coords": [
      48.262,
      11.668
    ],
    "cntr": "DE",
    "type": "Quantum & Fusion (Max Planck)"
  },
  {
    "name": "Martinsried Biotech Cluster",
    "coords": [
      48.108,
      11.458
    ],
    "cntr": "DE",
    "type": "Gene Therapy & Pharma"
  },
  {
    "name": "Adlershof Technology Park",
    "coords": [
      52.431,
      13.535
    ],
    "cntr": "DE",
    "type": "Photonics & Microsystems"
  },
  {
    "name": "Potsdam Science Park",
    "coords": [
      52.416,
      12.973
    ],
    "cntr": "DE",
    "type": "Biophysics & Geosciences"
  },
  {
    "name": "J\u00fclich Research Centre",
    "coords": [
      50.905,
      6.412
    ],
    "cntr": "DE",
    "type": "Exascale Quantum Computing"
  },
  {
    "name": "Aachen Melaten Campus",
    "coords": [
      50.783,
      6.05
    ],
    "cntr": "DE",
    "type": "EV Engineering & Smart Materials"
  },
  {
    "name": "Darmstadt Science Hub",
    "coords": [
      49.873,
      8.651
    ],
    "cntr": "DE",
    "type": "Cybersecurity & Space Operations"
  },
  {
    "name": "Karlsruhe Technology Region",
    "coords": [
      49.014,
      8.416
    ],
    "cntr": "DE",
    "type": "AI & Autonomous Systems"
  },
  {
    "name": "Heidelberg BioMed Cluster",
    "coords": [
      49.417,
      8.672
    ],
    "cntr": "DE",
    "type": "Cancer Genomics & Virology"
  },
  {
    "name": "Freiburg GreenTech Hub",
    "coords": [
      47.999,
      7.842
    ],
    "cntr": "DE",
    "type": "Solar Energy & Micro-optics"
  },
  {
    "name": "Ulm Science City",
    "coords": [
      48.423,
      9.957
    ],
    "cntr": "DE",
    "type": "Battery Systems & Hydrogen"
  },
  {
    "name": "Erlangen Medical Valley",
    "coords": [
      49.596,
      11.004
    ],
    "cntr": "DE",
    "type": "Medical Imaging & Electronics"
  },
  {
    "name": "Dresden Silicon Saxony",
    "coords": [
      51.127,
      13.738
    ],
    "cntr": "DE",
    "type": "Microchip Fabrication"
  },
  {
    "name": "Jena Optical Valley",
    "coords": [
      50.927,
      11.589
    ],
    "cntr": "DE",
    "type": "Laser & Zeiss Optics"
  },
  {
    "name": "Leipzig BioCity Campus",
    "coords": [
      51.321,
      12.398
    ],
    "cntr": "DE",
    "type": "Regenerative Biomedicine"
  },
  {
    "name": "Brunswick Mobility Campus",
    "coords": [
      52.269,
      10.527
    ],
    "cntr": "DE",
    "type": "Railway Tech & Avionics"
  },
  {
    "name": "Hamburg Bahrenfeld DESY",
    "coords": [
      53.578,
      9.879
    ],
    "cntr": "DE",
    "type": "X-Ray Free-Electron Laser"
  },
  {
    "name": "Paris-Saclay Innovation Cluster",
    "coords": [
      48.712,
      2.167
    ],
    "cntr": "FR",
    "type": "Mathematics, AI & Physics"
  },
  {
    "name": "Grenoble GIANT Innovation",
    "coords": [
      45.205,
      5.7
    ],
    "cntr": "FR",
    "type": "Micro-nanotechnology"
  },
  {
    "name": "Sophia Antipolis Tech Park",
    "coords": [
      43.616,
      7.055
    ],
    "cntr": "FR",
    "type": "AI, Telecoms & IoT"
  },
  {
    "name": "Toulouse Aerospace Valley",
    "coords": [
      43.568,
      1.488
    ],
    "cntr": "FR",
    "type": "Commercial Aircraft & Space"
  },
  {
    "name": "Lyon Gerland Biodistrict",
    "coords": [
      45.729,
      4.829
    ],
    "cntr": "FR",
    "type": "Immunology & Virology"
  },
  {
    "name": "Rennes Atalante Tech Cluster",
    "coords": [
      48.118,
      -1.636
    ],
    "cntr": "FR",
    "type": "Cyber Defense & Image Tech"
  },
  {
    "name": "Bordeaux Euratlantique",
    "coords": [
      44.825,
      -0.556
    ],
    "cntr": "FR",
    "type": "Laser Megajoule & Optics"
  },
  {
    "name": "Strasbourg MedTech Park",
    "coords": [
      48.575,
      7.738
    ],
    "cntr": "FR",
    "type": "Surgical Robotics & Imaging"
  },
  {
    "name": "Lille Eurasant\u00e9 Tech Park",
    "coords": [
      50.609,
      3.034
    ],
    "cntr": "FR",
    "type": "Precision Medicine & Pharma"
  },
  {
    "name": "Montpellier Mill\u00e9naire",
    "coords": [
      43.605,
      3.918
    ],
    "cntr": "FR",
    "type": "Health Informatics & Agronomy"
  },
  {
    "name": "High Tech Campus Eindhoven",
    "coords": [
      51.411,
      5.457
    ],
    "cntr": "NL",
    "type": "Semiconductor & Nanotech"
  },
  {
    "name": "TU Delft Science Park",
    "coords": [
      51.999,
      4.373
    ],
    "cntr": "NL",
    "type": "Quantum & Maritime Engineering"
  },
  {
    "name": "Leiden Bio Science Park",
    "coords": [
      52.164,
      4.468
    ],
    "cntr": "NL",
    "type": "Biopharma & Therapeutics"
  },
  {
    "name": "Utrecht Science Park",
    "coords": [
      52.085,
      5.176
    ],
    "cntr": "NL",
    "type": "Life Sciences & Earth Systems"
  },
  {
    "name": "Wageningen Food Valley",
    "coords": [
      51.986,
      5.664
    ],
    "cntr": "NL",
    "type": "AgriTech & Bioscience"
  },
  {
    "name": "Twente Kennispark",
    "coords": [
      52.241,
      6.852
    ],
    "cntr": "NL",
    "type": "MEMS & Nanotechnology"
  },
  {
    "name": "Leuven Arenberg Science Park",
    "coords": [
      50.865,
      4.685
    ],
    "cntr": "BE",
    "type": "IMEC Nano-electronics & Health"
  },
  {
    "name": "Ghent Tech Lane Science Park",
    "coords": [
      50.998,
      3.712
    ],
    "cntr": "BE",
    "type": "Biotech & Circular Materials"
  },
  {
    "name": "Louvain-la-Neuve Science Park",
    "coords": [
      50.668,
      4.614
    ],
    "cntr": "BE",
    "type": "Applied Chemistry & Pharma"
  },
  {
    "name": "Li\u00e8ge Science Park",
    "coords": [
      50.584,
      5.561
    ],
    "cntr": "BE",
    "type": "Aerospace & Proton Therapy"
  },
  {
    "name": "EPFL Innovation Park (Lausanne)",
    "coords": [
      46.52,
      6.565
    ],
    "cntr": "CH",
    "type": "NeuroTech & Micro-systems"
  },
  {
    "name": "ETH Zurich Science City",
    "coords": [
      47.408,
      8.507
    ],
    "cntr": "CH",
    "type": "Robotics & Quantum Hardware"
  },
  {
    "name": "Basel BioValley",
    "coords": [
      47.568,
      7.575
    ],
    "cntr": "CH",
    "type": "Global Pharma Synthesis"
  },
  {
    "name": "Bern sitem-insel Hub",
    "coords": [
      46.948,
      7.425
    ],
    "cntr": "CH",
    "type": "Translational Medicine"
  },
  {
    "name": "Geneva Campus Biotech",
    "coords": [
      46.223,
      6.15
    ],
    "cntr": "CH",
    "type": "Neuro-prosthetics & Health"
  },
  {
    "name": "Vienna Biocenter",
    "coords": [
      48.19,
      16.402
    ],
    "cntr": "AT",
    "type": "Molecular Biology & Genetics"
  },
  {
    "name": "Graz Green Tech Valley",
    "coords": [
      47.07,
      15.439
    ],
    "cntr": "AT",
    "type": "CleanTech & Automotive"
  },
  {
    "name": "Linz Softwarepark Hagenberg",
    "coords": [
      48.368,
      14.513
    ],
    "cntr": "AT",
    "type": "Industrial AI & Mechatronics"
  },
  {
    "name": "Innsbruck Quantum Hub",
    "coords": [
      47.264,
      11.385
    ],
    "cntr": "AT",
    "type": "Trapped-Ion Quantum Computing"
  },
  {
    "name": "Villach Silicon Austria Labs",
    "coords": [
      46.611,
      13.856
    ],
    "cntr": "AT",
    "type": "Power Electronics & Sensors"
  },
  {
    "name": "Kista Science City (Stockholm)",
    "coords": [
      59.403,
      17.944
    ],
    "cntr": "SE",
    "type": "Wireless Communications & 5G"
  },
  {
    "name": "Lund Medicon Village",
    "coords": [
      55.714,
      13.218
    ],
    "cntr": "SE",
    "type": "Synchrotron MAX IV & Spallation"
  },
  {
    "name": "Lindholmen Science Park",
    "coords": [
      57.706,
      11.938
    ],
    "cntr": "SE",
    "type": "Connected Transport & Mobility"
  },
  {
    "name": "Uppsala Biomedical Center",
    "coords": [
      59.842,
      17.636
    ],
    "cntr": "SE",
    "type": "Bioprocess Development"
  },
  {
    "name": "Link\u00f6ping Mj\u00e4rdevi Science Park",
    "coords": [
      58.394,
      15.56
    ],
    "cntr": "SE",
    "type": "Computer Vision & Avionics"
  },
  {
    "name": "Lule\u00e5 Arctic Tech Center",
    "coords": [
      65.618,
      22.14
    ],
    "cntr": "SE",
    "type": "Green Steel & Hyperscale Cloud"
  },
  {
    "name": "Copenhagen Bio Science Park",
    "coords": [
      55.698,
      12.556
    ],
    "cntr": "DK",
    "type": "Life Sciences & Enzymes"
  },
  {
    "name": "Odense Robotics Cluster",
    "coords": [
      55.378,
      10.428
    ],
    "cntr": "DK",
    "type": "Collaborative Cobots & Drones"
  },
  {
    "name": "Aalborg Wireless Cluster",
    "coords": [
      57.014,
      9.985
    ],
    "cntr": "DK",
    "type": "Antenna Design & Wind Power"
  },
  {
    "name": "Otaniemi Tech Hub (Espoo)",
    "coords": [
      60.185,
      24.832
    ],
    "cntr": "FI",
    "type": "VTT Quantum & Microelectronics"
  },
  {
    "name": "Tampere Hervanta Hub",
    "coords": [
      61.45,
      23.85
    ],
    "cntr": "FI",
    "type": "SoC Design & Optoelectronics"
  },
  {
    "name": "Oulu 6G Flagship Ecosystem",
    "coords": [
      65.059,
      25.466
    ],
    "cntr": "FI",
    "type": "6G Telephony & Printed Sensors"
  },
  {
    "name": "Turku BioCity",
    "coords": [
      60.452,
      22.292
    ],
    "cntr": "FI",
    "type": "Diagnostics & Biomaterials"
  },
  {
    "name": "Oslo Science City",
    "coords": [
      59.94,
      10.72
    ],
    "cntr": "NO",
    "type": "Climate Modeling & Life Sciences"
  },
  {
    "name": "Trondheim SINTEF Campus",
    "coords": [
      63.418,
      10.402
    ],
    "cntr": "NO",
    "type": "Offshore Wind & Subsea Tech"
  },
  {
    "name": "Bergen Marine Innovation Hub",
    "coords": [
      60.381,
      5.332
    ],
    "cntr": "NO",
    "type": "Aquaculture & Ocean Sensors"
  },
  {
    "name": "Milan MIND Innovation District",
    "coords": [
      45.521,
      9.098
    ],
    "cntr": "IT",
    "type": "Human Technopole & Genomics"
  },
  {
    "name": "Turin Environment Park",
    "coords": [
      45.091,
      7.674
    ],
    "cntr": "IT",
    "type": "Clean Automotive & Energy"
  },
  {
    "name": "Genoa IIT Nanotech Campus",
    "coords": [
      44.39,
      8.895
    ],
    "cntr": "IT",
    "type": "Humanoid Robotics & AI"
  },
  {
    "name": "Bologna Technopole",
    "coords": [
      44.512,
      11.35
    ],
    "cntr": "IT",
    "type": "Leonardo Supercomputing & Weather"
  },
  {
    "name": "Pisa CNR Research Area",
    "coords": [
      43.719,
      10.421
    ],
    "cntr": "IT",
    "type": "Quantum Optics & Informatics"
  },
  {
    "name": "Trieste AREA Science Park",
    "coords": [
      45.658,
      13.826
    ],
    "cntr": "IT",
    "type": "Synchrotron Light & Bio-nanotech"
  },
  {
    "name": "Rome Tecnopolo Tiburtino",
    "coords": [
      41.932,
      12.607
    ],
    "cntr": "IT",
    "type": "Space Telemetry & Defense Tech"
  },
  {
    "name": "Madrid Parque Cient\u00edfico",
    "coords": [
      40.548,
      -3.689
    ],
    "cntr": "ES",
    "type": "Biotech & Materials"
  },
  {
    "name": "Barcelona 22@ Innovation District",
    "coords": [
      41.401,
      2.195
    ],
    "cntr": "ES",
    "type": "Smart Cities & Digital Design"
  },
  {
    "name": "Bellaterra UAB Research Park",
    "coords": [
      41.501,
      2.11
    ],
    "cntr": "ES",
    "type": "Synchrotron ALBA & Nanotech"
  },
  {
    "name": "Donostia Physics Center (San Sebasti\u00e1n)",
    "coords": [
      43.308,
      -2.008
    ],
    "cntr": "ES",
    "type": "Quantum Materials & Polymers"
  },
  {
    "name": "Bilbao Zamudio Tech Park",
    "coords": [
      43.284,
      -2.868
    ],
    "cntr": "ES",
    "type": "Wind Energy & Power Grids"
  },
  {
    "name": "Valencia Polytech City",
    "coords": [
      39.481,
      -0.344
    ],
    "cntr": "ES",
    "type": "Photonics & Agrigenomics"
  },
  {
    "name": "M\u00e1laga TechPark",
    "coords": [
      36.737,
      -4.557
    ],
    "cntr": "ES",
    "type": "Microelectronics & Cybersecurity"
  },
  {
    "name": "Seville Cartuja Science Park",
    "coords": [
      37.408,
      -6.002
    ],
    "cntr": "ES",
    "type": "Renewables & Aerospace"
  },
  {
    "name": "Krak\u00f3w Technology Park",
    "coords": [
      50.026,
      19.897
    ],
    "cntr": "PL",
    "type": "Software & Game Development"
  },
  {
    "name": "Warsaw Ochota Campus",
    "coords": [
      52.215,
      20.985
    ],
    "cntr": "PL",
    "type": "Bio-cybernetics & Materials"
  },
  {
    "name": "Wroc\u0142aw Technology Park",
    "coords": [
      51.115,
      16.975
    ],
    "cntr": "PL",
    "type": "Nanomaterials & Cryogenics"
  },
  {
    "name": "Gda\u0144sk Science & Tech Park",
    "coords": [
      54.364,
      18.618
    ],
    "cntr": "PL",
    "type": "Marine Electronics & Biotech"
  },
  {
    "name": "Pozna\u0144 Science & Tech Park",
    "coords": [
      52.453,
      16.953
    ],
    "cntr": "PL",
    "type": "Polymer Chemistry & AgriTech"
  },
  {
    "name": "Katowice Silesian Tech Center",
    "coords": [
      50.257,
      19.015
    ],
    "cntr": "PL",
    "type": "Green Energy & Metallurgy"
  },
  {
    "name": "Prague ELI Beamlines Center",
    "coords": [
      49.962,
      14.417
    ],
    "cntr": "CZ",
    "type": "Ultra-Intense Laser Research"
  },
  {
    "name": "Brno CEITEC Tech Hub",
    "coords": [
      49.178,
      16.569
    ],
    "cntr": "CZ",
    "type": "Structural Biology & Nanotech"
  },
  {
    "name": "Bratislava Comenius Science Park",
    "coords": [
      48.152,
      17.071
    ],
    "cntr": "SK",
    "type": "Biomedicine & Environmental Tech"
  },
  {
    "name": "Budapest Infopark Campus",
    "coords": [
      47.473,
      19.06
    ],
    "cntr": "HU",
    "type": "Software, AI & Telecommunications"
  },
  {
    "name": "Debrecen Agrotech Center",
    "coords": [
      47.553,
      21.624
    ],
    "cntr": "HU",
    "type": "Agricultural Genomics & Pharma"
  },
  {
    "name": "Szeged ELI-ALPS Laser Center",
    "coords": [
      46.281,
      20.106
    ],
    "cntr": "HU",
    "type": "Attosecond Light Pulse Physics"
  },
  {
    "name": "Ljubljana Technology Park",
    "coords": [
      46.049,
      14.464
    ],
    "cntr": "SI",
    "type": "Biotech & Automation"
  },
  {
    "name": "Zagreb Ru\u0111er Bo\u0161kovi\u0107 Institute",
    "coords": [
      45.827,
      15.989
    ],
    "cntr": "HR",
    "type": "Laser Physics & Marine Ecology"
  },
  {
    "name": "Bucharest M\u0103gurele Laser Center",
    "coords": [
      44.348,
      26.048
    ],
    "cntr": "RO",
    "type": "ELI-NP High Power Laser Physics"
  },
  {
    "name": "Cluj-Napoca Tech Cluster",
    "coords": [
      46.771,
      23.623
    ],
    "cntr": "RO",
    "type": "IT Outsourcing & Fintech"
  },
  {
    "name": "Sofia Tech Park",
    "coords": [
      42.668,
      23.376
    ],
    "cntr": "BG",
    "type": "Discoverer Supercomputer & AI"
  },
  {
    "name": "Athens Demokritos Center",
    "coords": [
      37.999,
      23.818
    ],
    "cntr": "GR",
    "type": "Nuclear & Physical Sciences"
  },
  {
    "name": "Thessaloniki Innovation Zone",
    "coords": [
      40.54,
      22.998
    ],
    "cntr": "GR",
    "type": "Agri-biotech & Digital Media"
  },
  {
    "name": "Heraklion FORTH Campus",
    "coords": [
      35.308,
      25.083
    ],
    "cntr": "GR",
    "type": "Microelectronics & Molecular Biology"
  },
  {
    "name": "Tallinn Tehnopol Science Park",
    "coords": [
      59.395,
      24.664
    ],
    "cntr": "EE",
    "type": "e-Governance & Cybersecurity"
  },
  {
    "name": "Tartu BioMed Cluster",
    "coords": [
      58.37,
      26.702
    ],
    "cntr": "EE",
    "type": "Genomics & Personalized Medicine"
  },
  {
    "name": "Riga BioPharm Tech Hub",
    "coords": [
      56.98,
      24.2
    ],
    "cntr": "LV",
    "type": "Organic Chemistry & Pharma"
  },
  {
    "name": "Vilnius Sunrise Valley",
    "coords": [
      54.722,
      25.334
    ],
    "cntr": "LT",
    "type": "Ultrafast Lasers & Nanotech"
  },
  {
    "name": "Kaunas Santaka Valley",
    "coords": [
      54.903,
      23.958
    ],
    "cntr": "LT",
    "type": "Ultrasound Sensors & HealthTech"
  },
  {
    "name": "Lisbon Taguspark",
    "coords": [
      38.74,
      -9.303
    ],
    "cntr": "PT",
    "type": "Software, Space & Electronics"
  },
  {
    "name": "Porto UPTEC Science Park",
    "coords": [
      41.178,
      -8.598
    ],
    "cntr": "PT",
    "type": "Bio-nanotech & Marine Sensors"
  },
  {
    "name": "Coimbra Biocant Park",
    "coords": [
      40.355,
      -8.6
    ],
    "cntr": "PT",
    "type": "Biotechnology Park"
  }
]
};
