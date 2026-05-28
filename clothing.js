const COLORS = [
  { num: 1, code: "201", name: "Red plum", hex: "#660033" },
  { num: 2, code: "300", name: "Crimson", hex: "#990000" },
  { num: 3, code: "301", name: "Maroon", hex: "#990033" },
  { num: 4, code: "401", name: "Ruby", hex: "#cc0033" },
  { num: 5, code: "400", name: "Red", hex: "#cc0000" },
  { num: 6, code: "500", name: "Bright red", hex: "#ff0000" },
  { num: 7, code: "501", name: "Blood red", hex: "#ff0033" },
  { num: 8, code: "502", name: "Tourmaline", hex: "#ff0066" },
  { num: 9, code: "402", name: "Raspberry", hex: "#cc0066" },
  { num: 10, code: "302", name: "Strawberry", hex: "#990066" },
  { num: 11, code: "413", name: "Cerise", hex: "#cc3399" },
  { num: 12, code: "513", name: "French rose", hex: "#ff3399" },
  { num: 13, code: "412", name: "Brick red", hex: "#cc3366" },
  { num: 14, code: "423", name: "Cotton candy", hex: "#cc6699" },
  { num: 15, code: "523", name: "Creamy pink", hex: "#ff6699" },
  { num: 16, code: "533", name: "Salmon", hex: "#ff9999" },
  { num: 17, code: "534", name: "Carnation pink", hex: "#ff99cc" },
  { num: 18, code: "544", name: "Pink lemonade", hex: "#ffcccc" },
  { num: 19, code: "425", name: "Pink rose", hex: "#cc66ff" },
  { num: 20, code: "524", name: "Pink", hex: "#ff66cc" },
  { num: 21, code: "525", name: "Bubblegum pink", hex: "#ff66ff" },
  { num: 22, code: "515", name: "Hot pink", hex: "#ff33ff" },
  { num: 23, code: "220", name: "Olive", hex: "#666600" },
  { num: 24, code: "221", name: "Cedar", hex: "#666633" },
  { num: 25, code: "332", name: "Ecru", hex: "#999966" },
  { num: 26, code: "443", name: "Tan", hex: "#cccc99" },
  { num: 27, code: "211", name: "Russet", hex: "#663333" },
  { num: 28, code: "210", name: "Sienna", hex: "#663300" },
  { num: 29, code: "310", name: "Brown", hex: "#993300" },
  { num: 30, code: "320", name: "Dijon", hex: "#996600" },
  { num: 31, code: "321", name: "Tawny", hex: "#996633" },
  { num: 32, code: "322", name: "Garnet", hex: "#996666" },
  { num: 33, code: "311", name: "Jasper", hex: "#993333" },
  { num: 34, code: "411", name: "Fruit punch", hex: "#cc3333" },
  { num: 35, code: "410", name: "Orange", hex: "#cc3300" },
  { num: 36, code: "420", name: "Honey", hex: "#cc6600" },
  { num: 37, code: "421", name: "Amber", hex: "#cc6633" },
  { num: 38, code: "430", name: "Ochre", hex: "#cc9900" },
  { num: 39, code: "431", name: "Flaxen", hex: "#cc9933" },
  { num: 40, code: "432", name: "Sepia", hex: "#cc9966" },
  { num: 41, code: "433", name: "Rose quartz", hex: "#cc9999" },
  { num: 42, code: "510", name: "Fire orange", hex: "#ff3300" },
  { num: 43, code: "511", name: "Coral", hex: "#ff3333" },
  { num: 44, code: "520", name: "Apricot", hex: "#ff6600" },
  { num: 45, code: "521", name: "Tangerine", hex: "#ff6633" },
  { num: 46, code: "530", name: "Gold", hex: "#ff9900" },
  { num: 47, code: "540", name: "Canary yellow", hex: "#ffcc00" },
  { num: 48, code: "541", name: "Mustard yellow", hex: "#ffcc33" },
  { num: 49, code: "440", name: "Beryl", hex: "#cccc00" },
  { num: 50, code: "450", name: "Peridot", hex: "#ccff00" },
  { num: 51, code: "451", name: "Lemon", hex: "#ccff33" },
  { num: 52, code: "550", name: "Yellow", hex: "#ffff00" },
  { num: 53, code: "551", name: "Banana", hex: "#ffff33" },
  { num: 54, code: "552", name: "Khaki", hex: "#ffff66" },
  { num: 55, code: "542", name: "Topaz", hex: "#ffcc66" },
  { num: 56, code: "543", name: "Peach", hex: "#ffcc99" },
  { num: 57, code: "554", name: "Cream", hex: "#ffffcc" },
  { num: 58, code: "021", name: "Emerald", hex: "#006633" },
  { num: 59, code: "121", name: "Fern green", hex: "#336633" },
  { num: 60, code: "022", name: "Teal", hex: "#006666" },
  { num: 61, code: "032", name: "Jade", hex: "#009966" },
  { num: 62, code: "033", name: "Ocean green", hex: "#009999" },
  { num: 63, code: "232", name: "Laurel green", hex: "#669966" },
  { num: 64, code: "130", name: "Pear", hex: "#339900" },
  { num: 65, code: "131", name: "Kelly green", hex: "#339933" },
  { num: 66, code: "231", name: "Moss green", hex: "#669933" },
  { num: 67, code: "031", name: "Sea green", hex: "#009933" },
  { num: 68, code: "030", name: "Forest green", hex: "#009900" },
  { num: 69, code: "040", name: "Plain green", hex: "#00cc00" },
  { num: 70, code: "041", name: "Clover green", hex: "#00cc33" },
  { num: 71, code: "141", name: "Jungle green", hex: "#33cc33" },
  { num: 72, code: "050", name: "Bright green", hex: "#00ff00" },
  { num: 73, code: "250", name: "Lime", hex: "#66ff00" },
  { num: 74, code: "350", name: "Chartreuse", hex: "#99ff00" },
  { num: 75, code: "053", name: "Spring green", hex: "#00ff99" },
  { num: 76, code: "054", name: "Verdigris", hex: "#00ffcc" },
  { num: 77, code: "254", name: "Mint green", hex: "#66ffcc" },
  { num: 78, code: "342", name: "Sage green", hex: "#99cc66" },
  { num: 79, code: "353", name: "Celadon", hex: "#99ff99" },
  { num: 80, code: "453", name: "Avocado", hex: "#ccff99" },
  { num: 81, code: "454", name: "Honeydew", hex: "#ccffcc" },
  { num: 82, code: "003", name: "Navy blue", hex: "#000099" },
  { num: 83, code: "004", name: "Blue", hex: "#0000cc" },
  { num: 84, code: "005", name: "Bright blue", hex: "#0000ff" },
  { num: 85, code: "445", name: "Opal", hex: "#ccccff" },
  { num: 86, code: "013", name: "Royal blue", hex: "#003399" },
  { num: 87, code: "014", name: "Lapis lazuli", hex: "#0033cc" },
  { num: 88, code: "024", name: "Steel blue", hex: "#0066cc" },
  { num: 89, code: "124", name: "Cornflower", hex: "#3366cc" },
  { num: 90, code: "134", name: "Sapphire", hex: "#3399cc" },
  { num: 91, code: "234", name: "Sky blue", hex: "#6699cc" },
  { num: 92, code: "123", name: "Pigeon blue", hex: "#336699" },
  { num: 93, code: "125", name: "Shady blue", hex: "#3366ff" },
  { num: 94, code: "035", name: "Azure", hex: "#0099ff" },
  { num: 95, code: "045", name: "Turquoise", hex: "#00ccff" },
  { num: 96, code: "145", name: "Teal topaz", hex: "#33ccff" },
  { num: 97, code: "245", name: "Baby blue", hex: "#66ccff" },
  { num: 98, code: "345", name: "Moonstone", hex: "#99ccff" },
  { num: 99, code: "055", name: "Cyan", hex: "#00ffff" },
  { num: 100, code: "255", name: "Zircon", hex: "#66ffff" },
  { num: 101, code: "244", name: "Aquamarine", hex: "#66cccc" },
  { num: 102, code: "344", name: "Pistachio", hex: "#99cccc" },
  { num: 103, code: "455", name: "Frost blue", hex: "#ccffff" },
  { num: 104, code: "102", name: "Dioxazine", hex: "#330066" },
  { num: 105, code: "202", name: "Byzantine purple", hex: "#660066" },
  { num: 106, code: "303", name: "Bruise purple", hex: "#990099" },
  { num: 107, code: "404", name: "Lollipop purple", hex: "#cc00cc" },
  { num: 108, code: "505", name: "Fuchsia", hex: "#ff00ff" },
  { num: 109, code: "304", name: "Purple", hex: "#9900cc" },
  { num: 110, code: "103", name: "Indigo", hex: "#330099" },
  { num: 111, code: "104", name: "Grape", hex: "#3300cc" },
  { num: 112, code: "205", name: "Electric purple", hex: "#6600ff" },
  { num: 113, code: "305", name: "Violet", hex: "#9900ff" },
  { num: 114, code: "314", name: "Orchid", hex: "#9933cc" },
  { num: 115, code: "315", name: "Velvet purple", hex: "#9933ff" },
  { num: 116, code: "312", name: "Hibiscus", hex: "#993366" },
  { num: 117, code: "212", name: "Plum", hex: "#663366" },
  { num: 118, code: "213", name: "Royal purple", hex: "#663399" },
  { num: 119, code: "214", name: "Amethyst", hex: "#6633cc" },
  { num: 120, code: "324", name: "Periwinkle", hex: "#9966cc" },
  { num: 121, code: "325", name: "Lavender", hex: "#9966ff" },
  { num: 122, code: "435", name: "Mauve", hex: "#cc99ff" },
  { num: 123, code: "545", name: "Lilac", hex: "#ffccff" },
  { num: 124, code: "111", name: "Black", hex: "#333333" },
  { num: 125, code: "112", name: "Cloudy gray", hex: "#333366" },
  { num: 126, code: "222", name: "Dark gray", hex: "#666666" },
  { num: 127, code: "223", name: "Slate", hex: "#666699" },
  { num: 128, code: "333", name: "Silver", hex: "#999999" },
  { num: 129, code: "334", name: "Foggy gray", hex: "#9999cc" },
  { num: 130, code: "444", name: "White", hex: "#cccccc" },
  { num: 131, code: "445", name: "Opal", hex: "#ccccff" },
  { num: 132, code: "555", name: "Bright white", hex: "#ffffff" }
];

