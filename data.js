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
        { number: "1", title: "Feed the puzzle sheet vertically", text: "Hold only the outside edges and place the sheet into the printer vertically. Keep the printed 3 x 4 rectangle at the top, then align the long sheet edge with the printer guide shown by the red marker. The sheet should enter straight—not angled or bowed." },
        { number: "2", title: "Support the printed sheet", text: "Wait until printing is fully complete. Lift the sheet carefully while supporting its full underside with both hands so the connected pieces do not bend, separate, or hang from one edge." },
        { number: "3", title: "Place it in the customer bag", text: "Set the complete puzzle sheet flat inside the customer bag with the picture side facing up. Confirm every piece is still connected, then keep the matching puzzle box and bag with the same customer order." }
      ]
    },
    "guide-vinyl-banner": {
      title: "Finish a Vinyl Banner",
      description: "Apply each clear adhesive grommet at its printed mark, punch the center, and roll the banner safely.",
      materialLocation: "Vinyl banner media and clear adhesive grommets are kept with poster supplies. A handheld hole punch is required for the grommet centers.",
      steps: [
        { number: "1", title: "Print on vinyl media", text: "Confirm the vinyl roll is loaded and feeding straight, then release the matching banner order. Let the printer finish and cut the banner before handling it; keep the printed surface from dragging across the counter." },
        { number: "2", title: "Peel one adhesive grommet", text: "Lift one clear grommet from the backing sheet at the point shown. Hold it by the outside edges so the adhesive remains clean and ready to bond." },
        { number: "3", title: "Align it with the cross mark", text: "Place the banner flat. Match the grommet edges to the banner edges and center the printed cross mark inside the grommet opening. Check the alignment before any adhesive touches the vinyl." },
        { number: "4", title: "Apply the first half", text: "Lower one adhesive half onto the printed face of the banner at the marked corner. Press only that half in place while keeping the fold line even with the banner edge." },
        { number: "5", title: "Fold the other half over", text: "Hold the first half steady and fold the loose half around the banner edge onto the back. The two halves should meet evenly with the cross mark still centered." },
        { number: "6", title: "Press the grommet firmly", text: "Move the banner to a solid, clean counter and press across the full grommet with your fingers. Smooth from the fold toward the outside edges until both adhesive halves are fully bonded." },
        { number: "7", title: "Punch the exact center", text: "Slide the bonded grommet into the handheld punch gate. Center the punch over the printed cross mark, then squeeze once to pierce the middle. Repeat steps 2–7 for every marked position, and roll the completed banner with the printed face inward." }
      ]
    },
    "guide-wooden-hangbar": {
      title: "Assemble a Wooden Hangbar Canvas",
      description: "Attach the two wooden bars and hanging string, then roll and box the finished canvas.",
      materialLocation: "The kit contains two wooden hangbars, four plastic plugs, one hanging string, one printed canvas, and packaging paper or box.",
      steps: [
        { number: "1", title: "Feed the canvas into the printer", text: "Hold the canvas by the side edges and feed it straight with the pre-punched rows at the top and bottom. Keep the guide edge flush with the printer so the finished holes remain aligned with the image." },
        { number: "2", title: "Peel the canvas from the backer", text: "After printing finishes, place the sheet on a clean surface with the image protected. Start at one corner and peel the canvas slowly away from the backing sheet so it does not stretch, crease, or tear around the holes." },
        { number: "3", title: "Place the top wooden bar", text: "Set one wooden hangbar front-side down on the work surface. Turn it until the rear channel and plug holes face up, matching the position marked in the image." },
        { number: "4", title: "Insert the hanging string", text: "Lay the string inside the rear channel of the top bar. Slide the knot into its retaining slot so the knot sits securely inside the bar and the hanging loop extends evenly from both sides." },
        { number: "5", title: "Insert the canvas into the top slot", text: "Place the canvas picture-side down so the white back and top holes face you. Slide the top canvas edge into the bar slot, then shift it left or right until each canvas hole lines up directly over a bar hole." },
        { number: "6", title: "Press in the top plugs", text: "From the white back side, push one plastic plug through each aligned canvas hole and into the top bar. Press straight down until both plugs sit securely; do not twist the fasteners." },
        { number: "7", title: "Install the bottom wooden bar", text: "Repeat the same alignment at the bottom edge with the second bar. Keep the bar front toward the printed side, line up both holes, and press the remaining plugs through the white canvas side until seated." },
        { number: "8", title: "Cover the printed surface", text: "Lay the supplied packaging paper flat over the entire printed face. Cover the image before rolling so the wooden bar and canvas layers do not rub directly against the print." },
        { number: "9", title: "Roll from the bottom bar", text: "Grip the bottom wooden bar and roll it slowly toward the top bar. Keep both ends moving together so the roll stays straight and the packaging paper remains between the printed layers." },
        { number: "10", title: "Keep the roll tight and even", text: "Continue rolling until the canvas forms a compact, even cylinder. The two bar ends should remain aligned, with no loose canvas edge or packaging paper sticking out unevenly." },
        { number: "11", title: "Slide the roll into the box", text: "Hold the finished roll by the wooden bars and slide it straight into the supplied box. Do not force it; the roll should fit without crushing the canvas or snagging the hanging string." }
      ]
    },
    "guide-yard-sign": {
      title: "Assemble a Yard Sign",
      description: "Fold the printed vinyl, secure the clips, and install the metal stake.",
      materialLocation: "Each yard sign uses one metal stake, three adhesive tabs on each sign sheet, two plastic clips, and one printed vinyl sign.",
      steps: [
        { number: "1", title: "Set the printed sign flat", text: "Place the finished vinyl print picture-side up on a clean, flat surface. Confirm the print is dry, square, and free of creases before adding any adhesive pieces." },
        { number: "2", title: "Fold the sign exactly in half", text: "Bring the two short edges together and crease the vinyl at its center fold. Align the front and back edges before pressing the fold; the vinyl is intentionally shorter than the stake’s middle bar." },
        { number: "3", title: "Wrap both corner tabs", text: "At one bottom corner, center a corner adhesive tab over the edge with part of the tab extending past the vinyl. Peel the liner and wrap the tab around to the back, then repeat at the opposite bottom corner." },
        { number: "4", title: "Wrap the middle tab", text: "Center the middle adhesive tab along the bottom edge between the two corner tabs. Leave the lower half extending past the edge, peel the liner, and wrap that half around to the back so the tab grips both sides." },
        { number: "5", title: "Push the clips onto the wire", text: "Place the metal stake against the sign. Keep the rounded side of each plastic clip facing the top of the sign, align each clip over a reinforced bottom tab, and push it onto the wire until it snaps in place." },
        { number: "6", title: "Align the clips with the vinyl", text: "Slide or seat both clips so their bottom edges line up evenly with the bottom vinyl edge. Check that the sign hangs straight on the stake and that neither clip pinches outside a reinforced tab." }
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
        { number: "1", title: "Read the required color", text: "Read the P6000 display before opening an ink door. Write down or remember the exact color name shown; do not remove a cartridge based only on where it sits." },
        { number: "2", title: "Match the replacement label", text: "Find a sealed cartridge whose color name and code match the display exactly. Compare the full label because similar colors—such as black, light black, and light light black—are separate cartridges." },
        { number: "3", title: "Open the ink-door latch", text: "Locate the side ink door indicated by the printer and pull at the latch area marked by the red arrow. Open the door fully so the cartridge row is visible; keep the replacement sealed until the slot is confirmed." },
        { number: "4", title: "Find the matching slot", text: "Read the label beside the installed cartridge row and locate the exact color slot. Point to that slot and compare it once more with the replacement label before removing anything." },
        { number: "5", title: "Press to release the old cartridge", text: "Press the old cartridge straight inward at its labeled PUSH area until the latch releases, then let it move outward and pull it straight from the slot. Do not twist or pry it sideways." },
        { number: "6", title: "Insert the matching cartridge", text: "Remove the correct new cartridge from its package and orient it the same way as the neighboring cartridges. Slide it straight into the empty slot and press until it seats at the same depth as the row." },
        { number: "7", title: "Close the door and confirm ready", text: "Close the ink door until it latches. Wait for the display to recognize the cartridge and return to a ready state before releasing the next print." }
      ]
    },
    "guide-canvas": {
      title: "Canvas Assembly",
      description: "Use this when an 11x14 canvas frame order is ready to finish. Assemble the canvas print first, then snap it into the frame and package it cleanly.",
      materialLocation: "Canvas frames and gift boxes should be kept with Main Photo product assembly supplies. Match the order size before opening the red gift box.",
      steps: [
        { number: "1", title: "Verify the canvas is assembled", text: "Set the stretched canvas picture-side up and confirm all four wrapped edges are tight and square. Do not attach the separate canvas back before inserting the print into the decorative frame." },
        { number: "2", title: "Unpack and save the materials", text: "Remove the empty frame from the red gift box and slide off the protective bubble bag. Set the bag and box aside together; both are reused after assembly." },
        { number: "3", title: "Center and press the canvas", text: "Place the empty frame flat with its retaining hooks facing up. Center the assembled canvas over the opening, then press near each marked edge until all four sides grip evenly. Stop and realign if one side sits higher than the others." },
        { number: "4", title: "Check and package the frame", text: "Look along all four edges to confirm the canvas is straight, fully seated, and free of fingerprints. Slide it into the saved bubble bag, place it in the red gift box, and keep the matching order information with the box." }
      ]
    },
    "guide-photo-books": {
      title: "Photo Book Assembly",
      description: "Use this for the custom cover layflat clamp photobook. Keep the printed cover aligned, wrap it around the black photobook, then slide the pages into the clamp.",
      materialLocation: "Photo book covers, black photobooks, clamp slides, printed covers, printed layflat pages, and packaging should be kept with Main Photo product assembly supplies. Match the book size before starting.",
      steps: [
        { number: "1", title: "Gather the four book pieces", text: "Place the printed cover, black photobook shell, printed layflat page block, and clamp slide together on a clean surface. Confirm every piece is the same book size before exposing any adhesive." },
        { number: "2", title: "Inspect the printed cover", text: "Hold the white cover flat and check that the customer image is straight, complete, and facing the direction shown. Do not attach a cover with a crooked image, damaged edge, or visible mark." },
        { number: "3", title: "Peel only the first liners", text: "Lay the printed cover picture-side down. Lift only the small thin white liners indicated by the red marker, leaving the remaining adhesive covered until the first edge is aligned." },
        { number: "4", title: "Align the black book shell", text: "Stand the black photobook upright on the exposed adhesive area. Keep the spine parallel with the printed cover edge and press the aligned edge in place before allowing the rest of the cover to touch." },
        { number: "5", title: "Wrap the cover around the shell", text: "Roll the black shell across the printed cover while keeping the spine tight to the fold. Smooth the cover from the spine outward so it bonds without bubbles, wrinkles, or a shifted image." },
        { number: "6", title: "Attach the remaining flaps", text: "Turn the book to the remaining side, peel the last liners one at a time, and fold the back and inside flaps onto the shell. Press each flap from its fold toward the edge so no adhesive or liner remains exposed." },
        { number: "7", title: "Slide in the pages and clamp", text: "Align the printed page block with the spine opening, keeping the photo pages close to the clamp edge shown. Feed the clamp slide through both spine guides until it is fully seated, then open and close the book once to confirm the pages are secure." }
      ]
    },
    "guide-calendars": {
      title: "8x10 Single-Sided Calendar Assembly",
      description: "Use this for the 8x10 single-sided calendar guide. Line up the calendar, attach the cover cleanly, then repeat until the calendar is complete.",
      materialLocation: "8x10 single-sided calendar materials are stored with Main Photo product assembly supplies. The supply box label shown in the photos lists item 551915.",
      steps: [
        { number: "1", title: "Align the spiral edge", text: "Lay the black calendar guide flat and place the calendar against its top edge. Keep the spiral binding parallel with the guide and slide the calendar until it sits square against the stop." },
        { number: "2", title: "Insert the calendar in the guide", text: "Slide the calendar body into the guide while leaving the clear polycover outside. The pages should lie flat inside the guide with no corner folded under." },
        { number: "3", title: "Peel the white liner", text: "Hold the end sheet steady and lift the white liner at the marked corner. Peel it back slowly without touching the exposed adhesive or letting the calendar shift in the guide." },
        { number: "4", title: "Align and press the cover page", text: "Lower the cover page so its bottom and side edges meet the guide edges. Once square, press from the center outward over the adhesive area to bond it smoothly without a wrinkle." },
        { number: "5", title: "Repeat the same alignment", text: "Flip the attached cover outside the guide, then repeat the peel, align, and press sequence for the next required sheet. Keep the spiral edge seated in the same position during each repeat." },
        { number: "6", title: "Remove and inspect the calendar", text: "Lift the completed calendar out of the guide and flip through every page. Confirm the order is correct, all bonded edges are secure, and the pages turn freely without sticking or shifting." }
      ]
    },
    "guide-magnets": {
      title: "Acrylic Magnet Assembly",
      description: "Use this for acrylic magnet orders. Trim the photo, layer it between the acrylic pieces, and package it in the sleeve.",
      materialLocation: "Acrylic magnet sleeves, acrylic fronts and backs, and the passport cutter should be kept with Main Photo product assembly supplies. Match quantity before trimming.",
      steps: [
        { number: "1", title: "Remove and keep the three pieces", text: "Slide the clear acrylic front and magnetic back out of the protective sleeve. Place both on a clean surface and save the empty sleeve for the finished magnet." },
        { number: "2", title: "Trim the photo to size", text: "Center the customer image in the passport cutter’s 2 x 2 opening, confirm the crop, and press the cutter once. Remove the square photo and check that no important part of the image was cut off." },
        { number: "3", title: "Set the magnetic back face up", text: "Place the acrylic back flat with both round magnets facing upward. Keep the recessed photo area clean and free of dust before adding the print." },
        { number: "4", title: "Center the photo face up", text: "Lay the trimmed photo picture-side up inside the acrylic back. Match all four photo edges to the recessed area so the image is straight and no corner extends outside the acrylic." },
        { number: "5", title: "Press the clear front into place", text: "Lower the clear acrylic front directly over the photo. Let the magnets bring the two pieces together, then press around the edges until the front sits flush and the photo cannot shift." },
        { number: "6", title: "Inspect and return it to the sleeve", text: "Check the front for fingerprints, trapped dust, and a crooked photo. Once clean and fully closed, slide the assembled magnet back into the saved sleeve with the image protected." }
      ]
    },
    "guide-specialty": {
      title: "Wall Tile Assembly",
      description: "Use this guide only for the wall tile shown in the step photos.",
      materialLocation: "Wall tile frames, chipboard, spacer tools, and packaging are kept with Main Photo product assembly supplies. Match the wall-tile size and quantity to the order before opening the box.",
      steps: [
        { number: "1", title: "Confirm every kit part", text: "Open the wall-tile box and identify the frame assembly, chipboard, and spacer tool. Keep the packaging nearby and stop before assembly if one of these pieces is missing." },
        { number: "2", title: "Identify the front, back, and disk", text: "Turn the frame assembly over and locate the frame front, frame back, and spiral disk pad shown by the marker. Knowing which side is the back prevents loading the photo backward." },
        { number: "3", title: "Separate the frame assembly", text: "Place the frame back on the table facing up. Hold the back steady and flex the frame front away at the marked edge until the pieces separate; work gently so the frame does not crack." },
        { number: "4", title: "Place the photo on the chipboard", text: "Lay the chipboard flat and center the photo picture-side up on top of it. Align all four edges and confirm the image is straight before moving the two pieces together." },
        { number: "5", title: "Load the photo into the frame back", text: "Keep the frame back facing upward. Lower the chipboard and photo together into the recessed opening, then position the frame front over them without shifting the image." },
        { number: "6", title: "Snap all four corners closed", text: "Press one corner at a time at the points shown until each corner snaps into the frame back. Check the full perimeter; every corner should sit at the same height with the photo centered." },
        { number: "7", title: "Package the tile and spacer", text: "Confirm the spiral disk is locked in place, then put the completed wall tile and one spacer tool into the original box. Arrange them so the tool cannot rub against the photo surface." }
      ]
    },
    "guide-kodak-305": {
      title: "Load Kodak 305 Paper and Ribbon",
      description: "Replace the paper and ribbon together with one matching Kodak 305 print kit.",
      materialLocation: "Kodak 305 print kits are stored with Main Photo printer supplies. The kit contains one paper roll and one ribbon cassette made to be used together.",
      steps: [
        { number: "1", title: "Identify the printer and matching kit", text: "Confirm you are at the Kodak 305 shown in the image, then open one Kodak 305 print kit. Keep its paper roll and ribbon cassette together; they are a matched pair and should not be mixed with another open kit." },
        { number: "2", title: "Press OPEN and pull the unit forward", text: "Find the square OPEN button on the front-right corner below the Kodak 305 label. Press it once, then grip the front handle and pull the printing unit straight toward you until it stops." },
        { number: "3", title: "Lift out the used supplies", text: "With the unit open, lift the used ribbon cassette by its handle and remove the empty paper roll from the lower area. Put both used pieces away from the clean replacement kit so they cannot be reinstalled by mistake." },
        { number: "4", title: "Seat and feed the new paper roll", text: "Set the new roll into the lower paper area in the direction shown by the inside label. Guide the leading edge between the roller and guide at the red arrow, keeping it centered, and stop feeding when the printer beeps." },
        { number: "5", title: "Slide in the new ribbon cassette", text: "Hold the cassette by its center handle and line up both side tabs with the printer guides. Slide it straight inward until it is fully seated at the same depth on both sides; do not force a crooked cassette." },
        { number: "6", title: "Push both sides fully closed", text: "Keep your fingers on the outside front edges and push the left and right sides inward evenly. Continue until the printing unit clicks into the closed position with no side left projecting." },
        { number: "7", title: "Wait for the ready state", text: "Let the printer complete its automatic paper setup. Confirm the warning clears and the ready indicator returns before releasing the next photo order." }
      ]
    },
    "guide-kodak-7000": {
      title: "Load Kodak 7000 Paper and Ribbon",
      description: "Replace the paper roll and ribbon together with the matching Kodak 7000 print kit.",
      materialLocation: "Kodak 7000 paper and ribbon kits are stored with Main Photo printer supplies. Keep the paper and ribbon from one opened kit together.",
      steps: [
        { number: "1", title: "Identify the Kodak 7000 kit", text: "Confirm you are loading the Kodak 7000, then open one kit made for this printer. Keep the new paper roll and ribbon from that package together throughout the change." },
        { number: "2", title: "Press OPEN and raise the covers", text: "Use the OPEN control shown by the marker to release the printer. Raise the top cover, then open the paper-roll area so both the ribbon path and lower roll compartment are accessible." },
        { number: "3", title: "Remove the used ribbon and roll", text: "Lift the used ribbon from its holders and remove the empty paper roll from the lower compartment. Set both used supplies apart from the open replacement kit." },
        { number: "4", title: "Seat the new paper roll", text: "Place the new roll evenly in the lower compartment with the paper unwinding in the direction shown inside the printer. Pull the leading edge straight toward the feed area without creasing or angling it." },
        { number: "5", title: "Seat both ribbon spools", text: "Install the new ribbon across the upper compartment. Press each spool end into its matching holder at the marked points; the ribbon surface should lie flat and centered with no twist or fold." },
        { number: "6", title: "Check the complete media path", text: "Compare the loaded paper and ribbon with the diagram inside the printer. Verify the paper feeds in the illustrated direction and every ribbon end is inside its holder before closing either cover." },
        { number: "7", title: "Close and confirm ready", text: "Close the paper cover and top cover completely. Wait while the printer advances the new media, then confirm the ready message returns before releasing an order." }
      ]
    },
    "guide-kodak-8810": {
      title: "Load Kodak 8810 Paper and Ribbon",
      description: "Replace the paper roll and ribbon together with one matching Kodak 8810 print kit.",
      materialLocation: "Kodak 8810 print kits are stored with Main Photo printer supplies. Use the paper and ribbon from the same opened kit.",
      steps: [
        { number: "1", title: "Identify the Kodak 8810 kit", text: "Confirm the printer matches the Kodak 8810 shown, then open one matching print kit. Keep its paper roll and ribbon together and separate from the removed supplies." },
        { number: "2", title: "Pull open the paper compartment", text: "Grip the normal lower-compartment handle at the marked area and pull it straight outward until fully open. Lift out the empty roll while keeping its reusable holders nearby." },
        { number: "3", title: "Seat the new paper roll", text: "Move both reusable holders onto the new roll and press them fully into the roll ends. Lower the roll evenly into the compartment in the feed direction shown inside; both holders must sit securely in their supports." },
        { number: "4", title: "Lift the ribbon cover", text: "Release the upper cover at the marked edge and lift it open. Remove the used ribbon spools by their ends, keeping your fingers away from the surface of the clean replacement ribbon." },
        { number: "5", title: "Seat the new ribbon spools", text: "Place each new spool end into its matching side holder. Press down at both marked ends until seated, then check that the ribbon stretches flat across the path without a twist, fold, or loose loop." },
        { number: "6", title: "Compare with the inside diagram", text: "Use the printed diagram beside the ribbon path as the final check. Confirm each spool is on the correct side and all four spool ends are fully inside their holders." },
        { number: "7", title: "Close and confirm ready", text: "Lower the ribbon cover and close the paper compartment until both latch. Wait for the automatic media setup and confirm the ready message before releasing the next order." }
      ]
    },
    "guide-cx3240": {
      title: "Load Fujifilm CX3240 Paper",
      description: "Fill the correct paper tray, set the paper guides, and return the printer to ready.",
      materialLocation: "CX3240 paper is stored with Main Photo printer supplies. Match the paper size and product to the tray before opening a package.",
      steps: [
        { number: "1", title: "Identify the printer and paper", text: "Confirm you are at the Fujifilm CX3240 shown, then read the product and size required by the order. Select the matching CX3240 paper package before opening a tray." },
        { number: "2", title: "Pull the matching tray straight out", text: "Grip the front of the correct paper tray at the marked area and pull it directly toward you. Support the tray as it clears the printer and place it on a clean, dry surface." },
        { number: "3", title: "Load a flat, square paper stack", text: "Remove the correct paper from its wrapper and lower it flat into the tray in the orientation shown on the tray label. Square the edges and remove any bent, damp, or damaged sheet." },
        { number: "4", title: "Slide both guides to the stack", text: "Move the green side and end guides inward at the marked points until each guide just touches the paper. The stack must stay flat and square—not bowed, pinched, or loose." },
        { number: "5", title: "Slide the tray fully into the printer", text: "Keep the paper stack flat while lifting the tray from the work surface. Align it with the printer rails and push it straight inward until the tray face sits fully closed." },
        { number: "6", title: "Open and clear the output area", text: "Open the output tray at the marked edge and remove any finished pieces or packaging. Leave enough clear space for the next print to exit without bending." },
        { number: "7", title: "Confirm the printer is ready", text: "Wait for the printer to recognize the reloaded tray. Confirm the ready state returns before releasing the next order; do not send a print while the tray is still being detected." }
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
