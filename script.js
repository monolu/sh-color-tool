const palette = {
  "003": { hex: "#000099", x: 19 },
  "004": { hex: "#0000cc", x: 20 },
  "005": { hex: "#0000ff", x: 21 },
  "102": { hex: "#330066", x: 54 },
  "103": { hex: "#330099", x: 55 },
  "104": { hex: "#3300cc", x: 56 },
  "105": { hex: "#3300FF", x: 57 },
  "201": { hex: "#660033", x: 89 },
  "202": { hex: "#660066", x: 90 },
  "203": { hex: "#660099", x: 91 },
  "204": { hex: "#6600cc", x: 92 },
  "205": { hex: "#6600ff", x: 93 },
  "300": { hex: "#990000", x: 124 },
  "301": { hex: "#990033", x: 125 },
  "302": { hex: "#990066", x: 126 },
  "303": { hex: "#990099", x: 127 },
  "304": { hex: "#9900cc", x: 128 },
  "305": { hex: "#9900ff", x: 129 },
  "400": { hex: "#cc0000", x: 160 },
  "401": { hex: "#cc0033", x: 161 },
  "402": { hex: "#cc0066", x: 162 },
  "403": { hex: "#cc0099", x: 163 },
  "404": { hex: "#cc00cc", x: 164 },
  "405": { hex: "#cc00ff", x: 165 },
  "500": { hex: "#ff0000", x: 196 },
  "501": { hex: "#ff0033", x: 197 },
  "502": { hex: "#ff0066", x: 198 },
  "503": { hex: "#ff0099", x: 199 },
  "504": { hex: "#ff00cc", x: 200 },
  "505": { hex: "#ff00ff", x: 201 },
  "012": { hex: "#003366", x: 24 },
  "013": { hex: "#003399", x: 25 },
  "014": { hex: "#0033cc", x: 26 },
  "015": { hex: "#0033ff", x: 27 },
  "111": { hex: "#333333", x: 240 },
  "112": { hex: "#333366", x: 60 },
  "113": { hex: "#333399", x: 61 },
  "114": { hex: "#3333cc", x: 62 },
  "115": { hex: "#3333ff", x: 63 },
  "210": { hex: "#663300", x: 94 },
  "211": { hex: "#663333", x: 95 },
  "212": { hex: "#663366", x: 96 },
  "213": { hex: "#663399", x: 97 },
  "214": { hex: "#6633cc", x: 98 },
  "215": { hex: "#6633ff", x: 99 },
  "310": { hex: "#993300", x: 130 },
  "311": { hex: "#993333", x: 131 },
  "312": { hex: "#993366", x: 132 },
  "313": { hex: "#993399", x: 133 },
  "314": { hex: "#9933cc", x: 134 },
  "315": { hex: "#9933ff", x: 135 },
  "410": { hex: "#cc3300", x: 166 },
  "411": { hex: "#cc3333", x: 167 },
  "412": { hex: "#cc3366", x: 168 },
  "413": { hex: "#cc3399", x: 169 },
  "414": { hex: "#cc33cc", x: 170 },
  "415": { hex: "#cc33ff", x: 171 },
  "510": { hex: "#ff3300", x: 202 },
  "511": { hex: "#ff3333", x: 203 },
  "512": { hex: "#ff3366", x: 204 },
  "513": { hex: "#ff3399", x: 205 },
  "514": { hex: "#ff33cc", x: 206 },
  "515": { hex: "#ff33ff", x: 207 },
  "021": { hex: "#006633", x: 28 },
  "022": { hex: "#006666", x: 30 },
  "023": { hex: "#006699", x: 31 },
  "024": { hex: "#0066CC", x: 32 },
  "025": { hex: "#0066FF", x: 33 },
  "120": { hex: "#336600", x: 64 },
  "121": { hex: "#336633", x: 65 },
  "122": { hex: "#336666", x: 66 },
  "123": { hex: "#336699", x: 67 },
  "124": { hex: "#3366CC", x: 68 },
  "125": { hex: "#3366FF", x: 69 },
  "220": { hex: "#666600", x: 100 },
  "221": { hex: "#666633", x: 101 },
  "222": { hex: "#666666", x: 102 },
  "223": { hex: "#666699", x: 103 },
  "224": { hex: "#6666cc", x: 104 },
  "225": { hex: "#6666ff", x: 105 },
  "320": { hex: "#996600", x: 136 },
  "321": { hex: "#996633", x: 137 },
  "322": { hex: "#996666", x: 138 },
  "323": { hex: "#996699", x: 139 },
  "324": { hex: "#9966cc", x: 140 },
  "325": { hex: "#9966ff", x: 141 },
  "420": { hex: "#cc6600", x: 172 },
  "421": { hex: "#cc6633", x: 173 },
  "422": { hex: "#cc6666", x: 174 },
  "423": { hex: "#cc6699", x: 175 },
  "424": { hex: "#cc66cc", x: 176 },
  "425": { hex: "#cc66ff", x: 177 },
  "520": { hex: "#ff6600", x: 208 },
  "521": { hex: "#ff6633", x: 209 },
  "522": { hex: "#ff6666", x: 210 },
  "523": { hex: "#ff6699", x: 211 },
  "524": { hex: "#ff66cc", x: 212 },
  "525": { hex: "#ff66ff", x: 213 },
  "030": { hex: "#009900", x: 34 },
  "031": { hex: "#009933", x: 35 },
  "032": { hex: "#009966", x: 36 },
  "033": { hex: "#009999", x: 37 },
  "034": { hex: "#0099cc", x: 38 },
  "035": { hex: "#0099FF", x: 39 },
  "130": { hex: "#339900", x: 70 },
  "131": { hex: "#339933", x: 71 },
  "132": { hex: "#339966", x: 72 },
  "133": { hex: "#339999", x: 73 },
  "134": { hex: "#3399cc", x: 74 },
  "135": { hex: "#3399ff", x: 75 },
  "230": { hex: "#669900", x: 106 },
  "231": { hex: "#669933", x: 107 },
  "232": { hex: "#669966", x: 108 },
  "233": { hex: "#669999", x: 109 },
  "234": { hex: "#6699cc", x: 110 },
  "235": { hex: "#6699ff", x: 111 },
  "330": { hex: "#999900", x: 142 },
  "331": { hex: "#999933", x: 143 },
  "332": { hex: "#999966", x: 144 },
  "333": { hex: "#999999", x: 145 },
  "334": { hex: "#9999cc", x: 146 },
  "335": { hex: "#9999ff", x: 147 },
  "430": { hex: "#cc9900", x: 178 },
  "431": { hex: "#cc9933", x: 179 },
  "432": { hex: "#cc9966", x: 180 },
  "433": { hex: "#cc9999", x: 181 },
  "434": { hex: "#cc99cc", x: 182 },
  "435": { hex: "#cc99ff", x: 183 },
  "530": { hex: "#ff9900", x: 214 },
  "531": { hex: "#ff9933", x: 215 },
  "532": { hex: "#ff9966", x: 216 },
  "533": { hex: "#ff9999", x: 217 },
  "534": { hex: "#ff99cc", x: 218 },
  "535": { hex: "#ff99ff", x: 219 },
  "040": { hex: "#00CC00", x: 40 },
  "041": { hex: "#00CC33", x: 41 },
  "042": { hex: "#00cc66", x: 42 },
  "043": { hex: "#00cc99", x: 43 },
  "044": { hex: "#00cccc", x: 44 },
  "045": { hex: "#00ccff", x: 45 },
  "140": { hex: "#33cc00", x: 76 },
  "141": { hex: "#33cc33", x: 77 },
  "142": { hex: "#33cc66", x: 78 },
  "143": { hex: "#33cc99", x: 79 },
  "144": { hex: "#33cccc", x: 80 },
  "145": { hex: "#33ccff", x: 81 },
  "240": { hex: "#66cc00", x: 112 },
  "241": { hex: "#66cc33", x: 113 },
  "242": { hex: "#66cc66", x: 114 },
  "243": { hex: "#66cc99", x: 115 },
  "244": { hex: "#66cccc", x: 116 },
  "245": { hex: "#66ccff", x: 117 },
  "340": { hex: "#99cc00", x: 148 },
  "341": { hex: "#99cc33", x: 149 },
  "342": { hex: "#99cc66", x: 150 },
  "343": { hex: "#99cc99", x: 151 },
  "344": { hex: "#99cccc", x: 152 },
  "345": { hex: "#99ccff", x: 153 },
  "440": { hex: "#cccc00", x: 184 },
  "441": { hex: "#cccc33", x: 185 },
  "442": { hex: "#cccc66", x: 186 },
  "443": { hex: "#cccc99", x: 187 },
  "444": { hex: "#cccccc", x: 188 },
  "445": { hex: "#ccccff", x: 189 },
  "540": { hex: "#ffcc00", x: 220 },
  "541": { hex: "#ffcc33", x: 221 },
  "542": { hex: "#ffcc66", x: 222 },
  "543": { hex: "#ffcc99", x: 223 },
  "544": { hex: "#ffcccc", x: 224 },
  "545": { hex: "#ffccff", x: 225 },
  "050": { hex: "#00ff00", x: 46 },
  "051": { hex: "#00ff33", x: 47 },
  "052": { hex: "#00ff66", x: 48 },
  "053": { hex: "#00ff99", x: 49 },
  "054": { hex: "#00ffCC", x: 50 },
  "055": { hex: "#00ffFF", x: 51 },
  "150": { hex: "#33ff00", x: 82 },
  "151": { hex: "#33ff33", x: 83 },
  "152": { hex: "#33ff66", x: 84 },
  "153": { hex: "#33ff99", x: 85 },
  "154": { hex: "#33ffcc", x: 86 },
  "155": { hex: "#33ffff", x: 87 },
  "250": { hex: "#66ff00", x: 118 },
  "251": { hex: "#66ff33", x: 119 },
  "252": { hex: "#66ff66", x: 120 },
  "253": { hex: "#66ff99", x: 121 },
  "254": { hex: "#66ffcc", x: 122 },
  "255": { hex: "#66ffff", x: 123 },
  "350": { hex: "#99ff00", x: 154 },
  "351": { hex: "#99ff33", x: 155 },
  "352": { hex: "#99ff66", x: 156 },
  "353": { hex: "#99ff99", x: 157 },
  "354": { hex: "#99ffcc", x: 158 },
  "355": { hex: "#99ffff", x: 159 },
  "450": { hex: "#ccff00", x: 190 },
  "451": { hex: "#ccff33", x: 191 },
  "452": { hex: "#ccff66", x: 192 },
  "453": { hex: "#ccff99", x: 193 },
  "454": { hex: "#ccffcc", x: 194 },
  "455": { hex: "#ccffff", x: 195 },
  "550": { hex: "#ffff00", x: 226 },
  "551": { hex: "#ffff33", x: 227 },
  "552": { hex: "#ffff66", x: 228 },
  "553": { hex: "#ffff99", x: 229 },
  "554": { hex: "#ffffcc", x: 230 },
  "555": { hex: "#ffffff", x: 231 }
};

