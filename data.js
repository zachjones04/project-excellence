const PE_DATA = {
  version: "2.5",
  home: {
    title: "Select Your Workstation",
    description: "Choose the area where you need help. QR codes link directly to each workstation.",
    cards: [
      { id: "main-photo", icon: "MP", title: "Main Photo Printer & Assembly", description: "Product assembly, supplies, printer maintenance, item numbers, and troubleshooting." },
      { id: "poster-printer", icon: "PP", title: "Poster Printer", description: "Poster media, ink, paper loading, large-format supplies, maintenance, and errors." },
      { id: "ipos", icon: "$", title: "IPOS Register", description: "Photo checkout, QR pickup scan, register questions, and transaction support." }
    ]
  },
  pages: {
    "main-photo": {
      title: "Main Photo Printer & Assembly",
      description: "Use this hub for product assembly, main photo printer supplies, maintenance, and troubleshooting.",
      cards: [
        { id: "main-products", icon: "BOX", title: "Product Guides", description: "Canvas, books, calendars, magnets, cards, and specialty products." },
        { id: "main-supplies", icon: "#", title: "Supplies & Item Numbers", description: "Look up supply names, item numbers, and notes." },
        { id: "main-maintenance", icon: "TOOL", title: "Printer Maintenance", description: "Replace paper, replace print kits, daily checks, and basic care." },
        { id: "main-troubleshooting", icon: "!", title: "Troubleshooting", description: "Printer offline, paper jams, poor print quality, and common fixes." },
        { id: "support-main", icon: "TEL", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
      ]
    },
    "main-products": {
      title: "Product Guides",
      description: "Select the photo product you are making.",
      cards: [
        { id: "guide-canvas", icon: "CV", title: "Canvas", description: "Material location and step-by-step assembly instructions." },
        { id: "guide-photo-books", icon: "BK", title: "Photo Books", description: "Material location and step-by-step assembly instructions." },
        { id: "guide-calendars", icon: "CAL", title: "Calendars", description: "Material location and step-by-step assembly instructions." },
        { id: "guide-magnets", icon: "MAG", title: "Magnets", description: "Material location and step-by-step assembly instructions." },
        { id: "guide-specialty", icon: "SP", title: "Cards & Specialty", description: "Material location and step-by-step assembly instructions." }
      ]
    },
    "poster-printer": {
      title: "Poster Printer",
      description: "Use this hub for poster printing, large-format supplies, maintenance, and troubleshooting.",
      cards: [
        { id: "guide-poster-products", icon: "P6", title: "Full Printer Guide", description: "Start here for paper, ink, output checks, quality checks, and next steps." },
        { id: "poster-supplies", icon: "#", title: "Supplies & Item Numbers", description: "Ink, paper rolls, item numbers, and notes." },
        { id: "guide-load-paper", icon: "RL", title: "Load Roll Paper", description: "Material location and step-by-step Epson P6000 loading instructions." },
        { id: "guide-replace-ink", icon: "INK", title: "Replace Ink", description: "Ink location and step-by-step replacement instructions." },
        { id: "guide-poster-troubleshooting", icon: "!", title: "Troubleshooting", description: "Step-by-step checks for color, alignment, and feed problems." },
        { id: "support-poster", icon: "TEL", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
      ]
    },
    "ipos": {
      title: "IPOS Register",
      description: "Use this hub for register-side photo checkout support. IPOS rings up the order and scans the pickup QR.",
      cards: [
        { id: "guide-photo-checkout", icon: "$", title: "Photo Checkout", description: "Find the completed order and follow the checkout steps." },
        { id: "guide-qr-pickup", icon: "QR", title: "QR Pickup Scan", description: "Find the pickup QR and follow the scan steps." },
        { id: "guide-register-troubleshooting", icon: "!", title: "Register Troubleshooting", description: "Step-by-step register checks and escalation guidance." },
        { id: "guide-customer-questions", icon: "?", title: "Customer Questions", description: "Find the order information and follow the response steps." },
        { id: "support-ipos", icon: "TEL", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
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
  printerGuides: {
    "guide-poster-products": {
      title: "Full Poster Printer Guide - Epson SureColor P6000",
      description: "Use this page first when you are not sure where to start. It points you to the right paper, ink, output, troubleshooting, or support step.",
      heroLabel: "Poster printer overview",
      heroTitle: "Start with the printer, then choose the right next action",
      heroText: "The P6000 handles large-format poster material. Check the loaded roll, the ink area, the output catcher, and the screen message before changing anything.",
      heroImage: "assets/p6000/overview.jpg",
      heroAlt: "In-store overview of the Epson SureColor P6000 poster printer area with paper rolls nearby.",
      actions: [
        { label: "Paper", title: "Load Roll Paper", text: "Use when the roll is empty, wrong, loose, or needs to be seated again.", target: "guide-load-paper" },
        { label: "Ink", title: "Replace Ink", text: "Use when the printer asks for a cartridge or a color is empty.", target: "guide-replace-ink" },
        { label: "#", title: "Item Numbers", text: "Use when you need paper, vinyl, sticker material, metallic paper, or ink item numbers.", target: "poster-supplies" },
        { label: "Help", title: "Troubleshooting", text: "Use when paper will not feed, print quality looks wrong, or the screen shows an error.", target: "guide-poster-troubleshooting" }
      ],
      sections: [
        {
          label: "Daily setup",
          title: "Quick checks before printing",
          items: [
            "Confirm the printer is powered on and the screen is not showing an unresolved error.",
            "Make sure the roll-paper cover is closed and the loaded roll matches the order material.",
            "Lower or position the output catcher so finished prints do not bend, drag, or hit the floor.",
            "Keep the poster area clear enough that the paper can feed straight."
          ]
        },
        {
          label: "Material decisions",
          title: "Pick the guide based on what changed",
          items: [
            "If the paper roll is empty, crooked, loose, or the wrong material, open Load Roll Paper.",
            "If the screen asks for ink, open Replace Ink and match the exact color before removing anything.",
            "If you only need an item number, open Supplies & Item Numbers instead of opening the printer.",
            "If the order printed poorly, check troubleshooting before reprinting repeatedly."
          ]
        },
        {
          label: "Stop points",
          title: "When to ask for help",
          items: [
            "Stop if a part feels stuck or you have to force the roll, adapter, cover, or ink cartridge.",
            "Stop if the printer reports a service error that does not clear after the basic checks.",
            "Stop if the same order fails twice after paper, ink, and material settings look correct.",
            "Escalate to store leadership or the photo help desk when the guide does not match the printer state."
          ]
        }
      ],
      steps: [
        {
          number: "1",
          title: "Identify the printer area",
          text: "Start at the Epson P6000 station. Locate the roll-paper cover, control panel, output catcher, paper rolls, and supply area before opening anything.",
          image: "assets/p6000/overview.jpg",
          alt: "In-store overview of the Epson P6000 printer station."
        },
        {
          number: "2",
          title: "Check the loaded roll",
          text: "Look at the roll inside the printer. It should sit evenly on both adapters with the paper feeding forward and straight.",
          image: "assets/p6000/loaded-roll.jpg",
          alt: "In-store photo of roll paper loaded inside the Epson P6000."
        },
        {
          number: "3",
          title: "Use the paper guide when needed",
          text: "If the roll needs to be changed or reseated, use the Load Roll Paper guide and follow each photo in order.",
          image: "assets/p6000/unlock-lever.jpg",
          alt: "In-store close-up of the Epson P6000 blue lock lever."
        },
        {
          number: "4",
          title: "Confirm feed and settings",
          text: "After loading paper, make sure the leading edge is straight and confirm the media information on the printer screen before printing.",
          image: "assets/p6000/verify.jpg",
          alt: "In-store Epson P6000 control panel with the load-paper button being pressed."
        }
      ],
      checks: [
        "Correct material is loaded for the order.",
        "Paper edge is straight and the cover is closed.",
        "Ink warnings are cleared or escalated.",
        "Output catcher is ready for the print.",
        "The screen is ready before sending or resending the order."
      ]
    }
  },
  employeeGuides: {
    "guide-load-paper": {
      title: "Load Roll Paper - Epson SureColor P6000",
      description: "Use the photos to remove the old roll, move the adapters, and load the new roll one small step at a time.",
      materialLocation: "Poster paper rolls are stored in the poster-printer supply area. The black roll-media adapters are reusable and should stay with the Epson P6000, not the empty cardboard core.",
      steps: [
        { number: "1", title: "Press the blue lock lever", text: "Open the roll-paper cover. On the left holder, press the blue lock lever down to unlock it.", image: "assets/p6000/unlock-lever.jpg", alt: "In-store close-up of a hand pressing the blue lock lever on the Epson P6000 left holder." },
        { number: "2", title: "Slide the holder left", text: "Keep the lever down and slide the left holder to the left, away from the roll.", image: "assets/p6000/slide-holder-left.jpg", alt: "In-store close-up of the Epson P6000 left holder being slid left away from the roll." },
        { number: "3", title: "Make sure the roll is clear", text: "Stop when the metal pin is clear of the roll adapter. The roll should now have enough room to lift out.", image: "assets/p6000/holder-clear.jpg", alt: "In-store close-up of the Epson P6000 left holder slid left with the roll adapter clear." },
        { number: "4", title: "Lift the old roll out", text: "Rewind any loose paper back onto the roll. Hold both black adapter ends, lift the whole roll assembly straight up and out, and set it on a clean flat surface.", image: "assets/p6000/remove.jpg", alt: "In-store photo showing the old roll assembly lifted out of the Epson P6000." },
        { number: "5", title: "Open the adapter lever", text: "Swing the gray adapter lever fully open. This loosens the adapter so it can slide off without forcing or twisting it.", image: "assets/p6000/adapter-lever.jpg", alt: "Close-up of the Epson P6000 roll adapter lever opened." },
        { number: "6", title: "Remove and keep the adapters", text: "Pull the adapter straight off the old cardboard core. Keep both adapters nearby because they must go onto the new roll.", image: "assets/p6000/adapter-removed.jpg", alt: "Epson P6000 roll adapter removed from the cardboard core and ready to reuse." },
        { number: "7", title: "Prepare the new roll and adapters", text: "Match the adapter setting to the core size printed on the roll or shown inside the cardboard core. Push one adapter into each end of the new roll until it sits flush, then close both gray levers.", image: "assets/p6000/prepare.jpg", alt: "Close-up of the Epson P6000 roll adapter size selector." },
        { number: "8", title: "Seat and lock the new roll", text: "Place the roll back into the printer with the loose paper edge coming forward toward the feed slot. Seat the right adapter first, slide the left holder inward until both adapters are seated, then raise the lock lever.", image: "assets/p6000/seat.jpg", alt: "In-store Epson P6000 roll paper seated in the loaded position." },
        { number: "9", title: "Feed and align the paper", text: "Guide the leading edge into the feed slot with both hands. Keep it straight and centered as you pull it down to the shown position.", image: "assets/p6000/feed.jpg", alt: "In-store photo showing the leading edge of roll paper being fed into the Epson P6000." },
        { number: "10", title: "Load and confirm the settings", text: "Close the roll-paper cover. Press the Load button and let the printer pull the paper into position. Confirm the media type and roll information on the screen, then press OK if everything matches.", image: "assets/p6000/verify.jpg", alt: "In-store Epson P6000 control panel with the load-paper button being pressed." }
      ]
    },
    "guide-replace-ink": {
      title: "Replace Poster Ink - Epson SureColor P6000",
      description: "Use this when the P6000 screen asks for ink. Match the exact color, remove the old cartridge, and dispose of it correctly.",
      materialLocation: "Poster ink is stored with the poster-printer supplies. Use the exact color shown on the printer screen. Used cartridges should be handled as store hazardous-waste material according to local store process.",
      steps: [
        { number: "1", title: "Read the screen first", text: "Write down or remember the exact ink color the printer is asking for before opening the ink area." },
        { number: "2", title: "Find the matching cartridge", text: "Match the color name on the new cartridge to the color shown on the printer screen. Do not swap a close color." },
        { number: "3", title: "Open the ink door", text: "Open the ink compartment for the cartridge side shown by the printer. Keep the new cartridge nearby but sealed until you are ready." },
        { number: "4", title: "Release and remove the old ink", text: "Press the cartridge release and pull the old cartridge straight out. Do not twist it or force it." },
        { number: "5", title: "Install the new cartridge", text: "Slide the new cartridge into the same slot until it seats fully. Close the ink door." },
        { number: "6", title: "Bag the used cartridge", text: "Place the used cartridge in the approved disposal bag or hazardous-waste area used by your store." },
        { number: "7", title: "Confirm the warning cleared", text: "Check the screen again. If the same warning stays on, confirm the color and cartridge position, then escalate." }
      ]
    },
    "guide-poster-troubleshooting": {
      title: "Poster Printer Troubleshooting",
      description: "Use these checks when the P6000 will not print, will not feed paper, or the finished poster does not look right.",
      materialLocation: "Start at the Epson P6000 screen and the loaded roll. Most poster-printer issues begin with the screen message, paper path, ink warning, or wrong material.",
      steps: [
        { number: "1", title: "Read the screen message", text: "Do not clear messages without reading them. The screen usually tells you whether the issue is paper, ink, cover, media, or service related." },
        { number: "2", title: "Check the cover and roll", text: "Make sure the roll-paper cover is closed and the roll is seated evenly on both adapters." },
        { number: "3", title: "Check the paper edge", text: "If the paper is crooked, loose, wrinkled, or not feeding forward, reopen Load Roll Paper and reseat the roll." },
        { number: "4", title: "Check material settings", text: "Confirm the material loaded in the printer matches the order type. Wrong material can cause feed issues or poor output." },
        { number: "5", title: "Check ink warnings", text: "If an ink warning is present, replace the exact color shown before reprinting." },
        { number: "6", title: "Protect the output", text: "Make sure the output catcher is positioned so the finished print can come out smoothly." },
        { number: "7", title: "Escalate repeating issues", text: "If the same order fails twice after paper, ink, and settings are checked, stop and contact store leadership or the photo help desk." }
      ]
    }
  },
  guides: {
    "guide-canvas": "Canvas Assembly",
    "guide-photo-books": "Photo Book Assembly",
    "guide-calendars": "Calendar Assembly",
    "guide-magnets": "Magnet Assembly",
    "guide-specialty": "Cards & Specialty Products",
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
