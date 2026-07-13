const PE_DATA = {
  version: "2.6",
  home: {
    title: "Select Your Workstation",
    description: "Choose the area where you need help. QR codes link directly to each workstation.",
    cards: [
      { id: "main-photo", icon: "MP", title: "Main Photo Printer & Assembly", description: "Order processing, product assembly, printer basics, supplies, and item numbers." },
      { id: "poster-printer", icon: "PP", title: "Poster Printer", description: "Poster media, ink, paper loading, large-format products, and packaging." },
      { id: "ipos", icon: "$", title: "IPOS Register", description: "Photo checkout, QR pickup scanning, and waiting-bin placement." }
    ]
  },
  pages: {
    "main-photo": {
      title: "Main Photo Printer & Assembly",
      description: "Use this hub for basic order processing, product assembly, printer supplies, and packaging.",
      cards: [
        { id: "main-products", icon: "BOX", title: "Product Guides", description: "Canvas, books, calendars, magnets, wall tile, and specialty products." },
        { id: "main-supplies", icon: "#", title: "Supplies & Item Numbers", description: "Look up supply names, item numbers, and notes." },
        { id: "main-maintenance", icon: "MT", title: "Printer Basics", description: "Choose the printer in front of you and follow its basic paper, ribbon, or supply steps." }
      ]
    },
    "main-products": {
      title: "Product Guides",
      description: "Select the photo product you are making.",
      cards: [
        { id: "guide-canvas", icon: "CV", title: "Canvas", description: "Gather the kit, inspect the print, wrap the canvas, and quality check the corners." },
        { id: "guide-photo-books", icon: "BK", title: "Photo Books", description: "Assemble the custom cover layflat clamp photobook and check the finished spine." },
        { id: "guide-calendars", icon: "CAL", title: "Calendars", description: "Use the 8x10 single-sided calendar guide to align, attach, and check the finished calendar." },
        { id: "guide-magnets", icon: "MAG", title: "Magnets", description: "Trim and assemble acrylic magnets with the acrylic front, back, and sleeve." },
        { id: "guide-specialty", icon: "SP", title: "Wall Tile & Specialty", description: "Assemble wall tile orders and use the specialty product quality check before pickup." },
        { id: "guide-photo-puzzle", icon: "PZ", title: "Photo Puzzle", description: "Print the puzzle sheet, keep the pieces intact, and package it with the box." },
        { id: "guide-wooden-hangbar", icon: "HB", title: "Wooden Hangbar Canvas", description: "Install the wood bars, plugs, and string, then roll and package it." },
        { id: "guide-yard-sign", icon: "YS", title: "Yard Sign", description: "Fold the vinyl sign, attach the clips and tabs, and install the stake." }
      ]
    },
    "main-maintenance": {
      title: "Main Photo Printer Basics",
      description: "Choose the printer in front of you. Each guide identifies the normal access point, paper or ribbon area, and final ready check.",
      cards: [
        { id: "guide-kodak-305", icon: "305", title: "Kodak 305 Printer", description: "Open the printer, check the ribbon and instruction label, close it correctly, and test one print." },
        { id: "guide-kodak-7000", icon: "7K", title: "Kodak 7000 Printer", description: "Check the control panel, top cover, upper compartment, paper area, and loading reference label." },
        { id: "guide-kodak-8810", icon: "88", title: "Kodak 8810 Printer", description: "Check the side latch, side panel, paper roll, ribbon compartment, and installed ribbon." },
        { id: "guide-cx3240", icon: "CX", title: "Fujifilm CX3240", description: "Open the output tray, confirm paper is loaded, set paper guides, and check output flow." },
        { id: "guide-kodak-kiosk", icon: "KS", title: "Kodak Kiosk", description: "Identify the kiosk, keep the station ready, and use only the normal front-store access area." }
      ]
    },
    "poster-printer": {
      title: "Poster Printer",
      description: "Use this hub for basic poster printing, roll media, ink, banners, puzzles, and packaging.",
      cards: [
        { id: "poster-supplies", icon: "#", title: "Supplies & Item Numbers", description: "Ink, paper rolls, item numbers, and notes." },
        { id: "guide-load-paper", icon: "RL", title: "Load Roll Paper", description: "Material location and step-by-step Epson P6000 loading instructions." },
        { id: "guide-replace-ink", icon: "INK", title: "Replace Ink", description: "Ink location and step-by-step replacement instructions." },
        { id: "guide-print-poster", icon: "PR", title: "Print & Package a Poster", description: "Check the material, release the order, protect the output, and package it." },
        { id: "guide-vinyl-banner", icon: "BN", title: "Finish a Vinyl Banner", description: "Apply clear grommets, punch the centers, and roll the banner safely." },
        { id: "guide-photo-puzzle", icon: "PZ", title: "Print a Photo Puzzle", description: "Feed the puzzle sheet straight, support it, and package it without separating the pieces." }
      ]
    },
    "ipos": {
      title: "IPOS Register",
      description: "Use this hub for register-side photo checkout support. IPOS rings up the order and scans the pickup QR.",
      cards: [
        { id: "guide-photo-checkout", icon: "$", title: "Photo Checkout", description: "Find the completed order and follow the checkout steps." },
        { id: "guide-waiting-bin", icon: "WB", title: "Waiting Bin", description: "Package, label, and file a completed order so it can be found quickly." }
      ]
    }
  },
  supplies: {
    "main-supplies": {
      title: "Main Photo Supplies",
      description: "Use this reference to identify common Main Photo supplies, item numbers, and counting notes.",
      rows: [
        ["Print Kit", "Kodak 7000 / 6R Photo Print Kit", "CAT 109 6650", "Use with Kodak 7000 / 6R printer"],
        ["Print Kit", "Kodak 8800 / 8810L Photo Print Kit", "CAT 109 0786", "Use with Kodak 8800 / 8810L printer"],
        ["Print Kit", "Kodak 305 5R Print Kit", "252064", "Count whole/half"],
        ["Assembly", "8x10 Slide-In Calendar", "551915", "New photo product / calendar guide"],
        ["Assembly", "Photo Book Covers 8x10", "439957", "Photo book cover supply"],
        ["Assembly", "Photo Panel 4x6", "212120", "Case pack of 10 pieces"],
        ["Assembly", "Photo Panel 6x8", "212116", "Case pack of 10 pieces"],
        ["Assembly", "Photo Panel 8x10", "212117", "Case pack of 10 pieces"],
        ["Assembly", "Solid Wood Photo Panel 8x10", "354391", "Case pack of 6 pieces"],
        ["Assembly", "Acrylic Photo with Stand 8x10", "398489", "Case pack of 10 pieces"],
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
      description: "Use this page first when you are not sure where to start. It points you to the correct paper, ink, output, and packaging steps.",
      heroLabel: "Poster printer overview",
      heroTitle: "Start with the printer, then choose the right next action",
      heroText: "The P6000 handles large-format poster material. Check the loaded roll, the ink area, the output catcher, and the screen message before changing anything.",
      heroImage: "assets/p6000/overview.jpg",
      heroAlt: "In-store overview of the Epson SureColor P6000 poster printer area with paper rolls nearby.",
      actions: [
        { label: "Paper", title: "Load Roll Paper", text: "Use when the roll is empty, wrong, loose, or needs to be seated again.", target: "guide-load-paper" },
        { label: "Ink", title: "Replace Ink", text: "Use when the printer asks for a cartridge or a color is empty.", target: "guide-replace-ink" },
        { label: "#", title: "Item Numbers", text: "Use when you need paper, vinyl, sticker material, metallic paper, or ink item numbers.", target: "poster-supplies" },
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
            "If the order printed poorly, keep it separate from pickup-ready work and stop before wasting more material."
          ]
        },
        {
          label: "Stop points",
          title: "When to stop the basic task",
          items: [
            "Stop if a part feels stuck or you have to force the roll, adapter, cover, or ink cartridge.",
            "Stop if the printer reports a service error that does not clear after the basic checks.",
            "Stop if the same order fails twice after paper, ink, and material settings look correct.",
            "Do not continue when the printer state does not match the basic guide."
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
        "The correct ink color and slot are confirmed.",
        "Output catcher is ready for the print.",
        "The screen is ready before sending or resending the order."
      ]
    }
  },
  employeeGuides: {
    "guide-package-order": {
      title: "Package a Finished Photo Order",
      description: "Finish every order the same way so the customer receives the right product and another colleague can find it quickly.",
      materialLocation: "Use the package supplied for the product whenever one is included. Standard print envelopes, product boxes, bags, and order labels are kept in the Photo finishing area.",
      steps: [
        { number: "1", title: "Match the order again", text: "Compare the customer name, product, size, and quantity on the order summary to the finished pieces." },
        { number: "2", title: "Do a final quality check", text: "Look for fingerprints, scratches, bent corners, missing pages, loose parts, incorrect orientation, and damaged packaging." },
        { number: "3", title: "Use the correct package", text: "Return specialty products to their supplied sleeve or box. Place prints flat in the correct envelope. Do not force a product into undersized packaging." },
        { number: "4", title: "Keep accessories with it", text: "Include every envelope, stand, spacer, hanging part, instruction sheet, or separate printed piece that belongs to the order." },
        { number: "5", title: "Attach the correct label", text: "Make sure the label belongs to the same customer and order. Keep the name and pickup information readable." },
        { number: "6", title: "Place it in Waiting Bin", text: "File the order in the correct waiting-bin location with the identifying label visible and the product protected from bending." }
      ]
    },
    "guide-print-poster": {
      title: "Print and Package a Poster",
      description: "Use this after the correct roll material is loaded in the Epson P6000.",
      materialLocation: "Poster paper, repositionable material, vinyl, metallic media, packaging tubes, and the reusable roll adapters are stored in the poster-printer supply area.",
      steps: [
        { number: "1", title: "Read the product and material", text: "Confirm whether the order is a poster, repositionable print, vinyl banner, or another large-format product." },
        { number: "2", title: "Check the loaded roll", text: "Open the roll-paper cover only if needed. Confirm the roll matches the order and the paper edge is feeding straight." },
        { number: "3", title: "Prepare the output area", text: "Position the catcher and clear the floor so the print cannot drag, fold, or hit another object." },
        { number: "4", title: "Release the order in Apex", text: "Release the correct order only after the printer shows ready and the matching material is loaded." },
        { number: "5", title: "Support and inspect the print", text: "Handle the output by clean edges. Check the image, size, surface, and trimming before packaging." },
        { number: "6", title: "Package without creasing", text: "Roll ordinary posters with the printed surface protected and place them in the correct tube. Use the product-specific guide for banners or puzzles." }
      ]
    },
    "guide-photo-puzzle": {
      title: "Print and Package a Photo Puzzle",
      description: "Keep the puzzle sheet whole from printer to customer bag. Never separate the pieces.",
      materialLocation: "Each order needs one puzzle sheet, one puzzle box, and one customer bag. Keep all three together before printing.",
      steps: [
        { number: "1", title: "Feed the puzzle sheet vertically", text: "Carefully hold the puzzle sheet by its edges and feed it vertically into the printer. Keep the 3 x 4 rectangle at the top and align the sheet edge straight with the printer." },
        { number: "2", title: "Support the printed sheet", text: "When printing is complete, carefully remove the puzzle sheet and support it from the bottom with both hands." },
        { number: "3", title: "Place it in the customer bag", text: "Place the printed puzzle sheet in the customer bag with the picture side facing up. Keep every puzzle piece connected." }
      ]
    },
    "guide-vinyl-banner": {
      title: "Finish a Vinyl Banner",
      description: "Apply each clear adhesive grommet at its printed mark, punch the center, and roll the banner safely.",
      materialLocation: "Vinyl banner media and clear adhesive grommets are kept with poster supplies. A handheld hole punch is required for the grommet centers.",
      steps: [
        { number: "1", title: "Print on vinyl media", text: "Load the vinyl roll, release the correct banner order in Apex, and let the banner finish before touching the printed surface." },
        { number: "2", title: "Peel one grommet", text: "Remove one clear adhesive grommet from its sheet without touching more adhesive than necessary.", image: "assets/generated-guides/banner-step-1.webp", alt: "Color close-up of a clear adhesive banner grommet being peeled from its sheet." },
        { number: "3", title: "Center it on the cross mark", text: "Line up the grommet edges with the banner edge. The printed cross mark should sit at the grommet center.", image: "assets/generated-guides/banner-step-2.webp", alt: "Color close-up of a clear grommet centered over the banner cross mark." },
        { number: "4", title: "Fold and press", text: "Stick one half to the banner face, fold the other half over the edge, and press firmly on a solid counter.", image: "assets/generated-guides/banner-step-3.webp", alt: "Color close-up of a clear adhesive grommet folded over the vinyl edge and pressed firmly." },
        { number: "5", title: "Punch the center", text: "Slide the grommet into the hole-punch gate and squeeze through the exact center. Repeat for every printed mark.", image: "assets/generated-guides/banner-step-4.webp", alt: "Color close-up of a handheld punch piercing the exact center of a clear banner grommet." },
        { number: "6", title: "Roll print-side inward", text: "Inspect every grommet, then roll the completed banner with the printed surface facing inward to protect it.", image: "assets/generated-guides/banner-step-4.webp", alt: "Completed vinyl banner rolled with the printed surface facing inward for protection." }
      ]
    },
    "guide-wooden-hangbar": {
      title: "Assemble a Wooden Hangbar Canvas",
      description: "Attach the two wooden bars and hanging string, then roll and box the finished canvas.",
      materialLocation: "The kit contains two wooden hangbars, four plastic plugs, one hanging string, one printed canvas, and packaging paper or box.",
      steps: [
        { number: "1", title: "Feed the canvas into the printer", text: "Feed the canvas into the printer with the pre-punched holes at the top and bottom." },
        { number: "2", title: "Peel the canvas from the backer", text: "After printing, peel the printed canvas carefully off the backing sheet." },
        { number: "3", title: "Place the top wooden bar", text: "Place one wooden hangbar front side down on a clean work surface with its holes facing up." },
        { number: "4", title: "Insert the hanging string", text: "Insert the string into the channel on the back of the wooden bar and seat the knot in the slot." },
        { number: "5", title: "Insert the canvas into the top slot", text: "Place the canvas printed side down with its holes facing up. Insert the top edge into the bar slot and line up the canvas holes with the bar holes." },
        { number: "6", title: "Insert the top plastic plugs", text: "Push the plastic plugs through the white back side of the canvas into the top wooden bar." },
        { number: "7", title: "Install the bottom wooden bar", text: "Install the bottom bar with the white canvas side at the back. Insert its plugs through the white side of the canvas." },
        { number: "8", title: "Cover the print with packaging paper", text: "Place the supplied packaging paper on top of the printed canvas." },
        { number: "9", title: "Roll the canvas", text: "Slowly roll the bottom wooden bar toward the top wooden bar." },
        { number: "10", title: "Keep the roll tight", text: "Make sure the printed canvas is tightly and evenly rolled." },
        { number: "11", title: "Slide it into the box", text: "Carefully slide the rolled canvas into the provided packaging box." }
      ]
    },
    "guide-yard-sign": {
      title: "Assemble a Yard Sign",
      description: "Fold the printed vinyl, secure the clips, and install the metal stake.",
      materialLocation: "Each yard sign uses one metal stake, three adhesive tabs on each sign sheet, two plastic clips, and one printed vinyl sign.",
      steps: [
        { number: "1", title: "Set up the print", text: "Print the yard-sign sheet and place it on a clean work surface." },
        { number: "2", title: "Fold the yard sign in half", text: "Fold the printed vinyl exactly in half. The vinyl is intentionally shorter than the middle bar of the stake." },
        { number: "3", title: "Apply the corner tabs", text: "Start at a bottom corner. Place a corner adhesive tab so it can wrap around the edge. Repeat at the other bottom corner." },
        { number: "4", title: "Apply the middle tab", text: "Center the middle adhesive tab with one side in the middle and the bottom sticking off. Peel off the adhesive liner and wrap it around to the back." },
        { number: "5", title: "Push both clips onto the wire", text: "Keep the round side of each plastic clip facing the top of the sign. Line each clip up over a bottom adhesive tab and push it onto the wire until it clips in place." },
        { number: "6", title: "Align the clips with the vinyl", text: "Make sure the bottom of both plastic clips aligns with the bottom edge of the vinyl before packaging the finished sign." }
      ]
    },
    "guide-waiting-bin": {
      title: "Place an Order in Waiting Bin",
      description: "File completed Photo orders so the next colleague can locate the correct customer quickly.",
      materialLocation: "Use the store's labeled Photo waiting-bin area. Keep large or fragile products in their designated protected location rather than forcing them into an envelope slot.",
      steps: [
        { number: "1", title: "Confirm the order is complete", text: "Count the finished products and accessories against the order summary before filing anything.", image: "assets/generated-guides/order-step-3.webp", alt: "Finished photo prints counted together before the order is filed for pickup." },
        { number: "2", title: "Read the customer label", text: "Confirm the customer name and order information are readable and match the product inside the package.", image: "assets/generated-guides/order-step-4.webp", alt: "Sealed photo envelope with a blank label area ready for the correct order information." },
        { number: "3", title: "Keep one order together", text: "If an order uses more than one bag or box, secure and mark the pieces so they are retrieved together.", image: "assets/generated-guides/pickup-step-2.webp", alt: "One complete sealed photo order kept together at the pickup counter." },
        { number: "4", title: "Choose the correct location", text: "File ordinary envelopes in the correct waiting-bin section. Put oversized, rigid, or fragile products in the designated large-order area.", image: "assets/generated-guides/pickup-step-1.webp", alt: "Organized waiting bin with sealed photo envelopes filed upright in separate sections." },
        { number: "5", title: "Leave the identifier visible", text: "Position the package so another colleague can read the label without opening or moving unrelated customer orders.", image: "assets/generated-guides/pickup-step-1.webp", alt: "Sealed photo envelopes positioned in the waiting bin with their blank label areas visible." },
        { number: "6", title: "Protect the product", text: "Keep prints flat, canvases upright or boxed, and large products away from moisture, bending, or floor contact.", image: "assets/generated-guides/pickup-step-1.webp", alt: "Protected sealed photo orders stored upright in a clean organized waiting bin." }
      ]
    },
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
        { number: "1", title: "Read the screen first", text: "Use the printer screen to identify the exact ink color that needs attention. Do not remove a cartridge until you know the color.", image: "assets/p6000/ink/color-map-label.jpg", alt: "In-store Epson P6000 ink color guide label showing the cartridge color positions." },
        { number: "2", title: "Find the matching cartridge", text: "Match the color code on the replacement cartridge to the color shown by the printer. Similar-looking colors are not interchangeable.", image: "assets/p6000/ink/cartridge-labels.jpg", alt: "Close-up of Epson ink cartridges installed in the printer with visible color labels." },
        { number: "3", title: "Open the ink door", text: "Open the side ink door using the normal latch area. Keep the new cartridge nearby, but leave it sealed until you are ready to install it.", image: "assets/p6000/ink/ink-door-latch.jpg", alt: "Close-up of the Epson P6000 ink door latch location." },
        { number: "4", title: "Check the cartridge row", text: "Before touching anything, compare the cartridge row to the color label. Confirm you are working on the exact slot the printer called out.", image: "assets/p6000/ink/installed-cartridges.jpg", alt: "In-store view of Epson P6000 ink cartridges installed behind the opened side door." },
        { number: "5", title: "Release the old cartridge", text: "Press the cartridge straight in at the labeled PUSH area to release it, then pull it straight out. Do not twist, pry, or force the cartridge.", image: "assets/p6000/ink/push-cartridge.jpg", alt: "Close-up of a hand pointing at the PUSH area on an Epson P6000 ink cartridge." },
        { number: "6", title: "Install the new cartridge", text: "Slide the new cartridge into the same slot with the label facing the correct direction. Push until it seats fully, then close the ink door.", image: "assets/p6000/ink/open-ink-door.jpg", alt: "In-store photo of the Epson P6000 side ink door being opened." },
        { number: "7", title: "Confirm the warning cleared", text: "Check the printer screen again. If the same warning stays on, recheck the color and slot once and stop instead of repeatedly removing cartridges.", image: "assets/p6000/ink/color-map-label.jpg", alt: "Epson P6000 ink color map used for a final color and slot check." }
      ]
    },
    "guide-canvas": {
      title: "Canvas Assembly",
      description: "Use this when an 11x14 canvas frame order is ready to finish. Assemble the canvas print first, then snap it into the frame and package it cleanly.",
      materialLocation: "Canvas frames and gift boxes should be kept with Main Photo product assembly supplies. Match the order size before opening the red gift box.",
      steps: [
        { number: "1", title: "Assemble the canvas print first", text: "Make sure the canvas print is already assembled on the canvas stretcher. Do not apply the back to the canvas print before framing it.", image: "assets/main-photo/assembly/steps-v4/canvas-step-1.jpg", alt: "Clean demonstration image showing the assembled canvas print before using the frame." },
        { number: "2", title: "Remove and save the packaging", text: "Take the canvas frame out of the red gift box and remove the protective bubble bag. Keep the bubble bag and box for final packaging.", image: "assets/main-photo/assembly/steps-v4/canvas-step-2.jpg", alt: "Clean demonstration image showing the canvas frame removed from the box with packaging saved." },
        { number: "3", title: "Center and press the canvas", text: "Place the frame flat on the counter, center the assembled canvas print over the face of the frame, then press gently around the edges until the hooks lock on all four sides.", image: "assets/main-photo/assembly/steps-v4/canvas-step-3.jpg", alt: "Clean demonstration image showing the canvas centered and pressed into the frame." },
        { number: "4", title: "Package the finished canvas", text: "Check that the canvas is straight, seated, and clean. Place it back into the bubble bag, then into the red cardboard gift box with the order information attached.", image: "assets/main-photo/assembly/steps-v4/canvas-step-4.jpg", alt: "Clean demonstration image showing the finished canvas ready for packaging." }
      ]
    },
    "guide-photo-books": {
      title: "Photo Book Assembly",
      description: "Use this for the custom cover layflat clamp photobook. Keep the printed cover aligned, wrap it around the black photobook, then slide the pages into the clamp.",
      materialLocation: "Photo book covers, black photobooks, clamp slides, printed covers, printed layflat pages, and packaging should be kept with Main Photo product assembly supplies. Match the book size before starting.",
      steps: [
        { number: "1", title: "Gather the required pieces", text: "You need the white printed cover, black photobook, printed layflat pages, and clamp slide. Keep the order together before peeling any liners.", image: "assets/main-photo/assembly/steps-v4/photobook-step-1-materials.jpg", alt: "Clean demonstration image showing the cover, black photobook, printed pages, and clamp slide." },
        { number: "2", title: "Print and inspect the cover", text: "Print the white cover and check that it is straight, clean, and facing the correct direction before attaching it to the book.", image: "assets/main-photo/assembly/steps-v4/photobook-step-2-print-cover.jpg", alt: "Clean demonstration image showing the white cover printed straight." },
        { number: "3", title: "Place the cover face down", text: "Lay the printed cover face down on a clean flat surface. Remove only the small thin white liners shown in the reference step.", image: "assets/main-photo/assembly/steps-v4/photobook-step-3-lay-cover.jpg", alt: "Clean demonstration image showing the cover face down with small liners removed." },
        { number: "4", title: "Stand the black photobook upright", text: "Place the black photobook upright on the printed cover and align the spine before wrapping.", image: "assets/main-photo/assembly/steps-v4/photobook-step-4-stand-book.jpg", alt: "Clean demonstration image showing the black photobook standing on the cover." },
        { number: "5", title: "Wrap and press the cover", text: "Wrap the printed cover around the black photobook, fold in the flaps, and press along the front edge and spine so the cover sticks cleanly.", image: "assets/main-photo/assembly/steps-v4/photobook-step-5-wrap-cover.jpg", alt: "Clean demonstration image showing the printed cover wrapped around the photobook." },
        { number: "6", title: "Attach the back and inside flaps", text: "Flip the book as shown on the reference sheet, peel the remaining liners, and adhere the back cover and inside flap without wrinkles.", image: "assets/main-photo/assembly/steps-v4/photobook-step-6-attach-flaps.jpg", alt: "Clean demonstration image showing the back and inside flaps being attached." },
        { number: "7", title: "Insert pages and clamp the spine", text: "Slide the printed pages onto the clamp slide with the photos close to the edge nearest the clamp, then fold the photobook inside out and slide the clamp through both guides to finish.", image: "assets/main-photo/assembly/steps-v4/photobook-step-7-clamp-pages.jpg", alt: "Clean demonstration image showing printed pages and the clamp slide installed at the spine." }
      ]
    },
    "guide-calendars": {
      title: "8x10 Single-Sided Calendar Assembly",
      description: "Use this for the 8x10 single-sided calendar guide. Line up the calendar, attach the cover cleanly, then repeat until the calendar is complete.",
      materialLocation: "8x10 single-sided calendar materials are stored with Main Photo product assembly supplies. The supply box label shown in the photos lists item 551915.",
      steps: [
        { number: "1", title: "Line up the calendar", text: "Line up the calendar with the top of the guide. Keep the spiral edge straight and seated against the guide.", image: "assets/main-photo/assembly/steps-v4/calendar-step-1-line-up.jpg", alt: "Clean demonstration image showing the calendar lined up with the top of the guide." },
        { number: "2", title: "Place it in the guide", text: "Place the calendar in the guide with the polycover outside the guide, as shown on the instruction sheet.", image: "assets/main-photo/assembly/steps-v4/calendar-step-2-place-guide.jpg", alt: "Clean demonstration image showing the calendar placed in the guide with the polycover outside." },
        { number: "3", title: "Peel the liner", text: "Peel off the white liner to expose the adhesive on the end sheet. Avoid touching the adhesive with your fingers.", image: "assets/main-photo/assembly/steps-v4/calendar-step-3-peel-liner.jpg", alt: "Clean demonstration image showing the white liner peeled away from the adhesive end sheet." },
        { number: "4", title: "Align and press the cover", text: "Align the cover page along the bottom and side edges of the guide. Run your finger over the cover so the adhesive sticks smoothly.", image: "assets/main-photo/assembly/steps-v4/calendar-step-4-align-cover.jpg", alt: "Clean demonstration image showing the cover page aligned and pressed onto the calendar." },
        { number: "5", title: "Repeat for remaining pages", text: "Flip the cover page outside the guide and repeat the peel, align, and press steps until the calendar is finished.", image: "assets/main-photo/assembly/steps-v4/calendar-step-5-repeat-pages.jpg", alt: "Clean demonstration image showing pages flipped and repeated through the calendar guide." },
        { number: "6", title: "Remove and check the calendar", text: "Remove the calendar from the guide. Flip through it once to confirm page order, clean edges, and secure adhesion.", image: "assets/main-photo/assembly/steps-v4/calendar-step-6-remove-check.jpg", alt: "Clean demonstration image showing the finished calendar ready for final checking." }
      ]
    },
    "guide-magnets": {
      title: "Acrylic Magnet Assembly",
      description: "Use this for acrylic magnet orders. Trim the photo, layer it between the acrylic pieces, and package it in the sleeve.",
      materialLocation: "Acrylic magnet sleeves, acrylic fronts and backs, and the passport cutter should be kept with Main Photo product assembly supplies. Match quantity before trimming.",
      steps: [
        { number: "1", title: "Remove the acrylic pieces", text: "Take the acrylic front and acrylic back out of the sleeve. Keep the sleeve because the finished magnet goes back into it.", image: "assets/main-photo/assembly/steps-v4/magnet-step-1-remove-pieces.jpg", alt: "Clean demonstration image showing acrylic magnet pieces removed from the sleeve." },
        { number: "2", title: "Trim the photo", text: "Trim the photo to 2x2 using the passport cutter. Check the crop before placing it into the acrylic.", image: "assets/main-photo/assembly/steps-v4/magnet-step-2-trim-photo.jpg", alt: "Clean demonstration image showing the photo trimmed to a two by two square." },
        { number: "3", title: "Set the back down first", text: "Place the acrylic back part down with the magnets facing up.", image: "assets/main-photo/assembly/steps-v4/magnet-step-3-back-down.jpg", alt: "Clean demonstration image showing the acrylic back with magnets facing up." },
        { number: "4", title: "Place the photo face up", text: "Set the trimmed photo face up on the acrylic back. Keep the photo straight and centered.", image: "assets/main-photo/assembly/steps-v4/magnet-step-4-photo-face-up.jpg", alt: "Clean demonstration image showing the trimmed photo placed face up on the acrylic back." },
        { number: "5", title: "Click the front into place", text: "Place the acrylic front part onto the photo. The magnets should pull the back and front acrylic pieces together.", image: "assets/main-photo/assembly/steps-v4/magnet-step-5-front-click.jpg", alt: "Clean demonstration image showing the acrylic front clicked into place over the photo." },
        { number: "6", title: "Sleeve the finished magnet", text: "Make sure the photo is straight, clean, and fully inside the acrylic edges, then place the assembled magnet back into the sleeve.", image: "assets/main-photo/assembly/steps-v4/magnet-step-6-sleeve.jpg", alt: "Clean demonstration image showing the finished acrylic magnet returned to the sleeve." }
      ]
    },
    "guide-specialty": {
      title: "Wall Tile & Specialty Products",
      description: "Use this for wall tile assembly. For other specialty products, match the order to the supply label and use the final quality check before pickup.",
      materialLocation: "Wall tile frames, chipboard, spacer tools, specialty blanks, and packaging should be kept with Main Photo product assembly supplies. Match product type, size, and quantity to the order.",
      steps: [
        { number: "1", title: "Check what is in the box", text: "Confirm you have the chipboard, frame assembly, and spacer tool before starting the wall tile.", image: "assets/main-photo/assembly/steps-v4/wall-tile-step-1-check-box.jpg", alt: "Clean demonstration image showing the chipboard, frame assembly, and spacer tool." },
        { number: "2", title: "Identify the frame parts", text: "Check the frame top, frame back, and spiral disk pad before separating the frame assembly.", image: "assets/main-photo/assembly/steps-v4/wall-tile-step-2-frame-parts.jpg", alt: "Clean demonstration image identifying the wall tile frame parts and spiral disk." },
        { number: "3", title: "Separate the frame assembly", text: "Place the frame back on the table facing up. Flex the frame front away from the backer to separate the pieces.", image: "assets/main-photo/assembly/steps-v4/wall-tile-step-3-separate-frame.jpg", alt: "Clean demonstration image showing the frame front flexed away from the backer." },
        { number: "4", title: "Place the photo on chipboard", text: "Set the photo onto the chipboard and make sure the image is straight before placing it into the frame.", image: "assets/main-photo/assembly/steps-v4/wall-tile-step-4-photo-chipboard.jpg", alt: "Clean demonstration image showing the photo placed onto the chipboard." },
        { number: "5", title: "Load the frame back", text: "Make sure the frame back is facing upward, then place the chipboard and photo into the frame back and add the frame front.", image: "assets/main-photo/assembly/steps-v4/wall-tile-step-5-load-frame.jpg", alt: "Clean demonstration image showing the photo and chipboard loaded into the frame back." },
        { number: "6", title: "Snap all four corners", text: "Press down on all four corners until the frame snaps together. Check that the photo is clean and centered.", image: "assets/main-photo/assembly/steps-v4/wall-tile-step-6-snap-corners.jpg", alt: "Clean demonstration image showing all four wall tile corners pressed to snap together." },
        { number: "7", title: "Package with spacer tool", text: "Place the assembled wall tile and one spacer tool into the packaging box. Make sure the spiral disk is locked in place before packaging.", image: "assets/main-photo/assembly/steps-v4/wall-tile-step-7-package.jpg", alt: "Clean demonstration image showing the assembled wall tile packaged with the spacer tool." }
      ]
    },
    "guide-kodak-305": {
      title: "Kodak 305 Printer Check",
      description: "Use this when the Kodak 305 needs a quick supply, jam, ribbon, or access-panel check.",
      materialLocation: "Kodak 305 paper and ribbon supplies should stay with the Main Photo printer supplies. Match the Kodak 305 print kit before opening or replacing anything.",
      steps: [
        { number: "1", title: "Start with the printer overview", text: "Identify the Kodak 305 and read the printer status before opening it. Confirm the issue is on this printer, not another Main Photo printer.", image: "assets/main-photo/kodak305/overview.jpg", alt: "In-store overview of the Kodak 305 printer with the front area visible." },
        { number: "2", title: "Press OPEN", text: "Use the OPEN button on the front right side. If the panel does not release normally, stop and ask for help instead of prying it open.", image: "assets/main-photo/kodak305/open-button-closeup.jpg", alt: "Close-up of the Kodak 305 OPEN button on the front of the printer." },
        { number: "3", title: "Pull the front area open", text: "Use the front handle area and open the printer slowly. Look inside before touching the ribbon or paper path.", image: "assets/main-photo/kodak305/front-handle-area.jpg", alt: "In-store view of the Kodak 305 front access area being opened." },
        { number: "4", title: "Inspect the inside", text: "Check for loose paper, scraps, a lifted ribbon, or anything sitting outside the normal path. Do not touch the gear mechanism.", image: "assets/main-photo/kodak305/open-interior-overview.jpg", alt: "In-store view of the Kodak 305 opened with the ribbon and paper area visible." },
        { number: "5", title: "Check the ribbon cassette", text: "The ribbon cassette should sit cleanly in its guides. If it looks crooked, loose, or twisted, compare it to the instruction label before moving it.", image: "assets/main-photo/kodak305/ribbon-cassette-closeup.jpg", alt: "Close-up of the Kodak 305 ribbon cassette inside the open printer." },
        { number: "6", title: "Use the instruction label", text: "Compare the printer to the printed label inside the front cover. Follow the label if you need to reseat ribbon or paper.", image: "assets/main-photo/kodak305/instruction-caution-label.jpg", alt: "Close-up of the Kodak 305 instruction and caution label inside the printer." },
        { number: "7", title: "Test one print only", text: "After the warning clears, release or run one controlled print and inspect it before sending multiple orders.", image: "assets/main-photo/kodak305/overview.jpg", alt: "Kodak 305 printer closed and ready for one controlled test print." }
      ]
    },
    "guide-kodak-7000": {
      title: "Kodak 7000 Printer Check",
      description: "Use this when the Kodak 7000 needs a supply, paper compartment, upper-compartment, or loading-reference check.",
      materialLocation: "Kodak 7000 supplies should stay with Main Photo printer supplies. Confirm the supply type and printer model before opening compartments.",
      steps: [
        { number: "1", title: "Read the control panel", text: "Start at the Kodak 7000 screen or control panel. Do not open compartments until you know whether the issue is paper, ribbon, cover, or printer status.", image: "assets/main-photo/kodak7000/control-panel-ready.jpg", alt: "In-store photo of the Kodak 7000 control panel ready screen." },
        { number: "2", title: "Open the top cover", text: "Use the normal OPEN area on top of the printer. If the cover does not move normally, stop instead of forcing it.", image: "assets/main-photo/kodak7000/open-button-overview.jpg", alt: "Top view of the Kodak 7000 printer showing the open button area." },
        { number: "3", title: "Inspect ribbon and paper together", text: "With the printer open, check that the ribbon and paper path look seated, straight, and free of scraps.", image: "assets/main-photo/kodak7000/open-interior-ribbon-paper.jpg", alt: "In-store view inside the Kodak 7000 showing the ribbon and paper area." },
        { number: "4", title: "Use the loading label", text: "Compare the inside of the printer to the loading instruction label. The label shows the normal ribbon and paper direction.", image: "assets/main-photo/kodak7000/ribbon-loading-label.jpg", alt: "Close-up of the Kodak 7000 ribbon and paper loading instruction label." },
        { number: "5", title: "Check the ribbon path", text: "The ribbon should roll smoothly across the top path and should not be slack, twisted, or pulled out of its guides.", image: "assets/main-photo/kodak7000/ribbon-paper-closeup.jpg", alt: "Close-up inside the Kodak 7000 showing the ribbon and paper path." },
        { number: "6", title: "Check the paper roll area", text: "Open the paper roll area only as intended. The paper should sit evenly under the cover and feed forward without bunching.", image: "assets/main-photo/kodak7000/paper-roll-loaded.jpg", alt: "Kodak 7000 paper roll loaded under the open cover." },
        { number: "7", title: "Close and test", text: "Close each compartment fully, confirm the message cleared, then run one controlled test or order print.", image: "assets/main-photo/kodak7000/control-panel-ready.jpg", alt: "Kodak 7000 control panel showing the printer ready after the compartments are closed." }
      ]
    },
    "guide-kodak-8810": {
      title: "Kodak 8810 Printer Check",
      description: "Use this when the Kodak 8810 needs a paper-roll, side-panel, ribbon-compartment, or installed-ribbon check.",
      materialLocation: "Kodak 8810 paper and ribbon supplies should stay with Main Photo printer supplies. Match the supply to the Kodak 8810 before replacing anything.",
      steps: [
        { number: "1", title: "Confirm the printer is ready", text: "Identify the Kodak 8810 and read the status before opening the printer. Confirm the issue belongs to this printer.", image: "assets/main-photo/kodak8810/printer-overview-ready.jpg", alt: "In-store overview of the Kodak 8810 printer in the ready position." },
        { number: "2", title: "Locate the side latch", text: "Find the side latch area first. Open the panel using the latch, not by pulling on the panel edge.", image: "assets/main-photo/kodak8810/side-panel-open.jpg", alt: "Kodak 8810 side-panel area shown open to identify the normal latch and access location." },
        { number: "3", title: "Open the side panel", text: "Swing the side panel open slowly and stop if the panel catches or feels blocked.", image: "assets/main-photo/kodak8810/side-panel-open.jpg", alt: "In-store view of the Kodak 8810 with the side panel open." },
        { number: "4", title: "Check the installed paper roll", text: "Look at the paper roll area. The roll should sit evenly and feed without loose paper bunching inside the printer.", image: "assets/main-photo/kodak8810/side-panel-open.jpg", alt: "Open Kodak 8810 side panel providing a clear view into the supply area." },
        { number: "5", title: "Check the ribbon compartment", text: "Inspect the ribbon compartment and compare it with the loading reference. The ribbon should be seated cleanly.", image: "assets/main-photo/kodak8810/side-panel-open.jpg", alt: "Open Kodak 8810 supply compartment used to check the ribbon area." },
        { number: "6", title: "Verify the ribbon is installed", text: "Make sure the ribbon is fully installed and not twisted, slack, or out of its normal path.", image: "assets/main-photo/kodak8810/side-panel-open.jpg", alt: "Kodak 8810 open supply area used to verify that the ribbon path is seated normally." },
        { number: "7", title: "Close, clear, and test", text: "Close the side panel fully, confirm the warning clears, and run one controlled print before continuing the queue.", image: "assets/main-photo/kodak8810/printer-overview-ready.jpg", alt: "Kodak 8810 closed and showing a ready status before a controlled test print." }
      ]
    },
    "guide-cx3240": {
      title: "Fujifilm CX3240 Paper Check",
      description: "Use this when the CX3240 needs a paper tray, output tray, or paper-guide check.",
      materialLocation: "CX3240 paper should stay with the Main Photo printer supplies. Confirm paper size and orientation before loading the tray.",
      steps: [
        { number: "1", title: "Identify the CX3240", text: "Start from the printer overview and confirm the issue is on the Fujifilm CX3240.", image: "assets/main-photo/cx3240/printer-overview.jpg", alt: "In-store overview of the Fujifilm CX3240 printer." },
        { number: "2", title: "Open the output tray", text: "Make sure the output tray is open and has enough room for finished prints to exit cleanly.", image: "assets/main-photo/cx3240/printer-overview.jpg", alt: "Fujifilm CX3240 overview showing the output area that must remain open and clear." },
        { number: "3", title: "Check the loaded paper", text: "Open or inspect the paper tray and confirm paper is loaded flat, clean, and facing the correct direction.", image: "assets/main-photo/cx3240/paper-loaded-in-tray.jpg", alt: "In-store view of paper loaded flat in the Fujifilm CX3240 tray." },
        { number: "4", title: "Set the paper guides", text: "Slide the paper guides so they touch the paper stack without bending it. Crooked guides can cause skewed prints or jams.", image: "assets/main-photo/cx3240/paper-loaded-in-tray.jpg", alt: "Paper loaded flat in the CX3240 tray with the guide area visible beside the stack." },
        { number: "5", title: "Remove obvious obstructions", text: "Check for loose scraps, bent paper, packaging pieces, or anything blocking the tray or output path.", image: "assets/main-photo/cx3240/paper-loaded-in-tray.jpg", alt: "CX3240 paper tray shown clear of scraps, bent sheets, and packaging." },
        { number: "6", title: "Close the tray fully", text: "Push the tray back in straight and make sure it seats fully before releasing another print.", image: "assets/main-photo/cx3240/printer-overview.jpg", alt: "Fujifilm CX3240 overview used to confirm the paper tray is closed and seated." },
        { number: "7", title: "Print one controlled test", text: "After the message clears, release one print and watch the output path before sending more work.", image: "assets/main-photo/cx3240/printer-overview.jpg", alt: "Fujifilm CX3240 ready for one controlled test print through the output path." }
      ]
    },
    "guide-kodak-kiosk": {
      title: "Kodak Kiosk Basics",
      description: "Use this to identify the customer kiosk, keep the station ready, and complete only the normal front-store access checks.",
      materialLocation: "Start at the customer-facing kiosk station. Keep customer media, cables, and loose parts organized and do not remove anything that is not part of the normal access area.",
      steps: [
        { number: "1", title: "Start at the front station", text: "Check the kiosk screen, scanner area, visible cables, and customer-facing work area before opening anything.", image: "assets/main-photo/kiosk/front-overview.jpg", alt: "In-store overview of the Kodak kiosk front station." },
        { number: "2", title: "Keep the work area ready", text: "Remove abandoned receipts, packaging, and loose customer media from the work surface without opening or viewing customer files." },
        { number: "3", title: "Open only the normal side door", text: "Use the normal side-door access point if the issue calls for an interior check. Do not force locked or restricted panels.", image: "assets/main-photo/kiosk/side-door-open-interior.jpg", alt: "Kodak kiosk shown with only the normal side-access door open." },
        { number: "4", title: "Look inside before touching", text: "Check for loose cables, blocked airflow, visible paper scraps, or items that clearly do not belong inside the kiosk.", image: "assets/main-photo/kiosk/side-door-open-interior.jpg", alt: "In-store view inside the Kodak kiosk side door." },
        { number: "5", title: "Leave cables connected", text: "Do not unplug or rearrange kiosk cables during a normal front-store check." },
        { number: "6", title: "Close the door fully", text: "Close the side door securely and confirm the kiosk returns to the expected screen or status.", image: "assets/main-photo/kiosk/front-overview.jpg", alt: "Kodak kiosk front station shown closed after the normal side door is secured." },
        { number: "7", title: "Return the station to ready", text: "Leave the kiosk closed, clean, and ready for the next customer. Do not continue if the screen or hardware is not in its normal ready state.", image: "assets/main-photo/kiosk/front-overview.jpg", alt: "Kodak kiosk front overview showing the station closed and ready for the next customer." }
      ]
    },
    "guide-photo-checkout": {
      title: "Photo Checkout",
      description: "Use this when a customer is picking up a completed photo order at the register.",
      materialLocation: "Completed photo orders should be staged in the photo pickup area or the store's designated completed-order location. Match the customer name and order details before ringing anything out.",
      steps: [
        { number: "1", title: "Greet and identify the order", text: "Ask for the customer name, order type, or pickup information. Do not hand over a photo order until you are confident it is the right customer.", image: "assets/generated-guides/pickup-step-1.webp", alt: "Color demonstration of comparing generic pickup information with a sealed photo order in an organized waiting bin." },
        { number: "2", title: "Find the completed package", text: "Look in the completed photo pickup area. Match the name, order number, product type, and quantity when available.", image: "assets/generated-guides/pickup-step-1.webp", alt: "Color demonstration of locating the matching sealed photo envelope in an organized waiting bin." },
        { number: "3", title: "Check that it is pickup-ready", text: "Make sure the package is sealed or organized, the prints/products look complete, and nothing appears damaged or mixed with another order.", image: "assets/generated-guides/pickup-step-2.webp", alt: "Color demonstration of a sealed photo order checked and kept together at the pickup counter." },
        { number: "4", title: "Bring the order to IPOS", text: "Keep the order with you at the register. Avoid setting it where it can be confused with another customer's items.", image: "assets/generated-guides/pickup-step-2.webp", alt: "Color demonstration of one matching sealed photo order brought to the checkout counter." },
        { number: "5", title: "Scan or enter the pickup sale", text: "Use the register's photo checkout flow, barcode, QR, or order lookup process available at your store.", image: "assets/generated-guides/pickup-step-3.webp", alt: "Color close-up of a generic pickup QR held flat under a handheld register scanner." },
        { number: "6", title: "Confirm price and payment", text: "Confirm the sale total shown on IPOS and complete payment through the normal register process." },
        { number: "7", title: "Hand off and close the loop", text: "Give the completed order to the customer only after checkout is complete. If the order does not match, stop and keep it protected in the Photo area.", image: "assets/generated-guides/pickup-step-4.webp", alt: "Color demonstration of a sealed photo package handed to the customer after checkout is complete." }
      ]
    },
  },
  guides: {}
};