const PRONOUNS = {
  she:   { s: "she",  p: "her",   t: "hers",   o: "her",  r: "herself"  },
  he:    { s: "he",   p: "his",   t: "his",    o: "him",  r: "himself"  },
  they:  { s: "they", p: "their", t: "theirs", o: "them", r: "themself" },
  first: { s: "you",  p: "your",  t: "yours",  o: "you",  r: "yourself" }
};

const COVERAGE_PRESETS = {
  HEAD: { mandatory: ["head"], optional: [] },
  HEAD_NECK_OFF: { mandatory: ["head"], optional: [{ part: "neck", defaultOn: false }] },
  FACE_HEAD_NECK_OFF: { mandatory: ["face"], optional: [{ part: "head", defaultOn: false }, { part: "neck", defaultOn: false }] },
  NECK: { mandatory: ["neck"], optional: [] },
  NECK_HEAD_OFF: { mandatory: ["neck"], optional: [{ part: "head", defaultOn: false }] },
  TORSO: { mandatory: ["torso"], optional: [] },
  TORSO_ARMS_OFF: { mandatory: ["torso"], optional: [{ part: "arms", defaultOn: false }] },
  TORSO_ARMS_ON_NECK_OFF: { mandatory: ["torso"], optional: [{ part: "arms", defaultOn: true }, { part: "neck", defaultOn: false }] },
  TORSO_LEGS_ON: { mandatory: ["torso"], optional: [{ part: "legs", defaultOn: true }] },
  TORSO_LEGS_ON_ARMS_OFF: { mandatory: ["torso"], optional: [{ part: "legs", defaultOn: true }, { part: "arms", defaultOn: false }] },
  TORSO_LEGS_ON_ARMS_ON: { mandatory: ["torso"], optional: [{ part: "legs", defaultOn: true }, { part: "arms", defaultOn: true }] },
  ARMS_TORSO_ON_LEGS_ON: { mandatory: ["arms"], optional: [{ part: "torso", defaultOn: true }, { part: "legs", defaultOn: true }] },
  ARMS_TORSO_ON_HEAD_ON: { mandatory: ["arms"], optional: [{ part: "torso", defaultOn: true }, { part: "head", defaultOn: true }] },
  HANDS_ARMS_ON: { mandatory: ["hands"], optional: [{ part: "arms", defaultOn: true }] },
  HANDS_ARMS_OFF: { mandatory: ["hands"], optional: [{ part: "arms", defaultOn: false }] },
  ARMS: { mandatory: ["arms"], optional: [] },
  LEGS: { mandatory: ["legs"], optional: [] },
  LEGS_TORSO_ON: { mandatory: ["legs"], optional: [{ part: "torso", defaultOn: true }] },
  LEGS_TORSO_OFF: { mandatory: ["legs"], optional: [{ part: "torso", defaultOn: false }] },
  FEET: { mandatory: ["feet"], optional: [] },
  FEET_LEGS_OFF: { mandatory: ["feet"], optional: [{ part: "legs", defaultOn: false }] },
  NONE: { mandatory: [], optional: [] }
};