const xtermToPalette = {};
Object.entries(palette).forEach(([id, val]) => {
  if (!(val.x in xtermToPalette)) xtermToPalette[val.x] = id;
});

const names = {
  // G=0
  "003": "Navy blue", "004": "Blue", "005": "Bright blue",
  "102": "Dioxazine", "103": "Indigo", "104": "Grape", "105": "Indigo bright",
  "201": "Red plum", "202": "Byzantine purple", "203": "Purple darker", "204": "Purple dark", "205": "Electric purple",
  "300": "Crimson", "301": "Maroon", "302": "Strawberry", "303": "Bruise purple", "304": "Purple", "305": "Violet",
  "400": "Red", "401": "Ruby", "402": "Raspberry", "403": "Raspberry bright", "404": "Lollipop purple", "405": "Fuchsia bluish",
  "500": "Bright red", "501": "Blood red", "502": "Tourmaline", "503": "Fuchsia redder", "504": "Fuchsia reddish", "505": "Fuchsia",
  // G=1
  "012": "Dark Opal", "013": "Royal blue", "014": "Lapis lazuli", "015": "Lapis bright",
  "111": "Black", "112": "Cloudy gray", "113": "Amethyst grayer", "114": "Amethyst gray", "115": "Amethyst dark",
  "210": "Sienna", "211": "Russet", "212": "Plum", "213": "Royal purple", "214": "Amethyst", "215": "Amethyst bright",
  "310": "Brown", "311": "Jasper", "312": "Hibiscus", "313": "Plum bright", "314": "Orchid", "315": "Velvet purple",
  "410": "Orange", "411": "Fruit punch", "412": "Brick red", "413": "Cerise", "414": "Warm pink", "415": "Warmer pink",
  "510": "Fire orange", "511": "Coral", "512": "Pink tourmaline", "513": "French rose", "514": "Warmest pink", "515": "Hot pink",
  // G=2
  "021": "Emerald", "022": "Teal", "023": "Teal blue", "024": "Steel blue", "025": "Steel blue light",
  "120": "Fern greener", "121": "Fern green", "122": "Fern gray", "123": "Pigeon blue", "124": "Cornflower", "125": "Shady blue",
  "220": "Olive", "221": "Cedar", "222": "Dark gray", "223": "Slate", "224": "Periwinkle gray", "225": "Lavender gray",
  "320": "Dijon", "321": "Tawny", "322": "Garnet", "323": "Slate pink", "324": "Periwinkle", "325": "Lavender",
  "420": "Honey", "421": "Amber", "422": "Pink amber", "423": "Cotton candy", "424": "Cotton rose", "425": "Pink rose",
  "520": "Apricot", "521": "Tangerine", "522": "Tangerine pink", "523": "Creamy pink", "524": "Pink", "525": "Bubblegum pink",
  // G=3
  "030": "Forest green", "031": "Sea green", "032": "Jade", "033": "Ocean green", "034": "Lake green", "035": "Azure",
  "130": "Pear", "131": "Kelly green", "132": "Louise green", "133": "Mary green", "134": "Sapphire", "135": "Sapphire gray",
  "230": "Algae green", "231": "Moss green", "232": "Laurel", "233": "Overcast", "234": "Sky blue", "235": "Sunny blue",
  "330": "Bile green", "331": "Ecru dark", "332": "Ecru", "333": "Silver", "334": "Foggy gray", "335": "Foggy purple",
  "430": "Ochre", "431": "Flaxen", "432": "Sepia", "433": "Rose quartz", "434": "Foggy pink", "435": "Mauve",
  "530": "Gold", "531": "Fool's gold", "532": "Fool's peach", "533": "Salmon", "534": "Carnation pink", "535": "Relaxed pink",
  // G=4
  "040": "Green", "041": "Clover green", "042": "Shamrock green", "043": "Green turquoise", "044": "Teal turquoise", "045": "Turquoise",
  "140": "Amazon green", "141": "Jungle green", "142": "Greener topaz", "143": "Green topaz", "144": "Gray topaz", "145": "Teal topaz",
  "240": "Slime green", "241": "Radation green", "242": "Hint green", "243": "Green aquamarine", "244": "Aquamarine", "245": "Baby blue",
  "340": "Yellow green", "341": "Thyme green", "342": "Sage green", "343": "Sager green", "344": "Pistachio", "345": "Moonstone",
  "440": "Beryl", "441": "Faded yellow", "442": "Pale yellow", "443": "Tan", "444": "White", "445": "Opal",
  "540": "Canary yellow", "541": "Mustard yellow", "542": "Topaz", "543": "Peach", "544": "Pink lemonade", "545": "Lilac",
  // G=5
  "050": "Bright green", "051": "Brighter green", "052": "Summer green", "053": "Spring green", "054": "Verdigris", "055": "Cyan",
  "150": "Unripe plantain", "151": "Unripe banana", "152": "Green peridot", "153": "Spring shower", "154": "Ocean mist", "155": "Light cyan",
  "250": "Lime green", "251": "Not lime or mint", "252": "Hint of mint", "253": "Less minty green", "254": "Mint green", "255": "Zircon",
  "350": "Chartreuse", "351": "Greenish peridot", "352": "Light chartreuse", "353": "Celadon", "354": "Banana and mint", "355": "White cyan",
  "450": "Peridot", "451": "Lemon yellow", "452": "Faded peridot", "453": "Avocado", "454": "Honeydew", "455": "Frost blue",
  "550": "Yellow", "551": "Banana", "552": "Khaki", "553": "Peach and cream", "554": "Cream", "555": "Bright white"
};

