const PE_DATA = {
  version: "2.5",
  home: {
    title: "Select Your Workstation",
    description: "Choose the area where you need help. QR codes link directly to each workstation.",
    cards: [
      { id: "main-photo", icon: "🖨️", title: "Main Photo Printer & Assembly", description: "Product assembly, supplies, printer maintenance, item numbers, and troubleshooting." },
      { id: "poster-printer", icon: "🎨", title: "Poster Printer", description: "Poster media, ink, paper loading, large-format supplies, maintenance, and errors." },
      { id: "ipos", icon: "💳", title: "IPOS Register", description: "Photo checkout, QR pickup scan, register questions, and transaction support." }
    ]
  },
  pages: {
    "main-photo": {
      title: "Main Photo Printer & Assembly",
      description: "Use this hub for product assembly, main photo printer supplies, maintenance, and troubleshooting.",
      cards: [
        { id: "main-products", icon: "📦", title: "Product Guides", description: "Canvas, books, calendars, magnets, cards, and specialty products." },
        { id: "main-supplies", icon: "🔎", title: "Supplies & Item Numbers", description: "Look up supply names, item numbers, and notes." },
        { id: "main-maintenance", icon: "🔧", title: "Printer Maintenance", description: "Replace paper, replace print kits, daily checks, and basic care." },
        { id: "main-troubleshooting", icon: "⚠️", title: "Troubleshooting", description: "Printer offline, paper jams, poor print quality, and common fixes." },
        { id: "support-main", icon: "📞", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
      ]
    },
    "main-products": {
      title: "Product Guides",
      description: "Select the photo product you are making.",
      cards: [
        { id: "guide-canvas", icon: "🖼️", title: "Canvas", description: "Material location and step-by-step assembly instructions." },
        { id: "guide-photo-books", icon: "📚", title: "Photo Books", description: "Material location and step-by-step assembly instructions." },
        { id: "guide-calendars", icon: "📅", title: "Calendars", description: "Material location and step-by-step assembly instructions." },
        { id: "guide-magnets", icon: "🧲", title: "Magnets", description: "Material location and step-by-step assembly instructions." },
        { id: "guide-specialty", icon: "🎁", title: "Cards & Specialty", description: "Material location and step-by-step assembly instructions." }
      ]
    },
    "poster-printer": {
      title: "Poster Printer",
      description: "Use this hub for poster printing, large-format supplies, maintenance, and troubleshooting.",
      cards: [
        { id: "guide-poster-products", icon: "🖼️", title: "Poster Products", description: "Material locations and instructions for poster products." },
        { id: "poster-supplies", icon: "🔎", title: "Supplies & Item Numbers", description: "Ink, paper rolls, item numbers, and notes." },
        { id: "guide-load-paper", icon: "📄", title: "Load Roll Paper", description: "Material location and step-by-step Epson P6000 loading instructions." },
        { id: "guide-replace-ink", icon: "🧪", title: "Replace Ink", description: "Ink location and step-by-step replacement instructions." },
        { id: "guide-poster-troubleshooting", icon: "⚠️", title: "Troubleshooting", description: "Step-by-step checks for color, alignment, and feed problems." },
        { id: "support-poster", icon: "📞", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
      ]
    },
    "ipos": {
      title: "IPOS Register",
      description: "Use this hub for register-side photo checkout support. IPOS rings up the order and scans the pickup QR.",
      cards: [
        { id: "guide-photo-checkout", icon: "💳", title: "Photo Checkout", description: "Find the completed order and follow the checkout steps." },
        { id: "guide-qr-pickup", icon: "📱", title: "QR Pickup Scan", description: "Find the pickup QR and follow the scan steps." },
        { id: "guide-register-troubleshooting", icon: "⚠️", title: "Register Troubleshooting", description: "Step-by-step register checks and escalation guidance." },
        { id: "guide-customer-questions", icon: "❓", title: "Customer Questions", description: "Find the order information and follow the response steps." },
        { id: "support-ipos", icon: "📞", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
      ]
    }
  },
  supplies: {
    "main-supplies": {
      title: "Main Photo Supplies",
      description: "Initial supply reference. Store-specific locations and photos will be added during implementation.",
      rows: [
        ["Print Kit", "Kodak 6850 Digital Print Kit", "265443", "Count print kit in printer as .5"],
        ["Print Kit", "Kodak 8800 Digital Print Kit", "832490", "Count print kit in printer as .5"],
        ["Print Kit", "Kodak 305 5R Print Kit", "252064", "Count whole/half"],
        ["CD/DVD", "CVS/Kodak Co-Branded CD", "897311 / 425302", "Full spindle or single count"],
        ["DVD", "Kodak Archive DVD", "858518", "Count as single DVDs"],
        ["DVD", "Kodak Picture Movie DVD", "392782", "Count as single DVDs"]
      ]
    },
    "poster-supplies": {
      title: "Poster Printer Supplies",
      description: "Initial large-format supply reference.",
      rows: [
        ["Ink", "Epson P6000 Ink - Yellow 350ML", "254884", "Count ink cartridge in printer as .5"],
        ["Ink", "Epson P6000 Ink - Cyan 350ML", "312260", "Count ink cartridge in printer as .5"],
        ["Paper", "Poster Paper 24IN x 100FT Roll", "405658", "Count roll in printer as .5"],
        ["Vinyl", "Vinyl Poster Material 24IN x 50FT Roll", "324024", "Count open rolls as .5"],
        ["Sticker Paper", "Repositionable Sticker Paper", "275058", "Count roll in printer as .5"],
        ["Metallic Paper", "Metallic Poster Paper", "669282", "Count roll in printer as .5"]
      ]
    }
  },
  employeeGuides: {
    "guide-load-paper": {
      title: "Load Roll Paper — Epson SureColor P6000",
      description: "Find the correct roll paper, then use the photos to load it one small move at a time.",
      materialLocation: "Poster paper rolls are stored in the poster-printer supply area. The black roll-media adapters are reusable and should stay with the Epson P6000, not the empty cardboard core.",
      steps: [
        {
          number: "1",
          title: "Open the cover and unlock the holder",
          text: "Stand in front of the printer and lift the long roll-paper cover. Push the holder lock lever down, then slide the left holder outward so the roll has room to come out.",
          image: "assets/p6000/open.jpg",
          alt: "In-store Epson P6000 with the roll-paper cover open and roll assembly visible."
        },
        {
          number: "2",
          title: "Remove the current roll",
          text: "Rewind any loose paper back onto the roll. Hold both ends of the roll assembly, lift it out carefully, and set it on a clean flat surface.",
          image: "assets/p6000/remove.jpg",
          alt: "In-store photo showing the roll assembly being removed from the Epson P6000."
        },
        {
          number: "3",
          title: "Release the adapter tabs",
          text: "Each end of the roll has a black adapter. Press the gray release tabs on the adapter before pulling it away from the cardboard core. Repeat on the other end.",
          image: "assets/p6000/release-tabs.jpg",
          alt: "Close-up of the Epson P6000 roll adapter release tabs being pressed."
        },
        {
          number: "4",
          title: "Open the adapter lever",
          text: "Swing the gray adapter lever fully open. This loosens the adapter so it can slide off the old core or onto the new roll without forcing it.",
          image: "assets/p6000/adapter-lever.jpg",
          alt: "Close-up of the Epson P6000 roll adapter lever opened."
        },
        {
          number: "5",
          title: "Remove and keep the adapters",
          text: "Pull the adapter straight off the old cardboard core. Keep both adapters nearby because they must go onto the new roll.",
          image: "assets/p6000/adapter-removed.jpg",
          alt: "Epson P6000 roll adapter removed from the cardboard core and ready to reuse."
        },
        {
          number: "6",
          title: "Prepare the new roll and adapters",
          text: "Match the adapter setting to the core size printed on the roll or shown inside the cardboard core. Push one adapter into each end until it sits flush, then close both gray levers.",
          image: "assets/p6000/prepare.jpg",
          alt: "Close-up of the Epson P6000 roll adapter size selector."
        },
        {
          number: "7",
          title: "Place and lock the new roll",
          text: "Place the roll back into the printer with the loose paper edge coming forward toward the feed slot. Seat both adapter ends, slide the holder back in, and raise the lock lever.",
          image: "assets/p6000/seat.jpg",
          alt: "In-store Epson P6000 roll paper seated in the loaded position."
        },
        {
          number: "8",
          title: "Feed and align the paper",
          text: "Guide the leading edge into the feed slot with both hands. Keep it straight and centered as you pull it down to the shown position, then close the roll-paper cover.",
          image: "assets/p6000/feed.jpg",
          alt: "In-store photo showing the leading edge of roll paper being fed into the Epson P6000."
        },
        {
          number: "9",
          title: "Load and confirm the settings",
          text: "Press the Load button and let the printer pull the paper into position. Confirm the media type and roll information on the screen, then press OK if everything matches.",
          image: "assets/p6000/verify.jpg",
          alt: "In-store Epson P6000 control panel with the load-paper button being pressed."
        }
      ]
    }
  },
  guides: {
    "guide-canvas": "Canvas Assembly",
    "guide-photo-books": "Photo Book Assembly",
    "guide-calendars": "Calendar Assembly",
    "guide-magnets": "Magnet Assembly",
    "guide-specialty": "Cards & Specialty Products",
    "guide-poster-products": "Poster Products",
    "guide-replace-ink": "Replace Poster Ink",
    "guide-poster-troubleshooting": "Poster Printer Troubleshooting",
    "guide-photo-checkout": "Photo Checkout",
    "guide-qr-pickup": "QR Pickup Scan",
    "guide-register-troubleshooting": "Register Troubleshooting",
    "guide-customer-questions": "Common Customer Questions",
    "main-maintenance": "Main Photo Printer Maintenance",
    "main-troubleshooting": "Main Photo Printer Troubleshooting",
    "support-main": "Support Contacts",
    "support-poster": "Support Contacts",
    "support-ipos": "Support Contacts"
  }
};