const CATEGORIES_RAW = [
  ["Headwear", [
    ["Beret", "HEAD"], ["Bonnet", "HEAD"], ["Cap", "HEAD"], ["Hat", "HEAD"],
    ["Turban", "HEAD"], ["Hood", "HEAD_NECK_OFF"], ["Veil", "HEAD_NECK_OFF"],
    ["Mask", "FACE_HEAD_NECK_OFF"], ["Makeup", "NONE"], ["Wig", "HEAD"]
  ]],
  ["Neckwear", [
    ["Collar", "NECK"], ["Scarf", "NECK"], ["Shawl", "NECK_HEAD_OFF"]
  ]],
  ["Tops", [
    ["Corset", "TORSO"], ["Camisole", "TORSO"], ["T-Shirt", "TORSO"],
    ["Tank Top", "TORSO"], ["Vest", "TORSO"], ["Blouse", "TORSO_ARMS_OFF"],
    ["Jersey", "TORSO_ARMS_OFF"], ["Leotard", "TORSO_ARMS_OFF"],
    ["Shirt", "TORSO_ARMS_OFF"], ["Sweater", "TORSO_ARMS_ON_NECK_OFF"]
  ]],
  ["Suits & Dresses", [
    ["Slip", "TORSO_LEGS_ON"], ["Sundress", "TORSO_LEGS_ON"], ["Tutu", "TORSO_LEGS_ON"],
    ["Bodysuit", "TORSO_LEGS_ON_ARMS_OFF"], ["Costume", "TORSO_LEGS_ON_ARMS_OFF"],
    ["Dhoti", "TORSO_LEGS_ON_ARMS_OFF"], ["Dirndl", "TORSO_LEGS_ON_ARMS_OFF"],
    ["Dress", "TORSO_LEGS_ON_ARMS_OFF"], ["Gown", "TORSO_LEGS_ON_ARMS_OFF"],
    ["Jumper", "TORSO_LEGS_ON_ARMS_OFF"], ["Jumpsuit", "TORSO_LEGS_ON_ARMS_OFF"],
    ["Onesie", "TORSO_LEGS_ON_ARMS_OFF"], ["Sarong", "TORSO_LEGS_ON_ARMS_OFF"],
    ["Suit", "TORSO_LEGS_ON_ARMS_OFF"], ["Uniform", "TORSO_LEGS_ON_ARMS_OFF"],
    ["Hanbok", "TORSO_LEGS_ON_ARMS_ON"], ["Kimono", "TORSO_LEGS_ON_ARMS_ON"],
    ["Sari", "TORSO_LEGS_ON_ARMS_ON"]
  ]],
  ["Coats & Outerwear", [
    ["Blazer", "TORSO_ARMS_OFF"], ["Jacket", "TORSO_ARMS_ON_NECK_OFF"],
    ["Cloak", "ARMS_TORSO_ON_LEGS_ON"], ["Duster", "ARMS_TORSO_ON_LEGS_ON"],
    ["Kaftan", "TORSO_LEGS_ON_ARMS_ON"], ["Overcoat", "ARMS_TORSO_ON_LEGS_ON"],
    ["Poncho", "ARMS_TORSO_ON_LEGS_ON"], ["Robe", "ARMS_TORSO_ON_LEGS_ON"],
    ["Trenchcoat", "ARMS_TORSO_ON_LEGS_ON"], ["Hoodie", "ARMS_TORSO_ON_HEAD_ON"],
    ["Parka", "ARMS_TORSO_ON_HEAD_ON"], ["Raincoat", "ARMS_TORSO_ON_HEAD_ON"],
    ["Cardigan", "ARMS_TORSO_ON_LEGS_ON"]
  ]],
  ["Gloves & Arm Warmers", [
    ["Gloves", "HANDS_ARMS_ON"], ["Mittens", "HANDS_ARMS_OFF"], ["Arm Warmers", "ARMS"]
  ]],
  ["Trousers, Pants & Skirts", [
    ["Bell Bottoms", "LEGS"], ["Chaps", "LEGS"], ["Jeans", "LEGS"],
    ["Leggings", "LEGS"], ["Slacks", "LEGS"], ["Trousers", "LEGS"],
    ["Overalls", "LEGS_TORSO_ON"], ["Pants", "LEGS_TORSO_OFF"],
    ["Skirt", "LEGS_TORSO_OFF"], ["Backless Dress", "LEGS_TORSO_ON"]
  ]],
  ["Shorts & Undies", [
    ["Boxers", "NONE"], ["Briefs", "NONE"], ["Panties", "NONE"],
    ["Shorts", "NONE"], ["Skort", "NONE"], ["Trunks", "NONE"],
    ["Underpants", "NONE"], ["Underwear", "NONE"]
  ]],
  ["Footwear", [
    ["Boots", "FEET"], ["Flats", "FEET"], ["Heels", "FEET"], ["Pumps", "FEET"],
    ["Shoes", "FEET"], ["Slippers", "FEET"], ["Sneakers", "FEET"],
    ["Socks", "FEET_LEGS_OFF"], ["Tights", "FEET_LEGS_OFF"], ["Stockings", "FEET_LEGS_OFF"]
  ]],
  ["Head Accessories", [
    ["Crown", "NONE"], ["Hair Clip", "NONE"], ["Hair Extensions", "NONE"],
    ["Headband", "NONE"], ["Ribbon", "NONE"], ["Tiara", "NONE"]
  ]],
  ["Facial Accessories", [
    ["Earring", "NONE"], ["Earrings", "NONE"], ["Ear Cuff", "NONE"],
    ["Ear Cuffs", "NONE"], ["Eyepatch", "NONE"], ["Glasses", "NONE"],
    ["Piercing", "NONE"], ["Sunglasses", "NONE"], ["Tinted Glasses", "NONE"],
    ["Goggles", "NONE"]
  ]],
  ["Neck Accessories", [
    ["Choker", "NONE"], ["Necklace", "NONE"], ["Pendant", "NONE"], ["Tie", "NONE"]
  ]],
  ["Arm Accessories", [
    ["Armband", "NONE"], ["Arm Piercing", "NONE"], ["Bangle", "NONE"],
    ["Blanket", "NONE"], ["Bracelet", "NONE"], ["Cufflinks", "NONE"],
    ["Quilt", "NONE"]
  ]],
  ["Hand Accessories", [
    ["Cane", "NONE"], ["Doll", "NONE"], ["Fan", "NONE"], ["Pillow", "NONE"],
    ["Plushie", "NONE"], ["Ring", "NONE"], ["Trinket", "NONE"],
    ["Umbrella", "NONE"], ["Wrist Piercing", "NONE"], ["Wristwatch", "NONE"]
  ]],
  ["Body Accessories", [
    ["Apron", "NONE"], ["Babydoll", "NONE"], ["Belly Chain", "NONE"],
    ["Belt", "NONE"], ["Body Piercing", "NONE"], ["Bra", "NONE"],
    ["Brooch", "NONE"], ["Kilt", "NONE"], ["Negligee", "NONE"],
    ["Pin", "NONE"], ["Sash", "NONE"], ["Suspenders", "NONE"], ["Teddy", "NONE"]
  ]],
  ["Foot Accessories", [
    ["Anklet", "NONE"], ["Leg Warmers", "NONE"], ["Toe Ring", "NONE"],
    ["Sandals", "NONE"], ["Flip-flops", "NONE"], ["Fishnet", "NONE"]
  ]]
];