const presets = {
  "Sunset": ["500", "530", "440"],
  "Neon Blue": ["003", "015", "045", "055"],
  "Cotton Candy": ["245", "445", "545"],
  "Wine Dark": ["201", "302", "402", "201", "302", "402"],
  "Golden Yellow": ["540", "541", "542", "543", "543"],
  "Blues": ["005", "015", "025", "035", "035"],
  "Indigo": ["102", "103", "104", "105", "105"],
  "Grape": ["204", "205", "214", "215", "225", "225"],
  "Light Pink": ["525", "535", "545", "545"],
  "Strawberry": ["401", "402", "502", "402", "401"],
  "Black-Red": ["111", "111", "111", "300", "400", "500"],
  "Blood Ocean": ["133", "133", "211", "311", "411", "411"],
  "Rose Coral": ["445", "435", "445", "435", "425", "424", "423", "424", "423", "523", "522", "523", "522", "512", "502", "512", "502", "402", "302", "402", "302", "402", "302"],
  "Green Jewels": ["022", "032", "033", "040", "033", "032", "022", "032", "033", "040", "033", "032", "022", "032", "033", "040", "041"],
  "Peacock": ["022", "015", "014", "021", "042", "021", "014", "014"],
  "Sapphire": ["023", "024", "025", "023", "035", "035", "035", "035", "245", "245"],
  "Aquamarine (alt)": ["143", "355", "144", "143", "245", "143", "144", "143"],
  "Black Diamond": ["111", "222", "125", "124", "224", "225", "235", "222", "111"],
  "Pumpkin (alt)": ["520", "421", "531", "531"],
  "Jeweled Beads": ["522", "532", "543", "554", "544", "543", "542", "543", "544", "433", "434", "445", "434", "445", "455", "445", "455", "445", "345", "445", "345", "245", "345", "245", "244", "245", "244", "243", "244", "243", "233", "243", "233", "233"],
  "-----Midge's Gradients-----": ["111"],
  "Anemone": ["312", "423", "534", "544", "555"],
  "Aquamarine": ["033", "044", "055", "255", "355"],
  "Berry": ["201", "302", "403", "504"],
  "Black Cherry": ["201", "301", "401", "501"],
  "Brass": ["220", "330", "440", "441", "442"],
  "Breeze": ["024", "035", "045", "145", "245"],
  "Buttercup": ["430", "540", "552", "553", "554"],
  "Carnation": ["301", "402", "503", "513", "523"],
  "Copper": ["311", "421", "531", "532", "533"],
  "Coral": ["300", "400", "501", "511", "521"],
  "Emerald": ["021", "032", "043", "054"],
  "Fern": ["121", "232", "343", "454"],
  "Fiddlehead": ["021", "031", "041", "141", "241"],
  "Hibiscus": ["300", "401", "502", "512", "522"],
  "Hollyhock": ["202", "303", "404", "505"],
  "Hyacinth": ["103", "114", "125", "135", "235"],
  "Kelp": ["031", "042", "053", "253"],
  "Lemongrass": ["230", "240", "250", "350", "450"],
  "Lilac": ["303", "404", "505", "515", "525"],
  "Loam": ["221", "332", "443", "554"],
  "Maple": ["201", "311", "421", "531", "541"],
  "Mint": ["032", "043", "054", "154", "254"],
  "Mum": ["201", "312", "423", "534"],
  "Oak": ["210", "320", "431", "542", "553"],
  "Ocean": ["012", "023", "034", "045"],
  "Orchid": ["313", "424", "535", "545", "555"],
  "Peach": ["321", "431", "541", "542", "543"],
  "Persimmon": ["410", "510", "521", "532", "543"],
  "Petunia": ["302", "413", "514", "524", "534"],
  "Portabella": ["211", "322", "433", "544", "554"],
  "Pumpkin": ["310", "410", "520", "530", "532"],
  "Seafoam": ["022", "033", "044", "144", "244"],
  "Sky": ["003", "014", "025", "035", "135"],
  "Storm": ["012", "023", "034", "045", "145"],
  "Sunflower": ["320", "430", "540", "550", "552"],
  "Thistle": ["212", "323", "434", "545"],
  "Tidepool": ["022", "033", "133", "144"],
  "Violet": ["102", "203", "304", "314", "324"],
  "Wind": ["112", "223", "334", "445", "555"],
  "Wisteria": ["113", "224", "335", "445"],
  "-----Tamago's Gradients-----": ["111"],
  "Oil Slick": ["111", "201", "210", "220", "121", "012", "102", "111"],
  "Silver Metal": ["333", "444", "555", "444", "333", "444", "555", "444"],
  "Gold Metal": ["440", "441", "551", "552", "553", "552", "551", "441", "440"],
  "Classic Plaid": ["400", "211", "111", "211", "400", "211", "111", "211", "400"],
  "Diamond": ["555", "455", "555", "545", "555", "554", "555"],
  "Glossy Black": ["111", "222", "333", "444", "111", "222", "333", "444"]
};

