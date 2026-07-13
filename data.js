const PE_DATA = {
  version: "2.6",
  home: {
    title: "Select Your Workstation",
    description: "Choose the workstation, then choose the basic task you need to complete.",
    cards: [
      { id: "main-photo", icon: "MP", title: "Main Photo Printer & Assembly", description: "Order processing, product assembly, printer basics, supplies, and item numbers." },
      { id: "poster-printer", icon: "PP", title: "Poster Printer", description: "Poster media, ink, paper loading, large-format products, and packaging." },
      { id: "ipos", icon: "$", title: "IPOS Register", description: "Organize completed photo orders in the waiting bin." }
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
        { id: "guide-specialty", icon: "WT", title: "Wall Tile", description: "Assemble a wall tile from the supplied frame, chipboard, photo, and spacer tool." },
        { id: "guide-photo-puzzle", icon: "PZ", title: "Photo Puzzle", description: "Print the puzzle sheet, keep the pieces intact, and package it with the box." },
        { id: "guide-wooden-hangbar", icon: "HB", title: "Wooden Hangbar Canvas", description: "Install the wood bars, plugs, and string, then roll and package it." },
        { id: "guide-yard-sign", icon: "YS", title: "Yard Sign", description: "Fold the vinyl sign, attach the clips and tabs, and install the stake." }
      ]
    },
    "main-maintenance": {
      title: "Main Photo Printer Basics",
      description: "Choose the printer in front of you. Each guide identifies the normal access point, paper or ribbon area, and final ready check.",
      cards: [
        { id: "guide-kodak-305", icon: "305", title: "Load Kodak 305 Paper & Ribbon", description: "Open the printer, load the matching paper and ribbon, close it, and confirm ready." },
        { id: "guide-kodak-7000", icon: "7K", title: "Load Kodak 7000 Paper & Ribbon", description: "Load the paper roll and ribbon in the directions shown inside the printer." },
        { id: "guide-kodak-8810", icon: "88", title: "Load Kodak 8810 Paper & Ribbon", description: "Open the correct covers, load the paper and ribbon, then confirm ready." },
        { id: "guide-cx3240", icon: "CX", title: "Load Fujifilm CX3240 Paper", description: "Fill the paper tray, set the guides, and return the printer to ready." },
        { id: "guide-kodak-kiosk", icon: "KS", title: "Use the Kodak Kiosk", description: "Guide a customer through a basic photo order at the kiosk." }
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
      description: "Use this hub to organize completed photo orders so any colleague can find them quickly.",
      cards: [
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
  employeeGuides: {
    "guide-print-poster": {
      title: "Print and Package a Poster",
      description: "Match the order to the loaded material, print it, inspect it, and package it without damaging the image.",
      materialLocation: "Poster paper, repositionable material, vinyl, metallic media, packaging tubes, and the reusable roll adapters are stored in the poster-printer supply area.",
      steps: [
        { number: "1", title: "Match the order to the material", text: "Read the product name on the photo order. Use poster paper for a poster, repositionable material for a repositionable print, and vinyl only for a banner." },
        { number: "2", title: "Confirm the correct roll is loaded", text: "Open the roll-paper cover and read the roll label if you are not sure. The roll must match the product, sit evenly on both adapters, and feed straight.", image: "assets/p6000/loaded-roll.jpg", alt: "Approved in-store photo of a roll seated evenly inside the Epson P6000." },
        { number: "3", title: "Prepare the output catcher", text: "Open and position the catcher below the printer. Clear boxes and supplies away so the poster cannot drag, fold, or touch the floor.", image: "assets/p6000/overview.jpg", alt: "Epson P6000 station with the output area visible below the printer." },
        { number: "4", title: "Send the matching order", text: "On the photo-lab order screen, select the customer order and confirm the product and size one more time. Choose the normal Print or Release action once the P6000 shows ready." },
        { number: "5", title: "Let the printer finish", text: "Do not pull the material. Guide the finished print into the catcher only after it exits the printer and is released.", image: "assets/p6000/feed.jpg", alt: "Approved in-store close-up of large-format material feeding straight through the Epson P6000." },
        { number: "6", title: "Inspect the finished poster", text: "Hold clean edges and check the customer image, size, surface, and cut. Keep the printed face away from the counter and from fingerprints." },
        { number: "7", title: "Roll and package it", text: "Roll an ordinary poster loosely with the printed face inward, place it in the correct tube, and attach the matching order label. Use the banner or puzzle guide for those products." }
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
        { number: "1", title: "Print on vinyl media", text: "Load the vinyl roll, select the matching banner order on the photo-lab order screen, and choose the normal Print or Release action. Let the banner finish before touching the printed surface.", image: "assets/p6000/feed.jpg", alt: "Approved in-store close-up of material feeding straight through the Epson P6000." },
        { number: "2", title: "Peel one grommet", text: "Remove one clear adhesive grommet from its sheet without touching more adhesive than necessary.", image: "assets/generated-guides/banner-step-1.webp", alt: "Color close-up of a clear adhesive banner grommet being peeled from its sheet." },
        { number: "3", title: "Center it on the cross mark", text: "Line up the grommet edges with the banner edge. The printed cross mark should sit at the grommet center.", image: "assets/generated-guides/banner-step-2.webp", alt: "Color close-up of a clear grommet centered over the banner cross mark." },
        { number: "4", title: "Fold and press", text: "Stick one half to the banner face, fold the other half over the edge, and press firmly on a solid counter.", image: "assets/generated-guides/banner-step-3.webp", alt: "Color close-up of a clear adhesive grommet folded over the vinyl edge and pressed firmly." },
        { number: "5", title: "Punch the center", text: "Slide the grommet into the hole-punch gate and squeeze through the exact center. Repeat for every printed mark.", image: "assets/generated-guides/banner-step-4.webp", alt: "Color close-up of a handheld punch piercing the exact center of a clear banner grommet." },
        { number: "6", title: "Roll print-side inward", text: "Inspect every grommet, then roll the completed banner with the printed surface facing inward to protect it." }
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
        { number: "5", title: "Leave the identifier visible", text: "Position the package so another colleague can read the customer name without opening or moving unrelated orders." },
        { number: "6", title: "Protect the product", text: "Keep prints flat, canvases upright or boxed, and large products away from moisture, bending, or floor contact." }
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
        { number: "1", title: "Read the screen first", text: "Use the printer screen to identify the exact ink color that needs attention. Do not remove a cartridge until you know the color." },
        { number: "2", title: "Find the matching cartridge", text: "Match the color code on the replacement cartridge to the color shown by the printer. Similar-looking colors are not interchangeable.", image: "assets/p6000/ink/cartridge-labels.jpg", alt: "Close-up of Epson ink cartridges installed in the printer with visible color labels." },
        { number: "3", title: "Open the ink door", text: "Open the side ink door using the normal latch area. Keep the new cartridge nearby, but leave it sealed until you are ready to install it.", image: "assets/p6000/ink/ink-door-latch.jpg", alt: "Close-up of the Epson P6000 ink door latch location." },
        { number: "4", title: "Check the cartridge row", text: "Before touching anything, compare the cartridge row to the color label. Confirm you are working on the exact slot the printer called out.", image: "assets/p6000/ink/installed-cartridges.jpg", alt: "In-store view of Epson P6000 ink cartridges installed behind the opened side door." },
        { number: "5", title: "Release the old cartridge", text: "Press the cartridge straight in at the labeled PUSH area to release it, then pull it straight out. Do not twist, pry, or force the cartridge.", image: "assets/p6000/ink/push-cartridge.jpg", alt: "Close-up of a hand pointing at the PUSH area on an Epson P6000 ink cartridge." },
        { number: "6", title: "Install the new cartridge", text: "Slide the new cartridge into the same slot with the label facing the correct direction. Push until it seats fully, then close the ink door.", image: "assets/p6000/ink/open-ink-door.jpg", alt: "In-store photo of the Epson P6000 side ink door being opened." },
        { number: "7", title: "Close the door and confirm ready", text: "Close the ink door completely. Check that the printer recognizes the new cartridge and returns to ready before releasing an order." }
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
      title: "Wall Tile Assembly",
      description: "Use this guide only for the wall tile shown in the step photos.",
      materialLocation: "Wall tile frames, chipboard, spacer tools, and packaging are kept with Main Photo product assembly supplies. Match the wall-tile size and quantity to the order before opening the box.",
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
      title: "Load Kodak 305 Paper and Ribbon",
      description: "Replace the paper and ribbon together with one matching Kodak 305 print kit.",
      materialLocation: "Kodak 305 print kits are stored with Main Photo printer supplies. The kit contains one paper roll and one ribbon cassette made to be used together.",
      steps: [
        { number: "1", title: "Get one matching print kit", text: "Use a Kodak 305 print kit. Keep its new paper roll and ribbon cassette together; do not mix either piece with another kit.", image: "assets/main-photo/kodak305/overview.jpg", alt: "In-store overview used to identify the Kodak 305 printer." },
        { number: "2", title: "Press OPEN", text: "Press the OPEN button on the front-right side, then use the front handle to slide the printing unit open.", image: "assets/main-photo/kodak305/open-button-closeup.jpg", alt: "Close-up of the OPEN button on the Kodak 305 printer." },
        { number: "3", title: "Remove the used supplies", text: "Lift out the used ribbon cassette by its handle. Remove the empty paper roll and keep both used pieces away from the new kit.", image: "assets/main-photo/kodak305/open-interior-overview.jpg", alt: "Open Kodak 305 showing the paper-roll and ribbon-cassette areas." },
        { number: "4", title: "Load the new paper roll", text: "Set the new paper roll in the paper area in the direction shown on the inside label. Feed the paper between the roller and guide until the printer beeps, then stop feeding.", image: "assets/main-photo/kodak305/instruction-caution-label.jpg", alt: "Kodak 305 inside label showing the correct paper-feed direction." },
        { number: "5", title: "Install the new ribbon cassette", text: "Hold the ribbon cassette by its handle. Line up its tabs with the printer guides and slide it in as far as it will go without forcing it.", image: "assets/main-photo/kodak305/ribbon-cassette-closeup.jpg", alt: "Close-up of the Kodak 305 ribbon cassette seated in its guides." },
        { number: "6", title: "Close the printing unit", text: "Keep fingers on the outside edges. Push the left and right sides evenly until the unit clicks fully closed.", image: "assets/main-photo/kodak305/front-handle-area.jpg", alt: "Front handle and safe outside edges used to close the Kodak 305 printing unit." },
        { number: "7", title: "Confirm ready", text: "Wait for the printer to finish its automatic paper setup. Confirm the warning clears before releasing the next photo order." }
      ]
    },
    "guide-kodak-7000": {
      title: "Load Kodak 7000 Paper and Ribbon",
      description: "Replace the paper roll and ribbon together with the matching Kodak 7000 print kit.",
      materialLocation: "Kodak 7000 paper and ribbon kits are stored with Main Photo printer supplies. Keep the paper and ribbon from one opened kit together.",
      steps: [
        { number: "1", title: "Get one matching print kit", text: "Use the Kodak 7000 kit that matches this printer. Keep its paper roll and ribbon together throughout the change.", image: "assets/main-photo/kodak7000/control-panel-ready.jpg", alt: "Kodak 7000 control panel and printer used to confirm the correct machine." },
        { number: "2", title: "Open the printer", text: "Use the normal OPEN button and lift the top cover. Open the paper-roll cover so both supply areas are accessible.", image: "assets/main-photo/kodak7000/open-button-overview.jpg", alt: "Top of the Kodak 7000 showing the normal OPEN area." },
        { number: "3", title: "Remove the used paper and ribbon", text: "Lift out the used ribbon and remove the empty paper roll. Keep used pieces separate from the new kit.", image: "assets/main-photo/kodak7000/open-interior-ribbon-paper.jpg", alt: "Open Kodak 7000 showing the ribbon and paper supply areas." },
        { number: "4", title: "Load the new paper roll", text: "Place the new roll in the paper compartment in the direction shown on the inside label. Pull the leading edge straight into the feed area.", image: "assets/main-photo/kodak7000/paper-roll-loaded.jpg", alt: "Kodak 7000 paper roll seated evenly in the paper compartment." },
        { number: "5", title: "Load the new ribbon", text: "Place the new ribbon in the upper compartment with each end seated in the matching holder. The ribbon must be flat, centered, and not twisted.", image: "assets/main-photo/kodak7000/ribbon-paper-closeup.jpg", alt: "Close-up of the Kodak 7000 ribbon installed flat in its holders." },
        { number: "6", title: "Compare with the loading label", text: "Before closing, compare the paper and ribbon direction with the diagram inside the printer. Correct anything that is reversed or outside its guides.", image: "assets/main-photo/kodak7000/ribbon-loading-label.jpg", alt: "Kodak 7000 inside diagram showing the correct paper and ribbon loading direction." },
        { number: "7", title: "Close and confirm ready", text: "Close the paper cover and top cover completely. Wait for automatic setup and confirm the ready message before releasing an order." }
      ]
    },
    "guide-kodak-8810": {
      title: "Load Kodak 8810 Paper and Ribbon",
      description: "Replace the paper roll and ribbon together with one matching Kodak 8810 print kit.",
      materialLocation: "Kodak 8810 print kits are stored with Main Photo printer supplies. Use the paper and ribbon from the same opened kit.",
      steps: [
        { number: "1", title: "Get one matching print kit", text: "Use a Kodak 8810 print kit. Keep its paper roll and ribbon together and away from any used supplies.", image: "assets/main-photo/kodak8810/printer-overview-ready.jpg", alt: "In-store overview used to identify the Kodak 8810 printer." },
        { number: "2", title: "Open the paper area", text: "Pull the lower paper compartment open using its normal handle. Remove the empty roll and its holders." },
        { number: "3", title: "Install the new paper roll", text: "Move the reusable holders to the new roll, then seat the roll evenly in the lower compartment with the paper feeding in the direction shown inside the printer.", image: "assets/main-photo/kodak8810/paper-roll-loaded.jpg", alt: "Kodak 8810 paper roll seated evenly between its reusable holders." },
        { number: "4", title: "Open the ribbon compartment", text: "Release and lift the upper cover. Remove both used ribbon spools without touching the new ribbon surface.", image: "assets/main-photo/kodak8810/rear-cover.jpg", alt: "Kodak 8810 upper cover opened to reach the ribbon compartment." },
        { number: "5", title: "Install the new ribbon", text: "Seat each ribbon spool in the matching side holder. Stretch the ribbon flat across the path; it must not be twisted or folded.", image: "assets/main-photo/kodak8810/ribbon-installed.jpg", alt: "Open Kodak 8810 showing a ribbon installed flat across both spool holders." },
        { number: "6", title: "Check the inside diagram", text: "Compare the loaded ribbon with the diagram inside the compartment. Confirm both spool ends are fully seated before closing.", image: "assets/main-photo/kodak8810/ribbon-label.jpg", alt: "Kodak 8810 interior diagram beside the installed ribbon path." },
        { number: "7", title: "Close and confirm ready", text: "Close the ribbon cover and paper compartment completely. Wait for automatic setup and confirm the ready message before releasing an order." }
      ]
    },
    "guide-cx3240": {
      title: "Load Fujifilm CX3240 Paper",
      description: "Fill the correct paper tray, set the paper guides, and return the printer to ready.",
      materialLocation: "CX3240 paper is stored with Main Photo printer supplies. Match the paper size and product to the tray before opening a package.",
      steps: [
        { number: "1", title: "Get the correct paper", text: "Read the product and size on the order, then select the matching CX3240 paper package.", image: "assets/main-photo/cx3240/printer-overview.jpg", alt: "In-store overview used to identify the Fujifilm CX3240 printer and its paper tray." },
        { number: "2", title: "Pull out the paper tray", text: "Pull the matching tray straight out and place it on a clean, dry surface." },
        { number: "3", title: "Load a flat paper stack", text: "Remove the paper from its wrapper and place it flat in the tray in the orientation shown on the tray. Do not load bent, damp, or damaged sheets.", image: "assets/main-photo/cx3240/paper-loaded-in-tray.jpg", alt: "CX3240 paper loaded flat and square in the paper tray." },
        { number: "4", title: "Set both paper guides", text: "Slide the side and end guides until they just touch the stack. The guides should hold the paper square without bending it." },
        { number: "5", title: "Return the tray", text: "Keep the stack flat and slide the tray straight into the printer until it is fully seated." },
        { number: "6", title: "Open and clear the output tray", text: "Open the output tray and remove any finished pieces so the next print has room to exit." },
        { number: "7", title: "Confirm ready", text: "Wait for the printer to recognize the tray and confirm it is ready before releasing the next order." }
      ]
    },
    "guide-kodak-kiosk": {
      title: "Kodak Kiosk Basics",
      description: "Use this to guide a customer through a basic photo order without taking control of their personal device.",
      materialLocation: "The Kodak kiosk is the customer-facing touchscreen in the Photo area. The customer should keep control of their phone, memory card, cable, and personal photos.",
      steps: [
        { number: "1", title: "Start at the customer screen", text: "Wake the touchscreen and choose the option to begin a new photo order.", image: "assets/main-photo/kiosk/front-overview.jpg", alt: "In-store overview of the customer-facing Kodak photo kiosk." },
        { number: "2", title: "Let the customer connect their photos", text: "Ask the customer to choose the source shown on screen and connect their own phone or media. Let them handle their device and photo permissions." },
        { number: "3", title: "Choose the product", text: "Have the customer select Prints or the product they want, then choose the size and quantity shown on screen." },
        { number: "4", title: "Select and review photos", text: "The customer selects their images. Before continuing, have them review cropping, orientation, quantities, and the estimated total." },
        { number: "5", title: "Enter pickup information", text: "Have the customer enter the requested name and contact information so the finished order can be identified." },
        { number: "6", title: "Submit the order", text: "Choose the final Submit or Place Order action only after the customer confirms the order summary. Wait for the kiosk to confirm the order was sent." },
        { number: "7", title: "Finish at the counter", text: "Give the customer any printed claim ticket or on-screen pickup instructions, then leave the kiosk at its starting screen for the next customer." }
      ]
    },
  },
  guides: {}
};