const CATEGORIES = CATEGORIES_RAW.map((cat, ci) => ({
  id: ci + 1,
  name: cat[0],
  items: cat[1].map((it, ii) => ({
    id: ii + 1,
    name: it[0],
    coverage: it[1]
  }))
}));

const PLURAL_ITEMS = new Set([
  "panties","pants","shorts","trunks","slacks","jeans","leggings","tights","stockings",
  "socks","gloves","mittens","glasses","sunglasses","tinted glasses","goggles","earrings",
  "ear cuffs","boxers","briefs","boots","flats","heels","pumps","shoes","slippers","sneakers",
  "trousers","bell bottoms","underpants","chaps","flip-flops","sandals","suspenders",
  "overalls","arm warmers","leg warmers","cufflinks"
]);

const MASS_ITEMS = new Set(["makeup","hair extensions","fishnet","underwear"]);

function defaultPrefix(itemName) {
  const lower = itemName.toLowerCase();
  if (PLURAL_ITEMS.has(lower)) return "a pair of";
  if (MASS_ITEMS.has(lower)) return "some";
  if (/^[aeiou]/i.test(itemName)) return "an";
  return "a";
}

const state = {
  categoryId: null,
  itemId: null,
  colorNum: 129,
  prefix: "",
  suffix: "",
  unworn: "",
  worn: "",
  wear: "",
  remove: "",
  tease: "",
  coverage: {},
  wearerName: "",
  wearerPronouns: "she",
  teaseTarget: "",
  perspective: "third"
};