let chars = [];
let stops = [];
let gradientMode = false;
let pendingColor = "333";
let pendingChangeStart = null;

const undoStack = [];
const redoStack = [];
const MAX_HISTORY = 200;
const SNAPSHOT_DEBOUNCE_MS = 500;
let lastSnapshotTime = 0;
let suppressHistory = false;

let lastEditorSelection = null;
let focusedDidSelect = false;

function snapshotState() {
  return {
    chars: chars.map(c => ({ ...c })),
    selection: getSelectionRange()
  };
}

function pushUndo({ force = false, debounce = false } = {}) {
  if (suppressHistory) return false;
  const now = Date.now();
  if (debounce && !force && now - lastSnapshotTime < SNAPSHOT_DEBOUNCE_MS) {
    return false;
  }
  undoStack.push(snapshotState());
  if (undoStack.length > MAX_HISTORY) undoStack.shift();
  redoStack.length = 0;
  lastSnapshotTime = now;
  syncHistoryButtons();
  return true;
}

function syncHistoryButtons() {
  const undoBtn = document.getElementById("undoBtn");
  const redoBtn = document.getElementById("redoBtn");
  if (undoBtn) undoBtn.disabled = undoStack.length === 0;
  if (redoBtn) redoBtn.disabled = redoStack.length === 0;
}

function applyHistoryState(state) {
  suppressHistory = true;
  chars = state.chars.map(c => ({ ...c }));
  renderEditor();
  if (state.selection) {
    setSelectionRange(state.selection.start, state.selection.end);
  } else {
    editor.focus();
  }
  const raw = modelToRaw(chars);
  rawOutput.value = raw;
  updateRawCounter(raw.length, chars.length);
  syncPaletteUI();
  syncHistoryButtons();
  suppressHistory = false;
  lastSnapshotTime = 0;
}

function undo() {
  if (undoStack.length === 0) return;
  syncFromDOM();
  redoStack.push(snapshotState());
  applyHistoryState(undoStack.pop());
}

function redo() {
  if (redoStack.length === 0) return;
  syncFromDOM();
  undoStack.push(snapshotState());
  applyHistoryState(redoStack.pop());
}

const editor = document.getElementById("editor");
const paletteGrid = document.getElementById("paletteGrid");
const stopsDiv = document.getElementById("stops");
const gradientPreview = document.getElementById("gradientPreview");

const rawOutput = document.getElementById("rawOutput");

const mirrorBox = document.getElementById("mirror");
const reverseBox = document.getElementById("reverse");
const randomBox = document.getElementById("randomize");
const smoothnessInput = document.getElementById("smoothnessInput");
const fixedSmoothnessBox = document.getElementById("fixedSmoothness");
const presetPicker = document.getElementById("presetPicker");

