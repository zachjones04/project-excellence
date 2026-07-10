const PE_DATA = {
  version: "2.6",
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
        { id: "main-maintenance", icon: "MT", title: "Printer Maintenance", description: "Replace paper, replace print kits, daily checks, and basic care." },
        { id: "main-troubleshooting", icon: "!", title: "Troubleshooting", description: "Printer offline, paper jams, poor print quality, and common fixes." },
        { id: "support-main", icon: "TEL", title: "Support Contacts", description: "Store leadership, help desk, and escalation notes." }
      ]
    },
    "main-products": {
      title: "Product Guides",
      description: "Select the photo product you are making.",
      cards: [
        { id: "guide-canvas", icon: "CV", title: "Canvas", description: "Gather the kit, inspect the print, wrap the canvas, and quality check the corners." },
        { id: "guide-photo-books", icon: "BK", title: "Photo Books", description: "Check page order, assemble cleanly, inspect the spine, and package the book." },
        { id: "guide-calendars", icon: "CAL", title: "Calendars", description: "Verify month order, bind or assemble the pages, and check the finished calendar." },
        { id: "guide-magnets", icon: "MAG", title: "Magnets", description: "Match the order, apply the print cleanly, check edges, and package the magnet." },
        { id: "guide-specialty", icon: "SP", title: "Cards & Specialty", description: "Use a simple check-build-package flow for cards and specialty photo products." }
      ]
    },
    "main-maintenance": {
      title: "Main Photo Printer Maintenance",
      description: "Choose the equipment you are checking. Use the printer screen, access panel, paper path, ribbon or print kit area, and output area in that order.",
      cards: [
        { id: "guide-main-printer-checklist", icon: "MT", title: "General Printer Checklist", description: "Use this first when you are not sure which printer or issue you are dealing with." },
        { id: "guide-kodak-305", icon: "305", title: "Kodak 305 Printer", description: "Open the printer, check the ribbon and instruction label, close it correctly, and test one print." },
        { id: "guide-kodak-7000", icon: "7K", title: "Kodak 7000 Printer", description: "Check the control panel, top cover, upper compartment, paper area, and loading reference label." },
        { id: "guide-kodak-8810", icon: "88", title: "Kodak 8810 Printer", description: "Check the side latch, side panel, paper roll, ribbon compartment, and installed ribbon." },
        { id: "guide-cx3240", icon: "CX", title: "Fujifilm CX3240", description: "Open the output tray, confirm paper is loaded, set paper guides, and check output flow." },
        { id: "guide-kodak-kiosk", icon: "KS", title: "Kodak Kiosk", description: "Check the front station, side door, and visible interior before escalating kiosk issues." }
      ]
    },
    "poster-printer": {
      title: "Poster Printer",
      description: "Use this hub for poster printing, large-format supplies, maintenance, and troubleshooting.",
      cards: [
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
      description: "Use this reference to identify common Main Photo supplies, item numbers, and counting notes.",
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
    },
    "guide-canvas": {
      title: "Canvas Assembly",
      description: "Use this when a canvas order is ready to assemble. Keep the print clean, wrap the edges evenly, and inspect the finished corners before pickup.",
      materialLocation: "Canvas materials should be kept with the Main Photo product assembly supplies. Match the canvas size on the order before opening or using a kit.",
      steps: [
        { number: "1", title: "Match the order to the kit", text: "Read the order size and product type first. Pull the matching canvas kit and confirm the print belongs to the same order." },
        { number: "2", title: "Inspect the print", text: "Check for scratches, streaks, wrong crop, bent corners, or fingerprints before assembly. Reprint first if the print is not clean." },
        { number: "3", title: "Lay everything out", text: "Use a clean, flat workspace. Keep the print face down only on a clean surface so the image does not pick up dust or marks." },
        { number: "4", title: "Center the image", text: "Position the canvas frame or backing so the image wraps evenly. Check the top, bottom, and sides before securing anything." },
        { number: "5", title: "Wrap and secure the edges", text: "Work opposite sides first, then the remaining sides. Keep tension even so the face stays smooth and the corners do not bunch." },
        { number: "6", title: "Finish the corners", text: "Fold corners neatly and press or secure them flat. The front image should stay square, clean, and free of wrinkles." },
        { number: "7", title: "Quality check and package", text: "Check the front, corners, back, and order label. Package the canvas so the image side is protected until pickup." }
      ]
    },
    "guide-photo-books": {
      title: "Photo Book Assembly",
      description: "Use this when a photo book order is ready to assemble. Keep pages in order, protect the cover, and check the spine before packaging.",
      materialLocation: "Photo book covers, pages, binding pieces, and packaging should be kept with Main Photo product assembly supplies. Match the book size and style to the order.",
      steps: [
        { number: "1", title: "Confirm the book details", text: "Check the customer order for book size, cover style, page count, and quantity before pulling materials." },
        { number: "2", title: "Check page order", text: "Keep all pages in the printed order. Do not shuffle or flip pages while moving them to the assembly area." },
        { number: "3", title: "Inspect the prints", text: "Look for streaks, blank pages, damaged corners, or pages from another order. Fix print issues before binding." },
        { number: "4", title: "Align the pages", text: "Tap the page stack gently on a clean flat surface so the edges line up. Make sure every page faces the correct direction." },
        { number: "5", title: "Attach or bind the book", text: "Use the matching cover and binding method for that book style. Keep the pages seated evenly while closing or securing the spine." },
        { number: "6", title: "Check the spine and page turn", text: "Open the book carefully and make sure pages turn normally, the spine is secure, and no page is loose or upside down." },
        { number: "7", title: "Package for pickup", text: "Wipe away loose paper dust, confirm the order label, and package the book so the cover does not get scratched." }
      ]
    },
    "guide-calendars": {
      title: "Calendar Assembly",
      description: "Use this when a calendar order is ready to finish. Keep months in order, check orientation, and make sure the calendar is clean before pickup.",
      materialLocation: "Calendar pages, binding supplies, hangers, and packaging should be kept with Main Photo product assembly supplies. Match the calendar type and size to the order.",
      steps: [
        { number: "1", title: "Confirm the order", text: "Check the calendar size, quantity, and customer name. Make sure every printed page belongs to the same order." },
        { number: "2", title: "Put pages in order", text: "Arrange the cover and months in the correct sequence. Watch for upside-down or backward pages." },
        { number: "3", title: "Inspect print quality", text: "Check faces, text, edges, and full-page color areas for streaks, smudges, or wrong cropping." },
        { number: "4", title: "Square the stack", text: "Tap the pages into one even stack. The top edge should be straight before binding or fastening." },
        { number: "5", title: "Bind or fasten the calendar", text: "Use the correct binding or assembly pieces for that calendar style. Keep pages aligned while securing them." },
        { number: "6", title: "Check the flip-through", text: "Flip through the finished calendar once. Confirm month order, page direction, and that the hanger or binding is secure." },
        { number: "7", title: "Package carefully", text: "Place the calendar in the correct package with the order information visible and the printed surface protected." }
      ]
    },
    "guide-magnets": {
      title: "Magnet Assembly",
      description: "Use this when a magnet order is ready to assemble. Match the size, keep the print straight, and check the edges before pickup.",
      materialLocation: "Magnet blanks, printed sheets, cutters or templates, and packaging should be kept with Main Photo product assembly supplies. Match the magnet size to the order.",
      steps: [
        { number: "1", title: "Match the order and blank", text: "Confirm the customer name, magnet size, quantity, and photo before opening or using a blank." },
        { number: "2", title: "Inspect the print", text: "Check for streaks, fingerprints, wrong crop, or bent edges. Reprint before assembly if the image is not clean." },
        { number: "3", title: "Align the image", text: "Place the print on the magnet blank or template straight. Check the top and side edges before pressing it down." },
        { number: "4", title: "Apply smoothly", text: "Press from one side across to the other so the print lays flat. Avoid trapping bubbles or creating wrinkles." },
        { number: "5", title: "Trim or separate if needed", text: "If the product requires trimming or separation, follow the product edge and keep the final shape clean." },
        { number: "6", title: "Check the finished magnet", text: "Look at all edges, corners, and the image face. The magnet should be flat, clean, and correctly cropped." },
        { number: "7", title: "Package the order", text: "Package magnets so they do not bend or scratch. Confirm quantity and order label before placing them for pickup." }
      ]
    },
    "guide-specialty": {
      title: "Cards & Specialty Products",
      description: "Use this as the simple flow for cards and specialty photo products until each product gets its own photo guide.",
      materialLocation: "Cards, envelopes, specialty blanks, inserts, and packaging should be kept with Main Photo product assembly supplies. Match product type, size, and quantity to the order.",
      steps: [
        { number: "1", title: "Read the product type", text: "Confirm exactly what the order is: card, envelope set, specialty print, insert, or another photo product." },
        { number: "2", title: "Pull matching materials", text: "Match size, finish, quantity, and any included envelopes or inserts before starting assembly." },
        { number: "3", title: "Inspect every print", text: "Check for streaks, wrong crop, bent corners, upside-down text, or missing pieces. Fix print problems before packaging." },
        { number: "4", title: "Assemble in order", text: "Keep customer pieces grouped together. Fold, insert, attach, or organize items according to the product style." },
        { number: "5", title: "Count the final pieces", text: "Confirm the finished quantity matches the order, including envelopes or extra included parts." },
        { number: "6", title: "Do a pickup-ready check", text: "Make sure the customer-facing side is clean and the order looks professional before it leaves the photo area." },
        { number: "7", title: "Package and label", text: "Package the order so pieces stay together and protected. Confirm the customer label is on the correct order." }
      ]
    },
    "guide-main-printer-checklist": {
      title: "Main Photo Printer Maintenance",
      description: "Use this for basic main-photo printer care before escalating. Start with the screen, paper, print kit, and visible paper path.",
      materialLocation: "Main photo printer paper and print kits are stored with the Main Photo supplies. Match the printer model and supply type before replacing anything.",
      steps: [
        { number: "1", title: "Read the printer screen", text: "Start with the message on the printer. It usually points to paper, print kit, cover, ribbon, jam, or a printer-status issue." },
        { number: "2", title: "Check paper and print kit levels", text: "Confirm the correct paper and print kit are loaded for that printer. Do not mix supplies between printer models." },
        { number: "3", title: "Look for obvious jams", text: "Open only the normal customer-service access areas. Remove loose paper gently, and stop if anything feels stuck." },
        { number: "4", title: "Keep the path clean", text: "Make sure no scraps, labels, tape, or packaging pieces are near the paper path or output area." },
        { number: "5", title: "Close covers fully", text: "After checking supplies, close all doors and covers firmly. Many printer warnings stay active if a cover is slightly open." },
        { number: "6", title: "Run one controlled test", text: "If the issue cleared, run or release one order/test print and inspect it before sending multiple jobs." },
        { number: "7", title: "Escalate repeat issues", text: "If the same issue returns, stop repeated reprints and contact store leadership or the photo help desk." }
      ]
    },
    "guide-kodak-305": {
      title: "Kodak 305 Printer Check",
      description: "Use this when the Kodak 305 needs a quick supply, jam, ribbon, or access-panel check.",
      materialLocation: "Kodak 305 paper and ribbon supplies should stay with the Main Photo printer supplies. Match the Kodak 305 print kit before opening or replacing anything.",
      steps: [
        { number: "1", title: "Start with the printer overview", text: "Identify the Kodak 305 and read the printer status before opening it. Confirm the issue is on this printer, not another Main Photo printer.", image: "assets/main-photo/kodak305/overview.jpg", alt: "In-store overview of the Kodak 305 printer with the front area visible." },
        { number: "2", title: "Find the OPEN button", text: "Use the OPEN button or front handle area shown on the printer. Do not pry the cover or force the panel." },
        { number: "3", title: "Open the front access area", text: "Open the printer slowly and look inside before touching the ribbon or paper path. Watch for loose paper, scraps, or a mis-seated supply.", image: "assets/main-photo/kodak305/open-interior-overview.jpg", alt: "In-store view of the Kodak 305 opened with the interior area visible." },
        { number: "4", title: "Check the ribbon position", text: "Look at the ribbon and handle area. The ribbon should sit cleanly in place and should not be twisted, loose, or hanging out of the path." },
        { number: "5", title: "Use the instruction label", text: "Compare what you see inside the printer to the loading instruction label. If the label and the supply position do not match, stop and reset the supply carefully." },
        { number: "6", title: "Close and listen for the latch", text: "Close the access area firmly but gently. The printer should close evenly without a gap or resistance." },
        { number: "7", title: "Test one print only", text: "After the warning clears, release or run one controlled print and inspect it before sending multiple orders." }
      ]
    },
    "guide-kodak-7000": {
      title: "Kodak 7000 Printer Check",
      description: "Use this when the Kodak 7000 needs a supply, paper compartment, upper-compartment, or loading-reference check.",
      materialLocation: "Kodak 7000 supplies should stay with Main Photo printer supplies. Confirm the supply type and printer model before opening compartments.",
      steps: [
        { number: "1", title: "Read the control panel", text: "Start at the Kodak 7000 screen or control panel. Do not open compartments until you know whether the issue is paper, ribbon, cover, or printer status.", image: "assets/main-photo/kodak7000/control-panel-ready.jpg", alt: "In-store photo of the Kodak 7000 control panel ready screen." },
        { number: "2", title: "Open the top cover", text: "Open the top cover using the normal access point. If the cover does not move normally, stop and escalate instead of forcing it." },
        { number: "3", title: "Inspect ribbon and paper together", text: "Look inside the open printer and check that the ribbon and paper path look seated and straight.", image: "assets/main-photo/kodak7000/open-interior-ribbon-paper.jpg", alt: "In-store view inside the Kodak 7000 showing the ribbon and paper area." },
        { number: "4", title: "Check the upper compartment label", text: "Use the upper-compartment label as the reference for how the internal area should look. Do not guess if the label does not match what you see." },
        { number: "5", title: "Check the paper compartment", text: "Open the paper compartment only as intended. Look for loose paper, incorrect loading, or pieces blocking the path." },
        { number: "6", title: "Use the loading reference", text: "Compare the paper compartment to the loading-instruction reference before closing the printer." },
        { number: "7", title: "Close and test", text: "Close each compartment fully, confirm the message cleared, then run one controlled test or order print." }
      ]
    },
    "guide-kodak-8810": {
      title: "Kodak 8810 Printer Check",
      description: "Use this when the Kodak 8810 needs a paper-roll, side-panel, ribbon-compartment, or installed-ribbon check.",
      materialLocation: "Kodak 8810 paper and ribbon supplies should stay with Main Photo printer supplies. Match the supply to the Kodak 8810 before replacing anything.",
      steps: [
        { number: "1", title: "Confirm the printer is ready", text: "Identify the Kodak 8810 and read the status before opening the printer. Confirm the issue belongs to this printer.", image: "assets/main-photo/kodak8810/printer-overview-ready.jpg", alt: "In-store overview of the Kodak 8810 printer in the ready position." },
        { number: "2", title: "Locate the side latch", text: "Find the side latch area first. Open the panel using the latch, not by pulling on the panel edge." },
        { number: "3", title: "Open the side panel", text: "Swing the side panel open slowly and stop if the panel catches or feels blocked.", image: "assets/main-photo/kodak8810/side-panel-open.jpg", alt: "In-store view of the Kodak 8810 with the side panel open." },
        { number: "4", title: "Check the installed paper roll", text: "Look at the paper roll area. The roll should sit evenly and feed without loose paper bunching inside the printer." },
        { number: "5", title: "Check the ribbon compartment", text: "Inspect the ribbon compartment and compare it with the loading reference. The ribbon should be seated cleanly." },
        { number: "6", title: "Verify the ribbon is installed", text: "Make sure the ribbon is fully installed and not twisted, slack, or out of its normal path." },
        { number: "7", title: "Close, clear, and test", text: "Close the side panel fully, confirm the warning clears, and run one controlled print before continuing the queue." }
      ]
    },
    "guide-cx3240": {
      title: "Fujifilm CX3240 Paper Check",
      description: "Use this when the CX3240 needs a paper tray, output tray, or paper-guide check.",
      materialLocation: "CX3240 paper should stay with the Main Photo printer supplies. Confirm paper size and orientation before loading the tray.",
      steps: [
        { number: "1", title: "Identify the CX3240", text: "Start from the printer overview and confirm the issue is on the Fujifilm CX3240.", image: "assets/main-photo/cx3240/printer-overview.jpg", alt: "In-store overview of the Fujifilm CX3240 printer." },
        { number: "2", title: "Open the output tray", text: "Make sure the output tray is open and has enough room for finished prints to exit cleanly." },
        { number: "3", title: "Check the loaded paper", text: "Open or inspect the paper tray and confirm paper is loaded flat, clean, and facing the correct direction.", image: "assets/main-photo/cx3240/paper-loaded-in-tray.jpg", alt: "In-store view of paper loaded flat in the Fujifilm CX3240 tray." },
        { number: "4", title: "Set the paper guides", text: "Slide the paper guides so they touch the paper stack without bending it. Crooked guides can cause skewed prints or jams." },
        { number: "5", title: "Remove obvious obstructions", text: "Check for loose scraps, bent paper, packaging pieces, or anything blocking the tray or output path." },
        { number: "6", title: "Close the tray fully", text: "Push the tray back in straight and make sure it seats fully before releasing another print." },
        { number: "7", title: "Print one controlled test", text: "After the message clears, release one print and watch the output path before sending more work." }
      ]
    },
    "guide-kodak-kiosk": {
      title: "Kodak Kiosk Basic Check",
      description: "Use this when a Kodak kiosk needs a simple station, side-door, or visible-interior check before escalation.",
      materialLocation: "Start at the customer-facing kiosk station. Keep customer media, cables, and loose parts organized and do not remove anything that is not part of the normal access area.",
      steps: [
        { number: "1", title: "Start at the front station", text: "Check the kiosk screen, scanner area, visible cables, and customer-facing work area before opening anything.", image: "assets/main-photo/kiosk/front-overview.jpg", alt: "In-store overview of the Kodak kiosk front station." },
        { number: "2", title: "Confirm the symptom", text: "Identify whether the issue is screen response, card/media reading, printer communication, payment flow, or a visible hardware problem." },
        { number: "3", title: "Open only the normal side door", text: "Use the normal side-door access point if the issue calls for an interior check. Do not force locked or restricted panels." },
        { number: "4", title: "Look inside before touching", text: "Check for loose cables, blocked airflow, visible paper scraps, or items that clearly do not belong inside the kiosk.", image: "assets/main-photo/kiosk/side-door-open-interior.jpg", alt: "In-store view inside the Kodak kiosk side door." },
        { number: "5", title: "Do not unplug randomly", text: "Avoid unplugging cables unless the store process or help desk directs you to. Random resets can make the issue harder to diagnose." },
        { number: "6", title: "Close the door fully", text: "Close the side door securely and confirm the kiosk returns to the expected screen or status." },
        { number: "7", title: "Escalate with clear details", text: "If the issue remains, note the screen message, what area you checked, and whether the side-door interior looked normal." }
      ]
    },
    "main-troubleshooting": {
      title: "Main Photo Printer Troubleshooting",
      description: "Use this when Main Photo output is delayed, jammed, poor quality, or not matching the order.",
      materialLocation: "Start at the printer screen, the pending order queue, and the finished output area. Most issues come from printer status, supply mismatch, jams, or order mix-ups.",
      steps: [
        { number: "1", title: "Identify the symptom", text: "Decide whether the problem is no print, jammed paper, poor quality, missing order, wrong crop, or customer-order confusion." },
        { number: "2", title: "Check the order queue", text: "Confirm the order is released to the correct printer and has not already printed or moved to another area." },
        { number: "3", title: "Read the printer message", text: "Use the printer screen before opening anything. The message should guide the next check." },
        { number: "4", title: "Check supplies", text: "Confirm paper, ribbon, print kit, and product size match the order and printer model." },
        { number: "5", title: "Inspect output quality", text: "For streaks, color issues, scratches, or crop problems, inspect one sample before reprinting a full order." },
        { number: "6", title: "Protect customer orders", text: "Keep questionable prints separate from pickup-ready orders so the wrong item does not reach the customer." },
        { number: "7", title: "Escalate with details", text: "If the issue repeats, note the order type, printer message, supply checked, and what happened after one retry." }
      ]
    },
    "guide-photo-checkout": {
      title: "Photo Checkout",
      description: "Use this when a customer is picking up a completed photo order at the register.",
      materialLocation: "Completed photo orders should be staged in the photo pickup area or the store's designated completed-order location. Match the customer name and order details before ringing anything out.",
      steps: [
        { number: "1", title: "Greet and identify the order", text: "Ask for the customer name, order type, or pickup information. Do not hand over a photo order until you are confident it is the right customer." },
        { number: "2", title: "Find the completed package", text: "Look in the completed photo pickup area. Match the name, order number, product type, and quantity when available." },
        { number: "3", title: "Check that it is pickup-ready", text: "Make sure the package is sealed or organized, the prints/products look complete, and nothing appears damaged or mixed with another order." },
        { number: "4", title: "Bring the order to IPOS", text: "Keep the order with you at the register. Avoid setting it where it can be confused with another customer's items." },
        { number: "5", title: "Scan or enter the pickup sale", text: "Use the register's photo checkout flow, barcode, QR, or order lookup process available at your store." },
        { number: "6", title: "Confirm price and payment", text: "Confirm the sale total shown on IPOS and complete payment through the normal register process." },
        { number: "7", title: "Hand off and close the loop", text: "Give the completed order to the customer after checkout is complete. If anything does not match, pause and ask store leadership or a photo-trained colleague." }
      ]
    },
    "guide-qr-pickup": {
      title: "QR Pickup Scan",
      description: "Use this when the customer or package has a QR code connected to a photo pickup order.",
      materialLocation: "QR pickup information may be on the customer's phone, printed order paperwork, pickup label, or the completed photo package depending on the store workflow.",
      steps: [
        { number: "1", title: "Start with the QR source", text: "Ask the customer to show the pickup QR or locate the QR on the photo package or paperwork." },
        { number: "2", title: "Open the scanner flow", text: "Use the register or pickup scanner flow available at IPOS. Keep the photo order nearby while scanning." },
        { number: "3", title: "Scan steadily", text: "Hold the QR flat and in good light. If scanning from a phone, ask the customer to brighten the screen and avoid glare." },
        { number: "4", title: "Confirm the order details", text: "After the scan, compare the displayed name, product type, and quantity against the physical order before completing checkout." },
        { number: "5", title: "Handle scan failures calmly", text: "If the QR will not scan, try adjusting distance and lighting once. Then use the backup order lookup or ask a photo-trained colleague." },
        { number: "6", title: "Complete checkout", text: "Finish the sale through the register once the order and customer match." },
        { number: "7", title: "Escalate mismatches", text: "If the scan opens a different order, wrong name, wrong quantity, or no order, stop and ask store leadership before handing anything over." }
      ]
    },
    "guide-register-troubleshooting": {
      title: "Register Troubleshooting",
      description: "Use this when IPOS will not complete a photo checkout or the pickup order does not appear correctly.",
      materialLocation: "Start at IPOS with the physical photo order, pickup label, customer information, and any QR or barcode available.",
      steps: [
        { number: "1", title: "Identify the failure point", text: "Decide whether the issue is scanning, order lookup, price mismatch, payment, register response, or order/customer mismatch." },
        { number: "2", title: "Check the physical order", text: "Confirm the package is complete and that the label, name, order type, and quantity make sense before trying again." },
        { number: "3", title: "Try one clean scan or lookup", text: "Rescan the barcode or QR once, or re-enter lookup information carefully. Repeating the same failed scan many times usually does not help." },
        { number: "4", title: "Check for simple register issues", text: "Make sure the scanner is awake, the register is on the correct screen, and the customer transaction is not stuck in another flow." },
        { number: "5", title: "Avoid forcing a workaround", text: "Do not ring the order as a random item if the photo checkout information does not match. That can create pickup, pricing, or inventory confusion." },
        { number: "6", title: "Ask for the right help", text: "If the order exists but IPOS will not process it, ask store leadership, a photo-trained colleague, or register support according to store process." },
        { number: "7", title: "Keep the order protected", text: "If checkout cannot be completed immediately, keep the order in the designated photo area until the issue is resolved." }
      ]
    },
    "guide-customer-questions": {
      title: "Common Customer Questions",
      description: "Use this when a customer asks about a photo pickup, missing order, wrong item, damaged product, or basic next step.",
      materialLocation: "Start with the customer's pickup information and the completed-order area. Keep customer photos private and only open or inspect what is needed to resolve the question.",
      steps: [
        { number: "1", title: "Listen for the exact question", text: "Clarify whether the customer is asking where the order is, whether it is ready, why it looks wrong, how to pay, or what happens next." },
        { number: "2", title: "Ask for pickup details", text: "Use the customer name, order number, phone/email pickup information, or product type to locate the right order." },
        { number: "3", title: "Check completed orders first", text: "Look in the completed photo pickup area before assuming the order is missing." },
        { number: "4", title: "Check pending or problem status", text: "If the order is not completed, check the photo system or ask a photo-trained colleague to see whether it is pending, printing, failed, or needs attention." },
        { number: "5", title: "Protect privacy", text: "Do not show another customer's photos or order details. Keep packages closed unless checking the customer's own order is necessary." },
        { number: "6", title: "Explain only what you know", text: "Give the customer the clear next step. Avoid guessing about timing, refunds, remakes, or exceptions if you are not sure." },
        { number: "7", title: "Escalate sensitive issues", text: "For damaged products, missing paid orders, wrong customer photos, refunds, or upset customers, involve store leadership or a photo-trained colleague." }
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