const DEFAULT_WEARER_NAME = "Primrose";

const $ = id => document.getElementById(id);

function getCategory(id) { return CATEGORIES.find(c => c.id === id) || null; }
function getItem(catId, itemId) {
  const c = getCategory(catId);
  return c ? c.items.find(i => i.id === itemId) || null : null;
}
function getCoverage(itemRef) {
  return itemRef ? COVERAGE_PRESETS[itemRef.coverage] : COVERAGE_PRESETS.NONE;
}
function getColor(num) { return COLORS.find(c => c.num === num) || null; }

function stripArticle(name) {
  return name.replace(/^(a pair of|some|an?|the)\s+/i, "");
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => (
    { "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;" }[c]
  ));
}

const IRREGULARS = { have: "has", be: "is", do: "does" };

function conjugate(verb) {
  if (!verb) return verb;
  const lower = verb.toLowerCase();
  if (IRREGULARS[lower]) {
    return matchCase(verb, IRREGULARS[lower]);
  }
  if (/[^aeiou]y$/i.test(verb)) {
    return verb.slice(0, -1) + "ies";
  }
  if (/(s|x|z|o|sh|ch)$/i.test(verb)) {
    return verb + "es";
  }
  return verb + "s";
}

function matchCase(src, dst) {
  if (src === src.toUpperCase()) return dst.toUpperCase();
  if (src[0] === src[0].toUpperCase()) return dst[0].toUpperCase() + dst.slice(1);
  return dst;
}

function buildItemName() {
  const item = getItem(state.categoryId, state.itemId);
  if (!item) return "";
  const pieces = [];
  if (state.prefix.trim()) pieces.push(state.prefix.trim());
  pieces.push(item.name.toLowerCase());
  if (state.suffix.trim()) pieces.push(state.suffix.trim());
  return pieces.join(" ");
}