editor.setAttribute("data-placeholder", "Type something...");

function renderEditor() {
  editor.innerHTML = "";
  if (chars.length === 0) return;

  const selStart = lastEditorSelection ? lastEditorSelection.start : -1;
  const selEnd = lastEditorSelection ? lastEditorSelection.end : -1;
  const hasSel = selStart >= 0 && selStart < selEnd;

  let runStart = 0;
  for (let i = 1; i <= chars.length; i++) {
    const colorChanged = i === chars.length || chars[i].id !== chars[runStart].id;
    const selBoundary = hasSel && (i === selStart || i === selEnd);
    if (colorChanged || selBoundary) {
      const span = document.createElement("span");
      const id = chars[runStart].id;
      if (id && palette[id]) {
        span.style.color = palette[id].hex;
        span.dataset.colorId = id;
      }
      span.textContent = chars.slice(runStart, i).map(c => c.ch).join("");
      if (hasSel && runStart >= selStart && i <= selEnd) {
        span.classList.add("selection-mark");
      }
      editor.appendChild(span);
      runStart = i;
    }
  }
}

function syncFromDOM() {
  if (editor.textContent === "") {
    chars = [];
    return;
  }

  const newChars = [];

  function walk(node, inheritedId) {
    if (node.nodeType === Node.TEXT_NODE) {
      for (const ch of node.textContent) {
        newChars.push({ ch, id: inheritedId });
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    if (node.tagName === "BR") {
      newChars.push({ ch: "\n", id: inheritedId });
      return;
    }

    const isBlock = ["DIV", "P"].includes(node.tagName);
    if (isBlock && node.parentNode === editor && newChars.length > 0) {
      const last = newChars[newChars.length - 1];
      if (last.ch !== "\n") {
        newChars.push({ ch: "\n", id: inheritedId });
      }
    }

    let id = inheritedId;
    if (node.dataset && node.dataset.colorId && palette[node.dataset.colorId]) {
      id = node.dataset.colorId;
    }

    for (const child of node.childNodes) {
      walk(child, id);
    }
  }

  for (const child of editor.childNodes) {
    walk(child, null);
  }

  chars = newChars;
}

function nodeOffsetToCharOffset(targetNode, targetOffset) {
  let charOffset = 0;
  let found = false;

  function countNodeChars(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent.length;
    if (node.nodeType !== Node.ELEMENT_NODE) return 0;
    if (node.tagName === "BR") return 1;
    let len = 0;
    for (const child of node.childNodes) len += countNodeChars(child);
    return len;
  }

  if (targetNode === editor) {
    for (let i = 0; i < targetOffset && i < editor.childNodes.length; i++) {
      charOffset += countNodeChars(editor.childNodes[i]);
    }
    return charOffset;
  }

  function walk(node) {
    if (found) return;
    if (node === targetNode) {
      if (node.nodeType === Node.TEXT_NODE) {
        charOffset += targetOffset;
      } else {
        for (let i = 0; i < targetOffset && i < node.childNodes.length; i++) {
          walk(node.childNodes[i]);
        }
      }
      found = true;
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      charOffset += node.textContent.length;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.tagName === "BR") {
      charOffset += 1;
      return;
    }
    const isBlock = ["DIV", "P"].includes(node.tagName);
    if (isBlock && node.parentNode === editor && charOffset > 0) {
      charOffset += 1;
    }
    for (const child of node.childNodes) {
      walk(child);
      if (found) return;
    }
  }

  for (const child of editor.childNodes) {
    walk(child);
    if (found) break;
  }

  return charOffset;
}

function getSelectionRange() {
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount) return null;
  const range = sel.getRangeAt(0);
  if (!editor.contains(range.startContainer) || !editor.contains(range.endContainer)) {
    return null;
  }
  const start = nodeOffsetToCharOffset(range.startContainer, range.startOffset);
  const end = nodeOffsetToCharOffset(range.endContainer, range.endOffset);
  return { start: Math.min(start, end), end: Math.max(start, end) };
}

function setSelectionRange(start, end) {
  editor.focus();
  let charOffset = 0;
  let startNode = null, startOff = 0, endNode = null, endOff = 0;

  function place(node, len) {
    if (!startNode && charOffset + len >= start) {
      startNode = node;
      startOff = start - charOffset;
    }
    if (!endNode && charOffset + len >= end) {
      endNode = node;
      endOff = end - charOffset;
    }
    charOffset += len;
  }

  function walk(node) {
    if (startNode && endNode) return;
    if (node.nodeType === Node.TEXT_NODE) {
      place(node, node.textContent.length);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.tagName === "BR") {
      if (!startNode && charOffset + 1 >= start) {
        const parent = node.parentNode;
        const idx = Array.from(parent.childNodes).indexOf(node);
        startNode = parent;
        startOff = idx + (start - charOffset);
      }
      if (!endNode && charOffset + 1 >= end) {
        const parent = node.parentNode;
        const idx = Array.from(parent.childNodes).indexOf(node);
        endNode = parent;
        endOff = idx + (end - charOffset);
      }
      charOffset += 1;
      return;
    }
    for (const child of node.childNodes) {
      walk(child);
      if (startNode && endNode) return;
    }
  }

  for (const child of editor.childNodes) {
    walk(child);
    if (startNode && endNode) break;
  }

  const sel = window.getSelection();
  sel.removeAllRanges();
  const range = document.createRange();

  if (!startNode) {
    range.selectNodeContents(editor);
    range.collapse(false);
  } else {
    range.setStart(startNode, startOff);
    range.setEnd(endNode || startNode, endNode ? endOff : startOff);
  }
  sel.addRange(range);
}

function getEffectiveSelection() {
  syncFromDOM();
  let sel = getSelectionRange();
  if (!sel || sel.start === sel.end) {
    sel = lastEditorSelection;
  }
  if (!sel) return null;
  const start = Math.max(0, Math.min(sel.start, chars.length));
  const end = Math.max(0, Math.min(sel.end, chars.length));
  if (start === end) return null;
  return { start, end };
}

function applyColorToSelection(id) {
  const sel = getEffectiveSelection();
  if (!sel) return false;
  pushUndo({ force: true });
  for (let i = sel.start; i < sel.end; i++) {
    chars[i].id = id;
  }
  renderEditor();
  setSelectionRange(sel.start, sel.end);
  lastEditorSelection = { start: sel.start, end: sel.end };
  focusedDidSelect = true;
  updateOutputs();
  syncPaletteUI();
  return true;
}

function canApplyGradient() {
  if (stops.length === 0 || chars.length === 0) return false;
  const processed = getProcessedStops();
  if (!processed.length) return false;

  let sel = getSelectionRange();
  if (!sel || sel.start === sel.end) sel = lastEditorSelection;
  let start, end;
  if (sel && sel.start !== sel.end) {
    start = Math.max(0, Math.min(sel.start, chars.length));
    end = Math.max(0, Math.min(sel.end, chars.length));
  } else {
    start = 0;
    end = chars.length;
  }
  if (start >= end) return false;

  const len = end - start;
  const smoothness = Math.max(1, parseInt(smoothnessInput.value) || 3);
  const fixedMode = fixedSmoothnessBox.checked;

  for (let i = 0; i < len; i++) {
    let colorIndex;
    if (fixedMode) {
      colorIndex = Math.floor(i / smoothness) % processed.length;
    } else {
      colorIndex = Math.min(
        Math.floor((i / len) * processed.length),
        processed.length - 1
      );
    }
    if (chars[start + i].id !== processed[colorIndex].id) {
      return true;
    }
  }
  return false;
}

function syncApplyButton() {
  const btn = document.getElementById("applyGradient");
  if (btn) btn.disabled = !canApplyGradient();
}

function recolorAllWithGradient() {
  if (!gradientMode || stops.length === 0 || chars.length === 0) return false;
  const processed = getProcessedStops();
  if (!processed.length) return false;

  const smoothness = Math.max(1, parseInt(smoothnessInput.value) || 3);
  const fixedMode = fixedSmoothnessBox.checked;

  for (let i = 0; i < chars.length; i++) {
    let colorIndex;
    if (fixedMode) {
      colorIndex = Math.floor(i / smoothness) % processed.length;
    } else {
      colorIndex = Math.min(
        Math.floor((i / chars.length) * processed.length),
        processed.length - 1
      );
    }
    chars[i].id = processed[colorIndex].id;
  }
  return true;
}

function applyGradientToSelection({ debounceUndo = false, silent = false, fallbackToAll = false } = {}) {
  let sel = getEffectiveSelection();
  if (!sel && fallbackToAll && chars.length > 0) {
    sel = { start: 0, end: chars.length };
  }
  if (!sel) {
    if (!silent) flashHint("Select a range in the editor first.");
    return;
  }
  const processed = getProcessedStops();
  if (!processed.length) {
    if (!silent) flashHint("Add at least one stop to the gradient first.");
    return;
  }

  const len = sel.end - sel.start;
  const smoothness = Math.max(1, parseInt(smoothnessInput.value) || 3);
  const fixedMode = fixedSmoothnessBox.checked;

  if (debounceUndo) {
    pushUndo({ debounce: true });
  } else {
    pushUndo({ force: true });
  }
  for (let i = 0; i < len; i++) {
    let colorIndex;
    if (fixedMode) {
      colorIndex = Math.floor(i / smoothness) % processed.length;
    } else {
      colorIndex = Math.min(
        Math.floor((i / len) * processed.length),
        processed.length - 1
      );
    }
    chars[sel.start + i].id = processed[colorIndex].id;
  }

  renderEditor();
  setSelectionRange(sel.start, sel.end);
  lastEditorSelection = { start: sel.start, end: sel.end };
  focusedDidSelect = true;
  updateOutputs();
  syncPaletteUI();
}

function clearAllColors() {
  syncFromDOM();
  if (chars.length === 0) return;
  pushUndo({ force: true });
  const sel = getSelectionRange();
  for (const c of chars) c.id = null;
  renderEditor();
  if (sel) setSelectionRange(sel.start, sel.end);
  updateOutputs();
  syncPaletteUI();
}

function clearText() {
  if (chars.length === 0) return;
  pushUndo({ force: true });
  chars = [];
  renderEditor();
  updateOutputs();
  syncPaletteUI();
}

function modelToRaw(arr) {
  let out = "";
  let last = null;
  for (const c of arr) {
    if (c.id && c.id !== last) {
      out += `%${c.id}`;
      last = c.id;
    }
    out += c.ch;
  }
  return out;
}

function rawToModel(text) {
  const result = [];
  let i = 0;
  let currentId = null;
  while (i < text.length) {
    if (text[i] === "%" && i + 3 < text.length) {
      const code = text.slice(i + 1, i + 4);
      if (/^\d{3}$/.test(code) && palette[code]) {
        currentId = code;
        i += 4;
        continue;
      }
    }
    result.push({ ch: text[i], id: currentId });
    i++;
  }
  return result;
}

function getProcessedStops() {
  let result = [...stops];
  if (randomBox.checked) result = [...result].sort(() => Math.random() - 0.5);
  if (reverseBox.checked) result.reverse();
  if (mirrorBox.checked) result = [...result, ...result.slice(0, -1).reverse()];
  return result;
}

let dragIndex = null;

function renderStops() {
  stopsDiv.innerHTML = "";
  stops.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "stop";
    div.draggable = true;
    div.style.background = s.hex;
    div.textContent = s.id;
    div.title = `${s.id} (xterm ${s.x}) — click to remove`;

    div.ondragstart = () => (dragIndex = i);
    div.ondragover = e => e.preventDefault();
    div.ondrop = () => {
      if (dragIndex === null || dragIndex === i) return;
      const moved = stops.splice(dragIndex, 1)[0];
      stops.splice(i, 0, moved);
      afterStopsChanged();
    };

    div.onclick = e => {
      if (e.shiftKey) {
        stops = stops.filter(s2 => s2.id !== s.id);
      } else {
        stops.splice(i, 1);
      }
      afterStopsChanged();
    };

    stopsDiv.appendChild(div);
  });

  syncPaletteUI();
}

