const PE_DATA = {
  version: "2.2",
  home: {
    title: "Select Your Workstation",
    description: "Choose the area where you need help. QR codes will link directly to each workstation.",
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
        { id: "main-products", icon: "📦", title: "Product Guides", description: "Canvas, books, calendars, magnets, drinkware, cards, and specialty products." },
        { id: "main-supplies", icon: "🔎", title: "Supplies & Item Numbers", description: "Look up supply names, item numbers, and notes." },
        { id: "main-maintenance", icon: "🔧", title: "Printer Maintenance", description: "Replace paper, replace print kits, daily checks, and basic care." },
        { id: "main-troubleshooting", icon: "⚠️", title: "Troubleshooting", description: "Printer offline, paper jams, poor print quality, and common fixes." },
        { id: "support", icon: "📞", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
      ]
    },
    "main-products": {
      title: "Product Guides",
      description: "Select the photo product you are making.",
      cards: [
        { id: "guide-canvas", icon: "🖼️", title: "Canvas", description: "Materials, item numbers, assembly steps, and common mistakes." },
        { id: "guide-photo-books", icon: "📚", title: "Photo Books", description: "Book supplies, assembly flow, and quality checks." },
        { id: "guide-calendars", icon: "📅", title: "Calendars", description: "Calendar components, assembly, and packaging." },
        { id: "guide-magnets", icon: "🧲", title: "Magnets", description: "Magnet materials, product checks, and packaging." },
        { id: "guide-drinkware", icon: "☕", title: "Drinkware", description: "Mugs, tumblers, press supplies, and safety reminders." },
        { id: "guide-specialty", icon: "🎁", title: "Cards & Specialty", description: "Specialty photo products and assembly references." }
      ]
    },
    "poster-printer": {
      title: "Poster Printer",
      description: "Use this hub for poster printing, large-format supplies, maintenance, and troubleshooting.",
      cards: [
        { id: "guide-poster-products", icon: "🖼️", title: "Poster Products", description: "Posters, vinyl, sticker paper, metallic paper, and product types." },
        { id: "poster-supplies", icon: "🔎", title: "Supplies & Item Numbers", description: "Ink, paper rolls, item numbers, and notes." },
        { id: "guide-load-paper", icon: "📄", title: "Load Roll Paper", description: "Complete Epson SureColor P6000 roll removal, loading, alignment, and settings workflow." },
        { id: "guide-replace-ink", icon: "🧪", title: "Replace Ink", description: "Ink replacement and basic cartridge notes." },
        { id: "guide-poster-troubleshooting", icon: "⚠️", title: "Troubleshooting", description: "Color issues, alignment, feed errors, and basic fixes." }
      ]
    },
    "ipos": {
      title: "IPOS Register",
      description: "Use this hub for register-side photo checkout support. Photo orders are not managed here; IPOS rings up the order and scans the pickup QR.",
      cards: [
        { id: "guide-photo-checkout", icon: "💳", title: "Photo Checkout", description: "Ring up completed photo orders at the register." },
        { id: "guide-qr-pickup", icon: "📱", title: "QR Pickup Scan", description: "Scan the QR from the photo machine to stop pickup notifications." },
        { id: "guide-register-troubleshooting", icon: "⚠️", title: "Register Troubleshooting", description: "Register-side problems and escalation guidance." },
        { id: "guide-customer-questions", icon: "❓", title: "Customer Questions", description: "Common questions customers may ask at checkout." },
        { id: "support", icon: "📞", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
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
  detailedGuides: {
    "guide-load-paper": {
      title: "Load Roll Paper — Epson SureColor P6000",
      description: "Use this guide to remove the current roll, prepare the replacement media, load it correctly, and confirm the printer settings.",
      status: "Draft — Leadership Review",
      version: "2.2",
      equipment: "Epson SureColor P6000",
      reviewNotice: "Store leadership should verify the procedure and approved media settings before this page is used as the final training standard.",
      whenToUse: "Use this procedure when a roll runs out, when the next queued order requires a different roll width or media type, or when the printer prompts for roll-paper loading.",
      materials: [
        "Correct approved roll media for the queued order",
        "Two roll-paper adapters",
        "A clean, dry surface for storing the removed roll",
        "Clean, dry hands"
      ],
      phases: [
        {
          id: "remove-roll",
          label: "Phase 1",
          title: "Remove the Current Roll",
          image: "assets/p6000-roll-paper-01-remove.svg",
          alt: "Original diagram showing the roll-paper cover opening, paper rewinding, and the current roll being removed from the Epson P6000.",
          caption: "Open, rewind, unlock, and store the current roll before preparing the replacement.",
          steps: [
            { number: 1, title: "Pause output when needed", text: "If the paper has run out or the next queued order needs a different width or media type, pause output to the Epson SureColor P6000 before changing the roll." },
            { number: 2, title: "Open the roll-paper cover", text: "Raise the roll-paper cover so the installed roll and paper holders are accessible." },
            { number: 3, title: "Release and rewind the paper", text: "Press the printer's paper-release control and wait until the paper rewinds onto the roll." },
            { number: 4, title: "Remove and store the roll", text: "Press the lock levers down, slide the roll to the left side, lift it out, and place it in a clean location. Do not place the paper surface on a dirty or rough surface." }
          ]
        },
        {
          id: "prepare-roll",
          label: "Phase 2",
          title: "Prepare the Replacement Roll",
          image: "assets/p6000-roll-paper-02-prepare.svg",
          alt: "Original diagram showing a replacement roll, two roll adapters, and the two-inch and three-inch core settings.",
          caption: "Set the adapters for the roll core, seat them fully, and lock them before moving the roll into place.",
          steps: [
            { number: 5, title: "Remove the adapters from the old roll", text: "Lift the tension-lever handles and pull the adapters out of both ends of the current roll." },
            { number: 6, title: "Position the new roll", text: "Place the replacement roll on top of the printer with the leading edge extending toward you from the top side of the roll." },
            { number: 7, title: "Set the correct core size", text: "Slide and lock the button on each adapter for the new roll's core size: 2-inch or 3-inch." },
            { number: 8, title: "Insert and lock both adapters", text: "Push an adapter fully into each end of the roll, then press the tension levers down to lock them.", noteLabel: "Caution", note: "Do not force an adapter into the core. Confirm the core-size setting if it will not seat normally." }
          ]
        },
        {
          id: "seat-roll",
          label: "Phase 3",
          title: "Seat and Lock the Roll",
          image: "assets/p6000-roll-paper-03-seat.svg",
          alt: "Original diagram showing the right roll guide, the left paper holder, alignment marks, and the locking lever.",
          caption: "Align the right adapter first, then seat the left holder firmly and lock the roll in place.",
          steps: [
            { number: 9, title: "Align the right adapter", text: "Slide the roll to the far right until the right adapter rests against the right roll-paper guide." },
            { number: 10, title: "Align the left paper holder", text: "Move the left paper holder until its triangular alignment mark lines up with the left adapter at the end of the roll." },
            { number: 11, title: "Roll the paper back into position", text: "Turn the roll slowly backward so the paper is neat and correctly positioned before feeding." },
            { number: 12, title: "Seat and lock the roll", text: "Press the left paper holder to the right until both adapters are firmly seated, then pull the holder lever up to lock the roll in place." }
          ]
        },
        {
          id: "feed-confirm",
          label: "Phase 4",
          title: "Feed the Paper and Confirm Settings",
          image: "assets/p6000-roll-paper-04-feed.svg",
          alt: "Original diagram showing the paper feed slot, center alignment line, load-paper control, and roll-paper cut setting.",
          caption: "Feed the paper evenly, let the printer position it, and verify the displayed media and cutting settings.",
          steps: [
            { number: 13, title: "Start paper loading", text: "If the paper-load light is not on, press the Load Paper control. Feed the paper through the slot and pull it down evenly until the leading edge aligns with the center reference line. Keep the paper tight around the roll." },
            { number: 14, title: "Close the cover and position the paper", text: "Close the roll-paper cover, press Load Paper, and wait for the printer to move the media into position automatically." },
            { number: 15, title: "Confirm the paper settings", text: "When the printer asks whether to change paper settings, choose Keep Settings Above when the displayed type is correct. Choose Change Settings only when the displayed type is wrong." },
            { number: 16, title: "Inspect and trim the leading edge", text: "Check that the leading edge is straight and unfolded. If it is uneven or folded, use the printer's Cut control to trim the edge." },
            { number: 17, title: "Confirm automatic cutting", text: "For standard roll paper, verify that the scissors/auto-cut indicator is on. If it is not, open Paper Source and select Roll Paper / Cut." },
            { number: 18, title: "Resume output", text: "Confirm the correct roll width and media type, then resume any paused output for the queued order." }
          ]
        }
      ],
      qualityChecks: [
        "Both adapters are fully seated and locked.",
        "The roll is firmly held between the right guide and left holder.",
        "Paper feeds straight and remains tight around the roll.",
        "The leading edge is even, unfolded, and correctly positioned.",
        "The displayed media type and roll width match the installed roll.",
        "Auto-cut is enabled when the selected media requires it."
      ],
      commonMistakes: [
        "Installing adapters in the wrong 2-inch or 3-inch core position.",
        "Forcing an adapter into the roll instead of checking the core setting.",
        "Leaving an adapter or holder partially seated.",
        "Feeding the paper unevenly or allowing slack around the roll.",
        "Selecting Change Settings when the displayed settings are already correct.",
        "Resuming output before confirming the roll width and media type."
      ],
      escalation: "Stop the process and ask a photo-trained colleague or shift leader for help if the roll will not seat normally, the printer does not rewind or feed the paper, the media is damaged, or an error remains after the approved loading steps. Do not force the roll, adapters, holders, or paper path."
    }
  },
  guides: {
    "guide-canvas": "Canvas Assembly",
    "guide-photo-books": "Photo Book Assembly",
    "guide-calendars": "Calendar Assembly",
    "guide-magnets": "Magnet Assembly",
    "guide-drinkware": "Drinkware Assembly",
    "guide-specialty": "Cards & Specialty Products",
    "guide-poster-products": "Poster Products",
    "guide-load-paper": "Load Roll Paper",
    "guide-replace-ink": "Replace Poster Ink",
    "guide-poster-troubleshooting": "Poster Printer Troubleshooting",
    "guide-photo-checkout": "Photo Checkout",
    "guide-qr-pickup": "QR Pickup Scan",
    "guide-register-troubleshooting": "Register Troubleshooting",
    "guide-customer-questions": "Common Customer Questions",
    "main-maintenance": "Main Photo Printer Maintenance",
    "main-troubleshooting": "Main Photo Printer Troubleshooting",
    "support": "Support Contacts"
  }
};