function buildContext() {
  return {
    itemName: buildItemName(),
    colorObj: getColor(state.colorNum),
    wearerName: state.wearerName.trim() || DEFAULT_WEARER_NAME,
    pronouns: state.wearerPronouns,
    teaseTarget: state.teaseTarget,
    perspective: state.perspective
  };
}

function renderText(text, ctx, opts) {
  if (!text) return "";
  const allowVerbs = !!opts.allowVerbs;
  const allowAt = !!opts.allowAt;
  const isFirst = ctx.perspective === "first";
  const pronouns = isFirst ? PRONOUNS.first : (PRONOUNS[ctx.pronouns] || PRONOUNS.they);

  let html = "";
  let i = 0;
  while (i < text.length) {
    const c = text[i];

    if (c === "%" && i + 1 < text.length) {
      const next = text[i + 1];
      const lower = next.toLowerCase();
      const isUpper = next !== next.toLowerCase();
      i += 2;

      if (lower === "c") {
        if (ctx.colorObj) {
          html += `<span class="color-token" style="color:${ctx.colorObj.hex}">${escapeHtml(ctx.colorObj.name.toLowerCase())}</span>`;
        } else {
          html += `<span class="token-bad">%c</span>`;
        }
        continue;
      }
      if (lower === "m") {
        const name = stripArticle(ctx.itemName);
        html += `<span class="name-token">${escapeHtml(name || "(no name)")}</span>`;
        continue;
      }
      if (lower === "n") {
        const raw = isFirst ? "you" : ctx.wearerName;
        const value = isUpper ? raw[0].toUpperCase() + raw.slice(1) : raw;
        html += `<span class="wearer-token">${escapeHtml(value)}</span>`;
        continue;
      }
      if (pronouns[lower]) {
        let value = pronouns[lower];
        if (isUpper) value = value[0].toUpperCase() + value.slice(1);
        html += `<span class="pronoun">${escapeHtml(value)}</span>`;
        continue;
      }
      html += `<span class="token-bad">${escapeHtml("%" + next)}</span>`;
      continue;
    }

    if (allowVerbs && c === "<") {
      const close = text.indexOf(">", i + 1);
      if (close > i + 1) {
        const verb = text.slice(i + 1, close);
        if (/^[a-zA-Z]+$/.test(verb)) {
          const final = isFirst ? verb : conjugate(verb);
          html += `<span class="verb">${escapeHtml(final)}</span>`;
          i = close + 1;
          continue;
        }
      }
    }

    if (allowAt && c === "@") {
      const target = (ctx.teaseTarget || "").trim();
      if (target) {
        html += `<span class="target-token">at ${escapeHtml(target)}</span>`;
        i++;
        continue;
      }
      const prevIsSpace = html.endsWith(" ");
      const nextIsSpace = i + 1 < text.length && text[i + 1] === " ";
      if (prevIsSpace && nextIsSpace) {
        i += 2;
      } else if (prevIsSpace) {
        html = html.slice(0, -1);
        i++;
      } else if (nextIsSpace) {
        i += 2;
      } else {
        i++;
      }
      continue;
    }

    html += escapeHtml(c);
    i++;
  }

  return html;
}

function describeCoverage() {
  const item = getItem(state.categoryId, state.itemId);
  if (!item) return "...";
  const cov = getCoverage(item);
  if (cov.mandatory.length === 0 && cov.optional.length === 0) return "Covers nothing.";
  const parts = [...cov.mandatory];
  cov.optional.forEach(o => {
    if (state.coverage[o.part]) parts.push(o.part);
  });
  if (parts.length === 0) return "Covers nothing right now.";
  return "Covers " + parts.join(", ") + ".";
}

function renderCoverageControls() {
  const block = $("coverageBlock");
  const list = $("coverageList");
  list.innerHTML = "";
  const item = getItem(state.categoryId, state.itemId);
  if (!item) { block.hidden = true; return; }
  const cov = getCoverage(item);
  if (cov.mandatory.length === 0 && cov.optional.length === 0) {
    block.hidden = true;
    return;
  }
  block.hidden = false;
  cov.mandatory.forEach(part => {
    const el = document.createElement("div");
    el.className = "coverage-toggle is-mandatory";
    el.textContent = part;
    el.title = "Always covered by this item";
    list.appendChild(el);
  });
  cov.optional.forEach(o => {
    const lab = document.createElement("label");
    lab.className = "coverage-toggle";
    lab.title = o.defaultOn ? "Optional (default on)" : "Optional (default off)";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!state.coverage[o.part];
    cb.addEventListener("change", () => {
      state.coverage[o.part] = cb.checked;
      updatePreview();
    });
    lab.appendChild(cb);
    lab.appendChild(document.createTextNode(o.part));
    list.appendChild(lab);
  });
}