function updateGradientPreview() {
  const processed = getProcessedStops();
  if (processed.length === 0) {
    gradientPreview.style.background = "transparent";
  } else if (processed.length === 1) {
    gradientPreview.style.background = processed[0].hex;
  } else {
    gradientPreview.style.background =
      `linear-gradient(to right, ${processed.map(s => s.hex).join(", ")})`;
  }
}

function colorsInSelection() {
  let sel = getSelectionRange();
  if (!sel || sel.start === sel.end) sel = lastEditorSelection;
  if (!sel) return new Set();
  const start = Math.max(0, Math.min(sel.start, chars.length));
  const end = Math.max(0, Math.min(sel.end, chars.length));
  const ids = new Set();
  for (let i = start; i < end; i++) {
    if (chars[i] && chars[i].id) ids.add(chars[i].id);
  }
  return ids;
}

function syncPaletteUI() {
  const positions = {};
  stops.forEach((s, i) => {
    if (!positions[s.id]) positions[s.id] = [];
    positions[s.id].push(i + 1);
  });

  const currentSet = gradientMode ? null : colorsInSelection();

  document.querySelectorAll(".palette-cell[data-id]").forEach(div => {
    const id = div.dataset.id;
    const ps = positions[id];
    const isBrush = !gradientMode && pendingColor === id;
    div.classList.toggle("in-gradient", gradientMode && !!ps);
    div.classList.toggle("is-brush", isBrush);
    div.classList.toggle(
      "is-current",
      !isBrush && !!currentSet && currentSet.has(id)
    );
    const badge = div.querySelector(".position-badge");
    if (badge) {
      badge.textContent = gradientMode && ps ? ps.join(",") : "";
    }
  });

  syncApplyButton();
}

