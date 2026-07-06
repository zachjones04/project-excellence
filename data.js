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
        { id: "guide-load-paper", icon: "📄", title: "Load Roll Paper", description: "Complete real-photo guide for loading Epson SureColor P6000 roll paper." },
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
      guideType: "Equipment procedure",
      title: "Load Roll Paper — Epson SureColor P6000",
      description: "Use this real-photo guide to remove the current roll when needed, prepare the adapters, install the new roll, feed the paper, and return the printer to a ready state.",
      objective: "Load the correct roll media straight and securely without damaging the paper, adapters, holder, or feed path.",
      equipment: "Epson SureColor P6000",
      task: "Load or replace roll paper",
      time: "About 5–8 minutes",
      difficulty: "Standard photo task",
      updated: "July 2026",
      supplies: [
        "Correct 24-inch roll media for the order",
        "Two roll-media adapters already used with the printer",
        "Clean, dry hands"
      ],
      before: [
        "Confirm the printer is on and no job is actively printing.",
        "Match the new roll to the order: paper type, width, finish, and 2-inch or 3-inch core.",
        "Keep the leading edge clean, straight, and free of folds, tape, or damage.",
        "Clear the top and front of the printer so the roll can be handled safely."
      ],
      warnings: [
        "Do not force the roll holder, adapter tabs, tension levers, cover, or paper feed.",
        "Support the roll with both hands. Large rolls can shift suddenly.",
        "Keep fingers clear of the holder and adapter pinch points."
      ],
      steps: [
        {
          number: "1",
          title: "Open the roll-paper cover and unlock the holder",
          text: "Lift the roll-paper cover fully. Push the holder lock lever all the way down, then slide the movable holder to the left so the roll area is open.",
          image: "assets/p6000-real/step-01-open-cover.svg",
          alt: "Epson P6000 roll-paper area open with the holder accessible.",
          tip: "The holder is not fully released until the lock lever is pushed completely down."
        },
        {
          number: "2",
          title: "Remove the current roll when replacing media",
          text: "Rewind loose paper onto the roll. Hold the roll assembly securely, move it away from the fixed side, and lift it out without scraping the paper edge.",
          image: "assets/p6000-real/step-02-remove-roll.svg",
          alt: "A colleague lifting the current roll assembly out of the Epson P6000.",
          tip: "Set the roll on the flat top surface while you prepare the adapters."
        },
        {
          number: "3",
          title: "Set both adapters for the roll core",
          text: "Check whether the new roll has a 2-inch or 3-inch core. Move the gray selector tabs on both adapters to the matching position.",
          image: "assets/p6000-real/step-03-core-size.svg",
          alt: "Close-up of the Epson roll adapter selector marked for 2-inch and 3-inch cores.",
          tip: "Both adapters must be set to the same core size."
        },
        {
          number: "4",
          title: "Attach the adapters to the new roll",
          text: "Release the tension lever on each adapter. Push one adapter firmly into each end of the roll, then close both tension levers so the adapters are secure.",
          image: "assets/p6000-real/step-04-attach-adapters.svg",
          alt: "Epson P6000 roll adapter removed beside a new roll of paper.",
          tip: "Press the adapters in evenly and completely; a partly seated adapter can cause skew."
        },
        {
          number: "5",
          title: "Position the roll and lock the holder",
          text: "Place the roll into the printer with the paper unwinding toward the feed slot. Move it against the right-side guide, align the left adapter with the holder, slide the holder right, and pull the lock lever up.",
          image: "assets/p6000-real/step-05-seat-roll.svg",
          alt: "Roll paper positioned in the Epson P6000 with paper hanging toward the feed path.",
          tip: "Confirm both adapter ends are captured before raising the lock lever."
        },
        {
          number: "6",
          title: "Feed the leading edge straight",
          text: "If the load-paper light is off, press the Load button once. Insert the leading edge into the paper feed slot and guide it down evenly across the full width.",
          image: "assets/p6000-real/step-06-feed-edge.svg",
          alt: "A colleague guiding the leading edge of Epson P6000 roll paper into the feed slot.",
          tip: "Do not pull harder on one side. Uneven tension can create skew or wrinkles."
        },
        {
          number: "7",
          title: "Align the paper and close the cover",
          text: "Pull the paper down until the edge is even and centered. Check that it is not folded or angled, then close the roll-paper cover.",
          image: "assets/p6000-real/step-07-align-close.svg",
          alt: "Roll paper hanging evenly and centered in the Epson P6000 feed area.",
          tip: "Keep the roll-paper cover closed whenever media is not being loaded or removed."
        },
        {
          number: "8",
          title: "Load the paper and confirm the settings",
          text: "Press Load. Allow the printer to move the paper into position. On the display, keep the existing settings only when the media type and roll information match; otherwise choose Change Settings, then press OK.",
          image: "assets/p6000-real/step-08-load-confirm.svg",
          alt: "Epson P6000 control panel displaying the load-paper prompt.",
          tip: "If the leading edge is uneven or damaged, use the cut control when prompted before resuming output."
        }
      ],
      checks: [
        "The roll is seated at both ends and the holder lock lever is up.",
        "Paper hangs and feeds straight with no wrinkles, folds, slack, or visible skew.",
        "The displayed media type and roll settings match the installed material.",
        "The printer reaches a ready state with no paper-feed error."
      ],
      troubleshooting: [
        { issue: "Paper will not enter the feed slot", action: "Flatten or gently reverse-roll the leading edge and try again. Do not force it. Ask for help if suction or feed settings need to be changed." },
        { issue: "Paper feeds at an angle", action: "Stop, release the paper, square the leading edge, confirm both adapters are fully seated, and reload." },
        { issue: "Roll moves or feels loose", action: "Recheck the adapter tension levers, holder alignment, and holder lock lever before loading." },
        { issue: "The display shows the wrong media", action: "Choose Change Settings and select the correct installed material before printing." }
      ],
      escalation: "Stop and ask a photo-trained colleague or shift leader if the roll will not seat, the holder will not lock, the paper will not feed, an error remains, or any step requires force.",
      related: [
        { id: "poster-supplies", title: "Poster Printer Supplies & Item Numbers" },
        { id: "guide-replace-ink", title: "Replace Epson P6000 Ink" },
        { id: "guide-poster-troubleshooting", title: "Poster Printer Troubleshooting" }
      ]
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
