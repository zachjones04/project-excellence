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
        { id: "main-products", icon: "📦", title: "Product Guides", description: "Canvas, books, calendars, magnets, drinkware, cards, and specialty products." },
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
        { id: "guide-load-paper", icon: "📄", title: "Load Roll Paper", description: "Photo-supported guide for loading Epson SureColor P6000 roll paper." },
        { id: "guide-replace-ink", icon: "🧪", title: "Replace Ink", description: "Ink replacement and basic cartridge notes." },
        { id: "guide-poster-troubleshooting", icon: "⚠️", title: "Troubleshooting", description: "Color issues, alignment, feed errors, and basic fixes." },
        { id: "support-poster", icon: "📞", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
      ]
    },
    "ipos": {
      title: "IPOS Register",
      description: "Use this hub for register-side photo checkout support. IPOS rings up the order and scans the pickup QR.",
      cards: [
        { id: "guide-photo-checkout", icon: "💳", title: "Photo Checkout", description: "Ring up completed photo orders at the register." },
        { id: "guide-qr-pickup", icon: "📱", title: "QR Pickup Scan", description: "Scan the QR from the photo machine to stop pickup notifications." },
        { id: "guide-register-troubleshooting", icon: "⚠️", title: "Register Troubleshooting", description: "Register-side problems and escalation guidance." },
        { id: "guide-customer-questions", icon: "❓", title: "Customer Questions", description: "Common questions customers may ask at checkout." },
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
      description: "Use these six visual stages to load a roll and return the printer to a ready state.",
      time: "About 5–8 minutes",
      before: [
        "Confirm the new roll is the correct media, width, and 2-inch or 3-inch core size.",
        "Use clean, dry hands and keep the paper edge straight and free of folds.",
        "Do not force a holder, adapter, cover, lever, or paper feed."
      ],
      steps: [
        {
          number: "1",
          title: "Open the roll-paper cover",
          text: "Lift the cover fully so the roll area and holders are easy to reach.",
          image: "https://files.support.epson.com/docid/cpd5/cpd50227/source/pro_graphics/source/images/media_loading/scp6000_9000/roll_cover_open_scp9000.jpg",
          alt: "Official Epson illustration showing the roll-paper cover opening."
        },
        {
          number: "2",
          title: "Release the holder and remove the roll",
          text: "Push the lock lever fully down, move the holder left, rewind the paper, and remove the current roll when applicable.",
          image: "https://files.support.epson.com/docid/cpd5/cpd50227/source/pro_graphics/source/images/media_loading/scp6000_9000/roll_lock_release_scp9000.jpg",
          alt: "Official Epson illustration showing the roll-holder lock lever being released."
        },
        {
          number: "3",
          title: "Prepare the new roll adapters",
          text: "Set both adapters for the correct 2-inch or 3-inch core, then press an adapter firmly into each end of the roll.",
          image: "https://files.support.epson.com/docid/cpd5/cpd50227/source/pro_graphics/source/images/media_loading/scp6000_9000/roll_adapter_attach_scp9000.jpg",
          alt: "Official Epson illustration showing roll-media adapters being attached."
        },
        {
          number: "4",
          title: "Position and secure the roll",
          text: "Move the roll against the right guide, align the left adapter, slide the holder right, and raise the lock lever to secure it.",
          image: "https://files.support.epson.com/docid/cpd5/cpd50227/source/pro_graphics/source/images/media_loading/scp6000_9000/roll_holder_push_scp9000.jpg",
          alt: "Official Epson illustration showing the roll holder being pushed into position."
        },
        {
          number: "5",
          title: "Feed the leading edge",
          text: "Press the load-paper control when needed, insert the paper into the feed slot, and pull it down evenly to the indicated position.",
          image: "https://files.support.epson.com/docid/cpd5/cpd50227/source/pro_graphics/source/images/media_loading/scp6000_9000/roll_pull_through_scp9000.jpg",
          alt: "Official Epson illustration showing paper being pulled evenly through the feed path."
        },
        {
          number: "6",
          title: "Close, load, and verify settings",
          text: "Close the cover, press Load, confirm the displayed media settings, trim an uneven leading edge when needed, and press OK.",
          image: "https://files.support.epson.com/docid/cpd5/cpd50227/source/pro_graphics/source/images/media_loading/scp6000_9000/roll_cover_close_scp9000.jpg",
          alt: "Official Epson illustration showing the roll-paper cover being closed."
        }
      ],
      checks: [
        "Both adapters are fully inserted and the holder is locked.",
        "Paper feeds straight without wrinkles, slack, or skew.",
        "Displayed media type and roll width match the installed roll.",
        "The printer reaches a ready state and auto cut is set correctly for the job."
      ],
      escalation: "Stop and ask a photo-trained colleague or shift leader if the roll will not seat, the paper will not feed, an error remains, or any step requires force."
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