function autoSizeTextarea(el) {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
}

function updateRawCounter(rawLen, textLen) {
  const charsEl = document.getElementById("rawCounterChars");
  const textEl = document.getElementById("rawCounterText");
  if (charsEl) charsEl.textContent = `Characters: ${rawLen}`;
  if (textEl) textEl.textContent = `Text length: ${textLen}`;
}

function updateOutputs() {
  const raw = modelToRaw(chars);
  if (document.activeElement !== rawOutput) {
    rawOutput.value = raw;
  }
  updateRawCounter(raw.length, chars.length);
  autoSizeTextarea(rawOutput);
}

function handlePaletteClick(id, val, e) {
  if (gradientMode) {
    if (e.shiftKey) {
      const idx = [...stops].reverse().findIndex(s => s.id === id);
      if (idx !== -1) stops.splice(stops.length - 1 - idx, 1);
      afterStopsChanged({ apply: true });
    } else if (e.altKey) {
      stops = stops.filter(s => s.id !== id);
      afterStopsChanged({ apply: true });
    } else {
      stops.push({ id, ...val });
      afterStopsChanged({ apply: true });
    }
    return;
  }
  pendingColor = id;
  const applied = applyColorToSelection(id);
  if (!applied) {
    syncPaletteUI();
  }
}

function afterStopsChanged({ apply = true } = {}) {
  renderStops();
  updateGradientPreview();
  if (apply && gradientMode) {
    applyGradientToSelection({ debounceUndo: true, fallbackToAll: true, silent: true });
  }
}

for (let g = 0; g < 6; g++) {
  const block = document.createElement("div");
  block.className = "palette-block";
  for (let r = 0; r < 6; r++) {
    for (let b = 0; b < 6; b++) {
      const id = `${r}${g}${b}`;
      const cell = document.createElement("div");
      cell.className = "palette-cell";
      if (palette[id]) {
        const val = palette[id];
        cell.dataset.id = id;
        cell.title = `%${id} ${names[id] || ""}`.trim();

        const swatch = document.createElement("span");
        swatch.className = "swatch";
        swatch.style.background = val.hex;

        const badge = document.createElement("span");
        badge.className = "position-badge";

        const code = document.createElement("span");
        code.className = "code";
        code.textContent = `%${id}`;
        code.style.color = val.hex;

        const name = document.createElement("span");
        name.className = "name";
        name.textContent = names[id] || "";

        cell.append(swatch, badge, code, name);

        cell.addEventListener("mousedown", e => e.preventDefault());
        cell.addEventListener("click", e => handlePaletteClick(id, val, e));
      } else {
        cell.classList.add("empty");
      }
      block.appendChild(cell);
    }
  }
  paletteGrid.appendChild(block);
}

const placeholderOpt = document.createElement("option");
placeholderOpt.value = "";
placeholderOpt.textContent = "(pick a preset…)";
placeholderOpt.disabled = true;
placeholderOpt.selected = true;
presetPicker.appendChild(placeholderOpt);

Object.keys(presets).forEach(name => {
  const opt = document.createElement("option");
  opt.value = name;
  opt.textContent = name;
  presetPicker.appendChild(opt);
});

presetPicker.addEventListener("change", () => {
  const name = presetPicker.value;
  if (!name || !presets[name]) return;
  stops = presets[name]
    .filter(id => palette[id])
    .map(id => ({ id, ...palette[id] }));
  afterStopsChanged();
  // applyGradient inside afterStopsChanged focuses the editor
  presetPicker.focus();
});

editor.addEventListener("focus", () => {
  focusedDidSelect = false;
});

editor.addEventListener("blur", () => {
  if (!focusedDidSelect) {
    lastEditorSelection = null;
  }
  renderEditor();
  syncPaletteUI();
});

editor.addEventListener("beforeinput", () => {
  if (suppressHistory) return;
  syncFromDOM();
  pushUndo({ debounce: true });

  if (!gradientMode && pendingColor !== null) {
    const sel = getSelectionRange();
    pendingChangeStart = sel ? sel.start : chars.length;
  }
});