function renderColorGrid() {
  const grid = $("colorGrid");
  grid.innerHTML = "";
  COLORS.forEach(c => {
    const cell = document.createElement("div");
    cell.className = "color-cell";
    if (state.colorNum === c.num) cell.classList.add("selected");
    cell.dataset.num = String(c.num);
    cell.title = `${c.num}: ${c.name}`;
    cell.innerHTML =
      `<span class="swatch" style="background:${c.hex}"></span>` +
      `<span class="num" style="color:${c.hex}">${c.num}</span>` +
      `<span class="name" style="color:${c.hex}">${escapeHtml(c.name)}</span>`;
    cell.addEventListener("click", () => selectColor(c.num));
    grid.appendChild(cell);
  });
}

function selectColor(num) {
  state.colorNum = num;
  document.querySelectorAll(".color-cell").forEach(el => {
    el.classList.toggle("selected", Number(el.dataset.num) === num);
  });
  updateColorCurrent();
  setColorGridOpen(false);
  updatePreview();
}

function setColorGridOpen(open) {
  const btn = $("colorCurrent");
  const grid = $("colorGrid");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
  grid.classList.toggle("is-hidden", !open);
}

function toggleColorGrid() {
  const open = $("colorCurrent").getAttribute("aria-expanded") === "true";
  setColorGridOpen(!open);
}

function updateColorCurrent() {
  const c = getColor(state.colorNum);
  const sw = $("colorCurrentSwatch");
  const nm = $("colorCurrentName");
  const nu = $("colorCurrentNum");
  if (c) {
    sw.style.background = c.hex;
    nm.textContent = c.name;
    nm.style.color = c.hex;
    nu.textContent = `#${c.num}`;
    nu.style.color = c.hex;
  } else {
    sw.style.background = "transparent";
    nm.textContent = "(pick a color)";
    nm.style.color = "";
    nu.textContent = "";
    nu.style.color = "";
  }
}

function populateCategoryPicker() {
  const sel = $("categoryPicker");
  CATEGORIES.forEach(c => {
    const opt = document.createElement("option");
    opt.value = String(c.id);
    opt.textContent = `${c.id}: ${c.name}`;
    sel.appendChild(opt);
  });
}

function populateItemPicker() {
  const sel = $("itemPicker");
  sel.innerHTML = "";
  const cat = getCategory(state.categoryId);
  if (!cat) { sel.disabled = true; return; }
  cat.items.forEach(i => {
    const opt = document.createElement("option");
    opt.value = String(i.id);
    opt.textContent = `${i.id}: ${i.name}`;
    sel.appendChild(opt);
  });
  sel.disabled = false;
}

function onCategoryChange() {
  const v = parseInt($("categoryPicker").value, 10);
  state.categoryId = Number.isFinite(v) ? v : null;
  state.itemId = null;
  populateItemPicker();
  const cat = getCategory(state.categoryId);
  if (cat && cat.items.length > 0) {
    $("itemPicker").value = String(cat.items[0].id);
    onItemChange();
  } else {
    $("designPanel").hidden = true;
    $("previewPanel").hidden = true;
    setColorGridOpen(false);
  }
}

function onItemChange() {
  const v = parseInt($("itemPicker").value, 10);
  state.itemId = Number.isFinite(v) ? v : null;
  if (!state.itemId) {
    $("designPanel").hidden = true;
    $("previewPanel").hidden = true;
    setColorGridOpen(false);
    return;
  }
  const item = getItem(state.categoryId, state.itemId);
  state.prefix = defaultPrefix(item.name);
  state.suffix = "";
  state.coverage = {};
  const cov = getCoverage(item);
  cov.optional.forEach(o => { state.coverage[o.part] = o.defaultOn; });

  $("prefix").value = state.prefix;
  $("suffix").value = state.suffix;
  updateAllCounters();

  $("designPanel").hidden = false;
  $("previewPanel").hidden = false;

  setColorGridOpen(false);

  renderCoverageControls();
  updatePreview();
}

function updatePreview() {
  const ctx = buildContext();
  $("previewName").textContent = ctx.itemName || "(set a prefix or suffix)";
  $("previewUnworn").innerHTML = renderText(state.unworn, ctx, { allowVerbs: false, allowAt: false });
  $("previewWorn").innerHTML = renderText(state.worn, ctx, { allowVerbs: false, allowAt: false });
  $("previewWear").innerHTML = renderText(state.wear, ctx, { allowVerbs: true, allowAt: false });
  $("previewRemove").innerHTML = renderText(state.remove, ctx, { allowVerbs: true, allowAt: false });
  $("previewTease").innerHTML = renderText(state.tease, ctx, { allowVerbs: true, allowAt: true });
  runValidation();
}

const VALIDATED_FIELDS = ["prefix", "suffix", "colorCurrent", "unwornDesc", "wornDesc", "wearEmote", "removeEmote", "teaseEmote"];

