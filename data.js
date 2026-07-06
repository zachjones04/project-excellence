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
      description: "Find the correct roll paper, then follow each loading step in order.",
      materialLocation: "Poster paper rolls are stored in the poster-printer supply area. The roll-media adapters stay on the current roll or beside the Epson P6000.",
      steps: [
        {
          number: "1",
          title: "Open the roll-paper cover and release the holder",
          text: "Lift the roll-paper cover. Push the holder lock lever down, then slide the movable holder to the left.",
          image: "assets/p6000/open.webp",
          alt: "Epson P6000 roll-paper cover open with the holder release visible."
        },
        {
          number: "2",
          title: "Remove the current roll",
          text: "Rewind any loose paper. Hold the roll securely, move it away from the fixed side, and lift it out.",
          image: "assets/p6000/remove.webp",
          alt: "Current roll being lifted out of the Epson P6000."
        },
        {
          number: "3",
          title: "Prepare the new roll and adapters",
          text: "Match both adapters to the roll core size. Insert one adapter into each end of the new roll and secure both tension levers.",
          image: "assets/p6000/prepare.avif",
          alt: "Roll-media adapters positioned beside a new roll of paper."
        },
        {
          number: "4",
          title: "Place and lock the new roll",
          text: "Set the roll into the printer with the paper facing the feed slot. Seat both adapter ends, slide the holder right, and raise the lock lever.",
          image: "assets/p6000/seat.avif",
          alt: "New roll seated in the Epson P6000 holder."
        },
        {
          number: "5",
          title: "Feed and align the paper",
          text: "Press the Load button when needed. Insert the leading edge evenly, pull it down until it is straight and centered, then close the cover.",
          image: "assets/p6000/feed.webp",
          alt: "Leading edge of roll paper being guided into the Epson P6000 feed slot."
        },
        {
          number: "6",
          title: "Load and confirm the settings",
          text: "Press Load and allow the printer to position the paper. Confirm that the displayed media type and roll information match the installed roll, then press OK.",
          image: "assets/p6000/verify.avif",
          alt: "Epson P6000 control panel displaying the loaded roll-paper settings."
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