editor.addEventListener("input", () => {
  syncFromDOM();
  lastEditorSelection = null;

  let didBrushApply = false;
  if (!gradientMode && pendingColor !== null && pendingChangeStart !== null) {
    const sel = getSelectionRange();
    const cursorEnd = sel ? sel.end : chars.length;
    for (let i = pendingChangeStart; i < cursorEnd && i < chars.length; i++) {
      if (chars[i].id !== pendingColor) {
        chars[i].id = pendingColor;
        didBrushApply = true;
      }
    }
  }
  pendingChangeStart = null;

  if (recolorAllWithGradient() || didBrushApply) {
    const sel = getSelectionRange();
    const cursorPos = sel ? sel.end : chars.length;
    renderEditor();
    setSelectionRange(cursorPos, cursorPos);
  }

  updateOutputs();
  syncPaletteUI();
});

document.addEventListener("selectionchange", () => {
  if (suppressHistory) return;
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount) return;
  const range = sel.getRangeAt(0);
  if (!editor.contains(range.startContainer) || !editor.contains(range.endContainer)) {
    return;
  }
  const r = getSelectionRange();
  if (r && r.start !== r.end) {
    lastEditorSelection = r;
    focusedDidSelect = true;
  }
  if (!gradientMode) {
    syncPaletteUI();
  } else {
    syncApplyButton();
  }
});

// catch misclicks on grid gaps
paletteGrid.addEventListener("mousedown", e => e.preventDefault());

document.addEventListener("keydown", e => {
  const mod = e.ctrlKey || e.metaKey;
  if (!mod) return;
  const key = e.key.toLowerCase();
  if (key === "z" && !e.shiftKey) {
    e.preventDefault();
    undo();
  } else if (key === "y" || (key === "z" && e.shiftKey)) {
    e.preventDefault();
    redo();
  }
});

editor.addEventListener("paste", e => {
  e.preventDefault();
  const text = (e.clipboardData || window.clipboardData).getData("text");
  if (!text) return;

  syncFromDOM();
  pushUndo({ force: true });
  const sel = getSelectionRange();
  const insStart = sel ? sel.start : chars.length;
  const insEnd = sel ? sel.end : chars.length;

  let inserted;
  if (/%\d{3}/.test(text)) {
    inserted = rawToModel(text);
  } else {
    const inheritId = (!gradientMode && pendingColor !== null)
      ? pendingColor
      : (insStart > 0 ? chars[insStart - 1].id : null);
    inserted = [...text].map(ch => ({ ch, id: inheritId }));
  }

  chars = [
    ...chars.slice(0, insStart),
    ...inserted,
    ...chars.slice(insEnd)
  ];
  recolorAllWithGradient();
  renderEditor();
  setSelectionRange(insStart + inserted.length, insStart + inserted.length);
  updateOutputs();
  syncPaletteUI();
});

function preserveSelectionOn(el) {
  el.addEventListener("mousedown", e => e.preventDefault());
}

document.getElementById("clearAllColors").onclick = clearAllColors;
document.getElementById("clearText").onclick = clearText;

const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");
undoBtn.addEventListener("click", undo);
redoBtn.addEventListener("click", redo);
preserveSelectionOn(undoBtn);
preserveSelectionOn(redoBtn);
document.getElementById("clearStops").onclick = () => {
  stops = [];
  afterStopsChanged({ apply: false });
};
preserveSelectionOn(document.getElementById("clearAllColors"));
preserveSelectionOn(document.getElementById("clearText"));

const modeButtons = document.querySelectorAll(".mode-btn");
const gradientPanel = document.getElementById("gradientPanel");
function setMode(mode) {
  gradientMode = (mode === "gradient");
  modeButtons.forEach(b => {
    const isActive = b.dataset.mode === mode;
    b.classList.toggle("active", isActive);
    b.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  gradientPanel.hidden = !gradientMode;
  syncPaletteUI();
}
modeButtons.forEach(b => {
  preserveSelectionOn(b);
  b.addEventListener("click", () => setMode(b.dataset.mode));
});

preserveSelectionOn(document.getElementById("clearStops"));

const applyGradientBtn = document.getElementById("applyGradient");
applyGradientBtn.addEventListener("click", () => {
  applyGradientToSelection({ fallbackToAll: true });
});
preserveSelectionOn(applyGradientBtn);

const toggleNamesInput = document.getElementById("toggleNames");
toggleNamesInput.addEventListener("change", () => {
  paletteGrid.classList.toggle("show-names", toggleNamesInput.checked);
});

[mirrorBox, reverseBox, randomBox, smoothnessInput, fixedSmoothnessBox].forEach(el => {
  el.addEventListener("input", () => {
    updateGradientPreview();
    if (gradientMode) applyGradientToSelection({ debounceUndo: true, silent: true });
  });
});

[mirrorBox, reverseBox, randomBox, fixedSmoothnessBox].forEach(preserveSelectionOn);

rawOutput.addEventListener("input", () => {
  pushUndo({ debounce: true });
  chars = rawToModel(rawOutput.value);
  renderEditor();
  const raw = modelToRaw(chars);
  updateRawCounter(raw.length, chars.length);
  autoSizeTextarea(rawOutput);
});

rawOutput.addEventListener("blur", () => {
  const canonical = modelToRaw(chars);
  if (rawOutput.value !== canonical) {
    rawOutput.value = canonical;
    updateRawCounter(canonical.length, chars.length);
  }
});

let hintTimer = null;
function flashHint(msg) {
  let el = document.getElementById("flashHint");
  if (!el) {
    el = document.createElement("div");
    el.id = "flashHint";
    el.style.cssText =
      "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);" +
      "background:hsl(230deg,5%,12%);color:hsl(230deg,5%,90%);padding:10px 18px;" +
      "border:1px solid #3b3d3f;border-radius:8px;letter-spacing:0.05em;" +
      "z-index:9999;box-shadow:0 4px 15px rgba(0,0,0,0.5);";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.opacity = "1";
  if (hintTimer) clearTimeout(hintTimer);
  hintTimer = setTimeout(() => {
    el.style.transition = "opacity 0.4s";
    el.style.opacity = "0";
    setTimeout(() => {
      el.style.transition = "";
      el.textContent = "";
    }, 400);
  }, 1800);
}

renderEditor();
renderStops();
updateGradientPreview();
updateOutputs();
syncPaletteUI();