function joinWithAnd(items) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(", ") + ", and " + items[items.length - 1];
}

function runValidation() {
  const errors = new Set();
  const messages = [];

  if (!state.prefix.trim() && !state.suffix.trim()) {
    errors.add("prefix");
    errors.add("suffix");
    messages.push("Set either a prefix or a suffix");
  }
  if (!state.colorNum) {
    errors.add("colorCurrent");
    messages.push("Pick a color");
  }
  if (!state.unworn.includes("%c")) {
    errors.add("unwornDesc");
    messages.push("Unworn description must include %c");
  }
  if (!state.worn.includes("%c")) {
    errors.add("wornDesc");
    messages.push("Worn description must include %c");
  }
  [["wear", "wearEmote"], ["remove", "removeEmote"], ["tease", "teaseEmote"]].forEach(([k, id]) => {
    const v = state[k];
    const label = k[0].toUpperCase() + k.slice(1) + " emote";
    const missing = [];
    if (!/%[nN]/.test(v)) missing.push("%n");
    if (!/%[mM]/.test(v)) missing.push("%m");
    if (k === "tease" && !v.includes("@")) missing.push("@");
    if (missing.length) {
      errors.add(id);
      messages.push(`${label} must include ${joinWithAnd(missing)}`);
    }
  });

  VALIDATED_FIELDS.forEach(id => {
    const el = $(id);
    if (el) el.classList.toggle("field-error", errors.has(id));
  });

  const $val = $("validation");
  if (messages.length === 0) {
    $val.className = "validation ok";
    $val.textContent = "Looking good!";
  } else {
    $val.className = "validation error";
    const noun = messages.length === 1 ? "field needs" : "fields need";
    $val.innerHTML =
      `<ul>${messages.map(m => `<li>${escapeHtml(m)}</li>`).join("")}</ul>`;
  }
}

const CHAR_LIMITS = {
  prefix: 30,
  suffix: 30,
  unwornDesc: null,
  wornDesc: null,
  wearEmote: null,
  removeEmote: null,
  teaseEmote: null
};

function updateCounter(id) {
  const el = $(id);
  const counter = document.querySelector(`.char-count[data-for="${id}"]`);
  if (!el || !counter) return;
  const len = el.value.length;
  const max = CHAR_LIMITS[id];
  if (max) {
    counter.textContent = `${len}/${max}`;
    counter.classList.toggle("over-limit", len > max);
  } else {
    counter.textContent = String(len);
  }
}

function updateAllCounters() {
  Object.keys(CHAR_LIMITS).forEach(updateCounter);
}

function bindFieldInputs() {
  const bind = (id, key) => {
    const el = $(id);
    el.addEventListener("input", () => {
      state[key] = el.value;
      updateCounter(id);
      updatePreview();
    });
  };
  bind("prefix", "prefix");
  bind("suffix", "suffix");
  bind("unwornDesc", "unworn");
  bind("wornDesc", "worn");
  bind("wearEmote", "wear");
  bind("removeEmote", "remove");
  bind("teaseEmote", "tease");
  bind("wearerName", "wearerName");
  $("wearerPronouns").addEventListener("change", () => {
    state.wearerPronouns = $("wearerPronouns").value;
    updatePreview();
  });
  $("teaseTargetEnabled").addEventListener("change", () => {
    state.teaseTarget = $("teaseTargetEnabled").checked ? "Lobelia" : "";
    updatePreview();
  });
  document.querySelectorAll(".perspective-switch .mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.perspective = btn.dataset.perspective;
      document.querySelectorAll(".perspective-switch .mode-btn").forEach(b => {
        const active = b.dataset.perspective === state.perspective;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });
      updatePreview();
    });
  });
}

function selectInitialItem(catId, itemId) {
  $("categoryPicker").value = String(catId);
  state.categoryId = catId;
  populateItemPicker();
  $("itemPicker").value = String(itemId);
  onItemChange();
}

function resetFormToDefaults() {
  ["prefix", "suffix", "wearerName", "unwornDesc", "wornDesc", "wearEmote", "removeEmote", "teaseEmote"]
    .forEach(id => { $(id).value = ""; });
  $("teaseTargetEnabled").checked = false;
  $("wearerPronouns").value = "she";
  document.querySelectorAll(".perspective-switch .mode-btn").forEach(b => {
    const active = b.dataset.perspective === "third";
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", active ? "true" : "false");
  });
  updateAllCounters();
}

function init() {
  populateCategoryPicker();
  renderColorGrid();
  updateColorCurrent();
  bindFieldInputs();
  resetFormToDefaults();
  $("categoryPicker").addEventListener("change", onCategoryChange);
  $("itemPicker").addEventListener("change", onItemChange);
  $("colorCurrent").addEventListener("click", toggleColorGrid);
  selectInitialItem(3, 10);
}

init();
